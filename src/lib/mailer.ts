import * as fs from "fs";
import nodemailer from "nodemailer";

// SMTP creds live in a file on the Hostinger account (same pattern as
// tpdumpsters-live: Hostinger does NOT inject env vars into the Node
// process). Env vars are the local/dev fallback.
const MAIL_KEYS_PATH = "/home/u781187371/pavers-mail-creds.json";

interface MailConfig {
  host: string;
  port: number;
  user: string;
  pass: string;
  fromName: string;
}

let _cached: MailConfig | null = null;

function getMailConfig(): MailConfig | null {
  if (_cached) return _cached;
  try {
    const keys = JSON.parse(fs.readFileSync(MAIL_KEYS_PATH, "utf8"));
    if (keys.user && keys.pass) {
      _cached = {
        host: keys.host || "smtp.hostinger.com",
        port: Number(keys.port) || 465,
        user: keys.user,
        pass: keys.pass,
        fromName: "TP Pavers",
      };
      return _cached;
    }
  } catch {
    // file missing — fall through to env
  }
  const user = process.env.MAIL_USER;
  const pass = process.env.MAIL_PASS;
  if (user && pass) {
    _cached = {
      host: process.env.MAIL_HOST || "smtp.hostinger.com",
      port: Number(process.env.MAIL_PORT) || 465,
      user,
      pass,
      fromName: "TP Pavers",
    };
    return _cached;
  }
  return null;
}

export async function sendEmail(opts: {
  to: string;
  subject: string;
  text: string;
  replyTo?: string;
}): Promise<{ ok: boolean; error?: string }> {
  const cfg = getMailConfig();
  if (!cfg) return { ok: false, error: "mail not configured" };
  try {
    const transporter = nodemailer.createTransport({
      host: cfg.host,
      port: cfg.port,
      secure: cfg.port === 465,
      auth: { user: cfg.user, pass: cfg.pass },
    });
    await transporter.sendMail({
      from: `"${cfg.fromName}" <${cfg.user}>`,
      to: opts.to,
      subject: opts.subject,
      text: opts.text,
      replyTo: opts.replyTo,
    });
    return { ok: true };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : String(e) };
  }
}
