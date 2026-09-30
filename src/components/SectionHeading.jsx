function SectionHeading({ eyebrow, title, description, className = '' }) {
  return (
    <div className={`section-heading ${className}`} data-reveal>
      <p className="eyebrow">{eyebrow}</p>
      <h2 data-text-reveal>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}

export default SectionHeading;