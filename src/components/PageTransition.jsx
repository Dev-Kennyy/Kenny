import { motion, useReducedMotion } from 'framer-motion';
import { easeMask } from '../lib/motion';

function PageTransition({ children }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className="route-transition min-h-screen flex flex-col justify-between"
      initial={reduce ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={reduce ? { opacity: 0 } : { opacity: 0, y: -12 }}
      transition={{ duration: reduce ? 0.15 : 0.45, ease: easeMask }}
    >
      {children}
    </motion.div>
  );
}

export default PageTransition;
