"use client";
import { useState } from "react";
import { iconUrl, conceptIcons } from "@/lib/icons";

// Shows the mapped icon; falls back to an initial if missing or failed to load
export default function TechIcon({ name, size = 18 }: { name: string; size?: number }) {
  const [failed, setFailed] = useState(false);
  const Concept = conceptIcons[name];
  const src = iconUrl[name];

  if (Concept) return <Concept size={size} strokeWidth={1.75} aria-hidden />;

  if (!src || failed) {
    return <span className="text-xs font-bold leading-none">{name[0]}</span>;
  }
  return (
    <img
      src={src}
      alt=""
      width={size}
      height={size}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className="object-contain"
      style={{ width: size, height: size }}
    />
  );
}