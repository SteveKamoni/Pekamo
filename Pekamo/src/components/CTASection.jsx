import React from 'react';
import styles from '../styles/CTASection.module.scss';
import bgImage from '../assets/logs.jpg'; // Replace with your actual image path

const CTASection = () => {
  return (
    <section
      className={styles.cta}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h2>Power Your Business With Smart, Wood-Fueled Energy Solutions</h2>
          <p className={styles.subtext}>
            Save up to 60% on fuel costs while improving air quality and kitchen safety.
          </p>
          <p className={styles.trust}>
            “We cut our monthly wood usage in half — and the kitchen is finally smoke-free.”  
            <span>— Sarah T., Hostel Manager</span>
          </p>
          <div className={styles.buttons}>
            <button className={styles.secondary}>Get Quote ↗</button>
          </div>
          <p className={styles.micro}>No obligation. Just real numbers.</p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
