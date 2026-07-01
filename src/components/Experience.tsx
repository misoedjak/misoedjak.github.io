const experiences = [
  {
    company: "Sekolah Citra Anak Bangsa (CAB)",
    title: "Full-Stack Developer",
    period: "2023 – Present",
    description:
      "Developed and deployed multiple core enterprise applications to streamline school operations, improve data accuracy, and save administrative time.",
  },
  {
    company: "Nova Academy",
    title: "Founder & Tutor",
    period: "Early 2026 – Present",
    highlights: [
      "Founded and launched an educational startup specializing in Discrete Math, successfully enrolling 12 active students.",
      "Designed and executed targeted social media marketing campaigns, resulting in a 120% increase in student inquiries.",
    ],
  },
  {
    company: "Sekolah Citra Anak Bangsa",
    title: "Informatics Teacher & School Operator",
    period: "Present",
    highlights: [
      "Design and teach an informatics curriculum centered on computational thinking to help students solve complex problems critically.",
      "Instruct students in internet fundamentals, hardware/software basics, and game development using Scratch and Python compilers.",
      "Manage essential educational data through the government's Dapodik system. Successfully mentored and assisted 7 teachers in getting accepted into the government's PPG (Pendidikan Profesi Guru) program, securing their monthly government stipends.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-slate-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-sm font-mono text-slate-500 tracking-widest uppercase mb-12 text-center">
          Professional Experience
        </h2>
        <div className="space-y-10">
          {experiences.map((exp) => (
            <div
              key={exp.company}
              className="bg-white rounded-xl p-6 border border-slate-200"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-2">
                <h3 className="font-semibold text-slate-900">{exp.title}</h3>
                <span className="text-sm text-slate-400 font-mono">
                  {exp.period}
                </span>
              </div>
              <p className="text-sm text-slate-500 font-medium mb-3">
                {exp.company}
              </p>
              {exp.description && (
                <p className="text-slate-600 leading-relaxed text-sm">
                  {exp.description}
                </p>
              )}
              {exp.highlights && (
                <ul className="space-y-2 mt-3">
                  {exp.highlights.map((h, i) => (
                    <li
                      key={i}
                      className="text-slate-600 text-sm leading-relaxed flex gap-2"
                    >
                      <span className="text-slate-400 mt-1 shrink-0">&#x2022;</span>
                      {h}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
