"use client";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WORDS = [
  "Full-Stack Engineer", "✦", ".NET Core", "⚡", "Next.js", "✦", "Angular", "☁",
  "Azure Cloud", "✦", "Clean Architecture", "⚡", "REST APIs", "✦", "Pixel-perfect UI", "☁", "Open to work", "✦",
];
const TEXT = (WORDS.join("   ") + "   ").repeat(4);

// Smooth sine wave: one Q curve, then T mirrors it
const WAVE = "M -300 170 Q -150 10 0 170" + Array.from({ length: 8 }, (_, i) => ` T ${(i + 1) * 300} 170`).join("");

export default function WaveBand({ reverse = false }: { reverse?: boolean }) {
  const section = useRef<HTMLElement>(null);
  const textPath = useRef<SVGTextPathElement>(null);

  useLayoutEffect(() => {
    const SHIFT = 500;                       // how far the text travels along the curve
    const pos = { v: reverse ? -SHIFT : 0 };  // value GSAP animates
    const apply = () => textPath.current?.setAttribute("startOffset", String(pos.v));
    apply();

    const ctx = gsap.context(() => {
      gsap.to(pos, {
        v: reverse ? 0 : -SHIFT,
        ease: "none",
        onUpdate: apply,                      // write straight to the SVG attribute
        scrollTrigger: { trigger: section.current, start: "top bottom", end: "bottom top", scrub: 0.6 },
      });
    }, section);
    return () => ctx.revert();
  }, [reverse]);

  return (
    <section ref={section} aria-hidden className="relative my-10 h-[180px] overflow-hidden md:h-[300px]">
      <svg viewBox="0 0 1440 340" className="absolute left-1/2 top-0 h-full w-[1000px] max-w-none -translate-x-1/2 md:w-full">
        {/* strokeWidth = band thickness (was 92) */}
        <path d={WAVE} id="wave" fill="none" stroke="#0D0D0F" strokeWidth="56" />
        <text className="font-sans" fontSize="26" fontWeight="600" fill="#fff" letterSpacing="1" dy="9">
          <textPath ref={textPath} href="#wave" startOffset="0">{TEXT}</textPath>
        </text>
      </svg>
    </section>
  );
}