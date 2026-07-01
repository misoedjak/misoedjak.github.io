import { useScrollReveal } from "./useScrollReveal";

const experiences = [
  {
    company: "Sekolah Citra Anak Bangsa",
    role: "Full-Stack Developer",
    period: "2023 – Present",
    desc: "Developed and deployed multiple core enterprise applications to streamline school operations, improve data accuracy, and save administrative time.",
  },
  {
    company: "Nova Academy",
    role: "Founder & Tutor",
    period: "2026 – Present",
    points: [
      "Founded an educational startup specializing in Discrete Math, enrolling 12 active students.",
      "Drove a 120% increase in student inquiries through targeted social media marketing.",
    ],
  },
  {
    company: "Sekolah Citra Anak Bangsa",
    role: "Informatics Teacher & School Operator",
    period: "Present",
    points: [
      "Designed and teach an informatics curriculum centered on computational thinking and game development using Scratch and Python.",
      "Mentored 7 teachers into the government's PPG certification program, securing their monthly stipends.",
    ],
  },
];

export default function Experience() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="experience" className="py-24 md:py-32 bg-slate-50">
      <div className="section-container">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="section-heading text-center">Experience</p>

          <div className="max-w-2xl mx-auto mt-12 space-y-1">
            {experiences.map((exp, i) => (
              <div
                key={exp.company + i}
                className="relative pl-8 pb-10 last:pb-0 group"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-indigo-500 ring-4 ring-indigo-100 group-hover:ring-indigo-200 transition-all" />

                {i < experiences.length - 1 && (
                  <div className="absolute left-[5px] top-5 bottom-0 w-0.5 bg-slate-200" />
                )}

                <div className="bg-white rounded-xl border border-slate-200 p-5 hover:shadow-md transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                    <h3 className="font-semibold text-slate-900">{exp.role}</h3>
                    <span className="text-xs font-mono text-slate-400 shrink-0">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-sm text-indigo-600 font-medium mb-2">
                    {exp.company}
                  </p>
                  {exp.desc && (
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {exp.desc}
                    </p>
                  )}
                  {exp.points && (
                    <ul className="space-y-1.5 mt-2">
                      {exp.points.map((p, j) => (
                        <li
                          key={j}
                          className="text-sm text-slate-500 flex gap-2"
                        >
                          <span className="text-indigo-300 shrink-0">&bull;</span>
                          {p}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
