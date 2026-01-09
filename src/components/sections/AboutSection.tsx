import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { aboutContent, education, imagePaths } from "../../data/content";
import ParallaxImage, { ConstrainedImage } from "../ui/ParallaxImage";

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
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-zinc-950/70 to-black/80" />
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

        <div
          className="m-4 p-4"
          style={{
            border: "5px solid var(--neon-purple)",
            boxShadow: "0 0 15px 5px var(--neon-purple)",
          }}
        >
          {/* Intro */}
          <div className="grid md:grid-cols-2 gap-12 m-20 items-center">
            <div className="space-y-8">
              <p className="text-lg text-zinc-300 leading-relaxed">
                {aboutContent.intro}
              </p>
              <p className="text-lg text-zinc-300 leading-relaxed">
                {aboutContent.journey}
              </p>
            </div>
            <div className="relative">
              <ConstrainedImage
                src={imagePaths.earlyDays}
                alt="Early days in tech"
                maxHeight="300px"
              />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-orange-500/20 rounded-full blur-2xl -z-10" />
            </div>
          </div>

          {/* AFPI Background - Parallax */}
          <div className="m-20">
            <h3 className="text-2xl font-bold text-white mb-6">
              {aboutContent.afpiBackground.title}
            </h3>
            <div className="grid md:grid-cols-5 gap-8 items-start">
              <div className="md:col-span-2">
                <ParallaxImage
                  src={imagePaths.afpiMohali}
                  alt="AFPI Mohali"
                  className="h-64 md:h-72"
                  speed={0.1}
                />
              </div>
              <div className="md:col-span-3 space-y-4">
                <p className="text-zinc-400 leading-relaxed">
                  {aboutContent.afpiBackground.description}
                </p>
                <p className="text-zinc-400 leading-relaxed">
                  {aboutContent.afpiBackground.extended}
                </p>
                <a
                  href={aboutContent.afpiBackground.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-orange-400 hover:text-orange-300 transition-colors"
                >
                  Learn more about AFPI →
                </a>
              </div>
            </div>
          </div>
        </div>
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
          <div
            className="grid grid-cols-1 items-center p-6"
            style={{
              background: "var(--bg-surface)",
              border: "2px solid var(--neon-green)",
              width: "600px",
              height: "500px",
              opacity: "90%",
            }}
          >
            <div className="relative">
              <ConstrainedImage
                src={imagePaths.logo}
                alt="NAIT Logo"
                maxHeight="150px"
              />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-orange-500/20 rounded-full blur-2xl -z-10" />
            </div>
            <div className="space-y-8">
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

        {/* Current status */}
        <div
          className="mt-6 p-4 text-sm text-center"
          style={{
            border: "2px dashed var(--neon-purple)",
          }}
        >
          <p style={{ fontSize: "1.5rem", color: "var(--neon-yellow)" }}>
            {aboutContent.currentWork}
          </p>
          <p className="mt-2 text-xl">
            <span style={{ color: "var(--neon-pink)" }}>LANGUAGES:</span>{" "}
            <span style={{ color: "var(--neon-cyan)" }}>
              {aboutContent.languages}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
