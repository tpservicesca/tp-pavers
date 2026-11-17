import * as fs from "fs";

// Same keys file TP Dumpsters uses on this Hostinger account. Hostinger does NOT
// inject env vars into the Node process, so secrets live in files outside the repo.
// Shape: { botToken, adminChatIds: [{ chatId, name, botToken }] }
const TELEGRAM_KEYS_PATH = "/home/u781187371/telegram-keys.json";

interface ChatTarget {
  chatId: string;
  botToken: string;
}

function getTargets(): ChatTarget[] {
  try {
    const keys = JSON.parse(fs.readFileSync(TELEGRAM_KEYS_PATH, "utf8"));
    const fallback = String(keys.botToken || "");
    const list = Array.isArray(keys.adminChatIds) ? keys.adminChatIds : [];
    return list
      .map((c: { chatId?: string | number; botToken?: string }) => ({
        chatId: String(c.chatId || ""),
        botToken: String(c.botToken || fallback),
      }))
      .filter((t: ChatTarget) => t.chatId && t.botToken);
  } catch {
    // file missing or unreadable: no Telegram alert, the email still goes out
    return [];
  }
}

/** Sends a plain-text alert to every configured chat. Never throws. */
export async function notifyTelegram(text: string): Promise<{ sent: number; failed: number }> {
  const targets = getTargets();
  let sent = 0;
  let failed = 0;
  await Promise.all(
    targets.map(async (t) => {
      try {
        const res = await fetch(`https://api.telegram.org/bot${t.botToken}/sendMessage`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ chat_id: t.chatId, text, disable_web_page_preview: true }),
          signal: AbortSignal.timeout(8000),
        });
        if (res.ok) sent++;
        else failed++;
      } catch {
        failed++;
      }
    })
  );
  return { sent, failed };
}
