import React from 'react';
import styles from '../styles/LearnMoreHero.module.scss';
import handleNavClick from "../utility/handleNavClick"
import { Navigate } from 'react-router-dom';

const LearnMoreHero = () => {
  return (
    <section className={styles.hero} id='home'>
    <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1><span>Discover</span> Our <span>Wood</span>-Fueled <span>Solutions</span></h1>
        <p>Explore Pekamo’s full range of wood-powered systems — crafted for efficiency, durability, and sustainable performance.</p>
        <a href="#product" className={styles.cta} onClick={(e) => handleNavClick(e, "#product", Navigate) } >Get Started</a>
      </div>
    </section>
  );
};

export default LearnMoreHero;
