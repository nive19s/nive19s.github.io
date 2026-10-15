"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { profile, stats } from "@/lib/data";
import Magnetic from "./Magnetic";
import me from "@/public/images/nive2.png";

// Hero: giant headline + portrait with Framer parallax, then dark info panel (like the reference)
export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -120]);   // text drifts up
  const photoY = useTransform(scrollYProgress, [0, 1], [0, 90]);    // photo drifts down = depth
  const photoScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <section id="home" ref={ref} className="relative px-4 pt-28 md:px-8">

      {/* Role strip: who + what + status, readable in 2 seconds */}
      <div className="mx-auto mt-3 flex max-w-3xl flex-col items-center gap-3 text-center">
        <p className="text-xl font-medium tracking-tight md:text-3xl">{profile.role}</p>
        <span className="pill flex items-center gap-2 !py-1.5 text-sm"><span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime" /><span className="relative h-2 w-2 rounded-full bg-lime ring-1 ring-ink/20" /></span>Open to work · {profile.location}</span>
      </div>


      {/* Headline */}
      <motion.h1 style={{ y: titleY }} initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="text-center text-[clamp(3.6rem,17vw,10rem)] font-semibold leading-[0.9] tracking-[-0.05em]">
        Sothilin<span className="text-mute">gam</span> Nivethan
      </motion.h1>

      

      {/* Portrait + floating glass cards */}
      <div className="relative mx-auto -mt-6 flex max-w-6xl justify-center md:-mt-20">
        <motion.div style={{ y: photoY, scale: photoScale }} initial={{ opacity: 0, y: 80 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
className="relative z-10 aspect-square w-[90%] max-w-[520px] overflow-hidden rounded-[2rem] shadow-2xl shadow-black/10 will-change-transform">          <Image src={me} alt="Portrait of Nivethan Sothilingam" priority placeholder="blur" sizes="(max-width:768px) 82vw, 460px" className="h-full w-full object-cover" />
        </motion.div>

        <FloatCard className=" hidden z-0 left-0 top-10 md:top-40 md:left-[6%]" title="SE Intern · Boffo" sub="Angular · .NET Core · Azure" delay="0s" />
        <FloatCard className=" hidden z-0 right-0 bottom-20 scale-90 origin-right md:scale-100 md:bottom-24" title="BSc CS · UCSC" sub="Graduated 2026" delay="1.2s" />
      </div>

      {/* Dark panel */}
      <div className="relative z-20 mx-auto -mt-16 max-w-6xl rounded-[2rem] bg-ink p-6 pt-24 text-white md:p-10 md:pt-28">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="label !text-white/50">What I do</p>
            <p className="mt-4 max-w-lg text-2xl font-medium leading-snug md:text-3xl">{profile.pitch}</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Magnetic><a href="#work" className="group flex items-center gap-3 rounded-full bg-white py-2 pl-6 pr-2 text-ink">View projects
                <span className="grid h-9 w-9 place-items-center rounded-full bg-ink text-white transition group-hover:rotate-45">↗</span></a></Magnetic>
              <a href={profile.cv} download className="pill !border-white/15 !bg-white/5 text-white/80 hover:text-white">Download CV ↓</a>
              <a href={profile.github} className="pill !border-white/15 !bg-white/5 text-white/80 hover:text-white" target="_blank" rel="noreferrer">GitHub</a>
              <a href={profile.linkedin} className="pill !border-white/15 !bg-white/5 text-white/80 hover:text-white" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 self-end md:grid-cols-1 md:text-right">
            {stats.map((s) => (
              <div key={s.label}><div className="text-4xl font-semibold tracking-tight md:text-5xl">{s.value}</div><div className="label mt-1 !text-white/40">{s.label}</div></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Small glass info card that floats gently
function FloatCard({ title, sub, className, delay }: { title: string; sub: string; className: string; delay: string }) {
  return (
    <div style={{ animationDelay: delay }} className={`absolute z-20 animate-float rounded-2xl border border-white/60 bg-white/70 p-3.5 shadow-xl shadow-black/5 backdrop-blur-xl ${className}`}>
      <div className="flex items-center gap-2 text-sm font-semibold"><span className="h-2 w-2 rounded-full bg-lime ring-4 ring-lime/30" />{title}</div>
      <div className="mt-1 text-xs text-mute">{sub}</div>
    </div>
  );
}
