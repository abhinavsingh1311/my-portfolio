import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { aboutContent, education, imagePaths } from "../../data/content";
import { ConstrainedImage } from "../ui/ParallaxImage";

gsap.registerPlugin(ScrollTrigger);

// Individual story panel with background image
function StoryPanel({
  id,
  backgroundImage,
  title,
  children,
  alignment = "left",
}: {
  id: string;
  backgroundImage: string;
  title?: string;
  children: React.ReactNode;
  alignment?: "left" | "right" | "center";
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!panelRef.current || !bgRef.current || !contentRef.current) return;

    // Pin panel
    const pinTrigger = ScrollTrigger.create({
      trigger: panelRef.current,
      start: "top top",
      end: "+=100%",
      pin: true,
      pinSpacing: true,
    });

    // Zoom background
    gsap.fromTo(
      bgRef.current,
      { scale: 1.1 },
      {
        scale: 1.3,
        ease: "none",
        scrollTrigger: {
          trigger: panelRef.current,
          start: "top top",
          end: "+=100%",
          scrub: 1,
        },
      }
    );

    // Content animation
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: panelRef.current,
          start: "top top",
          end: "+=40%",
          scrub: 1,
        },
      }
    );

    // Fade out at end
    gsap.to(contentRef.current, {
      opacity: 0,
      y: -40,
      ease: "power2.in",
      scrollTrigger: {
        trigger: panelRef.current,
        start: "+=70%",
        end: "+=30%",
        scrub: 1,
      },
    });

    return () => {
      pinTrigger.kill();
    };
  }, []);

  const alignmentClasses = {
    left: "items-start text-left pl-8 md:pl-24",
    right: "items-end text-right pr-8 md:pr-24",
    center: "items-center text-center px-8",
  };

  return (
    <div
      ref={panelRef}
      id={id}
      className="h-screen w-full relative overflow-hidden"
    >
      {/* Background image */}
      <div
        ref={bgRef}
        className="absolute inset-0 w-full h-full"
        style={{ transformOrigin: "center center" }}
      >
        <img
          src={backgroundImage}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        className={`relative z-10 h-full flex flex-col justify-center max-w-2xl ${alignmentClasses[alignment]}`}
      >
        {title && (
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            {title}
          </h2>
        )}
        {children}
      </div>
    </div>
  );
}

export default function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen py-24 px-6 md:px-12 lg:px-24 relative"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <span className="text-orange-500 text-sm tracking-[0.3em] uppercase mb-4 block">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            My Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-300" />
        </div>

        {/* Intro Panel */}
        <StoryPanel
          id="intro"
          backgroundImage={imagePaths.bg2}
          title="The Beginning"
          alignment="left"
        >
          <div className="space-y-6">
            {/* Retro terminal-style text block */}
            <div className="relative border border-orange-500/30 bg-black/40 backdrop-blur-sm p-6 rounded-lg">
              {/* Scan line overlay */}
              <div className="absolute inset-0 pointer-events-none opacity-10 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(255,165,0,0.1)_2px,rgba(255,165,0,0.1)_4px)]" />
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-orange-500" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-orange-500" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-orange-500" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-orange-500" />

              <p className="text-lg text-zinc-200 leading-relaxed mb-4 relative z-10">
                {aboutContent.intro}
              </p>
              <p className="text-zinc-400 leading-relaxed relative z-10">
                {aboutContent.journey}
              </p>
            </div>

            {/* Image with glow effect */}
            <div className="relative mt-8">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 to-amber-500/20 rounded-xl blur-lg" />
              <ConstrainedImage
                src={imagePaths.earlyDays}
                alt="Early days in tech"
                maxHeight="280px"
                className="relative z-10"
              />
            </div>
          </div>
        </StoryPanel>

        {/* AFPI Background Panel */}
        <StoryPanel
          id="afpi"
          backgroundImage={imagePaths.afpiMohali}
          title={aboutContent.afpiBackground.title}
          alignment="left"
        >
          <div className="space-y-6">
            {/* Content card */}
            <div className="relative border border-cyan-500/30 bg-black/50 backdrop-blur-sm p-6 rounded-lg overflow-hidden">
              {/* Cyber grid pattern */}
              <div className="absolute inset-0 opacity-5 bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px]" />

              <p className="text-zinc-300 leading-relaxed mb-4 relative z-10">
                {aboutContent.afpiBackground.description}
              </p>
              <p className="text-zinc-400 leading-relaxed relative z-10">
                {aboutContent.afpiBackground.extended}
              </p>

              {/* CTA link with retro styling */}
              <a
                href={aboutContent.afpiBackground.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 px-4 py-2 border border-orange-500/50 text-orange-400 hover:bg-orange-500/10 hover:text-orange-300 transition-all duration-300 rounded relative z-10 group"
              >
                <span>Learn more about AFPI</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>
        </StoryPanel>

        {/* Panel 3: Canada */}
        <StoryPanel
          id="about-canada"
          backgroundImage={imagePaths.journey}
          title={aboutContent.canadaJourney.title}
          alignment="left"
        >
          <p className="text-lg text-zinc-200 leading-relaxed mb-4">
            {aboutContent.canadaJourney.description}
          </p>
          <p className="text-zinc-400 leading-relaxed">
            {aboutContent.canadaJourney.extended}
          </p>
        </StoryPanel>

        {/* Education */}
        <StoryPanel
          id="education"
          backgroundImage={imagePaths.naitLogo}
          title={aboutContent.naitJourney.title}
          alignment="center"
        >
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <img
              src={imagePaths.naitLogo}
              alt="NAIT Logo"
              className="w-100 h-full object-contain rounded-xl bg-white p-2 flex-shrink-0"
            />
            <div className="flex-1">
              <a
                href={education.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl font-bold text-white hover:text-blue-400 transition-colors"
              >
                {education.program}
              </a>
              <p className="text-zinc-500 mt-1">
                {education.institution} | {education.period}
              </p>
              <ul className="mt-4 space-y-2">
                {education.achievements.map((achievement, index) => (
                  <li
                    key={index}
                    className="text-zinc-400 flex items-start gap-3"
                  >
                    <span className="text-orange-500 mt-1">•</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </StoryPanel>

        {/* Current work note */}
        <div className="mt-16 text-center">
          <p className="text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            {aboutContent.currentWork}
          </p>
          <p className="text-zinc-500 mt-4">{aboutContent.languages}</p>
        </div>
      </div>
    </section>
  );
}
