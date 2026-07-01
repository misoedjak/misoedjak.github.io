import { Github, Linkedin, Mail, GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-sm font-mono text-slate-500 tracking-widest uppercase mb-12 text-center">
          Education
        </h2>
        <div className="bg-white rounded-xl p-6 border border-slate-200 flex items-start gap-4">
          <div className="p-3 rounded-lg bg-slate-100 text-slate-600 shrink-0">
            <GraduationCap size={24} />
          </div>
          <div>
            <h3 className="font-semibold text-slate-900">Binus Online</h3>
            <p className="text-slate-500 text-sm mt-1">
              Bachelor's Degree in Computer Science (Currently Enrolled)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-slate-200">
      <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-slate-400">
          &copy; {new Date().getFullYear()} Misael Imanuel Soedjak
        </p>
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/misoedjak"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-slate-700 transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/misael-soedjak-56b057261/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-slate-700 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:misael.soedjak@gmail.com"
            className="text-slate-400 hover:text-slate-700 transition-colors"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
