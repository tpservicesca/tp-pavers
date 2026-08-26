import { NextRequest, NextResponse } from "next/server";
import * as fs from "fs";
import * as path from "path";
import { sendEmail } from "@/lib/mailer";

const LEAD_TO = process.env.LEAD_TO_EMAIL || "tppaver@gmail.com";
// If SMTP ever fails the lead still lands in this file so it can be recovered.
const FALLBACK_LOG = path.join(process.cwd(), "leads-fallback.log");

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
  const name = String(body.name || "").slice(0, 200).trim();
  const phone = String(body.phone || "").slice(0, 40).trim();
  const city = String(body.city || "").slice(0, 100).trim();
  const email = String(body.email || "").slice(0, 200).trim();
  const message = String(body.message || "").slice(0, 3000).trim();
  if (!name || !phone) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const text = [
    `New lead from tppavers.com contact form`,
    ``,
    `Name:    ${name}`,
    `Phone:   ${phone}`,
    `City:    ${city}`,
    `Email:   ${email}`,
    ``,
    `Message:`,
    message,
  ].join("\n");

  const sent = await sendEmail({
    to: LEAD_TO,
    subject: `New TP Pavers lead — ${name} (${city || "no city"})`,
    text,
    replyTo: email || undefined,
  });

  if (!sent.ok) {
    try {
      fs.appendFileSync(
        FALLBACK_LOG,
        JSON.stringify({ ts: new Date().toISOString(), name, phone, city, email, message, error: sent.error }) + "\n"
      );
    } catch {
      // last resort: nothing else we can do server-side
    }
  }

  return NextResponse.json({ ok: true, delivered: sent.ok });
}
