import React from "react";
import styles from "../styles/Hero.module.scss";
import Heroimg from "../assets/hero.webp"
import { Link, Navigate } from "react-router-dom";
import handleNavClick from "../utility/handleNavClick"

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <p className={styles.tagline}>Efficient Energy Solutions for Modern Kitchens</p>
        <h1 className={styles.title}>Trusted Manufacturers of Institutional Woodstoves, Boilers & Energy-Saving Systems</h1>
        <p className={styles.description}>
          Pikamo Traders specializes in high-performance cooking and heating systems designed for institutions, hotels, and industries. Our durable woodstoves, ovens, and boilers deliver reliable performance while cutting fuel costs and smoke emissions by up to 75%.  
        </p>
        <div className={styles.actions}>
            <a
              href="#products"
              className={styles.primaryBtn}
              onClick={(e) => handleNavClick(e, "#products", Navigate)}
            >
              Get Started
            </a>
          <Link to="/learn-more" className={styles.secondaryBtn}>Learn More</Link>
        </div>
      </div>

      <img src={Heroimg} alt="Hero" className={styles.backgroundImage} />
    </section>
  );
}

