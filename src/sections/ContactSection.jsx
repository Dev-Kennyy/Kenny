import { FiArrowUpRight, FiDownload, FiMail } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { personalInfo } from '../data/portfolio.js';

function ContactSection() {
  return (
    <section
      className="contact-section py-24 sm:py-36 bg-[var(--color-accent)] text-[var(--color-accent-ink)] relative overflow-hidden"
      id="contact"
      aria-labelledby="contact-heading"
    >
      <div className="page-width relative z-10" data-reveal>
        <div className="max-w-4xl">
          <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-accent-ink)]/75 mb-4">
            Ready to collaborate?
          </p>

          <h2
            id="contact-heading"
            className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight uppercase leading-[0.95] mb-8"
          >
            Have a project in mind?
            <br />
            <span>Let&apos;s build together.</span>
          </h2>

          <p className="text-base sm:text-xl text-[var(--color-accent-ink)]/85 max-w-xl leading-relaxed mb-10 font-sans">
            I&apos;m currently open to select full-stack contracts, remote engineering roles, and technical collaborations. Tell me what you&apos;re building.
          </p>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <Link
              className="px-6 py-4 bg-[var(--color-accent-ink)] text-[var(--color-bg)] hover:bg-black font-semibold text-sm rounded inline-flex items-center gap-2 transition-all transform hover:-translate-y-0.5"
              to="/contact"
            >
              Start an inquiry <FiArrowUpRight aria-hidden="true" />
            </Link>

            <a
              className="px-6 py-4 border border-[var(--color-accent-ink)] text-[var(--color-accent-ink)] hover:bg-[var(--color-accent-ink)] hover:text-[var(--color-accent)] font-semibold text-sm rounded inline-flex items-center gap-2 transition-all"
              href={`mailto:${personalInfo.email}`}
            >
              <FiMail aria-hidden="true" />
              {personalInfo.email}
            </a>

            <a
              className="text-xs font-mono font-bold tracking-wider uppercase underline underline-offset-4 hover:opacity-75 inline-flex items-center gap-1.5"
              href={personalInfo.resumeUrl}
              download
            >
              <FiDownload aria-hidden="true" />
              Résumé (PDF)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
