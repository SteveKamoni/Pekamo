import React from "react";
import styles from "../styles/Hero.module.scss";
import Heroimg from "../assets/hero.jpg"


export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <p className={styles.tagline}>Grow With Intelligence</p>
        <h1 className={styles.title}>We Build Digital Systems That Scale</h1>
        <p className={styles.description}>
          Structured workflows, optimized performance, and scalable architecture
          designed around your business goals.
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

