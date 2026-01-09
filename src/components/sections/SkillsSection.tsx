import { useState } from "react";
import { skills } from "../../data/content";

const categoryColors: Record<
  string,
  { gradient: string; glow: string; icon: string }
> = {
  Frontend: {
    gradient: "from-pink-500 to-rose-500",
    glow: "rgba(236, 72, 153, 0.4)",
    icon: "◈",
  },
  Backend: {
    gradient: "from-green-500 to-emerald-500",
    glow: "rgba(34, 197, 94, 0.4)",
    icon: "◆",
  },
  Languages: {
    gradient: "from-purple-500 to-violet-500",
    glow: "rgba(168, 85, 247, 0.4)",
    icon: "◇",
  },
  "Databases & Cloud": {
    gradient: "from-orange-500 to-amber-500",
    glow: "rgba(249, 115, 22, 0.4)",
    icon: "◉",
  },
  "Tools & Others": {
    gradient: "from-cyan-500 to-teal-500",
    glow: "rgba(6, 182, 212, 0.4)",
    icon: "◎",
  },
};

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section
      id="skills"
      className="min-h-screen py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-zinc-950/70 to-black/80" />
      <div className="absolute inset-0 cyber-grid opacity-10" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      {/* Floating orbs that react to hover */}
      <div
        className="absolute w-96 h-96 rounded-full blur-[150px] transition-all duration-1000 pointer-events-none"
        style={{
          background: activeCategory
            ? categoryColors[activeCategory]?.glow
            : "rgba(59, 130, 246, 0.2)",
          top: "20%",
          left: "10%",
          opacity: activeCategory ? 0.6 : 0.3,
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <span
            className="text-sm tracking-[0.3em] uppercase mb-4 block"
            style={{ color: "var(--neon-cyan)", fontFamily: "JetBrains Mono" }}
          >
            [ TECH.MATRIX ]
          </span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: "Orbitron" }}
          >
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-300" />
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillGroup, index) => {
            const colors = categoryColors[skillGroup.category] || {
              gradient: "from-gray-500 to-gray-400",
              glow: "rgba(107, 114, 128, 0.4)",
              icon: "◈",
            };
            const isActive = activeCategory === skillGroup.category;

            return (
              <div
                key={index}
                className="group relative rounded-2xl p-6 border transition-all duration-500 cursor-pointer"
                style={{
                  background: isActive
                    ? "rgba(30, 30, 50, 0.8)"
                    : "rgba(24, 24, 40, 0.5)",
                  borderColor: isActive
                    ? colors.glow.replace("0.4", "0.8")
                    : "rgba(63, 63, 70, 0.5)",
                  boxShadow: isActive
                    ? `0 0 30px ${
                        colors.glow
                      }, inset 0 0 30px ${colors.glow.replace("0.4", "0.1")}`
                    : "none",
                  transform: isActive ? "scale(1.02)" : "scale(1)",
                }}
                onMouseEnter={() => setActiveCategory(skillGroup.category)}
                onMouseLeave={() => setActiveCategory(null)}
              >
                {/* Scan line effect on hover */}
                {isActive && (
                  <div
                    className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none"
                    style={{
                      background:
                        "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)",
                    }}
                  />
                )}

                {/* Category header */}
                <div className="flex items-center gap-3 mb-5 relative z-10">
                  <span
                    className={`text-xl transition-all duration-300 ${
                      isActive ? "scale-125" : ""
                    }`}
                    style={{
                      color: isActive
                        ? colors.glow.replace("0.4", "1")
                        : "var(--text-muted)",
                    }}
                  >
                    {colors.icon}
                  </span>
                  <h3
                    className="text-lg font-semibold transition-colors duration-300"
                    style={{
                      color: isActive ? "white" : "var(--text-secondary)",
                      fontFamily: "Orbitron",
                    }}
                  >
                    {skillGroup.category}
                  </h3>
                  {/* Active indicator */}
                  {isActive && (
                    <span
                      className="ml-auto text-xs px-2 py-0.5 rounded animate-pulse"
                      style={{
                        background: colors.glow.replace("0.4", "0.3"),
                        color: "white",
                        fontFamily: "JetBrains Mono",
                      }}
                    >
                      ACTIVE
                    </span>
                  )}
                </div>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-2 relative z-10">
                  {skillGroup.items.map((skill, i) => {
                    const isSkillHovered =
                      hoveredSkill === `${skillGroup.category}-${skill}`;

                    return (
                      <span
                        key={i}
                        className="px-3 py-1.5 text-sm rounded-lg transition-all duration-300 cursor-default"
                        style={{
                          background: isSkillHovered
                            ? colors.glow.replace("0.4", "0.3")
                            : "rgba(39, 39, 42, 0.8)",
                          color: isSkillHovered
                            ? "white"
                            : "var(--text-secondary)",
                          border: `1px solid ${
                            isSkillHovered
                              ? colors.glow.replace("0.4", "0.6")
                              : "rgba(63, 63, 70, 0.5)"
                          }`,
                          boxShadow: isSkillHovered
                            ? `0 0 10px ${colors.glow}`
                            : "none",
                          transform: isSkillHovered
                            ? "translateY(-2px)"
                            : "translateY(0)",
                        }}
                        onMouseEnter={() =>
                          setHoveredSkill(`${skillGroup.category}-${skill}`)
                        }
                        onMouseLeave={() => setHoveredSkill(null)}
                      >
                        {skill}
                      </span>
                    );
                  })}
                </div>

                {/* Skill count */}
                <div
                  className="mt-4 pt-3 text-xs flex justify-between items-center"
                  style={{
                    borderTop: "1px solid rgba(63, 63, 70, 0.3)",
                    color: "var(--text-muted)",
                    fontFamily: "JetBrains Mono",
                  }}
                >
                  <span>{skillGroup.items.length} SKILLS</span>
                  <span className="opacity-50">
                    NODE_{String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <p style={{ color: "var(--text-muted)" }}>
            Constantly learning and exploring new technologies to build better
            solutions.
          </p>
          <div
            className="mt-4 inline-flex items-center gap-2 text-xs"
            style={{ color: "var(--neon-green)", fontFamily: "JetBrains Mono" }}
          >
            <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
            CURRENTLY EXPLORING: LLD + C/C++
          </div>
        </div>
      </div>
    </section>
  );
}
