<?php
// Contact-form endpoint for the static build (Hostinger Agency has no Node runtime).
// Mirrors the old src/app/api/lead/route.ts: email + Telegram alert + fallback log.
// Secrets live in .cfg.php next to this file (never in git; blocked by .htaccess).
declare(strict_types=1);
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');

function out(int $code, array $body): void {
    http_response_code($code);
    echo json_encode($body);
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') out(405, ['ok' => false]);

$cfg = @include __DIR__ . '/.cfg.php';
if (!is_array($cfg)) $cfg = [];
$dataDir = __DIR__ . '/.data';
if (!is_dir($dataDir)) @mkdir($dataDir, 0700, true);

// Rate limit: 5 submissions per 10 minutes per IP.
$ip = $_SERVER['HTTP_X_FORWARDED_FOR'] ?? ($_SERVER['REMOTE_ADDR'] ?? '0');
$ip = trim(explode(',', $ip)[0]);
$rlFile = $dataDir . '/rl-' . hash('sha256', $ip) . '.json';
$now = time();
$hits = [];
if (is_file($rlFile)) {
    $hits = json_decode((string)@file_get_contents($rlFile), true) ?: [];
    $hits = array_values(array_filter($hits, fn($t) => $t > $now - 600));
}
if (count($hits) >= 5) out(429, ['ok' => false]);
$hits[] = $now;
@file_put_contents($rlFile, json_encode($hits), LOCK_EX);

$raw = (string)file_get_contents('php://input', false, null, 0, 20000);
$body = json_decode($raw, true);
if (!is_array($body)) out(400, ['ok' => false]);

function field(array $b, string $k, int $max): string {
    $v = $b[$k] ?? '';
    if (!is_scalar($v)) return '';
    return trim(mb_substr((string)$v, 0, $max));
}
$name = field($body, 'name', 200);
$phone = field($body, 'phone', 40);
$city = field($body, 'city', 100);
$email = field($body, 'email', 200);
$message = field($body, 'message', 3000);
if ($name === '' || $phone === '') out(400, ['ok' => false]);

// Header-injection guard for anything that lands in a mail header.
$oneLine = fn(string $s): string => trim(preg_replace('/[\r\n]+/', ' ', $s));
$replyTo = filter_var($email, FILTER_VALIDATE_EMAIL) ? $email : '';
$leadTo = (string)($cfg['lead_to'] ?? 'tppaver@gmail.com');

$text = implode("\n", [
    'New lead from tppavers.com contact form', '',
    "Name:    $name", "Phone:   $phone", "City:    $city", "Email:   $email", '',
    'Message:', $message,
]);
$subject = $oneLine("New TP Pavers lead — $name (" . ($city !== '' ? $city : 'no city') . ')');

function smtp_send(array $m, string $to, string $subject, string $text, string $replyTo): array {
    $host = (string)($m['host'] ?? 'smtp.hostinger.com');
    $port = (int)($m['port'] ?? 465);
    $user = (string)($m['user'] ?? '');
    $pass = (string)($m['pass'] ?? '');
    $fromName = (string)($m['fromName'] ?? 'TP Pavers');
    if ($user === '' || $pass === '') return ['ok' => false, 'error' => 'mail not configured'];
    $fp = @stream_socket_client(($port === 465 ? 'ssl://' : 'tcp://') . "$host:$port", $en, $es, 12);
    if (!$fp) return ['ok' => false, 'error' => "connect: $es"];
    stream_set_timeout($fp, 12);
    $read = function () use ($fp): string {
        $r = '';
        while (($l = fgets($fp, 1024)) !== false) { $r .= $l; if (isset($l[3]) && $l[3] === ' ') break; }
        return $r;
    };
    $cmd = function (string $c, string $expect) use ($fp, $read): ?string {
        fwrite($fp, $c . "\r\n");
        $r = $read();
        return str_starts_with($r, $expect) ? null : trim($r);
    };
    $r = $read();
    if (!str_starts_with($r, '220')) { fclose($fp); return ['ok' => false, 'error' => 'greeting']; }
    $steps = [
        ['EHLO tppavers.com', '250'], ['AUTH LOGIN', '334'],
        [base64_encode($user), '334'], [base64_encode($pass), '235'],
        ["MAIL FROM:<$user>", '250'], ["RCPT TO:<$to>", '250'], ['DATA', '354'],
    ];
    foreach ($steps as $i => [$c, $e]) {
        $err = $cmd($c, $e);
        if ($err !== null) { fclose($fp); return ['ok' => false, 'error' => "smtp step $i"]; }
    }
    $enc = fn(string $s): string => '=?UTF-8?B?' . base64_encode($s) . '?=';
    $headers = [
        'From: ' . $enc($fromName) . " <$user>", "To: <$to>", 'Subject: ' . $enc($subject),
        'Date: ' . date('r'), 'Message-ID: <' . bin2hex(random_bytes(12)) . '@tppavers.com>',
        'MIME-Version: 1.0', 'Content-Type: text/plain; charset=UTF-8', 'Content-Transfer-Encoding: base64',
    ];
    if ($replyTo !== '') $headers[] = "Reply-To: <$replyTo>";
    $data = implode("\r\n", $headers) . "\r\n\r\n" . chunk_split(base64_encode($text), 76, "\r\n") . "\r\n.";
    $err = $cmd($data, '250');
    @fwrite($fp, "QUIT\r\n");
    fclose($fp);
    return $err === null ? ['ok' => true] : ['ok' => false, 'error' => 'smtp data'];
}

function telegram_notify(array $tg, string $text): int {
    $fallback = (string)($tg['botToken'] ?? '');
    $sent = 0;
    foreach (($tg['adminChatIds'] ?? []) as $c) {
        $chat = (string)($c['chatId'] ?? '');
        $tok = (string)($c['botToken'] ?? $fallback);
        if ($chat === '' || $tok === '') continue;
        $ctx = stream_context_create(['http' => [
            'method' => 'POST', 'timeout' => 8, 'ignore_errors' => true,
            'header' => "Content-Type: application/json\r\n",
            'content' => json_encode(['chat_id' => $chat, 'text' => $text, 'disable_web_page_preview' => true]),
        ]]);
        $r = @file_get_contents("https://api.telegram.org/bot$tok/sendMessage", false, $ctx);
        if ($r !== false && str_contains($r, '"ok":true')) $sent++;
    }
    return $sent;
}

$sent = smtp_send((array)($cfg['mail'] ?? []), $leadTo, $subject, $text, $replyTo);

$alerted = telegram_notify((array)($cfg['telegram'] ?? []), implode("\n", [
    '🧱 Nuevo interesado — TP Pavers (formulario web)', '',
    "Nombre: $name", "Tel: $phone", 'Ciudad: ' . ($city ?: '—'), 'Correo: ' . ($email ?: '—'), '',
    'Qué pide: ' . (mb_substr($message, 0, 1500) ?: '—'), '',
    $sent['ok'] ? "(También llegó al correo $leadTo)" : '⚠️ El correo NO salió: revisar leads-fallback.log',
]));

if (!$sent['ok']) {
    @file_put_contents($dataDir . '/leads-fallback.log', json_encode([
        'ts' => gmdate('c'), 'name' => $name, 'phone' => $phone, 'city' => $city,
        'email' => $email, 'message' => $message, 'error' => $sent['error'] ?? '',
    ], JSON_UNESCAPED_UNICODE) . "\n", FILE_APPEND | LOCK_EX);
}

out(200, ['ok' => true, 'delivered' => $sent['ok'], 'alerted' => $alerted > 0]);
