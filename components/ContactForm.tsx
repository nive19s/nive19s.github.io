"use client";
import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

const field =
  "w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-white/30 outline-none transition focus:border-lime focus:bg-white/10";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))), // all inputs -> one object
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form id="contact-form" onSubmit={onSubmit} className="mt-14 grid max-w-2xl gap-4">
      <div className="grid gap-4 md:grid-cols-2">
        <input name="name" required placeholder="Your name" className={field} />
        <input name="email" type="email" required placeholder="Your email" className={field} />
      </div>
      <input name="subject" placeholder="Subject (optional)" className={field} />
      <textarea name="message" required rows={5} maxLength={3000} placeholder="Tell me about your project..." className={`${field} resize-none`} />

      {/* Honeypot: hidden from humans */}
      <input name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

      <div className="flex flex-wrap items-center gap-4">
        <button disabled={status === "sending"}
          className="group flex items-center gap-3 rounded-full bg-lime py-2 pl-7 pr-2 font-medium text-ink transition disabled:opacity-60">
          {status === "sending" ? "Sending..." : "Send message"}
          <span className="grid h-10 w-10 place-items-center rounded-full bg-ink text-white transition group-hover:rotate-45">↗</span>
        </button>
        {status === "sent" && <p className="text-lime">Thanks! Your message is on its way.</p>}
        {status === "error" && <p className="text-red-400">Something went wrong. Please email me directly.</p>}
      </div>
    </form>
  );
}