import { imagePaths, projects } from "../../data/content";
import { ExternalLink, Github, Folder } from "lucide-react";
import { useRef, useState } from "react";

// Project card with hover parallax effect
function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0 });
  const [isHovered, setIsHovered] = useState(false);

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
    setIsHovered(false);
  };

  return (
    <a
      ref={cardRef}
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative rounded-2xl overflow-hidden transition-all duration-300"
      style={{
        transform: `perspective(1000px) rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg)`,
        transformStyle: "preserve-3d",
        background: "rgba(24, 24, 40, 0.5)",
        border: isHovered
          ? "1px solid rgba(252, 238, 9, 0.5)"
          : "1px solid rgba(63, 63, 70, 0.5)",
        boxShadow: isHovered ? "0 0 30px rgba(252, 238, 9, 0.15)" : "none",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* Project index badge */}
      <div
        className="absolute top-4 left-4 z-30 px-2 py-1 rounded text-xs"
        style={{
          background: "rgba(5, 8, 22, 0.9)",
          color: "var(--neon-cyan)",
          fontFamily: "JetBrains Mono",
          border: "1px solid rgba(0, 246, 255, 0.3)",
        }}
      >
        PRJ_{String(index + 1).padStart(2, "0")}
      </div>

      {/* Featured badge */}
      {project.featured && (
        <div
          className="absolute top-4 right-4 z-30 px-2 py-1 rounded text-xs"
          style={{
            background: "rgba(252, 238, 9, 0.2)",
            color: "var(--neon-yellow)",
            fontFamily: "JetBrains Mono",
            border: "1px solid rgba(252, 238, 9, 0.4)",
          }}
        >
          FEATURED
        </div>
      )}

      {/* Project image */}
      <div className="aspect-video bg-zinc-800 relative overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />

        {/* Scan lines on hover */}
        {isHovered && (
          <div
            className="absolute inset-0 z-20 pointer-events-none"
            style={{
              background:
                "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(252, 238, 9, 0.03) 2px, rgba(252, 238, 9, 0.03) 4px)",
            }}
          />
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center">
          <span
            className="px-4 py-2 rounded-full text-sm flex items-center gap-2"
            style={{
              background: "rgba(5, 8, 22, 0.9)",
              color: "var(--neon-cyan)",
              border: "1px solid var(--neon-cyan)",
            }}
          >
            <ExternalLink size={16} />
            LAUNCH
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3
          className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors flex items-center gap-2"
          style={{ fontFamily: "Orbitron" }}
        >
          {project.title}
          <ExternalLink
            size={16}
            className="opacity-0 group-hover:opacity-100 transition-opacity"
          />
        </h3>
        <p className="text-zinc-400 mt-2 text-sm leading-relaxed line-clamp-2">
          {project.description}
        </p>

        {/* Tech stack indicator */}
        <div
          className="mt-4 pt-3 flex items-center gap-2 text-xs"
          style={{
            borderTop: "1px solid rgba(63, 63, 70, 0.3)",
            color: "var(--text-muted)",
            fontFamily: "JetBrains Mono",
          }}
        >
          <Folder size={12} style={{ color: "var(--neon-yellow)" }} />
          <span>{project.stack}</span>
        </div>
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
      className="min-h-screen py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden"
    >
      <div
        className="absolute inset-0 w-full h-full bg-center bg-cover md:bg-fixed"
        style={{
          backgroundImage: `url(${imagePaths.bg4})`,
          //   backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-zinc-950/70 to-black/80" />
      <div className="absolute inset-0 cyber-grid opacity-10" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <span
            className="text-sm tracking-[0.3em] uppercase mb-4 block"
            style={{
              color: "var(--neon-yellow)",
              fontFamily: "JetBrains Mono",
            }}
          >
            [ PROJECT.DATABASE ]
          </span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: "Orbitron" }}
          >
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-yellow-300" />
        </div>

        {/* Featured Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div className="mt-16">
            <h3
              className="text-lg mb-6 flex items-center gap-2"
              style={{ color: "var(--text-muted)", fontFamily: "Orbitron" }}
            >
              <span style={{ color: "var(--neon-cyan)" }}>▸</span>
              More Projects
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {otherProjects.map((project, index) => (
                <a
                  key={index}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 rounded-xl transition-all duration-300"
                  style={{
                    background: "rgba(24, 24, 40, 0.5)",
                    border: "1px solid rgba(63, 63, 70, 0.5)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor =
                      "rgba(0, 246, 255, 0.5)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(63, 63, 70, 0.5)";
                  }}
                >
                  {/* Thumbnail */}
                  <div
                    className="w-14 h-14 rounded-lg overflow-hidden flex-shrink-0"
                    style={{ border: "1px solid rgba(63, 63, 70, 0.5)" }}
                  >
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4
                      className="font-medium truncate group-hover:text-cyan-400 transition-colors"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {project.title}
                    </h4>
                    <p
                      className="text-sm truncate"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {project.description}
                    </p>
                  </div>
                  <ExternalLink
                    size={16}
                    className="flex-shrink-0 transition-colors"
                    style={{ color: "var(--text-muted)" }}
                  />
                </a>
              ))}
            </div>
          </div>
        )}

        {/* GitHub link */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/abhinavsingh1311"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300"
            style={{
              border: "1px solid var(--neon-cyan)",
              color: "var(--neon-cyan)",
              fontFamily: "Orbitron",
              fontSize: "0.875rem",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(0, 246, 255, 0.1)";
              e.currentTarget.style.boxShadow =
                "0 0 20px rgba(0, 246, 255, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <Github size={18} />
            VIEW ALL ON GITHUB
          </a>
        </div>
      </div>
    </section>
  );
}
