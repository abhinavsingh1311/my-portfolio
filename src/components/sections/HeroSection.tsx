import { personalInfo } from "../../data/content";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const scrollToNext = () => {
    const aboutSection = document.getElementById("about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
    >
      {/* Background gradient mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-black" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      </div>

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <div className="overflow-hidden mb-4">
          <p className="text-sm md:text-base tracking-[0.3em] text-zinc-500 uppercase animate-slide-up">
            Full Stack Developer
          </p>
        </div>

        <div className="overflow-hidden mb-8">
          <h1
            className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight animate-slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </h1>
        </div>

        <div className="overflow-hidden mb-12">
          <p
            className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            Building elegant solutions with modern technologies.
            <br />
            Based in Edmonton, Alberta.
          </p>
        </div>

        <div
          className="flex gap-4 justify-center animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          <a
            href={personalInfo.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-white text-black font-medium rounded-full hover:bg-zinc-200 transition-colors duration-300"
          >
            View Resume
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-zinc-700 text-white font-medium rounded-full hover:bg-zinc-900 transition-colors duration-300"
          >
            GitHub
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-zinc-500 animate-bounce cursor-pointer hover:text-white transition-colors"
        aria-label="Scroll to next section"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}
