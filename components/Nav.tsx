"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/lib/data";

// Floating pill nav: hides on scroll down, returns on scroll up; full-screen menu on mobile
export default function Nav() {
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let last = 0;
    const onScroll = () => { const y = window.scrollY; setHidden(y > last && y > 120); last = y; };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header animate={{ y: hidden && !open ? -100 : 0 }} transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-4 z-50 mx-auto flex w-[calc(100%-2rem)] max-w-5xl items-center justify-between rounded-full border border-black/5 bg-white/70 p-2 pl-5 backdrop-blur-xl">
        <a href="#home" className="font-semibold tracking-tight">Nive<span className="text-mute">.dev</span></a>
        <nav className="hidden gap-1 md:flex">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="rounded-full px-4 py-2 text-sm transition hover:bg-ink hover:text-white">{l.label}</a>
          ))}
        </nav>
        <a href="#contact" className="hidden rounded-full bg-ink px-5 py-2.5 text-sm text-white md:block">Let’s talk</a>
        <button onClick={() => setOpen(!open)} aria-label="Menu" className="rounded-full bg-ink px-5 py-2.5 text-sm text-white md:hidden">{open ? "Close" : "Menu"}</button>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ clipPath: "inset(0 0 100% 0)" }} animate={{ clipPath: "inset(0 0 0% 0)" }} exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }} className="fixed inset-0 z-40 flex flex-col justify-center gap-2 bg-ink px-8 text-white">
            {navLinks.map((l, i) => (
              <motion.a key={l.href} href={l.href} onClick={() => setOpen(false)} initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.25 + i * 0.07 }}
                className="text-5xl font-semibold tracking-tight">{l.label}</motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
