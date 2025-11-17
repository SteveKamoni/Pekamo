import React from "react";
import styles from "../styles/QuoteHero.module.scss";
import handleNavClick from "../utility/handleNavClick"
import { Navigate } from "react-router-dom";


const QuoteHero = () => {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1>Get a Custom Quote for Your Wood-Fueled System</h1>
          <p>
            Tell us what you need, and we’ll build a solution that fits your
            space, capacity, and budget.
          </p>
          <p> From compact kitchen burners to
            industrial stoves — Pekamo delivers precision-engineered efficiency.
            </p>
          <a href="#form" className={styles.cta} onClick={(e) => handleNavClick(e, "#form",Navigate)} >
            Get Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default QuoteHero;
