"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, m } from "framer-motion";
import type { Project } from "@/lib/data";

export default function ProjectModal({
  p,
  onClose,
}: {
  p: Project | null;
  onClose: () => void;
}) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  useEffect(() => {
    if (!p) return;
    const esc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", esc);
    document.documentElement.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", esc);
      document.documentElement.style.overflow = "";
    };
  }, [p, onClose]);
  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {p && (
        <m.div key="overlay" className="fixed inset-0 z-[60] flex items-end justify-center bg-black/60 backdrop-blur-sm md:items-center md:p-6"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
          <m.div data-lenis-prevent role="dialog" aria-modal="true" aria-label={p.title} onClick={(e) => e.stopPropagation()}
            initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-t-[2rem] bg-paper p-6 md:rounded-[2rem] md:p-10">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="label">{p.type} · {p.year}</p>
                <h3 className="mt-2 text-4xl font-semibold tracking-tight md:text-6xl">{p.title}</h3>
              </div>
              <button onClick={onClose} aria-label="Close" className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-ink text-white transition hover:rotate-90">✕</button>
            </div>
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
          </m.div>
        </m.div>
      )}
    </AnimatePresence>,
    document.body
  );
}

function Placeholder({ title, big }: { title: string; big: boolean }) {
  return (
    <div className={`flex w-full flex-col bg-gradient-to-br from-panel to-ink p-3 ${big ? "aspect-[16/10]" : "aspect-[16/10] md:aspect-auto md:h-full md:min-h-[120px]"}`}>
      <div className="flex gap-1.5"><i className="h-2 w-2 rounded-full bg-white/20" /><i className="h-2 w-2 rounded-full bg-white/20" /><i className="h-2 w-2 rounded-full bg-white/20" /></div>
      <div className="grid flex-1 place-items-center text-center"><span className="label !text-white/60">{big ? `${title} — screenshot` : "screenshot"}</span></div>
    </div>
  );
}
