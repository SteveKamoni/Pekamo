import React from 'react';
import styles from '../styles/CTASection.module.scss';
import bgImage from '../assets/logs.webp'; // Replace with your actual image path
import {motion} from "framer-motion"

const CTASection = () => {
  return (
    <section
      className={styles.cta}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className={styles.overlay}>
        <div className={styles.content}>

          <motion.h2
          initial={{opacity: 0, y: -50}}
          whileInView={{opacity: 1, y:0}}
          transition={{duration: 1}}
          viewport={{once: true}}
          >Power Your Business With Smart, Wood-Fueled Energy Solutions</motion.h2>
          <motion.p 
          className={styles.subtext}
          initial={{opacity: 0, y: -50}}
          whileInView={{opacity: 1, y:0}}
          transition={{duration: 1.2}}
          viewport={{once: true}}
          >
            Save up to 60% on fuel costs while improving air quality and kitchen safety.
          </motion.p>
          <motion.p 
          className={styles.trust}
          initial={{opacity: 0, y: -50}}
          whileInView={{opacity: 1, y:0}}
          transition={{duration: 1.4}}
          viewport={{once: true}}
          >
            “We cut our monthly wood usage in half — and the kitchen is finally smoke-free.”  
            <span>— Sarah T., Hostel Manager</span>
          </motion.p>
          <motion.div 
          className={styles.buttons}
          initial={{opacity: 0, y: 50}}
          whileInView={{opacity: 1, y:0}}
          transition={{duration: 1.5}}
          viewport={{once: true}}
          >
            <button className={styles.secondary}>Get Quote ↗</button>
          </motion.div>
          <p className={styles.micro}>No obligation. Just real numbers.</p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
