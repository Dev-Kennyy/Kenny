import Reveal from './Reveal.jsx';

function PageIntro({ eyebrow, title, copy, kicker }) {
  return (
    <header className="page-intro py-16 sm:py-24 border-b border-[var(--color-line)]">
      <div className="page-width">
        {eyebrow && (
          <Reveal as="p" y={16} duration={0.5} className="font-mono text-xs uppercase tracking-widest text-[var(--color-dim)] mb-4">
            {eyebrow}
          </Reveal>
        )}
        <Reveal
          as="h1"
          y={24}
          className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[var(--color-text)] max-w-4xl leading-[1.02] uppercase"
        >
          {title}
        </Reveal>
        {copy && (
          <p className="mt-6 text-base sm:text-lg text-[var(--color-muted)] max-w-2xl leading-relaxed">
            {copy}
          </p>
        )}
        {kicker && (
          <div className="mt-6 flex items-center gap-3 font-mono text-xs text-[var(--color-muted)]">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>{kicker}</span>
          </div>
        )}
      </div>
    </header>
  );
}

export default PageIntro;
