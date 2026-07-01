import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl" />

      <div className="section-container relative py-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-medium mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
            Available for opportunities
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 text-balance">
            Misael Imanuel{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              Soedjak
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-500 max-w-xl leading-relaxed mb-10">
            Full-Stack Developer, IT Educator, and Tech Entrepreneur building
            production-ready applications that solve real-world problems in
            education and beyond.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition-all text-sm font-semibold shadow-lg shadow-slate-900/10 hover:shadow-xl hover:shadow-slate-900/20 active:scale-95"
            >
              View my work
              <ArrowRight size={16} />
            </a>
            <a
              href="https://github.com/misoedjak"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-200 text-slate-600 hover:border-slate-400 hover:text-slate-900 transition-all text-sm font-medium bg-white/80 backdrop-blur-sm active:scale-95"
            >
              <Github size={16} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/misael-soedjak-56b057261/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-200 text-slate-600 hover:border-slate-400 hover:text-slate-900 transition-all text-sm font-medium bg-white/80 backdrop-blur-sm active:scale-95"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
            <a
              href="mailto:misael.soedjak@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-200 text-slate-600 hover:border-slate-400 hover:text-slate-900 transition-all text-sm font-medium bg-white/80 backdrop-blur-sm active:scale-95"
            >
              <Mail size={16} />
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
