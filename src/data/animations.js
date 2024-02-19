export const homeAnimations = {
  downToUp: (delay, duration) => ({
    initial: { opacity: 0, y: 45 },
    whileInView: { opacity: 1, y: 0 },
    transition: { delay: delay, duration: duration },
    viewport: { once: true },
  }),
};

export const aboutAnimations = {
  downToUp: (delay = 0.5, duration = 1, y = 75) => ({
    initial: { opacity: 0, y: y },
    whileInView: { opacity: 1, y: 0 },
    transition: { delay: delay, duration: duration },
    viewport: { once: true },
  }),
  leftToRight: {
    initial: { opacity: 0, x: -75 },
    whileInView: { opacity: 1, x: 0 },
    transition: { delay: 0.5, duration: 1 },
    viewport: { once: true },
  },
  growUp: (delay) => ({
    initial: { opacity: 0, scale: 0, x: -25 },
    whileInView: { opacity: 1, scale: 1, x: 0 },
    transition: { delay: delay, duration: 0.5 },
    viewport: { once: true },
  }),
  rightToLeft: (delay = 0.5, duration = 1) => ({
    initial: { opacity: 0, x: 75 },
    whileInView: { opacity: 1, x: 0 },
    transition: { delay: delay, duration: duration },
    viewport: { once: true },
  }),
};

export const marketAnimations = {
  show: (delay) => ({
    initial: { opacity: 0, scale: 0.5 },
    whileInView: { opacity: 1, scale: 1 },
    transition: { delay: delay, duration: 0.5 },
    viewport: { once: true },
  }),
  leftToRight: (delay = 0.5) => ({
    initial: { opacity: 0, x: -75 },
    whileInView: { opacity: 1, x: 0 },
    transition: { delay: delay, duration: 0.5 },
    viewport: { once: true },
  }),
  downToUp: (delay = 0.5, duration = 1, y = 75) => ({
    initial: { opacity: 0, y: y },
    whileInView: { opacity: 1, y: 0 },
    transition: { delay: delay, duration: duration },
    viewport: { once: true },
  }),
};

export const currencyAnimations = {
  show: (delay) => ({
    initial: { opacity: 0, scale: 0.5 },
    whileInView: { opacity: 1, scale: 1 },
    transition: { delay: delay, duration: 0.5 },
    viewport: { once: true },
  }),
  leftToRight: (delay = 0.5) => ({
    initial: { opacity: 0, x: -75 },
    whileInView: { opacity: 1, x: 0 },
    transition: { delay: delay, duration: 0.5 },
    viewport: { once: true },
  }),
  downToUp: (delay = 0.5, duration = 1, y = 75) => ({
    initial: { opacity: 0, y: y },
    whileInView: { opacity: 1, y: 0 },
    transition: { delay: delay, duration: duration },
    viewport: { once: true },
  }),
};

export const faqAnimations = {
  show: (delay) => ({
    initial: { opacity: 0, scale: 0.5 },
    whileInView: { opacity: 1, scale: 1 },
    transition: { delay: delay, duration: 0.5 },
    viewport: { once: true },
  }),
  downToUp: (delay = 0.5, duration = 1) => ({
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { delay: delay, duration: duration },
    viewport: { once: true },
  }),
};

export const defaultAnimations = {
  downToUp: {
    initial: { opacity: 0, y: 100 },
    whileInView: { opacity: 1, y: 0 },
    transition: { delay: 0.5, duration: 1 },
    viewport: { once: true },
  },

  growUp: {
    initial: { opacity: 0, scale: 0.5, y: 100 },
    whileInView: { opacity: 1, scale: 1, y: 0 },
    transition: { delay: 0.2, duration: 0.8 },
    viewport: { once: true },
  },

  leftToRight: {
    initial: { opacity: 0, x: -300 },
    whileInView: { opacity: 1, x: 0 },
    transition: { delay: 0.5, duration: 1 },
    viewport: { once: true },
  },

  rightToLeft: {
    initial: { opacity: 0, x: 300 },
    whileInView: { opacity: 1, x: 0 },
    transition: { delay: 0.5, duration: 1 },
    viewport: { once: true },
  },

  rotateToLeft: {
    initial: { opacity: 0, rotate: 180 },
    whileInView: { opacity: 1, rotate: 0 },
    transition: { delay: 0.1, duration: 0.2 },
    viewport: { once: true },
  },

  leftToRightCard: {
    initial: { opacity: 0, x: -150 },
    whileInView: { opacity: 1, x: 0 },
    transition: { delay: 0.5, duration: 0.5 },
    viewport: { once: true },
  },

  rightToLeftCard: {
    initial: { opacity: 0, x: 150 },
    whileInView: { opacity: 1, x: 0 },
    transition: { delay: 0.5, duration: 0.5 },
    viewport: { once: true },
  },
};
