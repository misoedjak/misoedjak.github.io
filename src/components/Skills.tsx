import { useScrollReveal } from "./useScrollReveal";

const categories = [
  {
    title: "Frontend",
    color: "text-blue-600 bg-blue-50",
    skills: [
      "React 18",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "TanStack Query",
      "Recharts",
      "HTML5",
    ],
  },
  {
    title: "Backend",
    color: "text-emerald-600 bg-emerald-50",
    skills: [
      "Python",
      "FastAPI",
      "Flask",
      "SQLAlchemy",
      "PyMySQL",
      "PyJWT",
      "bcrypt",
      "gunicorn",
    ],
  },
  {
    title: "Languages",
    color: "text-amber-600 bg-amber-50",
    skills: ["Python", "Java", "C", "TypeScript", "JavaScript"],
  },
  {
    title: "Tools",
    color: "text-purple-600 bg-purple-50",
    skills: ["Midtrans API", "WordPress", "Git", "Docker", "Redis"],
  },
  {
    title: "Soft Skills",
    color: "text-rose-600 bg-rose-50",
    skills: [
      "Curriculum Design",
      "Leadership",
      "Problem Solving",
      "Marketing",
    ],
  },
];

export default function Skills() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="skills" className="py-24 md:py-32 bg-slate-50">
      <div className="section-container">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="section-heading text-center">Technical Skills</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
            {categories.map((cat, i) => (
              <div
                key={cat.title}
                className="group bg-white rounded-2xl p-6 border border-slate-200 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <span
                  className={`inline-block px-3 py-1 rounded-lg text-xs font-semibold ${cat.color} mb-4`}
                >
                  {cat.title}
                </span>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((s) => (
                    <span
                      key={s}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-600 group-hover:bg-slate-200/80 transition-colors"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
