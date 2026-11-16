import { useRef } from 'react';
import { gsap, prefersReducedMotion, useGSAP } from './lib/gsap';

function Stats({ metrics }) {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const section = containerRef.current;
      if (!section || prefersReducedMotion()) return;

      const items = section.querySelectorAll('[data-count]');

      items.forEach((element) => {
        const targetValue = parseFloat(element.dataset.count);
        const decimals = parseInt(element.dataset.decimals || '0', 10);
        const prefix = element.dataset.prefix || '';
        const suffix = element.dataset.suffix || '';
        const state = { value: 0 };

        gsap.to(state, {
          value: targetValue,
          duration: 2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            once: true,
          },
          onUpdate: () => {
            element.textContent = `${prefix}${state.value.toFixed(decimals)}${suffix}`;
          },
        });
      });

      gsap.from(section.querySelectorAll('.stat-item'), {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 90%',
          once: true,
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="stats-section border-y border-[var(--color-line)] bg-[var(--color-surface)] py-12 sm:py-16"
      aria-label="Engineering metrics and highlights"
    >
      <div className="page-width">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[var(--color-line)]">
          {metrics.map((metric, idx) => (
            <div
              key={metric.label}
              className={`stat-item flex flex-col items-center sm:items-start text-center sm:text-left ${
                idx > 0 ? 'pt-6 sm:pt-0 sm:pl-8' : ''
              }`}
            >
              <div
                className="stat-value font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--color-text)] mb-2"
                data-count={metric.value}
                data-decimals={metric.decimals || 0}
                data-prefix={metric.prefix || ''}
                data-suffix={metric.suffix || ''}
                aria-label={`${metric.prefix || ''}${metric.value}${metric.suffix || ''} ${metric.label}`}
              >
                {`${metric.prefix || ''}${metric.value}${metric.suffix || ''}`}
              </div>
              <div className="stat-label font-mono text-xs uppercase tracking-wider text-[var(--color-dim)] mb-1">
                {metric.label}
              </div>
              {metric.detail && (
                <p className="text-xs text-[var(--color-muted)] max-w-[220px] leading-relaxed hidden sm:block">
                  {metric.detail}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;
