import { useRef, useEffect, useState } from "react";
import { experiences, imagePaths } from "../../data/content";
import { ExternalLink } from "lucide-react";

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) {
            setVisibleCards((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );

    const cards = sectionRef.current?.querySelectorAll("[data-index]");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="min-h-screen py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 w-full h-full bg-center bg-cover md:bg-fixed"
        style={{
          backgroundImage: `url('${imagePaths.bg2}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          //   backgroundAttachment: "fixed",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-zinc-950/80 to-black/90" />

      {/* Cyber grid overlay */}
      <div className="absolute inset-0 cyber-grid opacity-10" />

      {/* Top line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <span
            className="text-sm tracking-[0.3em] uppercase mb-4 block"
            style={{ color: "var(--neon-cyan)", fontFamily: "JetBrains Mono" }}
          >
            [ WORK.HISTORY ]
          </span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: "Orbitron" }}
          >
            Professional Work
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-300" />
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => {
            const isVisible = visibleCards.has(index);

            return (
              <div
                key={index}
                data-index={index}
                className="group relative rounded-2xl p-8 md:p-10 transition-all duration-700"
                style={{
                  background: "rgba(24, 24, 40, 0.6)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(63, 63, 70, 0.5)",
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible
                    ? "translateY(0) translateX(0)"
                    : index % 2 === 0
                    ? "translateY(60px) translateX(-30px)"
                    : "translateY(60px) translateX(30px)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(0, 246, 255, 0.4)";
                  e.currentTarget.style.boxShadow =
                    "0 0 30px rgba(0, 246, 255, 0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(63, 63, 70, 0.5)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Index badge */}
                <div
                  className="absolute -top-3 left-6 px-3 py-1 rounded text-xs"
                  style={{
                    background: "var(--bg-deep)",
                    color: "var(--neon-cyan)",
                    border: "1px solid rgba(0, 246, 255, 0.4)",
                    fontFamily: "JetBrains Mono",
                  }}
                >
                  NODE_{String(index + 1).padStart(2, "0")}
                </div>

                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                    <div>
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-2xl font-bold transition-colors"
                        style={{
                          color: "var(--neon-pink)",
                          fontFamily: "Orbitron",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.color = "var(--neon-cyan)")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.color = "var(--neon-pink)")
                        }
                      >
                        {exp.company}
                        <ExternalLink size={18} className="opacity-50" />
                      </a>
                      <p style={{ color: "var(--neon-cyan)" }} className="mt-1">
                        {exp.role}
                      </p>
                    </div>
                    <span
                      className="text-sm tracking-wider"
                      style={{
                        color: "var(--text-muted)",
                        fontFamily: "JetBrains Mono",
                      }}
                    >
                      {exp.period}
                    </span>
                  </div>

                  {/* Description */}
                  <ul className="space-y-3 mb-6">
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        <span
                          style={{ color: "var(--neon-pink)" }}
                          className="mt-1.5 text-xs"
                        >
                          ▸
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs rounded-full transition-all duration-300 hover:scale-105"
                        style={{
                          background: "rgba(0, 246, 255, 0.1)",
                          color: "var(--neon-cyan)",
                          border: "1px solid rgba(0, 246, 255, 0.3)",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
