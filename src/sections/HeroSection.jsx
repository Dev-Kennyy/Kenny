import { FiArrowDownRight, FiDownload, FiArrowUpRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { personalInfo } from '../data/portfolio.js';

function HeroSection({ portraitRef }) {
  return (
    <section
      className="hero-section page-width pt-28 pb-16 sm:py-32 relative overflow-hidden"
      id="top"
      aria-labelledby="hero-title"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Hero Copy & Oversized Typography */}
        <div className="lg:col-span-7 flex flex-col justify-center hero-content">
          {/* Kicker */}
          <div className="hero-kicker inline-flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-[var(--color-dim)] mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>{personalInfo.heroKicker}</span>
          </div>

          {/* Oversized Headline */}
          <h1
            id="hero-title"
            className="hero-title font-display text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-[var(--color-text)] leading-[0.98] uppercase mb-8"
          >
            Thoughtful code.
            <br />
            <span className="relative inline-block text-[var(--color-accent-ink)] bg-[var(--color-accent)] px-3 py-1 my-1 -rotate-1 rounded-sm">
              Scalable
            </span>{' '}
            products.
          </h1>

          {/* Subtitle / Intro */}
          <p className="hero-copy text-base sm:text-xl text-[var(--color-muted)] max-w-xl leading-relaxed mb-10 font-sans">
            I&apos;m <strong className="text-[var(--color-text)] font-semibold">{personalInfo.name}</strong>, a full-stack developer turning ambitious concepts into fast, accessible, and dependable digital experiences.
          </p>

          {/* Action Buttons */}
          <div className="hero-actions flex flex-wrap items-center gap-4 sm:gap-6 mb-12">
            <a className="button button-primary" href="#work">
              Explore selected work <FiArrowDownRight aria-hidden="true" />
            </a>

            <a
              className="button button-secondary"
              href={personalInfo.resumeUrl}
              download
            >
              <FiDownload aria-hidden="true" />
              Download résumé
            </a>

            <Link className="text-link text-sm font-semibold inline-flex items-center gap-1.5" to="/contact">
              Discuss a project <FiArrowUpRight aria-hidden="true" />
            </Link>
          </div>

          {/* Scroll hint */}
          <a
            className="hero-scroll-hint inline-flex items-center gap-3 text-xs font-mono text-[var(--color-dim)] hover:text-[var(--color-text)] transition-colors"
            href="#about"
          >
            <span>SCROLL TO EXPLORE</span>
            <span className="w-12 h-px bg-[var(--color-dim)]" />
          </a>
        </div>

        {/* Right Column: Editorial Portrait Stage */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end hero-visual relative">
          <div className="w-full max-w-md relative">
            {/* Top Index & Line */}
            <div className="flex items-center justify-between text-xs font-mono text-[var(--color-dim)] pb-3 border-b border-[var(--color-line)] mb-4">
              <span>01 / 04</span>
              <span>[LAGOS · NIGERIA]</span>
            </div>

            {/* Frame */}
            <div
              className="hero-portrait-frame relative overflow-hidden aspect-[4/5] border border-[var(--color-line)] bg-[var(--color-surface-raised)] flex items-end justify-center group"
              ref={portraitRef}
            >
              {/* Geometric graphic background */}
              <div className="absolute inset-x-8 bottom-0 top-12 bg-gradient-to-t from-[var(--color-accent)]/20 via-transparent to-transparent rounded-t-full pointer-events-none" />

              <img
                src={personalInfo.portrait}
                alt={personalInfo.portraitAlt}
                fetchPriority="high"
                loading="eager"
                decoding="async"
                className="relative z-10 w-full h-full object-contain object-bottom filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700 ease-out"
              />

              {/* Status pill badge */}
              <div className="absolute bottom-4 left-4 z-20 px-3 py-1.5 bg-[var(--color-surface)]/90 backdrop-blur border border-[var(--color-line)] rounded text-[11px] font-mono text-[var(--color-text)] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Ready for production</span>
              </div>
            </div>

            {/* Caption */}
            <div className="flex items-center justify-between pt-3 border-t border-[var(--color-line)] text-xs font-mono text-[var(--color-muted)] mt-3">
              <span className="text-[var(--color-text)] font-semibold">{personalInfo.name}</span>
              <span>Full-Stack Engineer</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
