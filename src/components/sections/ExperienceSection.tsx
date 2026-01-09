import { experiences } from "../../data/content";
import { ExternalLink } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="min-h-screen py-24 px-6 md:px-12 lg:px-24 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-zinc-950/70 to-black/80" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="mb-16">
          <span className="text-blue-400 text-sm tracking-[0.3em] uppercase mb-4 block">
            Experience
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Professional Work
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-300" />
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group relative bg-zinc-900/30 rounded-2xl p-8 md:p-10 border border-zinc-800 hover:border-zinc-700 transition-all duration-500"
            >
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
                      className="inline-flex items-center gap-2 text-2xl font-bold text-white hover:text-blue-400 transition-colors"
                    >
                      {exp.company}
                      <ExternalLink size={18} className="opacity-50" />
                    </a>
                    <p className="text-blue-400 mt-1">{exp.role}</p>
                  </div>
                  <span className="text-zinc-500 text-sm tracking-wider">
                    {exp.period}
                  </span>
                </div>

                {/* Description */}
                <ul className="space-y-3 mb-6">
                  {exp.description.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-zinc-400"
                    >
                      <span className="text-blue-500 mt-1.5 text-xs">▸</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs bg-zinc-800 text-zinc-400 rounded-full border border-zinc-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
