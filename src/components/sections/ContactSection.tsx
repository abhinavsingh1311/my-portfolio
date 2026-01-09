import { useState } from "react";
import { contacts, personalInfo } from "../../data/content";
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  FileText,
  Download,
  Copy,
  Check,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  email: <Mail size={20} />,
  phone: <Phone size={20} />,
  github: <Github size={20} />,
  linkedin: <Linkedin size={20} />,
};

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = async (e: React.MouseEvent, email: string) => {
    e.preventDefault();
    await navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section
      id="contact"
      className="min-h-screen py-24 px-6 md:px-12 lg:px-24 relative flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-zinc-950/70 to-black/80" />
      <div className="absolute inset-0 cyber-grid opacity-10" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />

      {/* Decorative glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[150px] opacity-20"
        style={{ background: "var(--neon-green)" }}
      />

      <div className="relative z-10 max-w-4xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="text-sm tracking-[0.3em] uppercase mb-4 block"
            style={{ color: "var(--neon-green)", fontFamily: "JetBrains Mono" }}
          >
            [ ESTABLISH.CONNECTION ]
          </span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: "Orbitron" }}
          >
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-300 mx-auto" />
          <p
            className="mt-8 max-w-lg mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            Open to discussing new opportunities, interesting projects, or just
            having a chat about technology.
          </p>

          {/* Status indicator */}
          <div
            className="inline-flex items-center gap-2 mt-6 px-4 py-2 rounded-full text-xs"
            style={{
              background: "rgba(0, 255, 179, 0.1)",
              border: "1px solid rgba(0, 255, 179, 0.3)",
              color: "var(--neon-green)",
              fontFamily: "JetBrains Mono",
            }}
          >
            <span className="relative flex h-2 w-2">
              <span
                className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                style={{ background: "var(--neon-green)" }}
              />
              <span
                className="relative inline-flex rounded-full h-2 w-2"
                style={{ background: "var(--neon-green)" }}
              />
            </span>
            AVAILABLE FOR OPPORTUNITIES
          </div>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-4 mb-12">
          {contacts.map((contact, index) => {
            const isEmail = contact.type === "email";

            return (
              <a
                key={index}
                href={contact.href}
                target={
                  isEmail || contact.type === "phone" ? "_self" : "_blank"
                }
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-5 rounded-xl transition-all duration-300"
                style={{
                  background: "rgba(24, 24, 40, 0.5)",
                  border: "1px solid rgba(63, 63, 70, 0.5)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(251, 191, 36, 0.5)";
                  e.currentTarget.style.boxShadow =
                    "0 0 20px rgba(251, 191, 36, 0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(63, 63, 70, 0.5)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: "rgba(251, 191, 36, 0.1)",
                    color: "var(--text-muted)",
                  }}
                >
                  <span className="group-hover:text-amber-400 transition-colors">
                    {iconMap[contact.type]}
                  </span>
                </div>
                <div className="flex-1">
                  <p
                    className="text-xs uppercase tracking-wider"
                    style={{
                      color: "var(--text-muted)",
                      fontFamily: "JetBrains Mono",
                    }}
                  >
                    {contact.label}
                  </p>
                  <p
                    className="font-medium group-hover:text-amber-400 transition-colors"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {contact.value}
                  </p>
                </div>

                {/* Copy button for email */}
                {isEmail && (
                  <button
                    onClick={(e) => handleCopyEmail(e, contact.value)}
                    className="p-2 rounded-lg transition-all hover:bg-white/10"
                    title="Copy email"
                  >
                    {copiedEmail ? (
                      <Check size={16} style={{ color: "var(--neon-green)" }} />
                    ) : (
                      <Copy size={16} style={{ color: "var(--text-muted)" }} />
                    )}
                  </button>
                )}
              </a>
            );
          })}
        </div>

        {/* Resume CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={personalInfo.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 font-medium rounded-full transition-all duration-300"
            style={{
              background: "white",
              color: "black",
              fontFamily: "Orbitron",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow =
                "0 0 30px rgba(255, 255, 255, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <FileText size={20} />
            View Resume
          </a>
          <a
            href={personalInfo.resumePath}
            download="AbhinavSingh_Resume.pdf"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 font-medium rounded-full transition-all duration-300"
            style={{
              border: "1px solid var(--neon-cyan)",
              color: "var(--neon-cyan)",
              fontFamily: "Orbitron",
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
            <Download size={20} />
            Download
          </a>
        </div>

        {/* Footer */}
        <div
          className="mt-16 text-center text-sm"
          style={{ color: "var(--neon-pink)", fontFamily: "JetBrains Mono" }}
        >
          <p> &copy;{new Date().getFullYear()} ABHINAV.SINGH</p>
          <p className="mt-1 opacity-50">BUILT WITH REACT • GSAP • TAILWIND</p>
        </div>
      </div>
    </section>
  );
}
