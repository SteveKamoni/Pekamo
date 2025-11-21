import React from "react";
import { motion } from "framer-motion";

// Central animation constants
export const ANIM = {
  duration: 0.5,
  ease: [0.4, 0, 0.2, 1],
  stagger: 0.15,
  fadeDistance: 30,
};

// Reusable Animate wrapper
export const Animate = ({ children, type = "fade", duration, ease }) => {
  const variants = {
    fade: { hidden: { opacity: 0 }, show: { opacity: 1 } },
    slideUp: { hidden: { opacity: 0, y: ANIM.fadeDistance }, show: { opacity: 1, y: 0 } },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={variants[type]}
      transition={{ duration: duration ?? ANIM.duration, ease: ease ?? ANIM.ease }}
    >
      {children}
    </motion.div>
  );
};

// Optional: Prebuilt wrappers
export const FadeInOnScroll = ({ children }) => (
  <Animate type="fade">{children}</Animate>
);

export const StaggerFade = ({ children }) => {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: ANIM.stagger } },
  };
  const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

  return (
    <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
      {React.Children.map(children, (child, i) => (
        <motion.div key={i} variants={item}>{child}</motion.div>
      ))}
    </motion.div>
  );
};

export const SlideInGrid = ({ children }) => {
  const container = { hidden: {}, show: { transition: { staggerChildren: 0.2 } } };
  const item = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } };

  return (
    <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
      {React.Children.map(children, (child, i) => (
        <motion.div key={i} variants={item}>{child}</motion.div>
      ))}
    </motion.div>
  );
};
