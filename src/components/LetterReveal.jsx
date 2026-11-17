import { motion, useReducedMotion } from 'framer-motion';

const titleVariants = {
  hidden: {},
  visible: {
    transition: { delayChildren: 0.18, staggerChildren: 0.2 },
  },
};

const lineVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.035 },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: '110%', rotateX: -75, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    filter: 'blur(0px)',
    transition: { type: 'spring', damping: 18, stiffness: 110 },
  },
};

function LetterReveal({ as = 'h1', lines, className }) {
  const reduce = useReducedMotion();
  const Component = motion[as] || motion.h1;

  return (
    <Component
      aria-label={lines.join(' ')}
      initial={reduce ? false : 'hidden'}
      animate={reduce ? undefined : 'visible'}
      variants={titleVariants}
      className={className}
    >
      {lines.map((line, lineIndex) => (
        <div key={`${line}-${lineIndex}`} className="overflow-hidden" aria-hidden="true">
          <motion.div variants={lineVariants}>
            {Array.from(line).map((character, characterIndex) =>
              character === ' ' ? (
                ' '
              ) : (
                <motion.span
                  key={`${character}-${characterIndex}`}
                  className="inline-block"
                  style={{ transformOrigin: '50% 100%' }}
                  variants={letterVariants}
                >
                  {character}
                </motion.span>
              ),
            )}
          </motion.div>
        </div>
      ))}
    </Component>
  );
}

export default LetterReveal;
