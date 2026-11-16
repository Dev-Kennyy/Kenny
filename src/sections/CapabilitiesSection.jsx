import { FiArrowUpRight, FiCheck } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading.jsx';

function CapabilitiesSection({ capabilities, technologies }) {
  return (
    <section
      className="capabilities-section py-20 sm:py-32 border-b border-[var(--color-line)] bg-[var(--color-surface)]"
      id="services"
      aria-labelledby="capabilities-heading"
    >
      <div className="page-width">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="Specialized Capabilities"
            title="From first commit to final detail."
            description="End-to-end engineering support for digital products requiring thoughtful user interfaces and dependable systems underneath."
            id="capabilities-heading"
            className="mb-0"
          />

          <Link
            className="button button-secondary self-start md:self-end shrink-0"
            to="/services"
          >
            Explore all services <FiArrowUpRight aria-hidden="true" />
          </Link>
        </div>

        {/* Capabilities List */}
        <div className="divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
          {capabilities.map((cap) => (
            <article
              key={cap.number}
              className="py-8 sm:py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start group hover:bg-[var(--color-surface-raised)] transition-colors px-4 -mx-4 rounded"
              data-capability
            >
              {/* Number and short title */}
              <div className="lg:col-span-4 flex items-baseline gap-4">
                <span className="font-mono text-sm text-[var(--color-dim)] font-bold">
                  [{cap.number}]
                </span>
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors">
                    {cap.title}
                  </h3>
                  <p className="text-xs font-mono text-[var(--color-muted)] mt-1">
                    {cap.tagline}
                  </p>
                </div>
              </div>

              {/* Description & Deliverables */}
              <div className="lg:col-span-5 space-y-3">
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                  {cap.description}
                </p>

                {cap.deliverables && (
                  <ul className="space-y-1.5 pt-2 text-xs text-[var(--color-muted)]">
                    {cap.deliverables.slice(0, 3).map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <FiCheck className="text-[var(--color-accent)] shrink-0 mt-0.5" size={13} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Tools & Link */}
              <div className="lg:col-span-3 flex flex-col lg:items-end justify-between h-full gap-4">
                <p className="text-xs font-mono text-[var(--color-dim)] lg:text-right">
                  {cap.tools}
                </p>

                <Link
                  to="/services"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors"
                >
                  <span>Learn more</span>
                  <FiArrowUpRight aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Technologies Bar */}
        <div className="mt-12 pt-8 border-t border-[var(--color-line)]" data-reveal>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <span className="font-mono text-xs uppercase tracking-wider text-[var(--color-dim)] shrink-0">
              Core Technologies
            </span>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1 border border-[var(--color-line)] bg-[var(--color-bg)] text-xs font-mono text-[var(--color-muted)]"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CapabilitiesSection;
