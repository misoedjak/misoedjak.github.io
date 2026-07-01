const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      "React 18",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "TanStack React Query",
      "Recharts",
      "HTML",
    ],
  },
  {
    title: "Backend Development",
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
    skills: ["Python", "Java", "C", "TypeScript", "JavaScript"],
  },
  {
    title: "Tools & Integrations",
    skills: ["Midtrans Payment Gateway", "WordPress", "Git"],
  },
  {
    title: "Soft Skills",
    skills: [
      "Curriculum Development",
      "Educational Leadership",
      "Problem Solving",
      "Marketing Strategy",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-sm font-mono text-slate-500 tracking-widest uppercase mb-12 text-center">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="bg-white rounded-xl p-6 border border-slate-200 hover:border-slate-300 hover:shadow-sm transition-all"
            >
              <h3 className="font-semibold text-slate-900 mb-4">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-sm font-medium"
                  >
                    {skill}
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
