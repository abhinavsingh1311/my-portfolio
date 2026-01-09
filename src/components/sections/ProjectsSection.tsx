import { projects } from "../../data/content";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectsSection() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="min-h-screen py-24 px-6 md:px-12 lg:px-24 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="mb-16">
          <span className="text-yellow-500 text-sm tracking-[0.3em] uppercase mb-4 block">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-yellow-300" />
        </div>

        {/* Featured Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-zinc-900/50 rounded-2xl overflow-hidden border border-zinc-800 hover:border-yellow-500/50 transition-all duration-500"
            >
              {/* Project image placeholder */}
              <div className="aspect-video bg-zinc-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <div className="w-full h-full flex items-center justify-center text-zinc-700">
                  <span className="text-sm">{project.title} Preview</span>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center">
                  <ExternalLink size={32} className="text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors flex items-center gap-2">
                  {project.title}
                  <ExternalLink
                    size={16}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </h3>
                <p className="text-zinc-400 mt-2 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div className="mt-16">
            <h3 className="text-xl font-semibold text-zinc-400 mb-6">
              More Projects
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {otherProjects.map((project, index) => (
                <a
                  key={index}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 bg-zinc-900/30 rounded-xl border border-zinc-800 hover:border-zinc-700 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center flex-shrink-0">
                    <Github size={20} className="text-zinc-500" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-white font-medium truncate group-hover:text-yellow-400 transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-zinc-500 text-sm truncate">
                      {project.description}
                    </p>
                  </div>
                  <ExternalLink
                    size={16}
                    className="text-zinc-600 group-hover:text-zinc-400 transition-colors flex-shrink-0"
                  />
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
