"use client";
import { motion } from "framer-motion";
import { jobs, education, certifications } from "@/lib/data";

const ease = [0.22, 1, 0.36, 1] as const;

// Work timeline, then education + certifications
export default function Experience() {
  return (
    <section id="experience" className="px-4 py-24 md:px-8">
      <div className="mx-auto max-w-6xl space-y-5">
        <p className="label px-2">Experience</p>

        {jobs.map((j, idx) => (
          <div
            key={j.company}
            className="rounded-[2rem] bg-ink p-7 text-white md:p-12"
          >
            <div className="grid gap-10 md:grid-cols-[1fr_1.4fr]">
              <div>
                <Logo name={j.company} src={j.logo} />
                <h2 className="mt-6 text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
                  {j.company}
                </h2>
                <p className="mt-3 text-white/70">{j.role}</p>
                <p className="label mt-2 !text-lime">{j.period}</p>
                <p className="mt-5 text-sm leading-relaxed text-white/40">
                  {j.product}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {j.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <ul className="divide-y divide-white/10">
                {j.points.map((t, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ delay: i * 0.05, duration: 0.7, ease }}
                    className="flex gap-4 py-4 text-base text-white/80 md:text-lg"
                  >
                    <span className="font-mono text-sm text-white/30">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {t}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        ))}

        {/* Education + certifications */}
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-[2rem] border border-black/10 bg-white p-7 md:p-10">
            <p className="label">Education</p>
            <ul className="mt-6 space-y-6">
              {education.map((e) => (
                <li key={e.school} className="flex items-center gap-4">
                  <EduLogo name={e.school} src={e.logo} />
                  <div>
                    <p className="text-xl font-semibold leading-tight tracking-tight">
                      {e.school}
                    </p>
                    <p className="text-mute">{e.detail}</p>
                    <p className="label mt-1">{e.period}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[2rem] border border-black/10 bg-white p-7 md:p-10">
            <p className="label">Certifications</p>
            <ul className="mt-6 space-y-3">
              {certifications.map((c) => (
                <li key={c.name}>
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between rounded-2xl border border-black/10 p-4 transition hover:bg-ink hover:text-white"
                  >
                    <span>
                      <span className="block font-semibold">{c.name}</span>
                      <span className="text-sm text-mute">{c.issuer}</span>
                    </span>
                    <span className="transition group-hover:rotate-45">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// Company logo slot: shows the image if provided, otherwise a monogram
function Logo({ name, src }: { name: string; src?: string }) {
  return (
    <div className="grid h-14 w-14 place-items-center overflow-hidden rounded-2xl bg-white">
      {src ? (
        <img
          src={src}
          alt={`${name} logo`}
          className="h-full w-full object-contain p-2"
        />
      ) : (
        <span className="text-2xl font-bold text-ink">{name[0]}</span>
      )}
    </div>
  );
}

// School logo slot (initial letter shows if no image is set)
function EduLogo({ name, src }: { name: string; src?: string }) {
  return (
    <div className="grid h-16 w-16 shrink-0 place-items-center overflow-hidden rounded-2xl border border-black/10 bg-paper">
      {src ? (
        <img
          src={src}
          alt={`${name} logo`}
          loading="lazy"
          className="h-full w-full object-contain p-2"
        />
      ) : (
        <span className="text-xl font-bold">{name[0]}</span>
      )}
    </div>
  );
}
