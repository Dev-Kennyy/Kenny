export const easeOutExpo = [0.16, 1, 0.3, 1];
export const easeMask = [0.22, 1, 0.36, 1];
export const easeArrow = [0.4, 0, 0.2, 1];

export const viewportOnce = { once: true };
export const viewportTight = { once: true, margin: '-50px' };

export const maskLine = {
  hidden: { y: '100%' },
  visible: {
    y: 0,
    transition: { duration: 0.8, ease: easeMask },
  },
};

export const maskParent = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

export const staggerGrid = {
  initial: {},
  animate: {
    transition: { staggerChildren: 0.08 },
  },
};

export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOutExpo },
  },
};

export const arrowRoll = {
  initial: { x: '-100%' },
  hover: { x: '0%' },
};

export const navRoll = {
  initial: { y: 0 },
  hover: { y: '-50%' },
};

export const reduced = {
  initial: { opacity: 1, y: 0, x: 0, scale: 1 },
  animate: { opacity: 1, y: 0, x: 0, scale: 1 },
};
