import { Github, Linkedin, Mail, GraduationCap, ArrowUp } from "lucide-react";
import { useScrollReveal } from "./useScrollReveal";
import { useEffect, useState } from "react";

export default function Education() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="education" className="py-24 md:py-32">
      <div className="section-container">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="section-heading text-center">Education</p>

          <div className="max-w-lg mx-auto mt-12">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 flex items-center gap-5 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center shrink-0">
                <GraduationCap size={22} className="text-indigo-600" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Binus Online</h3>
                <p className="text-sm text-slate-500 mt-0.5">
                  Bachelor&apos;s Degree in Computer Science
                </p>
                <p className="text-xs text-slate-400 mt-1">Currently Enrolled</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const cb = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", cb, { passive: true });
    return () => window.removeEventListener("scroll", cb);
  }, []);

  return (
    <>
      <footer className="py-16 border-t border-slate-200">
        <div className="section-container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="text-lg font-bold text-slate-900 tracking-tight">
                Misael Imanuel Soedjak
              </p>
              <p className="text-sm text-slate-400 mt-1">
                Full-Stack Developer &bull; IT Educator
              </p>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://github.com/misoedjak"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl flex items-center justify-center bg-slate-100 text-slate-500 hover:bg-slate-900 hover:text-white transition-all duration-200"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/misael-soedjak-56b057261/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl flex items-center justify-center bg-slate-100 text-slate-500 hover:bg-slate-900 hover:text-white transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:misael.soedjak@gmail.com"
                className="w-10 h-10 rounded-xl flex items-center justify-center bg-slate-100 text-slate-500 hover:bg-slate-900 hover:text-white transition-all duration-200"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          <p className="text-center text-xs text-slate-400 mt-10">
            &copy; {new Date().getFullYear()} Misael Imanuel Soedjak. All rights reserved.
          </p>
        </div>
      </footer>

      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 w-11 h-11 rounded-xl bg-slate-900 text-white shadow-lg hover:bg-slate-800 transition-all active:scale-95 z-50 flex items-center justify-center"
          aria-label="Back to top"
        >
          <ArrowUp size={18} />
        </button>
      )}
    </>
  );
}
