import { blogContent } from "../../data/content";
import { ExternalLink, BookOpen, Camera } from "lucide-react";

export default function BlogSection() {
  return (
    <section
      id="blog"
      className="min-h-screen py-24 px-6 md:px-12 lg:px-24 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="mb-16">
          <span className="text-yellow-500 text-sm tracking-[0.3em] uppercase mb-4 block">
            Creative Side
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Blog, Thoughts & Arts
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-yellow-300" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Featured Poem */}
          <div className="bg-zinc-900/50 rounded-2xl p-8 border border-zinc-800">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <BookOpen size={20} className="text-yellow-500" />
              Featured Poem
            </h3>
            <blockquote className="border-l-4 border-yellow-600 pl-6 italic">
              {blogContent.featuredPoem.lines.map((line, index) =>
                line === "" ? (
                  <br key={index} />
                ) : (
                  <p key={index} className="text-zinc-300 mb-1">
                    {line}
                  </p>
                )
              )}
            </blockquote>
            <p className="text-right text-zinc-500 mt-4">
              — From "{blogContent.featuredPoem.title}"
            </p>
          </div>

          {/* Articles */}
          <div className="space-y-6">
            {blogContent.articles.map((article, index) => (
              <a
                key={index}
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-zinc-900/30 rounded-2xl p-6 border border-zinc-800 hover:border-yellow-500/50 transition-all"
              >
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-lg font-bold text-white group-hover:text-yellow-400 transition-colors">
                    {article.title}
                  </h4>
                  <ExternalLink
                    size={16}
                    className="text-zinc-600 group-hover:text-yellow-400 transition-colors flex-shrink-0"
                  />
                </div>
                <p className="text-zinc-400 text-sm mb-3">{article.excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-zinc-500">
                  <span>{article.date}</span>
                  <span>{article.readTime} min read</span>
                </div>
              </a>
            ))}

            {/* Photography Link */}
            <a
              href={blogContent.photography.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-zinc-900/30 rounded-2xl p-6 border border-zinc-800 hover:border-yellow-500/50 transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <Camera size={20} className="text-yellow-500" />
                <h4 className="text-lg font-bold text-white group-hover:text-yellow-400 transition-colors">
                  Photography
                </h4>
                <ExternalLink
                  size={16}
                  className="text-zinc-600 group-hover:text-yellow-400 transition-colors ml-auto"
                />
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {blogContent.photography.description}
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
