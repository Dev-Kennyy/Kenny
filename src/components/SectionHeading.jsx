function SectionHeading({ eyebrow, title, description, className = '', id = undefined }) {
  return (
    <div className={`section-heading mb-12 sm:mb-16 ${className}`}>
      {eyebrow && (
        <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-dim)] mb-3">
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--color-text)] leading-[1.05] uppercase"
      >
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-sm sm:text-base text-[var(--color-muted)] max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;
