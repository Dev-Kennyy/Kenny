import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal.jsx';
import { projects } from '../data/portfolio.js';
import { arrowRoll, easeArrow, easeOutExpo } from '../lib/motion';

const filterTags = [
  'All Projects',
  'Full-Stack',
  'Next.js',
  'TypeScript',
  'Node.js',
  'Tailwind',
  'MongoDB',
  'Paystack',
  'AI',
];

export function ProjectsPage() {
  const [selectedTag, setSelectedTag] = useState('All Projects');

  const filtered =
    selectedTag === 'All Projects'
      ? projects
      : projects.filter(
          (p) =>
            p.category === selectedTag ||
            p.technologies.some((t) =>
              t.toLowerCase().includes(selectedTag.toLowerCase()),
            ),
        );

  return (
    <div className="flex flex-col bg-white dark:bg-[#0c0c0c] transition-colors duration-200">
        <section className="w-full pt-16 pb-10 lg:px-10 md:px-8 px-5 bg-white dark:bg-[#0c0c0c] transition-colors duration-200">
          <div className="max-w-[1400px] mx-auto text-center">
            <Reveal
              as="h1"
              y={24}
              className="text-[50px] md:text-[80px] lg:text-[110px] font-black uppercase tracking-tighter leading-[0.95] text-[#171717] dark:text-white"
            >
              Featured
              <br />
              Projects
            </Reveal>
          </div>
        </section>

        <section className="w-full pb-16 lg:px-10 md:px-8 px-5 bg-white dark:bg-[#0c0c0c] transition-colors duration-200">
          <Reveal y={16} duration={0.6} className="max-w-[1400px] mx-auto">
            <div className="flex flex-wrap items-center justify-center gap-3">
              {filterTags.map((tag) => {
                const isActive = selectedTag === tag;

                return (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => setSelectedTag(tag)}
                    className={`px-5 py-2 text-[13px] font-bold tracking-tight transition-all duration-300 cursor-pointer ${
                      isActive
                        ? 'bg-black text-white dark:bg-white dark:text-black'
                        : 'bg-white dark:bg-[#141414] text-[#171717] dark:text-white border border-[#e0e0e0] dark:border-[#2a2a2a] hover:bg-[#f5f5f5] dark:hover:bg-[#1c1c1c]'
                    }`}
                  >
                    {tag}
                  </button>
                );
              })}
            </div>
          </Reveal>
        </section>

        <section className="w-full pb-32 lg:px-10 md:px-8 px-5 bg-white dark:bg-[#0c0c0c] transition-colors duration-200">
          <div className="max-w-[1400px] mx-auto">
            <AnimatePresence mode="wait">
              {filtered.length > 0 ? (
                <motion.div
                  key={selectedTag}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4, ease: easeOutExpo }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16"
                >
                  {filtered.map((project, index) => (
                    <Reveal
                      key={project.slug}
                      y={40}
                      delay={0.1 * index}
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
                          className="inline-flex px-5 py-2 border border-[#e0e0e0] dark:border-[#2a2a2a] bg-white dark:bg-[#141414] text-[#171717] dark:text-white text-[13px] font-bold items-center gap-2 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black hover:border-black dark:hover:border-white cursor-pointer transition-colors duration-300"
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
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-20"
                >
                  <p className="text-lg font-bold text-[#171717] dark:text-white mb-4">
                    No projects matching this filter.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSelectedTag('All Projects')}
                    className="px-5 py-2 bg-black text-white dark:bg-white dark:text-black font-bold text-sm"
                  >
                    Reset to All Projects
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>
      </div>
  );
}

export default ProjectsPage;
