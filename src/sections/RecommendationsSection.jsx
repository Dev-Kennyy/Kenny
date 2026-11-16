import SectionHeading from '../components/SectionHeading.jsx';

function RecommendationsSection({ recommendations }) {
  return (
    <section
      className="recommendations-section py-20 sm:py-32 border-b border-[var(--color-line)] bg-[var(--color-surface)]"
      id="recommendations"
      aria-labelledby="recommendations-heading"
    >
      <div className="page-width">
        <SectionHeading
          eyebrow="Client & Colleague Words"
          title="Good work is a team effort."
          description="Direct feedback from team leads, technical supervisors, and product owners I've had the pleasure of delivering solutions for."
          id="recommendations-heading"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 recommendation-grid">
          {recommendations.map((rec) => (
            <figure
              key={rec.name}
              className="p-8 border border-[var(--color-line)] bg-[var(--color-bg)] flex flex-col justify-between hover:border-[var(--color-text)] transition-colors"
              data-quote
            >
              <div>
                <span
                  className="font-serif text-5xl leading-none text-[var(--color-accent)] block mb-4"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>
                <blockquote className="text-sm text-[var(--color-muted)] leading-relaxed mb-6 font-sans">
                  {rec.quote}
                </blockquote>
              </div>

              <figcaption className="pt-4 border-t border-[var(--color-line)] flex flex-col gap-0.5">
                <span className="font-display font-bold text-sm text-[var(--color-text)]">
                  {rec.name}
                </span>
                <span className="text-xs text-[var(--color-muted)] font-mono">
                  {rec.role} <span className="text-[var(--color-dim)]">/</span> {rec.organization}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RecommendationsSection;
