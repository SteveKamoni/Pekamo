import React from "react";
import styles from "../styles/Hero.module.scss";
import Heroimg from "../assets/hero.webp";
import { Link, Navigate } from "react-router-dom";
import handleNavClick from "../utility/handleNavClick";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.overlay}></div>

      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Typewriter tagline */}
        <motion.p
          className={styles.tagline}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Efficient Energy Solutions for Modern Kitchens
        </motion.p>

        {/* Title */}
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
        >
          Trusted Manufacturers of Institutional Woodstoves, Boilers & Energy-Saving Systems
        </motion.h1>

        {/* Description */}
        <motion.p
          className={styles.description}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Pikamo Traders specializes in high-performance cooking and heating systems designed for institutions, hotels, and industries. Our durable woodstoves, ovens, and boilers deliver reliable performance while cutting fuel costs and smoke emissions by up to 75%.
        </motion.p>

        {/* Buttons wrapped in fade-in animation */}
        <motion.div
          className={styles.actions}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a
            href="#products"
            className={styles.primaryBtn}
            onClick={(e) => handleNavClick(e, "#products", Navigate)}
          >
            Get Started
          </a>
          <Link to="/learn-more" className={styles.secondaryBtn}>
            Learn More
          </Link>
        </motion.div>
      </motion.div>

      <motion.img
        src={Heroimg}
        alt="Hero"
        className={styles.backgroundImage}
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
    </section>
  );
}
