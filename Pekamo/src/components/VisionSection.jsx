import React from 'react';
import styles from '../styles/VisionSection.module.scss';
import visionImage from "../assets/Vision.jpg"

const VisionSection = () => {
  return (
    <section className={styles.vision} id='vision'>
      <div className={styles.image}>
        <img
          src={visionImage}
          alt="Vision of sustainable energy solutions"
        />
      </div>
      <div className={styles.text}>
        <h2 className={styles.title}>What is our vision?</h2>
        <p className={styles.description}>
        Our vision is to lead Africa’s transition toward sustainable, energy-efficient cooking and heating systems — where every institution, from schools to hotels, can prepare meals efficiently while protecting the environment and reducing costs 
        </p>
        <h3 className={styles.statement}>Building a cleaner, smarter future.</h3>
        <p className={styles.description}>
          At Pekamo Traders, we envision a future where modern engineering and local innovation work hand in hand to eliminate smoke-filled kitchens, cut down firewood consumption, and create long-lasting solutions that empower communities. Through continuous improvement and responsible manufacturing, we aim to set new standards in quality, efficiency, and sustainability across East Africa.
        </p>
      </div>
    </section>
  );
};

export default VisionSection;
