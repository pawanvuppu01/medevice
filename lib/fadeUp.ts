import { Variants } from "framer-motion";

export const fadeUp = (delay: number = 0): Variants => ({
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1.0]  // valid easing array for Framer Motion v12+
    },
  },
});
