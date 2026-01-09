import { skills } from "../../data/content";

export default function SkillsSection() {
  const categoryColors: Record<string, string> = {
    Frontend: "from-pink-500 to-rose-500",
    Backend: "from-green-500 to-emerald-500",
    Languages: "from-purple-500 to-violet-500",
    "Databases & Cloud": "from-orange-500 to-amber-500",
    "Tools & Others": "from-cyan-500 to-teal-500",
  };

  return (
    <section
      id="skills"
      className="min-h-screen py-24 px-6 md:px-12 lg:px-24 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-zinc-950/70 to-black/80" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="mb-16">
          <span className="text-blue-400 text-sm tracking-[0.3em] uppercase mb-4 block">
            Expertise
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-300" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillGroup, index) => (
            <div
              key={index}
              className="group relative bg-zinc-900/30 rounded-2xl p-6 border border-zinc-800 hover:border-zinc-700 transition-all duration-300"
            >
              {/* Category header with gradient */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className={`w-3 h-3 rounded-full bg-gradient-to-r ${
                    categoryColors[skillGroup.category] ||
                    "from-gray-500 to-gray-400"
                  }`}
                />
                <h3 className="text-lg font-semibold text-white">
                  {skillGroup.category}
                </h3>
              </div>

              {/* Skills tags */}
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 text-sm bg-zinc-800/80 text-zinc-300 rounded-lg border border-zinc-700/50 hover:border-zinc-600 hover:bg-zinc-800 transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional context */}
        <div className="mt-16 text-center">
          <p className="text-zinc-500 max-w-2xl mx-auto">
            Constantly learning and exploring new technologies to build better
            solutions. Currently diving deeper into AI/ML integration and cloud
            architecture.
          </p>
        </div>
      </div>
    </section>
  );
}
