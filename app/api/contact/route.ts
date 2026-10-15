import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

// Escape user text before putting it in HTML
const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!));

export async function POST(req: Request) {
  const { name, email, subject, message, company } = await req.json();

  // Honeypot: bots fill this hidden field, humans never see it
  if (company) return NextResponse.json({ ok: true });

  // Basic validation
  if (!name?.trim() || !message?.trim() || !/^\S+@\S+\.\S+$/.test(email ?? "") || message.length > 3000) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: process.env.MAIL_USER, pass: process.env.MAIL_PASS },
  });

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_TO,
      replyTo: email, // hitting Reply answers the visitor
      subject: `Portfolio: ${subject?.trim() || "New message"} — ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject || "-"}\n\n${message}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:560px">
          <h2 style="margin:0 0 16px">New portfolio message</h2>
          <p><b>Name:</b> ${esc(name)}</p>
          <p><b>Email:</b> <a href="mailto:${esc(email)}">${esc(email)}</a></p>
          <p><b>Subject:</b> ${esc(subject || "-")}</p>
          <hr style="border:none;border-top:1px solid #ddd" />
          <p style="white-space:pre-wrap">${esc(message)}</p>
        </div>`,
    });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Send failed" }, { status: 500 });
  }
}