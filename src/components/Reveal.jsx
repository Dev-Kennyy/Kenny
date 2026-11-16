import { motion, useReducedMotion } from 'framer-motion';
import { easeOutExpo, viewportOnce } from '../lib/motion';

function Reveal({
  as = 'div',
  children,
  className,
  y = 30,
  x = 0,
  scale,
  delay = 0,
  duration = 0.8,
  margin,
  once = true,
  ...props
}) {
  const reduce = useReducedMotion();
  const Component = motion[as] || motion.div;
  const viewport = margin ? { once, margin } : { ...viewportOnce, once };

  if (reduce) {
    return (
      <Component className={className} {...props}>
        {children}
      </Component>
    );
  }

  const initial = { opacity: 0, y, x };
  const visible = { opacity: 1, y: 0, x: 0 };
  if (typeof scale === 'number') {
    initial.scale = scale;
    visible.scale = 1;
  }

  return (
    <Component
      className={className}
      initial={initial}
      whileInView={visible}
      viewport={viewport}
      transition={{ duration, delay, ease: easeOutExpo }}
      {...props}
    >
      {children}
    </Component>
  );
}

export default Reveal;
