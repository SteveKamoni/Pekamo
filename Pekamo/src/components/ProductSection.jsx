import React from "react";
import styles from "../styles/ProductSection.module.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Image1 from "../assets/Prod1.webp";
import Image2 from "../assets/Prod2.webp";
import Image3 from "../assets/Prod3.webp";
import Image4 from "../assets/Prod4.webp";
import Image5 from "../assets/Prod5.webp";
import Image6 from "../assets/Prod6.webp";
import Image7 from "../assets/Prod7.webp";
import Image8 from "../assets/Prod8.webp";

const products = [
  {
    title: "Institutional Jikos",
    description:
      "Durable, large-capacity woodless stoves designed for schools, NGOs, and organizations that cook for many people.",
    image: Image1,
  },
  {
    title: "Baking Ovens",
    description:
      "Designed for baking bread and other baked delicacies. Uses wood or briquettes and retains heat efficiently.",
    image: Image2,
  },
  {
    title: "Boilers & Water Heaters",
    description:
      "Ideal for institutions needing hot water regularly. Efficient heating with reduced fuel consumption.",
    image: Image3,
  },
  {
    title: "Energy-Saving Stoves",
    description:
      "Compact, fuel-efficient stoves for households. Minimizes smoke and optimizes fuel use.",
    image: Image4,
  },
  {
    title: "Metallic Cooking Pots (Sufurias)",
    description:
      "High-quality, durable metallic pots for institutional use. Available in various sizes.",
    image: Image5,
  },
  {
    title: "Grills & Roasters",
    description:
      "Custom wood or charcoal grills and roasters. Consistent heat and efficient fuel use.",
    image: Image6,
  },
  {
    title: "Chimney & Smoke Extraction Systems",
    description:
      "Improves air quality in institutional kitchens. Reduces indoor smoke and enhances working conditions.",
    image: Image7,
  },
  {
    title: "Custom Engineering Solutions",
    description:
      "Tailored stoves and heating systems for specific institutional needs. Built for safety and reliability.",
    image: Image8,
  },
];

const ProductSection = () => {
  return (
    <section className={styles.products} id="products">
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Our Products
      </motion.h2>

      <div className={styles.grid}>
        {products.map((product, index) => (
          <motion.div
            key={index + product.title}
            className={styles.card}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <motion.img
              src={product.image}
              alt={product.title}
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            />
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {product.title}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {product.description}
            </motion.p>
            <motion.div
              className={styles.actions}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Link to={`/products/${index}`} className={styles.buttonPrime}>
                Learn More
              </Link>
              <Link to={`/quote/${index}`} className={styles.buttonSec}>
                Quote
              </Link>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
