import SectionHeading from '../components/SectionHeading.jsx';

function RecommendationsSection({ recommendations }) {
  return (
    <section className="recommendations-section page-width section-space" id="recommendations" aria-labelledby="recommendations-heading">
      <SectionHeading
        eyebrow="Kind words"
        title="Good work is a team effort."
        description="A few words from people I&apos;ve had the pleasure of working with."
      />
      <h2 className="sr-only" id="recommendations-heading">Recommendations</h2>
      <div className="recommendation-grid">
        {recommendations.map((recommendation) => (
          <figure className="recommendation" data-quote key={recommendation.name}>
            <span className="quote-mark" aria-hidden="true">“</span>
            <blockquote>{recommendation.quote}</blockquote>
            <figcaption>
              <span className="recommendation-name">{recommendation.name}</span>
              <span>{recommendation.role} <span className="caption-divider">/</span> {recommendation.organization}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export default RecommendationsSection;