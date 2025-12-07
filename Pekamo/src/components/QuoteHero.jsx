import React from "react";
import styles from "../styles/QuoteHero.module.scss";
import handleNavClick from "../utility/handleNavClick";
import { motion } from "framer-motion";

const QuoteHero = () => {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.overlay}>
        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
          >
            Get a <span>Custom</span> Quote for Your <span>Wood</span>-Fueled{" "}
            <span>System</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            Tell us what you need, and we’ll build a solution that fits your
            space, capacity, and budget.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
          >
            From compact kitchen burners to industrial stoves — Pekamo delivers
            precision-engineered efficiency.
          </motion.p>

          <motion.a
            href="#form"
            className={styles.cta}
            onClick={(e) => handleNavClick(e, "#form")}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
          >
            Get Quote
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default QuoteHero;
