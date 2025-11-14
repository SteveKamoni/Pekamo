import React from 'react';
import styles from '../styles/ProductSection.module.scss';
import { Link } from 'react-router-dom';
import Image1 from "../assets/Prod1.jpg"
import Image2 from "../assets/Prod2.jpg"
import Image3 from "../assets/Prod3.jpg"
import Image4 from "../assets/Prod4.jpg"
import Image5 from "../assets/Prod5.jpg"
import Image6 from "../assets/Prod6.jpg"
import Image7 from "../assets/Prod7.jpg"
import Image8 from "../assets/Prod8.jpg"

const products = [
  {
    title: 'Institutional Jikos',
    description:
      'Durable, large-capacity woodless stoves designed for schools, NGOs, and organizations that cook for many people.',
    image: Image1,
  },
  {
    title: 'Baking Ovens',
    description:
      'Designed for baking bread and other baked delicacies. Uses wood or briquettes and retains heat efficiently.',
    image: Image2,
  },
  {
    title: 'Boilers & Water Heaters',
    description:
      'Ideal for institutions needing hot water regularly. Efficient heating with reduced fuel consumption.',
    image: Image3,
  },
  {
    title: 'Energy-Saving Stoves',
    description:
      'Compact, fuel-efficient stoves for households. Minimizes smoke and optimizes fuel use.',
    image: Image4,
  },
  {
    title: 'Metallic Cooking Pots (Sufurias)',
    description:
      'High-quality, durable metallic pots for institutional use. Available in various sizes.',
    image: Image5,
  },
  {
    title: 'Grills & Roasters',
    description:
      'Custom wood or charcoal grills and roasters. Consistent heat and efficient fuel use.',
    image: Image6,
  },
  {
    title: 'Chimney & Smoke Extraction Systems',
    description:
      'Improves air quality in institutional kitchens. Reduces indoor smoke and enhances working conditions.',
    image: Image7,
  },
  {
    title: 'Custom Engineering Solutions',
    description:
      'Tailored stoves and heating systems for specific institutional needs. Built for safety and reliability.',
    image: Image8
  },
];

const ProductSection = () => {
  return (
    <section className={styles.products} id='products'>
      <h2 className={styles.title}>Our Products</h2>
      <div className={styles.grid}>
        {products.map((product, index) => (
          <div key={index + product.title} className={styles.card}>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <div className={styles.actions}>
              <Link to={`/products/${index}`} className={styles.buttonPrime}>
                Learn More
              </Link>
              <Link to={`/quote/${index}`} className={styles.buttonSec}>
                Quote
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
