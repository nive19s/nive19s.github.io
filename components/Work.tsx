"use client";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useState } from "react";
import dynamic from "next/dynamic";
import { projects, type Project } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);
const ProjectModal = dynamic(() => import("./ProjectModal"), { ssr: false });

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
        <p className="label !text-white/60">{p.type} · {p.year}</p>
        <h3 className="mt-2 text-4xl font-semibold tracking-tight">{p.title}</h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/60">{p.desc}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {p.stack.map((s) => <span key={s} className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/80">{s}</span>)}
        </div>
      </div>
    </button>
  );
}
