"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { profile } from "@/lib/data";
import Magnetic from "./Magnetic";

// Closing CTA + oversized wordmark that rises with scroll
export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const y = useTransform(scrollYProgress, [0, 1], ["40%", "0%"]);
  // Brand icons as inline SVG (inherit text colour via currentColor)
const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

  return (
    <section id="contact" ref={ref} className="relative overflow-hidden bg-ink px-6 pt-28 text-white md:px-12">
      <div className="mx-auto max-w-6xl">
        <p className="label !text-white/40">Contact</p>
        <h2 className="mt-4 text-5xl font-semibold leading-[0.95] tracking-tight md:text-8xl">Let’s build<br />something great.</h2>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Magnetic><a href={`mailto:${profile.email}`} className="group flex items-center gap-3 rounded-full bg-lime py-2 pl-7 pr-2 font-medium text-ink">Say hello
            <span className="grid h-10 w-10 place-items-center rounded-full bg-ink text-white transition group-hover:rotate-45">↗</span></a></Magnetic>
          <span className="text-white/50 rounded-full border border-white/15 p-3 transition hover:-translate-y-1 hover:border-white hover:bg-white hover:text-ink">{profile.email}</span><span className="text-white/50 rounded-full border border-white/15 p-3 transition hover:-translate-y-1 hover:border-white hover:bg-white hover:text-ink">{profile.phone}</span>
        </div>
        <div className="mt-16 flex gap-3">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"
              className="grid h-12 w-12 place-items-center rounded-full border border-white/15 text-white/60 transition hover:-translate-y-1 hover:border-lime hover:bg-lime hover:text-ink">
          <GithubIcon />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"
              className="grid h-12 w-12 place-items-center rounded-full border border-white/15 text-white/60 transition hover:-translate-y-1 hover:border-lime hover:bg-lime hover:text-ink">
          <LinkedinIcon />
          </a>
        </div>
      </div>
      <motion.div style={{ y }} aria-hidden className="select-none pt-10 text-center text-[clamp(4rem,22vw,22rem)] font-semibold leading-[0.8] tracking-[-0.06em] text-white/[0.07]">NIVETHAN</motion.div>
    </section>

    
  );

  
}
