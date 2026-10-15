import SmoothScroll from "@/components/SmoothScroll";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/Statement";
import Work from "@/components/Work";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import WaveBand from "@/components/WaveBand";

// Page = ordered list of sections. Each section owns its own animation.
export default function Page() {
  return (
    <SmoothScroll>
      <Nav />
      <main>
        <Hero />
        <About />
        <Work />
        <Experience />
        <WaveBand />
        <Skills />
        <Contact />
      </main>
    </SmoothScroll>
  );
}
