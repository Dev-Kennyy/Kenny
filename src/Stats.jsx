import { useRef } from 'react';
import { gsap, prefersReducedMotion, useGSAP } from './lib/gsap';

function Stats({ metrics }) {
  const ref = useRef(null);

  useGSAP(
    () => {
      const section = ref.current;
      if (!section) return;

      const numbers = section.querySelectorAll('[data-count]');
      if (prefersReducedMotion()) return;

      numbers.forEach((element) => {
        const end = Number(element.dataset.count);
        const decimals = Number(element.dataset.decimals ?? 0);
        const suffix = element.dataset.suffix ?? '';
        const value = { count: 0 };

        element.textContent = `0${suffix}`;
        gsap.to(value, {
          count: end,
          duration: 2,
          ease: 'power2.out',
          snap: { count: decimals === 0 ? 1 : 0.1 },
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            once: true,
          },
          onUpdate: () => {
            element.textContent = `${value.count.toFixed(decimals)}${suffix}`;
          },
        });
      });

      gsap.from(section.querySelectorAll('.stat-item'), {
        y: 20,
        autoAlpha: 0,
        duration: 0.65,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 90%',
          once: true,
        },
      });
    },
    { scope: ref },
  );

  return (
    <section className="stats-section" ref={ref} aria-label="Portfolio highlights">
      <div className="stats-inner page-width">
        {metrics.map((metric) => (
          <div className="stat-item" key={metric.label}>
            <strong
              className="stat-value"
              data-count={metric.value}
              data-decimals={metric.decimals ?? 0}
              data-suffix={metric.suffix ?? ''}
              aria-label={`${metric.value}${metric.suffix ?? ''}`}
            >
              {`${metric.value}${metric.suffix ?? ''}`}
            </strong>
            <span className="stat-label">{metric.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;