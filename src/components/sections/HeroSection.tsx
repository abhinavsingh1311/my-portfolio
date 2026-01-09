import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { imagePaths, personalInfo } from "../../data/content";
import { ChevronDown } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const section = sectionRef.current;
    const bg = bgRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const cta = ctaRef.current;

    // Pin hero section
    ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "+=150%",
      pin: true,
      pinSpacing: true,
    });

    // Zoom into background
    gsap.to(bg, {
      scale: 2.5,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=150%",
        scrub: 1,
      },
    });

    // Fade out title as we zoom
    gsap.to(title, {
      scale: 0.5,
      opacity: 0,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=80%",
        scrub: 1,
      },
    });

    // Fade out subtitle and CTA
    gsap.to([subtitle, cta], {
      opacity: 0,
      y: -50,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=50%",
        scrub: 1,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById("about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="h-screen w-full relative overflow-hidden"
    >
      {/* Animated background */}
      <div
        ref={bgRef}
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          transformOrigin: "center center",
          backgroundImage: `url('${imagePaths.bg1}')`,
        }}
      >
        {/* Gradient mesh background */}
        <div className="absolute inset-0 bg-black/70">
          <div className="absolute inset-0 opacity-40">
            <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-orange-500/30 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-[100px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[80px]" />
          </div>
        </div>

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "100px 100px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6">
        <div ref={subtitleRef} className="mb-4">
          <span className="text-sm md:text-base tracking-[0.4em] text-zinc-400 uppercase">
            Full Stack Developer
          </span>
        </div>

        <h1
          ref={titleRef}
          className="text-6xl md:text-8xl lg:text-[10rem] font-bold text-center leading-none"
        >
          <span className="bg-gradient-to-b from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
            {personalInfo.name.split(" ")[0]}
          </span>
          <br />
          <span className="bg-gradient-to-b from-zinc-300 via-zinc-400 to-zinc-600 bg-clip-text text-transparent">
            {personalInfo.name.split(" ")[1]}
          </span>
        </h1>

        <div ref={ctaRef} className="mt-12 flex flex-col items-center gap-8">
          <p className="text-zinc-500 text-center max-w-md">
            Crafting digital experiences with modern technologies
          </p>

          <div className="flex gap-4">
            <a
              href={personalInfo.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white text-black font-medium rounded-full hover:bg-zinc-200 transition-colors"
            >
              Resume
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-zinc-700 text-white rounded-full hover:bg-zinc-900 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-zinc-500 animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}
