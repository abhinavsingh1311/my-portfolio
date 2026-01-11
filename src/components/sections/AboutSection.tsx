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

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: panelRef.current,
        start: "top top",
        end: "+=150%", // lengthen for smoother scrubbing
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    tl.fromTo(bgRef.current, { scale: 1.1 }, { scale: 1.3, ease: "none" }, 0)
      .fromTo(
        contentRef.current,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, ease: "power2.out" },
        0
      )
      .to(
        contentRef.current,
        { opacity: 0, y: -40, ease: "power2.in" },
        0.6 // fade out later in the scroll
      );

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  const alignmentClasses: Record<string, string> = {
    left: "items-start text-left pl-8 md:pl-24",
    right: "items-end text-right pr-8 md:pr-24",
    center: "items-center text-center px-8",
  };

  return (
    <div
      ref={panelRef}
      id={id}
      className="relative min-h-screen overflow-hidden py-24 px-6 md:px-12 lg:px-24"
    >
      {/* Background image */}
      <div ref={bgRef} className="absolute inset-0 h-full w-full">
        <img
          src={backgroundImage}
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        className={`relative z-10 flex h-full max-w-2xl flex-col justify-center ${alignmentClasses[alignment]}`}
      >
        {title && (
          <h2 className="mb-6 text-3xl font-bold text-white md:text-5xl">
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
      className="relative min-h-screen py-24 px-6 md:px-12 lg:px-24"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-zinc-950/70 to-black/80" />
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-12 lg:px-24">
        {/* Section header */}
        <div className="mb-16">
          <span className="mb-4 block text-sm uppercase tracking-[0.3em] text-orange-500">
            About Me
          </span>
          <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            My Journey
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-orange-500 to-orange-300" />
        </div>

        {/* DESKTOP/TABLET: full about (intro + AFPI + Canada) */}
        <div className="hidden md:block">
          <div className="m-4 p-4 border-[5px] border-[var(--neon-purple)] shadow-[0_0_15px_5px_var(--neon-purple)]">
            {/* Intro */}
            <div className="mx-4 grid grid-cols-1 items-start gap-6 p-4 sm:mx-8 sm:p-6 lg:m-20 lg:grid-cols-2 lg:gap-12 lg:p-0">
              <div className="space-y-8">
                <p className="text-lg leading-relaxed text-zinc-300">
                  {aboutContent.intro}
                </p>
                <p className="text-lg leading-relaxed text-zinc-300">
                  {aboutContent.journey}
                </p>
              </div>
              <div className="relative">
                <ConstrainedImage
                  src={imagePaths.earlyDays}
                  alt="Early days in tech"
                  maxHeight="300px"
                />
                <div className="absolute -bottom-4 -right-4 -z-10 h-32 w-32 rounded-full bg-orange-500/20 blur-2xl" />
              </div>
            </div>

            {/* AFPI Background - Parallax */}
            <div className="mx-4 sm:mx-8 lg:m-20">
              <h3 className="mb-6 text-2xl font-bold text-white">
                {aboutContent.afpiBackground.title}
              </h3>
              <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-5 lg:gap-8">
                <div className="lg:col-span-2">
                  <ParallaxImage
                    src={imagePaths.afpiMohali}
                    alt="AFPI Mohali"
                    className="h-64 md:h-72"
                    speed={0.1}
                  />
                </div>
                <div className="space-y-4 lg:col-span-3">
                  <p className="leading-relaxed text-zinc-400">
                    {aboutContent.afpiBackground.description}
                  </p>
                  <p className="leading-relaxed text-zinc-400">
                    {aboutContent.afpiBackground.extended}
                  </p>
                  <a
                    href={aboutContent.afpiBackground.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-orange-400 transition-colors hover:text-orange-300"
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
            <p className="mb-4 text-lg leading-relaxed text-zinc-200">
              {aboutContent.canadaJourney.description}
            </p>
            <p className="leading-relaxed text-zinc-400">
              {aboutContent.canadaJourney.extended}
            </p>
          </StoryPanel>

          {/* Education (desktop/tablet, with panel) */}
          <StoryPanel
            id="education"
            backgroundImage={imagePaths.naitLogo}
            title={aboutContent.naitJourney.title}
            alignment="center"
          >
            <div className="mx-auto grid max-w-md grid-cols-1 items-center p-4 sm:p-6 border-2 border-[var(--neon-green)] bg-[var(--bg-surface)] opacity-90">
              <div className="relative">
                <ConstrainedImage
                  src={imagePaths.logo}
                  alt="NAIT Logo"
                  maxHeight="150px"
                />
                <div className="absolute -bottom-4 -right-4 -z-10 h-32 w-32 rounded-full bg-orange-500/20 blur-2xl" />
              </div>
              <div className="space-y-8">
                <a
                  href={education.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl font-bold text-white transition-colors hover:text-blue-400"
                >
                  {education.program}
                </a>
                <p className="mt-1 text-zinc-500">
                  {education.institution} | {education.period}
                </p>
                <ul className="mt-4 space-y-2">
                  {education.achievements.map((achievement, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-zinc-400"
                    >
                      <span className="mt-1 text-orange-500">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </StoryPanel>

          {/* Current status (desktop/tablet) */}
          <div className="mt-6 p-4 text-center text-sm border-2 border-dashed border-[var(--neon-purple)]">
            <p className="text-[var(--neon-yellow)] text-[1.5rem]">
              {aboutContent.currentWork}
            </p>
            <p className="mt-2 text-xl">
              <span className="text-[var(--neon-pink)]">LANGUAGES:</span>{" "}
              <span className="text-[var(--neon-cyan)]">
                {aboutContent.languages}
              </span>
            </p>
          </div>
        </div>

        {/* MOBILE: only Education + Current status */}
        <div className="block space-y-12 md:hidden">
          {/* Education (mobile, still using StoryPanel for consistency) */}
          <StoryPanel
            id="education"
            backgroundImage={imagePaths.naitLogo}
            title={aboutContent.naitJourney.title}
            alignment="center"
          >
            <div className="mx-auto grid max-w-md grid-cols-1 items-center border-2 border-[var(--neon-green)] bg-[var(--bg-surface)] p-4 opacity-90 sm:p-6">
              <div className="relative">
                <ConstrainedImage
                  src={imagePaths.logo}
                  alt="NAIT Logo"
                  maxHeight="150px"
                />
              </div>
              <div className="space-y-8">
                <a
                  href={education.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl font-bold text-white transition-colors hover:text-blue-400"
                >
                  {education.program}
                </a>
                <p className="mt-1 text-zinc-500">
                  {education.institution} | {education.period}
                </p>
                <ul className="mt-4 space-y-2">
                  {education.achievements.map((achievement, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-zinc-400"
                    >
                      <span className="mt-1 text-orange-500">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </StoryPanel>

          {/* Current status (mobile) */}
          <div className="mt-6 p-4 text-center text-sm border-2 border-dashed border-[var(--neon-purple)]">
            <p className="text-[1.5rem] text-[var(--neon-yellow)]">
              {aboutContent.currentWork}
            </p>
            <p className="mt-2 text-xl">
              <span className="text-[var(--neon-pink)]">LANGUAGES:</span>{" "}
              <span className="text-[var(--neon-cyan)]">
                {aboutContent.languages}
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
