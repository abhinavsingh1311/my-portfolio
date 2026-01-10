import "./App.css";
import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import SkillsSection from "./components/sections/SkillsSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import BlogSection from "./components/sections/BlogSection";
import ContactSection from "./components/sections/ContactSection";
import ScrollNav from "./components/ui/ScrollNav";
import ErrorBoundary from "./components/ErrorBoundary";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Refresh ScrollTrigger after all content loads
    ScrollTrigger.refresh();

    // Smooth scroll setup (native CSS scroll-behavior or use Lenis for smoother)
    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <ErrorBoundary>
      <div
        className="bg-cover bg-center bg-fixed bg-black text-white"
        style={{ backgroundImage: "url('/bg3.jpg')" }}
      >
        {/* <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-zinc-950/80 to-black/10" /> */}
        <ScrollNav />
        <main>
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <SkillsSection />
          <ProjectsSection />
          <BlogSection />
          <ContactSection />
        </main>
      </div>
    </ErrorBoundary>
  );
}

export default App;
