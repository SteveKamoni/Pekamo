import React, { useState } from 'react';
import styles from '../styles/AccessoriesSection.module.scss';
import Prod1 from "../assets/chimney.jpg";
import Prod2 from "../assets/cast irorn.jpg";
import Prod3 from "../assets/stainless.jpg";
import Prod4 from "../assets/wood stove oven.jpg";
import Prod5 from "../assets/Prod5.jpg";

const accessoriesData = [
  {
    category: 'Chimneys',
    image: Prod1,
    specs: [
      { model: '6001', size: '4”', weight: '3 Kg', price: 'KSh 500' },
      { model: '6002', size: '5”', weight: '4 Kg', price: 'KSh 600' },
      { model: '6003', size: '6”', weight: '5 Kg', price: 'KSh 700' },
    ],
  },
  {
    category: 'Cast Iron Fire Crates',
    image: Prod2,
    specs: [
      { model: '6101', size: 'Small', weight: '6 Kg', price: 'KSh 1000' },
      { model: '6102', size: 'Medium', weight: '8 Kg', price: 'KSh 1200' },
      { model: '6103', size: 'Large', weight: '10 Kg', price: 'KSh 1500' },
    ],
  },
  {
    category: 'Stainless Sufurias',
    image: Prod3,
    specs: [
      { model: '6201', size: '20cm', weight: '1.5 Kg', price: 'KSh 800' },
      { model: '6202', size: '25cm', weight: '2 Kg', price: 'KSh 1000' },
      { model: '6203', size: '30cm', weight: '2.5 Kg', price: 'KSh 1200' },
    ],
  },
  {
    category: 'Woodstove Ovens',
    image: Prod4,
    specs: [
      { model: '5017', size: '18\"', weight: '20 Kg', price: 'KSh 2500' },
      { model: '5018', size: '20\"', weight: '22 Kg', price: 'KSh 2700' },
    ],
  },
  {
    category: 'Super-Combine Woodstove',
    image: Prod5,
    specs: [
      { size: '200 Litres Storage', price: 'KSh 310,000' },
      { size: '400 Litres Storage', price: 'KSh 360,000' },
      { size: '600 Litres Storage', price: 'KSh 380,000' },
      { size: '800 Litres Storage', price: 'KSh 580,000' },
    ],
  },
  {
    category: 'Electric Oven',
    image: Prod5,
    specs: [
      { capacity: '90 Loaves', price: 'KSh 350,000' },
      { capacity: '60 Loaves', price: 'KSh 280,000' },
      { capacity: '48 Loaves', price: 'KSh 250,000' },
    ],
  },
    {
    category: 'Proofer Cabinet',
    image: Prod5,
    specs: [
      { capacity: '90 Loaves', price: 'KSh 150,000' },
      { capacity: '60 Loaves', price: 'KSh 130,000' },
      { capacity: '48 Loaves', price: 'KSh 120,000' },
    ],
  }
];

const AccessoriesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = accessoriesData[activeIndex];

  // Dynamically extract column headers from the keys of the first spec item
  const tableHeaders = Object.keys(activeItem.specs[0]);

  return (
    <section className={styles.productSection}>
      <h2 className={styles.heading}>Accessories</h2>
      <p className={styles.subheading}>Choose from our various categories</p>

      {/* Tabs */}
      <div className={styles.tabs}>
        {accessoriesData.map((item, index) => (
          <button
            key={item.category}
            className={`${styles.tab} ${activeIndex === index ? styles.active : ''}`}
            onClick={() => setActiveIndex(index)}
          >
            {item.category}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className={styles.content}>
        <div className={styles.imageWrap}>
          <img src={activeItem.image} alt={activeItem.category} />
        </div>

        <div className={styles.tableWrap}>
          <h3>Table of the product categories</h3>

          <table className={styles.specTable}>
            <thead>
              <tr>
                {tableHeaders.map((header) => (
                  <th key={header}>{header.toUpperCase()}</th>
                ))}
              </tr>
            </thead>

            <tbody>
              {activeItem.specs.map((spec, i) => (
                <tr key={i}>
                  {tableHeaders.map((key) => (
                    <td key={key}>{spec[key] || '-'}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default AccessoriesSection;
