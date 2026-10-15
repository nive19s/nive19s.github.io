import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nivethan Sothilingam — Software Engineer",
  description: "Portfolio of Nivethan Sothilingam: full-stack engineer building fast, polished web products.",
};
export const viewport: Viewport = { themeColor: "#F3F3F0" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body>{children}</body></html>);
}
