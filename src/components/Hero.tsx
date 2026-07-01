import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative">
      <div className="max-w-3xl">
        <p className="text-sm font-mono text-slate-500 tracking-widest uppercase mb-4">
          Full-Stack Developer · IT Educator · Tech Entrepreneur
        </p>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6">
          Misael Imanuel
          <span className="block text-slate-500">Soedjak</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Building production-ready applications that solve real-world problems
          in education and beyond.
        </p>

        <div className="flex items-center justify-center gap-4 mt-10">
          <a
            href="https://github.com/misoedjak"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-slate-900 text-white hover:bg-slate-800 transition-colors text-sm font-medium"
          >
            <Github size={18} />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/misael-soedjak-56b057261/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-slate-300 text-slate-700 hover:border-slate-900 hover:text-slate-900 transition-colors text-sm font-medium"
          >
            <Linkedin size={18} />
            LinkedIn
          </a>
          <a
            href="mailto:misael.soedjak@gmail.com"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-slate-300 text-slate-700 hover:border-slate-900 hover:text-slate-900 transition-colors text-sm font-medium"
          >
            <Mail size={18} />
            Email
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-10 animate-bounce text-slate-400 hover:text-slate-600 transition-colors"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
}
