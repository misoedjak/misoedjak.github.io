import { useScrollReveal } from "./useScrollReveal";

export default function About() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="section-container">
        <div
          ref={ref}
          className={`max-w-3xl mx-auto text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="section-heading text-center">About Me</p>
          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed text-balance">
            I am a Computer Science student and Full-Stack Developer with a
            strong track record of building production-ready applications that
            solve real-world problems. Balancing my studies with my role as an
            IT educator and school operator, I&apos;m passionate about
            leveraging technology to improve educational infrastructure.
          </p>
          <p className="text-base text-slate-400 mt-6 leading-relaxed max-w-2xl mx-auto text-balance">
            From building integrated e-commerce and grading systems to founding
            a math tutoring startup, I specialize in end-to-end development,
            computational thinking, and creating accessible digital solutions.
          </p>
        </div>
      </div>
    </section>
  );
}
