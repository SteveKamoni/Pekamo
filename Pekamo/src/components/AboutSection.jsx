import React from 'react';
import styles from '../styles/AboutSection.module.scss';
import image1 from "../assets/About-intro.webp";
import image2 from "../assets/Years-img.webp";
import image3 from "../assets/Customer.webp";
import handleNavClick from "../utility/handleNavClick";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <div className={styles.about} id='about'>
      {/* Top Section */}
      <div className={styles.topSection}>
        <motion.div
          className={styles.image}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img src={image1} alt="PEKAMO team at work" />
        </motion.div>

        <motion.div
          className={styles.text}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2>Who are we at PEKAMO</h2>
          <motion.p
            className={styles.description}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Pikamo Traders is a locally owned enterprise specializing in the design and manufacture of institutional woodstoves, ovens, boilers, and energy-efficient cooking systems. With years of innovation in eco-friendly heating technology, we help schools, hotels, and industries reduce fuel consumption while improving kitchen performance. Our products are built with precision and tested for durability, ensuring long-term reliability and easy maintenance. At Pikamo, we believe energy efficiency isn’t just about saving costs — it’s about creating cleaner, safer kitchens and a sustainable future.
          </motion.p>
          <motion.p
            className={styles.short}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Pekamo Traders is a Kenyan engineering company dedicated to transforming how institutions cook, bake, and heat water. Since our founding, we’ve focused on energy efficiency, local craftsmanship, and environmentally responsible technologies that make large-scale kitchens cleaner, safer, and more affordable to operate.
          </motion.p>
          <motion.a
            href="#contact"
            className={styles.cta}
            onClick={(e) => handleNavClick(e, "#contact")}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            Reach Out
          </motion.a>
        </motion.div>
      </div>

      {/* Collage Section */}
      <div className={styles.collage}>
        {[{ img: image2, alt: "Crafting stoves" }, { img: image3, alt: "Efficient systems" }].map((item, i) => (
          <motion.div
            key={i}
            className={styles.item}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.3 }}
            viewport={{ once: true }}
          >
            <img src={item.img} alt={item.alt} />
            <motion.div
              className={styles.box}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h2>5+</h2>
              <h3>Years of building Jikos</h3>
              <p>
                For over five years, we’ve been engineering durable, fuel-efficient stoves designed to perform in the toughest institutional environments. Our commitment to quality craftsmanship and continuous improvement has positioned us as a trusted name in energy-saving kitchen systems.
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AboutSection;
