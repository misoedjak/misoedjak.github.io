import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "CAB Bookstore",
    url: "https://store.citraanakbangsa.com",
    description:
      "A comprehensive e-commerce platform enabling parents to purchase yearly school books and pay online via the Midtrans payment gateway.",
    stack: ["React 18", "TypeScript", "Vite", "Tailwind CSS", "FastAPI", "Python", "SQLAlchemy", "PyMySQL"],
  },
  {
    title: "E-Rapor System",
    url: "https://eraport.citraanakbangsa.com",
    description:
      "A secure grading portal for teachers to input student data and automatically generate report cards, achieving 100% adoption among staff.",
    stack: ["React 18", "TypeScript", "Vite", "Tailwind CSS", "Flask", "Python", "SQLAlchemy", "PyMySQL"],
  },
  {
    title: "Main School Website",
    url: "https://citraanakbangsa.com",
    description:
      "The primary landing page and digital storefront for the institution, built and actively maintained.",
    stack: ["WordPress", "HTML", "CSS", "JavaScript"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-sm font-mono text-slate-500 tracking-widest uppercase mb-12 text-center">
          Technical Projects
        </h2>
        <div className="space-y-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white rounded-xl p-8 border border-slate-200 hover:border-slate-400 hover:shadow-md transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                <h3 className="text-xl font-semibold text-slate-900">
                  {project.title}
                </h3>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-900 transition-colors"
                >
                  <ExternalLink size={14} />
                  {new URL(project.url).hostname}
                </a>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 text-xs font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
