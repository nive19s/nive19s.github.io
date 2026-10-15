import type { Config } from "tailwindcss";
// Design tokens: warm paper background, near-black ink, one lime accent
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { paper: "#F3F3F0", ink: "#0D0D0F", mute: "#8B8B86", lime: "#D6FF3F", panel: "#161618" },
      fontFamily: { sans: ["'Inter Tight Variable'", "system-ui", "sans-serif"], mono: ["'JetBrains Mono Variable'", "monospace"] },
      keyframes: { float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-10px)" } }, marquee: { to: { transform: "translateX(-50%)" } } },
      animation: { float: "float 5s ease-in-out infinite", marquee: "marquee 28s linear infinite" },
    },
  },
  plugins: [],
} satisfies Config;
