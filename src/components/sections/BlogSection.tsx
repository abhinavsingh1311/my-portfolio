import { useState, useEffect } from "react";
import { blogContent, imagePaths } from "../../data/content";
import { ExternalLink, BookOpen, Camera, Terminal } from "lucide-react";

export default function BlogSection() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  // Typewriter effect for poem
  useEffect(() => {
    const totalLines = blogContent.featuredPoem.lines.length;

    const startTyping = () => {
      setIsTyping(true);
      let currentLine = 0;

      const interval = setInterval(() => {
        currentLine++;
        setVisibleLines(currentLine);

        if (currentLine >= totalLines) {
          clearInterval(interval);
          setIsTyping(false);
        }
      }, 300);

      return () => clearInterval(interval);
    };

    // Start after a delay
    const timeout = setTimeout(startTyping, 500);
    return () => clearTimeout(timeout);
  }, []);

  const restartPoem = () => {
    setVisibleLines(0);
    setIsTyping(true);

    let currentLine = 0;
    const interval = setInterval(() => {
      currentLine++;
      setVisibleLines(currentLine);

      if (currentLine >= blogContent.featuredPoem.lines.length) {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, 300);
  };

  return (
    <section
      id="blog"
      className="min-h-screen py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden"
    >
      {/* Background */}
      {/* Background image */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url('${imagePaths.bg4}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />
      <div className="absolute inset-0 cyber-grid opacity-10" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent" />

      {/* Decorative elements */}
      <div
        className="absolute top-1/4 right-10 w-64 h-64 rounded-full blur-[120px] opacity-70"
        style={{ background: "var(--neon-purple)" }}
      />

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
            [ CREATIVE.OUTPUT ]
          </span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: "Orbitron" }}
          >
            Beyond Code
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-yellow-300" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Terminal-style Poem */}
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              background: "rgba(10, 10, 20, 0.9)",
              border: "1px solid rgba(252, 238, 9, 0.2)",
            }}
          >
            {/* Terminal header */}
            <div
              className="flex items-center gap-3 px-4 py-3"
              style={{
                background: "rgba(0, 0, 0, 0.5)",
                borderBottom: "1px solid rgba(252, 238, 9, 0.1)",
              }}
            >
              <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span
                className="text-xs flex items-center gap-2"
                style={{
                  color: "var(--text-muted)",
                  fontFamily: "JetBrains Mono",
                }}
              >
                <Terminal size={12} />
                poem.exe
              </span>
              <button
                onClick={restartPoem}
                className="ml-auto text-xs px-2 py-1 rounded hover:bg-white/10 transition-colors"
                style={{
                  color: "var(--neon-cyan)",
                  fontFamily: "JetBrains Mono",
                }}
              >
                [REPLAY]
              </button>
            </div>

            {/* Poem content */}
            <div className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen size={18} style={{ color: "var(--neon-yellow)" }} />
                <h3
                  className="text-lg font-semibold"
                  style={{
                    color: "var(--neon-yellow)",
                    fontFamily: "Orbitron",
                  }}
                >
                  "{blogContent.featuredPoem.title}"
                </h3>
              </div>

              <div
                className="pl-4 min-h-[200px]"
                style={{ borderLeft: "2px solid var(--neon-yellow)" }}
              >
                {blogContent.featuredPoem.lines.map((line, index) => {
                  const isVisible = index < visibleLines;

                  if (line === "") {
                    return <br key={index} />;
                  }

                  return (
                    <p
                      key={index}
                      className="mb-1 transition-all duration-300"
                      style={{
                        color: isVisible
                          ? "var(--text-secondary)"
                          : "transparent",
                        fontStyle: "italic",
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible
                          ? "translateX(0)"
                          : "translateX(-10px)",
                      }}
                    >
                      {line}
                    </p>
                  );
                })}

                {/* Cursor */}
                {isTyping && (
                  <span
                    className="inline-block w-2 h-4 animate-pulse"
                    style={{ background: "var(--neon-yellow)" }}
                  />
                )}
              </div>

              <p
                className="text-right mt-4 text-sm"
                style={{
                  color: "var(--text-muted)",
                  opacity:
                    visibleLines >= blogContent.featuredPoem.lines.length
                      ? 1
                      : 0,
                  transition: "opacity 0.5s",
                }}
              >
                — From the `Farewell`
              </p>
            </div>
          </div>

          {/* Links section */}
          <div className="space-y-6">
            {/* Articles */}
            {blogContent.articles.map((article, index) => (
              <a
                key={index}
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl p-6 transition-all duration-300 hover:translate-x-2"
                style={{
                  background: "rgba(24, 24, 40)",
                  border: "1px solid rgba(63, 63, 70, 0.5)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(252, 238, 9, 0.5)";
                  e.currentTarget.style.boxShadow =
                    "0 0 20px rgba(252, 238, 9, 0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(63, 63, 70, 0.5)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-2">
                    <span
                      className="text-xs px-2 py-0.5 rounded"
                      style={{
                        background: "rgba(252, 238, 9, 0.1)",
                        color: "var(--neon-yellow)",
                        fontFamily: "JetBrains Mono",
                      }}
                    >
                      BLOG
                    </span>
                    <h4
                      className="text-lg font-bold text-white group-hover:text-yellow-400 transition-colors"
                      style={{ fontFamily: "Orbitron" }}
                    >
                      {article.title}
                    </h4>
                  </div>
                  <ExternalLink
                    size={16}
                    className="text-zinc-600 group-hover:text-yellow-400 transition-colors flex-shrink-0"
                  />
                </div>
                <p style={{ color: "var(--text-muted)" }} className="text-sm">
                  {article.excerpt}
                </p>
                <div
                  className="flex items-center gap-4 mt-3 text-xs"
                  style={{
                    color: "var(--text-muted)",
                    fontFamily: "JetBrains Mono",
                  }}
                >
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.readTime} MIN READ</span>
                </div>
              </a>
            ))}

            {/* Photography */}
            <a
              href={blogContent.photography.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl p-6 transition-all duration-300 hover:translate-x-2"
              style={{
                background: "rgba(24, 24, 40)",
                border: "1px solid rgba(63, 63, 70, 0.5)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(255, 46, 159, 0.5)";
                e.currentTarget.style.boxShadow =
                  "0 0 20px rgba(255, 46, 159, 0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(63, 63, 70, 0.5)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <Camera size={20} style={{ color: "var(--neon-pink)" }} />
                <span
                  className="text-xs px-2 py-0.5 rounded"
                  style={{
                    background: "rgba(255, 46, 159, 0.1)",
                    color: "var(--neon-pink)",
                    fontFamily: "JetBrains Mono",
                  }}
                >
                  VSCO
                </span>
                <h4
                  className="text-lg font-bold text-white group-hover:text-pink-400 transition-colors"
                  style={{ fontFamily: "Orbitron" }}
                >
                  Photography
                </h4>
                <ExternalLink
                  size={16}
                  className="text-zinc-600 group-hover:text-pink-400 transition-colors ml-auto"
                />
              </div>
              <p style={{ color: "var(--text-muted)" }} className="text-sm">
                {blogContent.photography.description}
              </p>
            </a>

            {/* Stats or additional info */}
            <div
              className="grid grid-cols-2 gap-4 mt-8 text-center"
              style={{ fontFamily: "JetBrains Mono" }}
            >
              {[
                { label: "POSTS", value: "15+" },
                { label: "POEMS", value: "10+" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl"
                  style={{
                    background: "rgba(24, 24, 40, 0.9)",
                    border: "1px solid rgba(63, 63, 70, 0.3)",
                  }}
                >
                  <div
                    className="text-2xl font-bold"
                    style={{ color: "var(--neon-cyan)" }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-xs mt-1"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
