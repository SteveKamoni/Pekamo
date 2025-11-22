import React from "react";
import styles from "../styles/SolutionsSection.module.scss";
import { Link } from "react-router-dom";
import { HiOutlineOfficeBuilding, HiOutlineCog } from 'react-icons/hi';
import { MdLocalFireDepartment } from 'react-icons/md';
import { FaArrowRight } from "react-icons/fa";
import SolutionImage from "../assets/solutions.webp";
import { motion } from "framer-motion";

const SolutionsSection = () => {
  return (
    <section className={styles.main} id="solutions">
      <motion.h1
        className={styles.header}
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Solutions
      </motion.h1>

      <div className={styles.solutions}>
        {/* Left side */}
        <motion.div
          className={styles.left}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className={styles.image}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img src={SolutionImage} alt="Woodworking in action" />
          </motion.div>

          <motion.div
            className={styles.cta}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p>
              Reach out to us, and our team will recommend a solution tailored
              to your energy needs. Pekamo — Engineering practical answers to
              your energy challenges.
            </p>
            <Link to="/products" className={styles.button}>
              Products <FaArrowRight />
            </Link>
          </motion.div>
        </motion.div>

        {/* Right side content */}
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h1
            className={styles.subtitle}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Smart Engineering. Cleaner Combustion. Real Results.
          </motion.h1>

          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Our Smart Wood-Fueled Solutions
          </motion.h2>

          <motion.p
            className={styles.description}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
          >
            At Pekamo Traders, we go beyond products — we deliver complete energy systems that help institutions cook, bake, and heat water efficiently while cutting costs and smoke emissions.
          </motion.p>

          {/* Blocks with staggered animation */}
          {[ 
            { icon: <HiOutlineOfficeBuilding className={styles.icon} />, title: "Institutional Energy Systems", text: "Custom-designed wood-fueled stoves, ovens, and boilers for improved energy use. Large-scale kitchens in schools, hostels, and hospitals." },
            { icon: <MdLocalFireDepartment className={styles.icon} />, title: "Smoke & Heat Management", text: "Integrated systems that reduce smoke, save more energy, and create safer, more comfortable kitchen environments." },
            { icon: <HiOutlineCog className={styles.icon} />, title: "Efficiency Consulting & Installation", text: "We assess, design, and install efficient wood-fueled energy systems. Improve performance and ensure long-term use and professionalism." }
          ].map((block, i) => (
            <motion.div
              key={i}
              className={styles.block}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 + i * 0.2 }}
              viewport={{ once: true }}
            >
              {block.icon}
              <div>
                <h3>{block.title}</h3>
                <p>{block.text}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionsSection;
