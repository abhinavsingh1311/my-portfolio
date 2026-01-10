import { useEffect, useState } from "react";

const sections = [
  { id: "hero", label: "HOME" },
  { id: "about", label: "ABOUT" },
  { id: "experience", label: "EXP" },
  { id: "skills", label: "SKILLS" },
  { id: "projects", label: "PROJECTS" },
  { id: "blog", label: "BLOG" },
  { id: "contact", label: "CONTACT" },
];

export default function ScrollNav() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 120);

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2) {
            setActiveSection(sections[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 transition-all duration-500 w-auto ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className="flex flex-col gap-1 p-2 rounded"
        style={{
          background: "rgba(5, 8, 22, 0.8)",
          border: "1px solid rgba(0, 246, 255, 0.2)",
          backdropFilter: "blur(10px)",
        }}
      >
        {sections.map((s) => (
          <button
            key={s.id}
            onClick={() => scrollTo(s.id)}
            className="group flex items-center justify-end gap-2 px-3 py-2 min-h-[44px] rounded transition-all md:px-2 md:py-1"
            style={{
              background:
                activeSection === s.id
                  ? "rgba(0, 246, 255, 0.1)"
                  : "transparent",
            }}
            aria-label={`Go to ${s.label}`}
          >
            <span
              className={`text-[10px] tracking-wider transition-opacity ${
                activeSection === s.id ? "opacity-100" : "opacity-70"
              }`}
              style={{
                color:
                  activeSection === s.id
                    ? "var(--neon-cyan)"
                    : "var(--text-muted)",
                fontFamily: "JetBrains Mono",
              }}
            >
              {s.label}
            </span>
            <span
              className="w-1.5 h-1.5 rounded-full transition-all"
              style={{
                background:
                  activeSection === s.id
                    ? "var(--neon-cyan)"
                    : "var(--text-muted)",
                boxShadow:
                  activeSection === s.id ? "0 0 8px var(--neon-cyan)" : "none",
              }}
            />
          </button>
        ))}
      </div>
    </nav>
  );
}
