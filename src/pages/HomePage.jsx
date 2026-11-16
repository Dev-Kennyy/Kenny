import {
  FiArrowRight,
  FiCircle,
  FiCpu,
  FiGrid,
  FiLayers,
  FiLayout,
  FiServer,
} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import CountUp from '../components/CountUp.jsx';
import { MaskLine, MaskReveal } from '../components/MaskReveal.jsx';
import Reveal from '../components/Reveal.jsx';
import ReviewsCarousel from '../components/ReviewsCarousel.jsx';
import RollingButton from '../components/RollingButton.jsx';
import {
  experience,
  personalInfo,
  projects,
  recommendations,
} from '../data/portfolio.js';
import { arrowRoll, easeArrow, staggerGrid, staggerItem } from '../lib/motion';

const stats = [
  { value: 24, suffix: '/7', label: 'Support & async dedication' },
  { value: 4.8, decimals: 1, suffix: '/5', label: 'Client satisfaction rating' },
  { value: 98, suffix: '%', label: 'On-time delivery rate' },
  { value: 35, suffix: '%+', label: 'Average performance boost' },
  { value: 10, suffix: '+', label: 'Projects & modules delivered' },
  { value: 4, suffix: '', label: 'Core domains (ecommerce, health, CMS, AI)' },
];

function ProjectTile({ project, index }) {
  return (
    <Reveal
      y={40}
      delay={0.15 * index}
      duration={0.7}
      margin="-50px"
      className="group flex flex-col gap-5"
    >
      <Link
        to={`/projects/${project.slug}`}
        className="relative w-full aspect-[4/3] overflow-hidden bg-[#f5f5f5] dark:bg-[#141414] border border-transparent dark:border-[#222222] block"
      >
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 dark:group-hover:bg-white/5 transition-colors duration-500" />
      </Link>

      <div className="flex flex-col gap-2">
        <h3 className="text-[22px] md:text-[26px] font-black tracking-tight text-[#171717] dark:text-white leading-none">
          {project.name}
        </h3>
        <p className="text-[13px] md:text-[14px] text-[#171717]/60 dark:text-white/60 leading-relaxed max-w-[380px]">
          {project.description}
        </p>
      </div>

      <Link to={`/projects/${project.slug}`} className="self-start">
        <motion.span
          initial="initial"
          whileHover="hover"
          className="self-start inline-flex px-5 py-2 border border-[#e0e0e0] dark:border-[#2a2a2a] bg-white dark:bg-[#141414] text-[#171717] dark:text-white text-[13px] font-bold items-center gap-2 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black hover:border-black dark:hover:border-white cursor-pointer transition-colors duration-300"
        >
          View Project
          <span className="relative w-[16px] h-[16px] overflow-hidden inline-block">
            <motion.span
              className="flex will-change-transform"
              variants={arrowRoll}
              transition={{ duration: 0.42, ease: easeArrow }}
            >
              <FiArrowRight size={16} className="shrink-0" />
              <FiArrowRight size={16} className="shrink-0" />
            </motion.span>
          </span>
        </motion.span>
      </Link>
    </Reveal>
  );
}

