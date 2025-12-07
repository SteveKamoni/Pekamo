import React from 'react';
import styles from '../styles/LearnMoreHero.module.scss';
import { motion } from 'framer-motion';

// Smooth scroll helper
const scrollToSection = (e, selector) => {
  e.preventDefault();
  const target = document.querySelector(selector);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

const LearnMoreHero = () => {
  return (
    <section className={styles.hero} id='home'>
      {/* Overlay */}
      <motion.div 
        className={styles.overlay}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Hero Content */}
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <span>Discover</span> Our <span>Wood</span>-Fueled <span>Solutions</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          Explore Pekamo’s full range of wood-powered systems — crafted for efficiency, durability, and sustainable performance.
        </motion.p>

        <motion.a
          href="#product"
          className={styles.cta}
          onClick={(e) => scrollToSection(e, "#product")}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          whileHover={{ scale: 1.05 }}
        >
          Get Started
        </motion.a>
      </motion.div>
    </section>
  );
};

export default LearnMoreHero;
