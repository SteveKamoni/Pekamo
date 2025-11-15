import React from 'react';
import styles from '../styles/MissionSection.module.scss';
import { FaLightbulb, FaUsers, FaLeaf } from 'react-icons/fa';

const missions = [
  {
    icon: <FaLightbulb />,
    title: 'Smarter Wood-Fueled Engineering',
    description:
      'We design and build advanced wood-fueled stoves, ovens, and boilers that deliver maximum heat with minimal smoke. Our mission is to make traditional wood energy cleaner, safer, and more efficient for modern institutional kitchens.'
  },
  {
    icon: <FaUsers />,
    title: 'Empowering Local Craftsmanship',
    description:
      'We take pride in Kenyan engineering — sourcing local materials and employing skilled artisans to craft durable, high-performance systems that serve schools, hotels, and industries across the region.',
  },
  {
    icon: <FaLeaf />,
    title: ' Sustaining the Environment',
    description:
      'Every design at Pekamo aims to conserve resources and protect the environment. By cutting wood consumption by up to 75%, we help reduce deforestation, improve air quality, and create a sustainable future powered by smarter combustion.',
  },
];

const MissionSection = () => {
  return (
    <section className={styles.mission} id='mission'>
      <h2 className={styles.title}>Our Mission</h2>
      <div className={styles.cards}>
        {missions.map((mission, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.icon}>{mission.icon}</div>
            <h3 className={styles.cardTitle}>{mission.title}</h3>
            <p className={styles.cardDescription}>{mission.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MissionSection;
