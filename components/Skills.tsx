"use client";
import { motion } from "framer-motion";
import { techGroups, tools, marquee } from "@/lib/data";
import TechIcon from "./TechIcons";
import { toolLinks } from "@/lib/icons";

const ease = [0.22, 1, 0.36, 1] as const;

// Marquee divider, grouped technology cards, then tools
export default function Skills() {
  const row = [...marquee, ...marquee];
  return (
    <section id="skills" className="py-24">
      {/* <div className="mb-20 overflow-hidden" aria-hidden>
        <div className="flex w-max animate-marquee gap-3 hover:[animation-play-state:paused]">
          {row.map((s, i) => <span key={i} className="rounded-full border border-black/10 bg-white px-6 py-3 text-lg font-medium">{s}</span>)}
        </div>
      </div> */}

      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <p className="label">Technologies</p>
        <h2 className="mt-3 text-5xl font-semibold tracking-tight md:text-7xl">Tech I work with</h2>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {techGroups.map((g, i) => (
            <motion.div key={g.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: (i % 3) * 0.08, duration: 0.7, ease }} className="rounded-3xl border border-black/10 bg-white p-6">
              <p className="label">{String(i + 1).padStart(2, "0")} · {g.title}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {g.items.map((t) => <span
    key={t}
    className="group inline-flex items-center gap-2 rounded-full bg-paper py-1.5 pl-1.5 pr-3.5 text-sm font-medium transition hover:-translate-y-0.5 hover:bg-ink hover:text-white"
  >
    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white text-ink shadow-sm">
      <TechIcon name={t} size={16} />
    </span>
    {t}
  </span>
)}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools */}
        <div className="mt-5 rounded-3xl bg-ink p-7 text-white md:p-10">
          <p className="label !text-white/40">Tools I use daily</p>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
  {tools.map((t) => (
    <a
      key={t}
      href={toolLinks[t] ?? "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-3 rounded-2xl border border-white/10 p-3 text-sm font-medium transition hover:border-lime hover:bg-white/5"
    >
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white">
        <TechIcon name={t} size={24} />
      </span>
      <span className="flex-1 truncate">{t}</span>
      <span className="text-white/40 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-lime" aria-hidden>↗</span>
    </a>
  ))}
</div>
        </div>
      </div>
    </section>
  );
}
