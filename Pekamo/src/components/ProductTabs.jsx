import React, { useState } from "react";
import styles from "../styles/ProductTabs.module.scss";
import clsx from "clsx";
import Prod1 from "../assets/Prod1.jpg";
import Prod2 from "../assets/Prod2.jpg";
import Prod3 from "../assets/Prod3.jpg";
import Prod4 from "../assets/Prod4.jpg";
import Prod5 from "../assets/Prod5.jpg";
import Prod6 from "../assets/Prod6.jpg";
import Prod7 from "../assets/Prod7.jpg";
import Prod8 from "../assets/Prod8.jpg";



const productsData = [
  // -----------------------------
  // 1. Single Burner Woodstove
  // -----------------------------
  {
    category: 'Single Burner Woodstove',
    image: Prod1,
    specs: [
      { size: '50 Litres', fuel: '50–100', price: 'KSh 75,000' },
      { size: '60 Litres', fuel: '100–150', price: 'KSh 85,000' },
      { size: '80 Litres', fuel: '150–200', price: 'KSh 100,000' },
      { size: '100 Litres', fuel: '200–300', price: 'KSh 125,000' },
      { size: '120 Litres', fuel: '300–350', price: 'KSh 150,000' },
      { size: '150 Litres', fuel: '350–500', price: 'KSh 175,000' },
      { size: '200 Litres', fuel: '500–600', price: 'KSh 200,000' },
      { size: '300 Litres', fuel: '600–800', price: 'KSh 250,000' },
      { size: '400 Litres', fuel: '800–1200', price: 'KSh 280,000' },
      { size: '500 Litres', fuel: '1200–1600', price: 'KSh 300,000' },
    ],
  },

  // -----------------------------
  // 2. Double Burner Woodstove
  // -----------------------------
  {
    category: 'Double Burner Woodstove (1 or 2 Door)',
    image: Prod2,
    specs: [
      { size: '50 Litres', people: '50–100', price: 'KSh 75,000' },
      { size: '60 Litres', people: '100–150', price: 'KSh 85,000' },
      { size: '80 Litres', people: '150–200', price: 'KSh 100,000' },
      { size: '100 Litres', people: '200–300', price: 'KSh 125,000' },
      { size: '120 Litres', people: '300–350', price: 'KSh 150,000' },
      { size: '150 Litres', people: '350–500', price: 'KSh 175,000' },
      { size: '200 Litres', people: '500–600', price: 'KSh 200,000' },
      { size: '300 Litres', people: '600–800', price: 'KSh 250,000' },
      { size: '400 Litres', people: '800–1200', price: 'KSh 280,000' },
      { size: '500 Litres', people: '1200–1600', price: 'KSh 300,000' },
    ],
  },

  // -----------------------------
  // 3. Four Burner Woodstove
  // -----------------------------
  {
    category: 'Four Burner Woodstove',
    image: Prod3,
    specs: [
      { size: '40 Litres (10 x 4)', price: 'KSh 110,000' },
      { size: '80 Litres (20 x 4)', price: 'KSh 130,000' },
      { size: 'Mild Steel Pot', price: 'KSh 110,000' },
      { size: 'Stainless Steel Pot', price: 'KSh 180,000' },
    ],
  },

  // -----------------------------
  // 4. Woodstove Ovens & Proofer Cabinets
  // -----------------------------
  {
    category: 'Woodstove Ovens & Firewood Proofer Cabinets',
    image: Prod4,
    specs: [
      { product: 'Woodstove Oven', capacity: '24 Loaves', price: 'KSh 90,000' },
      { product: 'Woodstove Oven', capacity: '48 Loaves', price: 'KSh 100,000' },
      { product: 'Proofer Cabinet', capacity: '48 Loaves', price: 'KSh 120,000' },
      { product: 'Proofer Cabinet', capacity: '90 Loaves', price: 'KSh 150,000' },
    ],
  },

  // -----------------------------
  // 5. Water Heater – Kuni Booster
  // -----------------------------
  {
    category: 'Water Heater – Kuni Booster',
    image: Prod5,
    specs: [
      { size: '100 Litres Booster (Low Pressure)', price: 'KSh 110,000' },
      { size: '200 Litres Booster (Low Pressure)', price: 'KSh 130,000' },
      { size: '200 Litres Booster (High Pressure)', price: 'KSh 450,000' },
      { size: '500 Litres Booster (High Pressure)', price: 'KSh 650,000' },
      { size: '1000 Litres Booster (High Pressure)', price: 'KSh 780,000' },
    ],
  },

  // -----------------------------
  // 6. Insulated Tea Urns
  // -----------------------------
  {
    category: 'Insulated Tea Urns',
    image: Prod6,
    specs: [
      { size: '60 Litres', price: 'KSh 125,000' },
      { size: '80 Litres', price: 'KSh 150,000' },
      { size: '100 Litres', price: 'KSh 175,000' },
      { size: '120 Litres', price: 'KSh 200,000' },
    ],
  },

  // -----------------------------
  // 7. Stainless Steel Tables
  // -----------------------------
  {
    category: 'Stainless Steel Tables',
    image: Prod7,
    specs: [
      { size: 'Large Size', price: 'KSh 55,000' },
      { size: 'Small Size', price: 'KSh 32,000' },
    ],
  },

  // -----------------------------
  // 8. Super-Combine Woodstove
  // -----------------------------
  {
    category: 'Super-Combine Woodstove',
    image: Prod8,
    specs: [
      { size: '200 Litres Storage', price: 'KSh 310,000' },
      { size: '400 Litres Storage', price: 'KSh 360,000' },
      { size: '600 Litres Storage', price: 'KSh 380,000' },
      { size: '800 Litres Storage', price: 'KSh 560,000' },
    ],
  },

  // -----------------------------
  // 9. Stainless Steel Sauce Pans
  // -----------------------------
//   {
//     // category: 'Stainless Steel Sauce Pans',
//     // image: '/images/products/sauce-pans.jpg',
//     // specs: [
//     //   { size: '50 Litres', price: 'KSh 50,000' },
//     //   { size: '100 Litres', price: 'KSh 60,000' },
//     //   { size: '150 Litres', price: 'KSh 80,000' },
//     //   { size: '200 Litres', price: 'KSh 90,000' },
//     //   { size: '300 Litres', price: 'KSh 120,000' },
//     //   { size: '400 Litres', price: 'KSh 150,000' },
//     //   { size: '600 Litres', price: 'KSh 200,000' },
//     // ],
//   },

  // -----------------------------
  // 10. Chimneys
  // -----------------------------
//   {
//     // category: 'Chimneys',
//     // image: '/images/products/chimney.jpg',
//     // specs: [
//     //   { size: '12 cm Diameter', price: 'KSh 12,000' },
//     //   { size: '15 cm Diameter', price: 'KSh 15,000' },
//     //   { size: '20 cm Diameter', price: 'KSh 17,000' },
//     //   { size: '25 cm Diameter', price: 'KSh 20,000' },
//     //   { size: '30 cm Diameter', price: 'KSh 25,000' },
//     // ],
//   },

  // -----------------------------
  // 11. Cast Iron Fire Grates
  // -----------------------------
//   {
//     // category: 'Cast Iron Fire Grates',
//     // image: '/images/products/fire-grates.jpg',
//     // specs: [
//     //   { size: '15 cm Diameter', price: 'KSh 1,500' },
//     //   { size: '20 cm Diameter', price: 'KSh 2,000' },
//     //   { size: '25 cm Diameter', price: 'KSh 3,000' },
//     //   { size: '30 cm Diameter', price: 'KSh 4,000' },
//     //   { size: '35 cm Diameter', price: 'KSh 7,000' },
//     // ],
//   },
];

export default function ProductTabs() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeProduct = productsData[activeIndex];

  // Dynamically extract columns from the first spec entry
  const columns = activeProduct.specs.length
    ? Object.keys(activeProduct.specs[0])
    : [];

  return (
    <section className={styles.productSection} id="products">
      <h2 className={styles.heading}>Products</h2>
      <p className={styles.subheading}>Choose from our various categories</p>

      {/* Tabs */}
      <div className={styles.tabs}>
        {productsData.map((product, index) => (
          <button
            key={product.category}
            className={clsx(styles.tab, index === activeIndex && styles.active)}
            onClick={() => setActiveIndex(index)}
          >
            {product.category}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className={styles.content}>
        <div className={styles.imageWrap}>
          <img src={activeProduct.image} alt={activeProduct.category} />
        </div>

        <div className={styles.tableWrap}>
          <table className={styles.specTable}>
            <thead>
              <tr>
                {columns.map((col) => (
                  <th key={col}>{col.charAt(0).toUpperCase() + col.slice(1)}</th>
                ))}
              </tr>
            </thead>

            <tbody>
              {activeProduct.specs.map((spec, idx) => (
                <tr key={idx}>
                  {columns.map((col) => (
                    <td key={col}>{spec[col]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
