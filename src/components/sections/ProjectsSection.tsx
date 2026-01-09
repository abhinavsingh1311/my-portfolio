import { projects } from "../../data/content";
import { ExternalLink, Github } from "lucide-react";
import { useRef, useEffect, useState } from "react";

// Project card with hover parallax effect
function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    setTransform({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setTransform({ rotateX: 0, rotateY: 0 });
  };

  return (
    <a
      ref={cardRef}
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative bg-zinc-900/50 rounded-2xl overflow-hidden border border-zinc-800 hover:border-yellow-500/50 transition-all duration-300"
      style={{
        transform: `perspective(1000px) rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg)`,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Project image */}
      <div className="aspect-video bg-zinc-800 relative overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center">
          <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm flex items-center gap-2">
            <ExternalLink size={16} />
            View Project
          </span>
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
        <p className="text-zinc-400 mt-2 text-sm leading-relaxed line-clamp-2">
          {project.description}
        </p>
      </div>
    </a>
  );
}

export default function ProjectsSection() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="min-h-screen py-24 px-6 md:px-12 lg:px-24 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-zinc-950/70 to-black/80" />
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
            <ProjectCard key={index} project={project} />
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
                  {/* Thumbnail */}
                  <div className="w-14 h-14 rounded-lg bg-zinc-800 overflow-hidden flex-shrink-0">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
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
