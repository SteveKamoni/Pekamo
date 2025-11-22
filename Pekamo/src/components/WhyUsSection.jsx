import React from 'react';
import styles from '../styles/WhyUsSection.module.scss';
import { FaCheckCircle, FaCogs, FaUsers, FaLeaf } from 'react-icons/fa';
import { motion } from "framer-motion";

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
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Why Choose Pekamo?
      </motion.h2>

      <div className={styles.grid}>
        {reasons.map((reason, index) => (
          <motion.div
            key={index}
            className={`${styles.card} ${styles[reason.theme]}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              className={styles.icon}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {reason.icon}
            </motion.div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {reason.title}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              {reason.description}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyUsSection;