function HomePage() {
  const reduce = useReducedMotion();
  const serviceIcons = [
    <FiServer key="server" size={20} />,
    <FiGrid key="grid" size={20} />,
    <FiCpu key="cpu" size={20} />,
    <FiLayers key="layers" size={20} />,
    <FiLayout key="layout" size={20} />,
    <FiCircle key="circle" size={20} />,
  ];

  const serviceTitles = [
    'Backend & APIs',
    'Frontend Engineering',
    'System Design',
    'Full-Stack Platforms',
    'UI / UX Thinking',
    'Product Architecture',
  ];

  return (
    <div className="flex flex-col bg-white dark:bg-[#0c0c0c] transition-colors duration-200">
        <section className="lg:px-10 md:px-8 px-5 md:pt-10 lg:pt-20">
          <MaskReveal className="flex flex-col min-h-[calc(100svh-72px)] items-center justify-center py-12 md:h-[calc(100vh-80px)] md:min-h-0">
            <div className="overflow-hidden mb-4">
              <MaskLine className="text-[20px] md:text-[24px] font-medium text-[#171717] dark:text-white/90">
                Hello, I’m {personalInfo.name}
              </MaskLine>
            </div>
            <div className="text-left mt-2 md:mt-10">
              <div className="overflow-hidden">
                <MaskLine
                  as="h1"
                  className="text-left text-[clamp(2.5rem,14vw,9.625rem)] leading-[1.05] tracking-[-.08em] md:leading-[1.05] lg:leading-[160px] font-black uppercase text-[#171717] dark:text-white"
                >
                  ENGINEER+
                </MaskLine>
              </div>
              <div className="overflow-hidden">
                <MaskLine
                  as="h2"
                  className="text-left text-[clamp(2.5rem,14vw,9.625rem)] leading-[1.05] tracking-[-.08em] md:leading-[1.05] lg:leading-[160px] font-black uppercase text-[#171717] dark:text-white"
                >
                  Developer
                </MaskLine>
              </div>
            </div>
          </MaskReveal>
        </section>

        <section className="w-full py-20 sm:py-24 lg:py-32 lg:px-10 md:px-8 px-5 bg-white dark:bg-[#0c0c0c] overflow-hidden transition-colors duration-200">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32 items-center">
            <Reveal
              x={-50}
              y={0}
              duration={0.8}
              className="flex flex-col justify-between h-full"
            >
              <div className="max-w-lg">
                <p className="text-[14px] md:text-[16px] text-[#171717]/80 dark:text-[#ededed]/80 leading-relaxed font-medium">
                  <span className="text-black dark:text-white font-bold">
                    Architecting digital solutions.{' '}
                  </span>
                  I build complete digital products from the ground up, focusing
                  on backend architecture, API design, and high-performance
                  frontend interfaces. I create software that is robust,
                  scalable, and intuitive to use.
                </p>

                <Link to="/contact">
                  <RollingButton variant="black" className="mt-6">
                    Contact Now
                  </RollingButton>
                </Link>
              </div>

              <motion.div
                initial={reduce ? false : 'initial'}
                whileInView="animate"
                viewport={{ once: true }}
                variants={staggerGrid}
                className="mt-16 sm:mt-20 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10 sm:gap-y-12"
              >
                {serviceTitles.map((title, i) => (
                  <motion.div
                    key={title}
                    variants={staggerItem}
                    className="group flex flex-col gap-5 cursor-default"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-black text-black/20 dark:text-white/20 tracking-[0.2em]">
                        0{i + 1}
                      </span>
                      <div className="h-px flex-1 bg-[#f0f0f0] dark:bg-[#1e1e1e] ml-4 group-hover:bg-black dark:group-hover:bg-white transition-all duration-700" />
                    </div>
                    <div className="flex items-center gap-5">
                      <div className="shrink-0 w-12 h-12 flex items-center justify-center bg-[#f8f8f8] dark:bg-[#161616] text-[#171717] dark:text-white group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-all duration-500 rotate-0 group-hover:rotate-45">
                        <span className="group-hover:-rotate-45 transition-transform duration-500">
                          {serviceIcons[i]}
                        </span>
                      </div>
                      <h4 className="text-[14px] font-extrabold uppercase tracking-tight leading-none text-[#171717] dark:text-white group-hover:translate-x-2 transition-transform duration-500">
                        {title}
                      </h4>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </Reveal>

            <Reveal
              y={0}
              scale={0.95}
              duration={1}
              className="relative w-full justify-self-end aspect-[4/5] max-w-[450px] max-h-[80vh] overflow-hidden group shadow-2xl bg-gray-100 dark:bg-[#1a1a1a]"
            >
              <img
                src={personalInfo.portrait}
                alt={personalInfo.name}
                className="w-full h-full object-cover grayscale contrast-125 brightness-105 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[1.5s] ease-out"
              />
              <div className="absolute inset-0 bg-black/10 dark:bg-black/30 group-hover:bg-transparent transition-colors duration-1000" />
              <div className="absolute bottom-0 left-0 p-8 transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 bg-gradient-to-t from-black to-transparent w-full">
                <p className="text-white text-[10px] font-bold tracking-[0.3em] uppercase">
                  Based in Nigeria • Available for hire
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="w-full py-20 sm:py-24 lg:py-32 lg:px-10 md:px-8 px-5 bg-white dark:bg-[#0c0c0c] transition-colors duration-200">
          <div className="max-w-[1400px] mx-auto">
            <Reveal
              as="h2"
              className="text-[clamp(2.5rem,12vw,6.25rem)] font-black uppercase tracking-tighter leading-none text-center text-[#171717] dark:text-white mb-10 sm:mb-14 md:mb-20"
            >
              Projects
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
              {projects.map((project, index) => (
                <ProjectTile key={project.slug} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-20 sm:py-24 lg:py-32 lg:px-10 md:px-8 px-5 bg-white dark:bg-[#0c0c0c] transition-colors duration-200">
          <div className="max-w-[1400px] mx-auto">
            <Reveal
              as="h2"
              className="text-[clamp(2.5rem,12vw,6.25rem)] font-black uppercase tracking-tighter leading-[0.95] text-center text-[#171717] dark:text-white mb-10 sm:mb-14 md:mb-20"
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
                  className="group border-b border-[#e5e5e5] dark:border-[#222222] py-6 sm:py-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
                >
                  <div className="w-full min-w-0 sm:flex-1">
                    <h3 className="text-base sm:text-lg md:text-[22px] font-bold tracking-tight text-[#171717] dark:text-white group-hover:translate-x-2 transition-transform duration-500">
                      {exp.role}
                    </h3>
                    <p className="text-[12px] text-[#171717]/50 dark:text-white/50 mt-1 max-w-md">
                      {exp.summary}
                    </p>
                  </div>
                  <div className="w-full text-left sm:w-auto sm:text-right sm:shrink-0">
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

            <div className="mt-24 sm:mt-32 lg:mt-40 grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-16 items-start">
              <Reveal
                as="h2"
                className="lg:col-span-4 text-[clamp(2.75rem,10vw,5rem)] font-black uppercase tracking-tighter leading-[0.95] text-[#171717] dark:text-white"
              >
                Some
                <br />
                Numbers
              </Reveal>

              <div className="lg:col-span-8 grid grid-cols-2 gap-x-6 sm:gap-x-10 lg:gap-x-16 gap-y-10 sm:gap-y-14">
                {stats.map((stat, idx) => (
                  <Reveal
                    key={stat.label}
                    delay={0.1 * idx}
                    duration={0.6}
                    margin="-30px"
                    className="flex flex-col gap-1"
                  >
                    <CountUp
                      value={stat.value}
                      decimals={stat.decimals || 0}
                      suffix={stat.suffix}
                      className="text-[clamp(2.25rem,8vw,4.5rem)] font-black tracking-tight leading-none text-[#171717] dark:text-white"
                      suffixClassName="text-[clamp(1.25rem,4vw,2.625rem)] font-bold align-top"
                    />
                    <p className="text-[12px] md:text-[14px] text-[#171717]/50 dark:text-white/50 tracking-wide">
                      {stat.label}
                    </p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <ReviewsCarousel reviews={recommendations} />
      </div>
  );
}

export default HomePage;
