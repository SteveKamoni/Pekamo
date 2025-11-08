import React from "react";
import styles from "../styles/Hero.module.scss";
import Heroimg from "../assets/hero.jpg"


export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <p className={styles.tagline}>Efficient Energy Solutions for Modern Kitchens</p>
        <h1 className={styles.title}>Trusted Manufacturers of Institutional Woodstoves, Boilers & Energy-Saving Systems</h1>
        <p className={styles.description}>
          Pikamo Traders specializes in high-performance cooking and heating systems designed for institutions, hotels, and industries. Our durable woodstoves, ovens, and boilers deliver reliable performance while cutting fuel costs and smoke emissions by up to 75%.  
        </p>
        <div className={styles.actions}>
          <button className={styles.primaryBtn}>Get Started</button>
          <button className={styles.secondaryBtn}>Learn More</button>
        </div>
      </div>

      <img src={Heroimg} alt="Hero" className={styles.backgroundImage} />
    </section>
  );
}

