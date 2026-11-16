import { FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading.jsx';
import { personalInfo, workingPrinciples } from '../data/portfolio.js';

function AboutSection() {
  return (
    <section
      className="about-section py-20 sm:py-32 border-b border-[var(--color-line)] bg-[var(--color-bg)]"
      id="about"
      aria-labelledby="about-heading"
    >
      <div className="page-width">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading */}
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Background & Philosophy"
              title={<>Product-minded.<br />Engineer.</>}
              id="about-heading"
            />

            <div className="space-y-4 text-sm text-[var(--color-muted)] leading-relaxed">
              <p>
                Graduated with a degree in <strong className="text-[var(--color-text)]">Computer Science & Engineering from Ladoke Akintola University of Technology (LAUTECH)</strong>, I combine rigorous theoretical foundations with practical production experience.
              </p>
              <p>
                Whether contracting as a solo frontend lead or engineering end-to-end full-stack architectures, I focus on clean code, measurable performance gains, and intuitive interfaces that serve real users.
              </p>
            </div>

            <div className="mt-8">
              <Link className="inline-link group inline-flex items-center gap-2 font-semibold text-sm text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors" to="/about">
                <span>Read complete background & experience</span>
                <FiArrowRight className="transform group-hover:translate-x-1.5 transition-transform" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Right Column: Working Principles Grid */}
          <div className="lg:col-span-7" data-reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {workingPrinciples.map((principle) => (
                <div
                  key={principle.number}
                  className="p-6 border border-[var(--color-line)] bg-[var(--color-surface)] hover:border-[var(--color-text)] transition-colors duration-200"
                >
                  <div className="flex items-center justify-between mb-4 text-xs font-mono">
                    <span className="text-[var(--color-accent-ink)] bg-[var(--color-accent)] px-2 py-0.5 rounded font-bold">
                      {principle.number}
                    </span>
                    <FiCheckCircle className="text-[var(--color-dim)]" size={14} />
                  </div>
                  <h3 className="font-display text-lg font-bold tracking-tight text-[var(--color-text)] mb-2">
                    {principle.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--color-muted)] leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Quick credentials banner */}
            <div className="mt-6 p-4 border border-[var(--color-line)] bg-[var(--color-surface-raised)] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono">
              <span className="text-[var(--color-muted)]">
                [EDUCATION]: B.Tech. Computer Science & Engineering (LAUTECH)
              </span>
              <span className="text-[var(--color-text)] font-semibold">
                Available: {personalInfo.availability}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
