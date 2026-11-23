<?php
// Router for Hostinger Agency (h5g: Nginx + PHP-FPM, ignores .htaccess).
// Every page of the static export lives in .paginas/ (dot-dirs are blocked by the
// platform), so any page URL falls through to this file. Assets (_next, images…)
// stay public and are served by Nginx directly. See /root/scripts/migracion-h5g/README.md
if (empty($_SERVER['HTTPS']) || $_SERVER['HTTPS'] === 'off') {
    header('Location: https://' . ($_SERVER['HTTP_HOST'] ?? '') . ($_SERVER['REQUEST_URI'] ?? '/'), true, 301);
    exit;
}

$base = realpath(__DIR__ . '/.paginas');
if ($base === false) { http_response_code(500); exit("Missing .paginas/\n"); }

$uri = $_SERVER['REQUEST_URI'] ?? '/';
$path = (string) parse_url($uri, PHP_URL_PATH);
$query = (string) parse_url($uri, PHP_URL_QUERY);
$ruta = '/' . trim(rawurldecode($path), '/');

// Contact form (was the Next route /api/lead).
if ($ruta === '/api/lead') { require __DIR__ . '/.api/lead.php'; exit; }

// Turf oculto (Thiago, 31-oct-2026): temporal (307) para poder regresarlo.
$redirects = ['/synthetic-turf' => '/services', '/blog/artificial-turf-pros-cons' => '/blog'];
if (isset($redirects[$ruta])) { header('Location: ' . $redirects[$ruta], true, 307); exit; }

// /page/ -> /page, same as Next did.
if ($path !== '/' && str_ends_with($path, '/')) {
    header('Location: ' . $ruta . ($query !== '' ? '?' . $query : ''), true, 308);
    exit;
}

$candidatos = ($ruta === '/') ? [$base . '/index.html'] : [$base . $ruta . '.html', $base . $ruta];
$tipos = [
    'html' => 'text/html; charset=UTF-8',
    'xml'  => 'application/xml; charset=UTF-8',
    'txt'  => 'text/plain; charset=UTF-8',
    'json' => 'application/json; charset=UTF-8',
    'webmanifest' => 'application/manifest+json; charset=UTF-8',
];

function cabeceras(): void {
    header('X-Content-Type-Options: nosniff');
    header('Referrer-Policy: strict-origin-when-cross-origin');
    header('X-Frame-Options: SAMEORIGIN');
    // HTML must revalidate so the CDN never serves a stale page.
    header('Cache-Control: public, max-age=0, s-maxage=0, must-revalidate');
}

foreach ($candidatos as $candidato) {
    $real = realpath($candidato);
    // The trailing separator matters: without it a sibling dir (.paginas.bak/) would pass.
    if ($real === false || !str_starts_with($real, $base . DIRECTORY_SEPARATOR) || !is_file($real)) continue;
    $ext = strtolower(pathinfo($real, PATHINFO_EXTENSION));
    if (!isset($tipos[$ext])) continue;
    cabeceras();
    header('Content-Type: ' . $tipos[$ext]);
    readfile($real);
    exit;
}

http_response_code(404);
cabeceras();
header('Content-Type: text/html; charset=UTF-8');
if (!@readfile($base . '/404.html')) echo 'Not found';
