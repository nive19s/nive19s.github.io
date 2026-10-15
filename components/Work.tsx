"use client";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects, type Project } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

// Pinned horizontal scroll on desktop; simple vertical stack on mobile
export default function Work() {
  const section = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const bar = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<Project | null>(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px)", () => {
      const dist = () => track.current!.scrollWidth - window.innerWidth + 96;
      gsap.to(track.current, {
        x: () => -dist(), ease: "none",
        scrollTrigger: {
          trigger: section.current, pin: true, scrub: 1, start: "top top", end: () => "+=" + dist(), invalidateOnRefresh: true,
          onUpdate: (s) => { if (bar.current) bar.current.style.transform = `scaleX(${s.progress})`; },
        },
      });
    });
    return () => mm.revert();
  }, []);

  return (
    <section id="work" ref={section} className="relative overflow-hidden py-20 lg:flex lg:h-screen lg:flex-col lg:justify-center lg:py-0">
      <div className="mb-10 flex items-end justify-between px-6 md:px-12">
        <h2 className="text-5xl font-semibold tracking-tight md:text-7xl">Selected Work</h2>
        <p className="label hidden lg:block">Scroll →</p>
      </div>

      <div ref={track} className="flex flex-col gap-5 px-6 md:px-12 lg:w-max lg:flex-row lg:gap-6 lg:pr-24">
        {projects.map((p, i) => <Card key={p.title} p={p} i={i} onOpen={() => setActive(p)} />)}
      </div>

      {/* Progress bar (desktop) */}
      <div className="absolute inset-x-12 bottom-10 hidden h-px bg-black/10 lg:block">
        <div ref={bar} className="h-full origin-left scale-x-0 bg-ink" />
      </div>
      <ProjectModal p={active} onClose={() => setActive(null)} />
    </section>
  );
}

// Card is a button: click opens the detail panel
function Card({ p, i, onOpen }: { p: Project; i: number; onOpen: () => void }) {
  return (
    <button onClick={onOpen} aria-label={`Open ${p.title} details`}
      className="group relative flex min-h-[380px] flex-col justify-between overflow-hidden rounded-[2rem] bg-ink p-7 text-white transition-transform duration-500 hover:-translate-y-2 text-left lg:h-[52vh] lg:w-[520px] lg:shrink-0">
      {/* Hover glow */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-lime/0 blur-3xl transition duration-700 group-hover:bg-lime/25" />
      <div className="flex items-start justify-between">
        <span className="font-mono text-6xl font-light text-white/15">{String(i + 1).padStart(2, "0")}</span>
        <span className="grid h-11 w-11 place-items-center rounded-full bg-white text-ink transition duration-300 group-hover:rotate-45 group-hover:bg-lime">+</span>
      </div>
      <div>
        <p className="label !text-white/40">{p.type} · {p.year}</p>
        <h3 className="mt-2 text-4xl font-semibold tracking-tight">{p.title}</h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/60">{p.desc}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {p.stack.map((s) => <span key={s} className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/70">{s}</span>)}
        </div>
      </div>
    </button>
  );
}

// Detail panel: slides up over the page. Portal avoids the pinned section's transforms.
function ProjectModal({ p, onClose }: { p: Project | null; onClose: () => void }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  useEffect(() => {
    if (!p) return;
    const esc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", esc);
    document.documentElement.style.overflow = "hidden"; // lock page scroll
    return () => { window.removeEventListener("keydown", esc); document.documentElement.style.overflow = ""; };
  }, [p, onClose]);
  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {p && (
        <motion.div key="overlay" className="fixed inset-0 z-[60] flex items-end justify-center bg-black/60 backdrop-blur-sm md:items-center md:p-6"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
          <motion.div data-lenis-prevent role="dialog" aria-modal="true" aria-label={p.title} onClick={(e) => e.stopPropagation()}
            initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-t-[2rem] bg-paper p-6 md:rounded-[2rem] md:p-10">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="label">{p.type} · {p.year}</p>
                <h3 className="mt-2 text-4xl font-semibold tracking-tight md:text-6xl">{p.title}</h3>
              </div>
              <button onClick={onClose} aria-label="Close" className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-ink text-white transition hover:rotate-90">✕</button>
            </div>

            {/* Gallery: real screenshots if provided, otherwise a styled placeholder */}
            <div className="mt-8 grid gap-3 md:grid-cols-3">
              {(p.images?.length ? p.images : [null, null, null]).map((src, i) => (
                <div key={i} className={`overflow-hidden rounded-2xl bg-ink ${i === 0 ? "md:col-span-2 md:row-span-2" : ""}`}>
                  {src ? <img src={src} alt={`${p.title} screenshot ${i + 1}`} loading="lazy" className="h-full w-full object-cover" /> : <Placeholder title={p.title} big={i === 0} />}
                </div>
              ))}
            </div>

            <div className="mt-10 grid gap-10 md:grid-cols-[1.3fr_1fr]">
              <div>
                <p className="label mb-3">Overview</p>
                <p className="text-lg leading-relaxed">{p.overview}</p>
                <p className="label mb-3 mt-8">Highlights</p>
                <ul className="space-y-3">
                  {p.highlights.map((h) => (<li key={h} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ink" />{h}</li>))}
                </ul>
              </div>
              <div>
                <p className="label mb-3">Tech stack</p>
                <div className="flex flex-wrap gap-2">{p.stack.map((s) => <span key={s} className="pill">{s}</span>)}</div>
                <div className="mt-8 flex flex-wrap gap-3">
                  {p.links.map((l) => (
                    <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="group flex items-center gap-3 rounded-full bg-ink py-2 pl-6 pr-2 text-white">{l.label}
                      <span className="grid h-9 w-9 place-items-center rounded-full bg-lime text-ink transition group-hover:rotate-45">↗</span></a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}

// Fake browser window shown until real screenshots are added
function Placeholder({ title, big }: { title: string; big: boolean }) {
  return (
    <div className={`flex w-full flex-col bg-gradient-to-br from-panel to-ink p-3 ${big ? "aspect-[16/10]" : "aspect-[16/10] md:aspect-auto md:h-full md:min-h-[120px]"}`}>
      <div className="flex gap-1.5"><i className="h-2 w-2 rounded-full bg-white/20" /><i className="h-2 w-2 rounded-full bg-white/20" /><i className="h-2 w-2 rounded-full bg-white/20" /></div>
      <div className="grid flex-1 place-items-center text-center"><span className="label !text-white/30">{big ? `${title} — screenshot` : "screenshot"}</span></div>
    </div>
  );
}
