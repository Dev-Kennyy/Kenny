import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { arrowRoll, easeArrow, navRoll } from '../lib/motion';

const sizeMap = {
  sm: { box: 'w-[16px] h-[16px]', icon: 16 },
  md: { box: 'w-[20px] h-[20px]', icon: 20 },
};

export function RollingButton({
  children,
  type = 'button',
  variant = 'black',
  className = '',
  onClick,
  size = 'md',
  ...props
}) {
  const dims = sizeMap[size] || sizeMap.md;
  const baseClasses =
    'group font-bold text-sm inline-flex items-center gap-2 cursor-pointer transition-colors duration-300';

  let variantClasses = '';
  let arrowColorClass = '';

  if (variant === 'black') {
    variantClasses =
      'px-5 py-2 bg-black text-white hover:bg-white hover:text-black border border-black hover:border-[#dfdfdf] dark:bg-white dark:text-black dark:border-white dark:hover:bg-[#0c0c0c] dark:hover:text-white dark:hover:border-[#333333]';
    arrowColorClass =
      'text-white group-hover:text-black dark:text-black dark:group-hover:text-white';
  } else if (variant === 'white') {
    variantClasses =
      'px-5 py-2 bg-white text-[#171717] border border-[#dfdfdf] hover:bg-black hover:text-white hover:border-black dark:bg-[#141414] dark:text-white dark:border-[#2a2a2a] dark:hover:bg-white dark:hover:text-black dark:hover:border-white';
    arrowColorClass =
      'text-[#171717] group-hover:text-white dark:text-white dark:group-hover:text-black';
  } else if (variant === 'outline') {
    variantClasses =
      'px-5 py-2 border border-[#e0e0e0] bg-white text-[#171717] text-[13px] hover:bg-black hover:text-white hover:border-black dark:bg-[#141414] dark:border-[#2a2a2a] dark:text-white dark:hover:bg-white dark:hover:text-black dark:hover:border-white';
    arrowColorClass =
      'text-[#171717] group-hover:text-white dark:text-white dark:group-hover:text-black';
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      initial="initial"
      whileHover="hover"
      className={`${baseClasses} ${variantClasses} ${className}`}
      {...props}
    >
      <span>{children}</span>
      <div className={`relative ${dims.box} overflow-hidden`}>
        <motion.div
          className={`flex will-change-transform ${arrowColorClass}`}
          variants={arrowRoll}
          transition={{ duration: 0.42, ease: easeArrow }}
        >
          <FiArrowRight size={dims.icon} className="shrink-0" />
          <FiArrowRight size={dims.icon} className="shrink-0" />
        </motion.div>
      </div>
    </motion.button>
  );
}

export function RollingLink({ to, children, isActive = false }) {
  return (
    <motion.li
      initial="initial"
      whileHover="hover"
      className="relative overflow-hidden cursor-pointer text-[15px] font-medium h-6"
    >
      <Link to={to}>
        <motion.div
          className={`flex flex-col ${isActive ? 'font-bold' : ''}`}
          variants={navRoll}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="h-6 flex items-center text-[#171717] dark:text-[#ededed]">
            {children}
          </span>
          <span className="h-6 flex items-center text-black/40 dark:text-white/40">
            {children}
          </span>
        </motion.div>
      </Link>
    </motion.li>
  );
}

export default RollingButton;
