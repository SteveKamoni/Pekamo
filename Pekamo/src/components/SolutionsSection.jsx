import React from "react";
import styles from "../styles/SolutionsSection.module.scss";
import { Link } from "react-router-dom";
import { HiOutlineOfficeBuilding, HiOutlineCog } from 'react-icons/hi';
import { MdLocalFireDepartment } from 'react-icons/md';
import { FaArrowRight } from "react-icons/fa";
import SolutionImage from "../assets/solutions.webp";

const SolutionsSection = () => {
  return (
    <section className={styles.main} id="solutions">
      <h1 className={styles.header}>Solutions</h1>
      <div className={styles.solutions}>
        <div className={styles.left}>
          <div className={styles.image}>
            <img src={SolutionImage} alt="Woodworking in action" />
          </div>
          <div className={styles.cta}>
            <p>
              Reach out to us, and our team will recommend a solution tailored
              to your energy needs. Pekamo — Engineering practical answers to
              your energy challenges.
            </p>
            <Link to="/products" className={styles.button}>
              Products <FaArrowRight />
            </Link>
          </div>
        </div>
        <div className={styles.content}>
          <h1 className={styles.subtitle}>
            Smart Engineering. Cleaner Combustion. Real Results.
          </h1>
          <h2 className={styles.title}>Our Smart Wood-Fueled Solutions</h2>
          <p className={styles.description}>At Pekamo Traders, we go beyond products — we deliver complete energy systems that help institutions cook, bake, and heat water efficiently while cutting costs and smoke emissions.</p>
          <div className={styles.block}>
            <HiOutlineOfficeBuilding className={styles.icon} />
            <div>
              <h3>Institutional Energy Systems</h3>
              <p>
                Custom-designed wood-fueled stoves, ovens, and boilers for
                improved energy use. Large-scale kitchens in schools, hostels,
                and hospitals.
              </p>
            </div>
          </div>

          <div className={styles.block}>
            <MdLocalFireDepartment className={styles.icon} />
            <div>
              <h3>Smoke & Heat Management</h3>
              <p>
                Integrated systems that reduce smoke, save more energy, and
                create safer, more comfortable kitchen environments.
              </p>
            </div>
          </div>

          <div className={styles.block}>
            <HiOutlineCog className={styles.icon} />
            <div>
              <h3>Efficiency Consulting & Installation</h3>
              <p>
                We assess, design, and install efficient wood-fueled energy
                systems. Improve performance and ensure long-term use and
                professionalism.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
