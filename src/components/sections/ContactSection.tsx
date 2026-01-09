import { contacts, personalInfo } from "../../data/content";
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  FileText,
  Download,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  email: <Mail size={20} />,
  phone: <Phone size={20} />,
  github: <Github size={20} />,
  linkedin: <Linkedin size={20} />,
};

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="min-h-screen py-24 px-6 md:px-12 lg:px-24 relative flex items-center"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto w-full">
        <div className="text-center mb-16">
          <span className="text-amber-500 text-sm tracking-[0.3em] uppercase mb-4 block">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-300 mx-auto" />
          <p className="text-zinc-400 mt-8 max-w-lg mx-auto">
            I'm always open to discussing new opportunities, interesting
            projects, or just having a chat about technology.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-4 mb-12">
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.href}
              target={
                contact.type === "email" || contact.type === "phone"
                  ? "_self"
                  : "_blank"
              }
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-5 bg-zinc-900/50 rounded-xl border border-zinc-800 hover:border-amber-500/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-amber-500 group-hover:bg-amber-500/10 transition-all">
                {iconMap[contact.type]}
              </div>
              <div>
                <p className="text-zinc-500 text-sm">{contact.label}</p>
                <p className="text-white font-medium group-hover:text-amber-400 transition-colors">
                  {contact.value}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Resume CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={personalInfo.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-zinc-200 transition-colors"
          >
            <FileText size={20} />
            View Resume
          </a>
          <a
            href={personalInfo.resumePath}
            download="AbhinavSingh_Resume.pdf"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-zinc-700 text-white font-medium rounded-full hover:bg-zinc-900 transition-colors"
          >
            <Download size={20} />
            Download Resume
          </a>
        </div>

        {/* Footer note */}
        <p className="text-center text-zinc-600 text-sm mt-16">
          © {new Date().getFullYear()} Abhinav Singh. Built with React &
          Tailwind.
        </p>
      </div>
    </section>
  );
}
