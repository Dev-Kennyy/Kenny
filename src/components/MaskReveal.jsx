import { motion, useReducedMotion } from 'framer-motion';
import { easeMask, maskLine, maskParent } from '../lib/motion';

export function MaskLine({
  as = 'p',
  children,
  className,
  delay = 0,
}) {
  const reduce = useReducedMotion();
  const Component = motion[as] || motion.p;

  if (reduce) {
    return <Component className={className}>{children}</Component>;
  }

  return (
    <Component
      className={className}
      variants={{
        ...maskLine,
        visible: {
          y: 0,
          transition: { duration: 0.8, ease: easeMask, delay },
        },
      }}
    >
      {children}
    </Component>
  );
}

export function MaskReveal({
  children,
  className,
  delayChildren = 0.3,
  staggerChildren = 0.1,
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      variants={{
        ...maskParent,
        visible: {
          transition: { staggerChildren, delayChildren },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export default MaskReveal;
