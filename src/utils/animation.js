import { animate } from 'motion';

export const slide = (selector, speed, delay, start, end, prefersReducedMotion) => {
  const animation = animate(
    `${selector}`,
    {
      transform: [`translateX(${start}px)`, `translateX(${end}px)`, `translateX(${start}px)`]
    },
    {
      duration: speed,
      easing: ['linear', 'linear', 'linear'],
      delay: delay,
      repeat: Infinity
    }
  );

  if (prefersReducedMotion) {
    animation.pause();
  }
};

export const spin = (selector, speed, delay, prefersReducedMotion) => {
  const animation = animate(
    `${selector}`,
    { transform: 'rotate(360deg)' },
    { duration: speed, ease: 'linear', delay: delay, repeat: Infinity }
  );

  if (prefersReducedMotion) {
    animation.pause();
  }
};

export const pulse = (selector, speed, delay, prefersReducedMotion) => {
  const animation = animate(
    `${selector}`,
    { opacity: [0, 1, 0], transform: ['scale(0)', 'scale(1.5)', 'scale(0)'] },
    {
      duration: speed,
      easing: ['ease-in', 'ease-out', 'ease-in'],
      delay: delay,
      repeat: Infinity
    }
  );

  if (prefersReducedMotion) {
    animation.pause();
  }
};

export const swoosh = (selector, start, end, speed, delay, prefersReducedMotion) => {
  const animation = animate(
    `${selector}`,
    {
      transform: [
        `translateX(${start[0]}px) translateY(${start[1]}px)`,
        `translateX(${end[0]}px) translateY(${end[1]}px)`
      ],
      opacity: [0, 1, 0]
    },

    {
      duration: speed,
      ease: ['linear', 'linear', 'linear'],
      delay: delay,
      repeat: Infinity
    }
  );

  if (prefersReducedMotion) {
    animation.pause();
  }
};

export const fade = (selector, speed, delay, prefersReducedMotion) => {
  const animation = animate(
    `${selector}`,
    { opacity: [0.3, 1, 0.3] },
    {
      duration: speed,
      easing: ['ease-in', 'ease-out', 'ease-in'],
      delay: delay,
      repeat: Infinity
    }
  );

  if (prefersReducedMotion) {
    animation.pause();
  }
};
