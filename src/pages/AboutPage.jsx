import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal.jsx';
import RollingButton from '../components/RollingButton.jsx';
import { education, experience, personalInfo, technologies } from '../data/portfolio.js';

export function AboutPage() {
  return (
    <div className="flex flex-col bg-white dark:bg-[#0c0c0c] overflow-hidden transition-colors duration-200">
        <section className="w-full pt-32 pb-20 lg:px-10 md:px-8 px-5">
          <div className="max-w-[1400px] mx-auto flex flex-col items-center text-center">
            <Reveal
              as="h1"
              y={24}
              className="text-[60px] md:text-[100px] lg:text-[140px] font-black uppercase tracking-tighter leading-[0.85] mb-12 text-[#171717] dark:text-white"
            >
              I&apos;M Kehinde <br /> Salimonu
            </Reveal>

            <Reveal
              y={0}
              scale={0.95}
              duration={1}
              className="relative w-full max-w-[600px] aspect-[4/5] bg-gray-100 dark:bg-[#1a1a1a] mb-12 overflow-hidden shadow-2xl"
            >
              <img
                src={personalInfo.portrait}
                alt={personalInfo.name}
                className="w-full h-full object-cover grayscale contrast-125 brightness-105 hover:grayscale-0 hover:scale-105 transition-all duration-700"
              />
            </Reveal>

            <Reveal y={20} delay={0.1} className="max-w-[500px]">
              <p className="text-[14px] md:text-[16px] text-[#171717]/60 dark:text-white/70 font-medium leading-relaxed mb-8">
                I&apos;m Kehinde Salimonu, a fullstack software engineer focused on building reliable digital products across backend systems and frontend experiences. I care about clean architecture, smooth user flows, and software that scales with real business needs.
              </p>

              <div className="flex justify-center gap-4">
                <Link to="/contact">
                  <RollingButton variant="black">Hire me</RollingButton>
                </Link>

                <a
                  href={personalInfo.resumeUrl}
                  download
                  className="px-5 py-2 border border-[#dfdfdf] dark:border-[#2a2a2a] bg-white dark:bg-[#141414] font-bold text-sm flex items-center gap-2 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-300 text-[#171717] dark:text-white"
                >
                  View CV
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="w-full py-14 border-y border-[#f0f0f0] dark:border-[#1e1e1e] overflow-hidden bg-[#fafafa] dark:bg-[#111111] transition-colors duration-200">
          <div className="flex whitespace-nowrap overflow-hidden">
            <div className="flex gap-16 items-center animate-marquee shrink-0">
              {technologies.concat(technologies, technologies, technologies).map((tech, i) => (
                <span
                  key={`${tech}-${i}`}
                  className="text-[18px] md:text-[22px] font-black tracking-widest uppercase text-[#171717]/30 dark:text-white/30 hover:text-[#171717] dark:hover:text-white transition-colors cursor-default shrink-0"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-32 lg:px-10 md:px-8 px-5 bg-white dark:bg-[#0c0c0c] transition-colors duration-200">
          <div className="max-w-[1400px] mx-auto">
            <Reveal
              as="h2"
              className="text-[60px] md:text-[80px] lg:text-[100px] font-black uppercase tracking-tighter leading-[0.95] text-center text-[#171717] dark:text-white mb-20"
            >
              Work
              <br />
              Experience
            </Reveal>

            <div className="max-w-[800px] mx-auto flex flex-col">
              {experience.map((exp, idx) => (
                <Reveal
                  key={`${exp.role}-${exp.organization}`}
                  y={20}
                  delay={0.1 * idx}
                  duration={0.6}
                  margin="-50px"
                  className="group border-b border-[#e5e5e5] dark:border-[#222222] py-8 flex items-center justify-between gap-4"
                >
                  <div>
                    <h3 className="text-[18px] md:text-[22px] font-bold tracking-tight text-[#171717] dark:text-white group-hover:translate-x-2 transition-transform duration-500">
                      {exp.role}
                    </h3>
                    <p className="text-[12px] text-[#171717]/50 dark:text-white/50 mt-1 max-w-md">
                      {exp.summary}
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-[13px] md:text-[14px] font-medium text-[#171717] dark:text-white">
                      {exp.organization}
                    </p>
                    <p className="text-[12px] md:text-[13px] text-[#171717]/50 dark:text-white/50">
                      {exp.period}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal
              delay={0.15}
              className="max-w-[800px] mx-auto mt-20 p-8 border border-[#e5e5e5] dark:border-[#222222] bg-[#fcfcfc] dark:bg-[#141414] flex flex-col md:flex-row md:items-center justify-between gap-6 transition-colors duration-200"
            >
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest text-[#171717]/40 dark:text-white/40 mb-1">
                  Academic Background
                </p>
                <h4 className="text-[18px] font-bold text-[#171717] dark:text-white">
                  {education.degree}
                </h4>
                <p className="text-[13px] text-[#171717]/60 dark:text-white/60 mt-1">
                  {education.institution} · {education.location}
                </p>
              </div>
              <span className="text-[12px] font-bold uppercase tracking-wider px-3 py-1.5 border border-[#dfdfdf] dark:border-[#2a2a2a] text-[#171717] dark:text-white self-start md:self-auto">
                Graduated
              </span>
            </Reveal>
          </div>
        </section>
      </div>
  );
}

export default AboutPage;
