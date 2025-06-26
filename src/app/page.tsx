"use client";
import AnimatedBackground from "@/components/layout/AnimatedBackground";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import { useActiveSection } from "@/useActiveSection";

export default function Portfolio() {
  const activeSection = useActiveSection();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
      <AnimatedBackground />
      <Navigation activeSection={activeSection} />

      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />

      <Footer />
    </div>
  );
}
