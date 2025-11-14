import React from 'react';
import styles from '../styles/WhyUsSection.module.scss';
import { FaCheckCircle, FaCogs, FaUsers, FaLeaf } from 'react-icons/fa';

const reasons = [
  {
    icon: <FaCheckCircle />,
    title: 'Proven Field Experience',
    description:
      'Over five years of hands-on experience designing, installing, and maintaining wood-fueled systems for schools, hotels, and industries across Kenya.',
    theme: 'experience',
  },
  {
    icon: <FaCogs />,
    title: 'Engineering You Can Trust',
    description:
      'Every product is tested and refined to deliver consistent performance, durability, and real energy savings.',
    theme: 'engineering',
  },
  {
    icon: <FaUsers />,
    title: 'Customer-Driven Approach',
    description:
      'We listen, adapt, and design based on your actual kitchen needs — ensuring practical solutions that fit your operation, not the other way around.',
    theme: 'customer',
  },
  {
    icon: <FaLeaf />,
    title: 'Environmental Responsibility',
    description:
      'Our systems reduce smoke and cut wood consumption by up to 75%, helping protect forests and improve air quality.',
    theme: 'environment',
  },
];

const WhyUsSection = () => {
  return (
    <section className={styles.whyUs} id='why-us'>
      <h2 className={styles.title}>Why Choose Pekamo?</h2>
      <div className={styles.grid}>
        {reasons.map((reason, index) => (
          <div key={index} className={`${styles.card} ${styles[reason.theme]}`}>
            <div className={styles.icon}>{reason.icon}</div>
            <h3>{reason.title}</h3>
            <p>{reason.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyUsSection;
