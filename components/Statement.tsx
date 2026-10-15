"use client";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { about } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

// About me: scroll-lit paragraph on the left, quick facts on the right
export default function About() {
  const ref = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".word", { opacity: 0.18 }, {
        opacity: 1, stagger: 0.05, ease: "none",
        scrollTrigger: { trigger: ".about-text", start: "top 80%", end: "bottom 50%", scrub: true },
      });
      gsap.from(".fact", { y: 30, opacity: 0, stagger: 0.1, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: ".facts", start: "top 85%" } });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={ref} className="mx-auto grid max-w-6xl gap-12 px-6 py-28 md:grid-cols-[1.5fr_1fr] md:py-44">
      <div>
        <p className="label mb-6">About me</p>
        <p className="about-text text-2xl font-medium leading-[1.3] tracking-tight md:text-4xl">
          {about.paragraph.split(" ").map((w, i) => (<span key={i} className="word inline-block pr-[0.25em]">{w}</span>))}
        </p>
      </div>
      <dl className="facts self-end divide-y divide-black/10 border-y border-black/10">
        {about.facts.map((f) => (
          <div key={f.k} className="fact flex justify-between gap-6 py-4">
            <dt className="label pt-1">{f.k}</dt><dd className="text-right font-medium">{f.v}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
