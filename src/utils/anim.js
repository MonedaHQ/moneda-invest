export const overlayVariants = {
  initial: { opacity: 0.3 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0 },
};

export const menuSlide = {
  initial: { x: 'calc(100% + 100px)' },
  enter: { x: '0', transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } },
  exit: {
    x: 'calc(100% + 100px)',
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
};

export const slide = {
  initial: { x: 80, opacity: 0 },
  enter: (i) => ({
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1], delay: 0.08 * i },
  }),
  exit: (i) => ({
    x: 80,
    opacity: 0,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.02 * i },
  }),
};

export const slideUp = {
  initial: { y: 80, opacity: 0 },
  enter: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1], delay: 0.08 },
  },
};

export const scaleUpSlow = {
  initial: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0.1,
      type: 'spring',
      mass: 1,
      damping: 12,
    },
  },
};

export const headerAnimation = {
  initial: { y: '100%' },
  enter: {
    y: '0',
    transition: {
      duration: 0.75,
      ease: [0.33, 1, 0.68, 1],
      delay: 0.075,
      repeat: Infinity,
      repeatType: 'loop',
      repeatDelay: 20,
    },
  },
};

export const delayedFade = {
  initial: { opacity: 0 },
  visible: { opacity: 1, transition: { delay: 0.6 } },
};
