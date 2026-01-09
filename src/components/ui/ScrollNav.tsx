import { useEffect, useState } from "react";
import { sections } from "../../data/content";

export default function ScrollNav() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show nav after scrolling past hero
      setIsVisible(window.scrollY > window.innerHeight * 0.5);

      // Determine active section
      const sectionElements = sections.map((s) => ({
        id: s.id,
        element: document.getElementById(s.id),
      }));

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.5) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed right-6 top-1/2 -translate-y-1/2 z-50 transition-all duration-500 ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
      }`}
    >
      <div className="flex flex-col gap-3">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="group relative flex items-center justify-end gap-3"
            aria-label={`Go to ${section.label}`}
          >
            {/* Label on hover */}
            <span className="text-xs text-zinc-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
              {section.label}
            </span>

            {/* Dot indicator */}
            <span
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                activeSection === section.id
                  ? "bg-white scale-125"
                  : "bg-zinc-600 hover:bg-zinc-400"
              }`}
            />
          </button>
        ))}
      </div>
    </nav>
  );
}
