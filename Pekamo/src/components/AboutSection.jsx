import React from 'react';
import styles from '../styles/AboutSection.module.scss';
import image1 from "../assets/hero.jpg"


const AboutSection = () => {
  return (
    <div className={styles.about} id='about'>
      <div className={styles.topSection}>
        <div className={styles.image}>
          <img src={image1} alt="PEKAMO team at work" />
        </div>
        <div className={styles.text}>
          <h2>Who are we at PEKAMO</h2>
         <p className={styles.description}>
            Pikamo Traders is a locally owned enterprise specializing in the design and manufacture of institutional woodstoves, ovens, boilers, and energy-efficient cooking systems. With years of innovation in eco-friendly heating technology, we help schools, hotels, and industries reduce fuel consumption while improving kitchen performance. Our products are built with precision and tested for durability, ensuring long-term reliability and easy maintenance. At Pikamo, we believe energy efficiency isn’t just about saving costs — it’s about creating cleaner, safer kitchens and a sustainable future.          
          </p>
           <p className={styles.short}>
            Pekamo Traders is a Kenyan engineering company dedicated to transforming how institutions cook, bake, and heat water. Since our founding, we’ve focused on energy efficiency, local craftsmanship, and environmentally responsible technologies that make large-scale kitchens cleaner, safer, and more affordable to operate.
           </p>
          <button className={styles.cta}>Reach Out</button>
        </div>
      </div>

      <div className={styles.collage}>
        <div className={styles.item}>
          <img src={image1} alt="Crafting stoves" />
          <div className={styles.box}>
            <h2>5+</h2>
            <h3>Years of building Jikos</h3>
            <p>For over five years, we’ve been engineering durable, fuel-efficient stoves designed to perform in the toughest institutional environments. Our commitment to quality craftsmanship and continuous improvement has positioned us as a trusted name in energy-saving kitchen systems.</p>
          </div>
        </div>
        <div className={styles.item}>
          <img src={image1} alt="Efficient systems" />
          <div className={styles.box}>
            <h2>5+</h2>
            <h3>Years of building Jikos</h3>
            <p>For over five years, we’ve been engineering durable, fuel-efficient stoves designed to perform in the toughest institutional environments. Our commitment to quality craftsmanship and continuous improvement has positioned us as a trusted name in energy-saving kitchen systems.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
