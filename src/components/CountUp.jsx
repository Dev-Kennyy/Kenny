import { useRef } from 'react';
import { gsap, prefersReducedMotion, ScrollTrigger, useGSAP } from '../lib/gsap';

function CountUp({
  value,
  decimals = 0,
  prefix = '',
  suffix = '',
  className,
  suffixClassName,
}) {
  const scopeRef = useRef(null);
  const valueRef = useRef(null);

  useGSAP(
    () => {
      const target = valueRef.current;
      if (!target) return;

      if (prefersReducedMotion()) {
        target.textContent = `${prefix}${Number(value).toFixed(decimals)}`;
        return;
      }

      const state = { value: 0 };
      gsap.to(state, {
        value,
        duration: 2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: scopeRef.current,
          start: 'top 90%',
          once: true,
        },
        onUpdate: () => {
          target.textContent = `${prefix}${state.value.toFixed(decimals)}`;
        },
      });

      ScrollTrigger.refresh();
    },
    { scope: scopeRef, dependencies: [value, decimals, prefix] },
  );

  return (
    <p ref={scopeRef} className={className}>
      <span ref={valueRef}>
        {prefix}
        {Number(0).toFixed(decimals)}
      </span>
      {suffix ? <span className={suffixClassName}>{suffix}</span> : null}
    </p>
  );
}

export default CountUp;
