import { FiArrowLeft, FiArrowRight, FiExternalLink, FiGithub } from 'react-icons/fi';
import { Link, useParams } from 'react-router-dom';
import Reveal from '../components/Reveal.jsx';
import { projects } from '../data/portfolio.js';
import NotFoundPage from './NotFoundPage.jsx';

export function ProjectDetailPage() {
  const { slug } = useParams();
  const currentIndex = projects.findIndex((p) => p.slug === slug);

  if (currentIndex === -1) {
    return <NotFoundPage />;
  }

  const project = projects[currentIndex];
  const prevProject =
    projects[(currentIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="flex flex-col bg-white dark:bg-[#0c0c0c] transition-colors duration-200">
        {/* ==================== TITLE SECTION ==================== */}
        <section className="w-full pt-16 pb-10 lg:px-10 md:px-8 px-5 bg-white dark:bg-[#0c0c0c] transition-colors duration-200">
          <div className="max-w-[1400px] mx-auto text-center">
            <Reveal
              as="h1"
              y={24}
              className="text-[52px] md:text-[90px] lg:text-[120px] font-black uppercase tracking-tighter leading-[0.95] text-[#171717] dark:text-white"
            >
              {project.name}
            </Reveal>
            <Reveal
              as="p"
              y={16}
              delay={0.1}
              duration={0.65}
              className="text-[13px] md:text-[14px] text-[#171717]/50 dark:text-white/60 max-w-[620px] mx-auto mt-6 leading-relaxed"
            >
              {project.tagline || project.description}
            </Reveal>

            <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#171717]/45 dark:text-white/50 border border-[#e5e5e5] dark:border-[#2a2a2a] px-3 py-1.5">
                {project.category || project.type}
              </span>
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#171717]/35 dark:text-white/40 px-3 py-1.5 border border-[#f0f0f0] dark:border-[#1e1e1e]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== META SPEC GRID & ACTIONS ==================== */}
        <section className="w-full pb-16 lg:px-10 md:px-8 px-5 bg-white dark:bg-[#0c0c0c] border-b border-[#e5e5e5] dark:border-[#1e1e1e] transition-colors duration-200">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-4 py-8 border-y border-[#f0f0f0] dark:border-[#1e1e1e]">
              <div className="flex flex-col gap-1 text-center">
                <p className="text-[11px] font-bold uppercase tracking-widest text-[#171717]/40 dark:text-white/40">
                  Role
                </p>
                <p className="text-[14px] font-bold text-[#171717] dark:text-white">
                  {project.role || 'Full-Stack Developer'}
                </p>
              </div>

              <div className="flex flex-col gap-1 text-center">
                <p className="text-[11px] font-bold uppercase tracking-widest text-[#171717]/40 dark:text-white/40">
                  Client / Domain
                </p>
                <p className="text-[14px] font-bold text-[#171717] dark:text-white">
                  {project.client || 'Client Engagement'}
                </p>
              </div>

              <div className="flex flex-col gap-1 text-center">
                <p className="text-[11px] font-bold uppercase tracking-widest text-[#171717]/40 dark:text-white/40">
                  Measured
                </p>
                <p className="text-[14px] font-bold text-[#171717] dark:text-white">
                  {project.outcomes || 'Sub-second transitions'}
                </p>
              </div>

              <div className="flex flex-col gap-1 text-center">
                <p className="text-[11px] font-bold uppercase tracking-widest text-[#171717]/40 dark:text-white/40">
                  Status
                </p>
                <p className="text-[14px] font-bold text-emerald-600 dark:text-emerald-400">
                  {project.status || 'Live in Production'}
                </p>
              </div>
            </div>

            {/* Action buttons */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              {project.href && (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-5 py-2.5 border border-[#171717] dark:border-white text-[#171717] dark:text-white font-bold text-[13px] hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-300 gap-2"
                >
                  <span>Live site</span>
                  <FiExternalLink size={14} />
                </a>
              )}

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-5 py-2.5 border border-[#e0e0e0] dark:border-[#2a2a2a] text-[#171717] dark:text-white font-bold text-[13px] hover:bg-[#f5f5f5] dark:hover:bg-[#1a1a1a] transition-colors duration-300 gap-2"
                >
                  <FiGithub size={14} />
                  <span>GitHub</span>
                </a>
              )}

              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-5 py-2.5 bg-black text-white dark:bg-white dark:text-black font-bold text-[13px] hover:bg-[#333] dark:hover:bg-[#ccc] transition-colors duration-300"
              >
                Discuss a similar build
              </Link>
            </div>
          </div>
        </section>

        {/* ==================== HERO PREVIEW IMAGE ==================== */}
        <section className="w-full py-16 lg:px-10 md:px-8 px-5 bg-white dark:bg-[#0c0c0c] transition-colors duration-200">
          <div className="max-w-[1400px] mx-auto">
            <Reveal y={30} duration={0.9} className="relative aspect-[16/9] w-full overflow-hidden bg-gray-100 dark:bg-[#161616] border border-[#e5e5e5] dark:border-[#222222]">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover object-top"
              />
            </Reveal>
            <p className="text-center text-xs text-[#171717]/40 dark:text-white/40 mt-3 font-medium">
              {project.name} storefront interface and workflow preview
            </p>
          </div>
        </section>

        {/* ==================== DEEP DIVE SECTIONS ==================== */}
        <section className="w-full py-16 lg:px-10 md:px-8 px-5 bg-white dark:bg-[#0c0c0c] border-t border-[#f0f0f0] dark:border-[#1e1e1e] transition-colors duration-200">
          <div className="max-w-[900px] mx-auto space-y-16">
            {/* Overview */}
            <div>
              <h3 className="text-[12px] font-bold uppercase tracking-widest text-[#171717]/40 dark:text-white/40 mb-3">
                Project Overview
              </h3>
              <h2 className="text-[28px] md:text-[36px] font-black tracking-tight text-[#171717] dark:text-white mb-6">
                The Objective & Challenge
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#171717]/70 dark:text-white/70 leading-relaxed font-medium">
                {project.extendedOverview || project.description}
              </p>
            </div>

            {/* Architecture Highlights */}
            {project.highlights && (
              <div>
                <h3 className="text-[12px] font-bold uppercase tracking-widest text-[#171717]/40 dark:text-white/40 mb-3">
                  Key Capabilities
                </h3>
                <h2 className="text-[28px] md:text-[36px] font-black tracking-tight text-[#171717] dark:text-white mb-6">
                  Architectural Deliverables
                </h2>
                <ul className="space-y-4">
                  {project.highlights.map((h, i) => (
                    <li
                      key={i}
                      className="p-5 border border-[#e5e5e5] dark:border-[#222222] bg-[#fafafa] dark:bg-[#141414] text-[14px] font-medium text-[#171717] dark:text-[#ededed] flex items-start gap-3"
                    >
                      <span className="font-bold text-black dark:text-white shrink-0">0{i + 1}.</span>
                      <span className="leading-relaxed">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* System Details */}
            {project.architecture && (
              <div>
                <h3 className="text-[12px] font-bold uppercase tracking-widest text-[#171717]/40 dark:text-white/40 mb-3">
                  Engineering Stack
                </h3>
                <h2 className="text-[28px] md:text-[36px] font-black tracking-tight text-[#171717] dark:text-white mb-6">
                  Implementation & Data Flow
                </h2>
                <div className="p-6 border border-[#e5e5e5] dark:border-[#222222] bg-[#fafafa] dark:bg-[#141414] text-[15px] text-[#171717]/80 dark:text-white/80 leading-relaxed">
                  {project.architecture}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ==================== PROJECT NAVIGATION ==================== */}
        <section className="w-full py-16 border-t border-[#e5e5e5] dark:border-[#1e1e1e] bg-[#fcfcfc] dark:bg-[#101010] lg:px-10 md:px-8 px-5 transition-colors duration-200">
          <div className="max-w-[1400px] mx-auto flex items-center justify-between">
            <Link
              to={`/projects/${prevProject.slug}`}
              className="group flex items-center gap-3 text-[#171717] dark:text-white"
            >
              <div className="w-10 h-10 border border-[#dfdfdf] dark:border-[#2a2a2a] bg-white dark:bg-[#141414] flex items-center justify-center group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-colors">
                <FiArrowLeft size={16} />
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest text-[#171717]/40 dark:text-white/40">
                  Previous Project
                </p>
                <p className="text-[16px] font-bold text-[#171717] dark:text-white">
                  {prevProject.name}
                </p>
              </div>
            </Link>

            <Link
              to={`/projects/${nextProject.slug}`}
              className="group flex items-center gap-3 text-[#171717] dark:text-white text-right"
            >
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest text-[#171717]/40 dark:text-white/40">
                  Next Project
                </p>
                <p className="text-[16px] font-bold text-[#171717] dark:text-white">
                  {nextProject.name}
                </p>
              </div>
              <div className="w-10 h-10 border border-[#dfdfdf] dark:border-[#2a2a2a] bg-white dark:bg-[#141414] flex items-center justify-center group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-colors">
                <FiArrowRight size={16} />
              </div>
            </Link>
          </div>
        </section>
      </div>
  );
}

export default ProjectDetailPage;
