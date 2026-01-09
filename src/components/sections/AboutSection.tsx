import { aboutContent, education } from "../../data/content";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen py-24 px-6 md:px-12 lg:px-24 relative"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <span className="text-orange-500 text-sm tracking-[0.3em] uppercase mb-4 block">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            My Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-300" />
        </div>

        {/* Intro */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <p className="text-lg text-zinc-300 leading-relaxed">
              {aboutContent.intro}
            </p>
            <p className="text-lg text-zinc-300 leading-relaxed">
              {aboutContent.journey}
            </p>
          </div>
          <div className="relative">
            <div className="aspect-auto bg-none rounded-2xl border border-none">
              <div className="w-full h-full md:h-auto rounded-lg flex items-center justify-center text-zinc-700">
                <img
                  src="/projects/early-days.jpg"
                  aria-description="Me!"
                  style={{ objectFit: "contain", maxWidth: "75%" }}
                />
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-orange-500/20 rounded-full blur-2xl" />
          </div>
        </div>

        {/* AFPI Background */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-white mb-6">
            {aboutContent.afpiBackground.title}
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="col-span-2 md:cols-span-1">
              <img
                src="/projects/AFPI.jpg"
                aria-description="Me!"
                style={{ objectFit: "contain", maxWidth: "768px" }}
              />
            </div>
            <div className="md:col-span-2 space-y-4">
              <p className="text-zinc-400 leading-relaxed">
                {aboutContent.afpiBackground.description}
              </p>
              <p className="text-zinc-400 leading-relaxed">
                {aboutContent.afpiBackground.extended}
              </p>
              <a
                href={aboutContent.afpiBackground.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-orange-400 hover:text-orange-300 transition-colors"
              >
                Learn more about AFPI →
              </a>
            </div>
          </div>
        </div>

        {/* Canada Journey */}
        <div className="mb-20">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-4 md:order-1 order-2">
              <h3 className="text-2xl font-bold text-white">
                {aboutContent.canadaJourney.title}
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                {aboutContent.canadaJourney.description}
              </p>
              <p className="text-zinc-400 leading-relaxed">
                {aboutContent.canadaJourney.extended}
              </p>
            </div>
            <div className="md:col-span-1 md:order-2 order-1">
              <div className="aspect-square bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800">
                <div className="w-full h-full flex items-center justify-center text-zinc-700">
                  <span className="text-sm">Journey GIF</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="bg-zinc-900/50 rounded-2xl p-8 md:p-12 border border-zinc-800">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-24 h-24 flex-shrink-0 bg-zinc-800 rounded-xl flex items-center justify-center">
              <span className="text-zinc-600 text-xs">NAIT Logo</span>
            </div>
            <div className="flex-1">
              <a
                href={education.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl font-bold text-white hover:text-blue-400 transition-colors"
              >
                {education.program}
              </a>
              <p className="text-zinc-500 mt-1">
                {education.institution} | {education.period}
              </p>
              <ul className="mt-4 space-y-2">
                {education.achievements.map((achievement, index) => (
                  <li
                    key={index}
                    className="text-zinc-400 flex items-start gap-3"
                  >
                    <span className="text-orange-500 mt-1">•</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Current work note */}
        <div className="mt-16 text-center">
          <p className="text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            {aboutContent.currentWork}
          </p>
          <p className="text-zinc-500 mt-4">{aboutContent.languages}</p>
        </div>
      </div>
    </section>
  );
}
