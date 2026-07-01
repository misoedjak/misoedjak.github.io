import { ExternalLink } from "lucide-react";
import { useScrollReveal } from "./useScrollReveal";

const projects = [
  {
    title: "CAB Bookstore",
    desc: "E-commerce platform for parents to purchase yearly school books with Midtrans payment gateway integration.",
    url: "https://store.citraanakbangsa.com",
    stack: ["React 18", "TypeScript", "Vite", "Tailwind", "FastAPI", "Python", "SQLAlchemy"],
  },
  {
    title: "E-Rapor System",
    desc: "Secure grading portal enabling teachers to input student data and auto-generate report cards. 100% staff adoption.",
    url: "https://eraport.citraanakbangsa.com",
    stack: ["React 18", "TypeScript", "Vite", "Tailwind", "Flask", "Python", "SQLAlchemy"],
  },
  {
    title: "Main School Website",
    desc: "Primary landing page and digital storefront for Sekolah Citra Anak Bangsa, actively maintained.",
    url: "https://citraanakbangsa.com",
    stack: ["WordPress", "HTML", "CSS", "JavaScript"],
  },
];

export default function Projects() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="section-container">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="section-heading text-center">Projects</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {projects.map((p, i) => (
              <a
                key={p.title}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white rounded-2xl border border-slate-200 p-6 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-100/30 transition-all duration-300"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {p.title}
                  </h3>
                  <ExternalLink
                    size={16}
                    className="text-slate-300 group-hover:text-indigo-400 transition-colors shrink-0"
                  />
                </div>
                <p className="text-sm text-slate-500 leading-relaxed mb-5">
                  {p.desc}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {p.stack.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded-md text-[11px] font-mono font-medium bg-slate-100 text-slate-500 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
