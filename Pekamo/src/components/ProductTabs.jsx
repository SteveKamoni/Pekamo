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
  // 1. Single Burner Woodstove (has mild/stainless prices)
  {
    category: "Single Burner Woodstove",
    image: Prod1,
    specs: [
      { size: "50 Litres", People: "50–100", mildPrice: "KSh 75,000", stainlessPrice: "KSh 95,000" },
      { size: "60 Litres", People: "100–150", mildPrice: "KSh 85,000", stainlessPrice: "KSh 110,000" },
      { size: "80 Litres", People: "150–200", mildPrice: "KSh 100,000", stainlessPrice: "KSh 130,000" },
      { size: "100 Litres", People: "200–300", mildPrice: "KSh 125,000", stainlessPrice: "KSh 160,000" },
      { size: "120 Litres", People: "300–350", mildPrice: "KSh 150,000", stainlessPrice: "KSh 190,000" },
      { size: "150 Litres", People: "350–500", mildPrice: "KSh 175,000", stainlessPrice: "KSh 210,000" },
      { size: "200 Litres", People: "500–600", mildPrice: "KSh 200,000", stainlessPrice: "KSh 250,000" },
      { size: "300 Litres", People: "600–800", mildPrice: "KSh 250,000", stainlessPrice: "KSh 310,000" },
      { size: "400 Litres", People: "800–1200", mildPrice: "KSh 280,000", stainlessPrice: "KSh 350,000" },
      { size: "500 Litres", People: "1200–1600", mildPrice: "KSh 300,000", stainlessPrice: "KSh 380,000" },
    ],
  },

  // 2. Double Burner Woodstove (has mild/stainless prices)
  {
    category: "Double Burner Woodstove (1 or 2 Door)",
    image: Prod2,
    specs: [
      { size: "50 Litres", people: "50–100", mildPrice: "KSh 75,000", stainlessPrice: "KSh 95,000" },
      { size: "60 Litres", people: "100–150", mildPrice: "KSh 85,000", stainlessPrice: "KSh 110,000" },
      { size: "80 Litres", people: "150–200", mildPrice: "KSh 100,000", stainlessPrice: "KSh 130,000" },
      { size: "100 Litres", people: "200–300", mildPrice: "KSh 125,000", stainlessPrice: "KSh 160,000" },
      { size: "120 Litres", people: "300–350", mildPrice: "KSh 150,000", stainlessPrice: "KSh 190,000" },
      { size: "150 Litres", people: "350–500", mildPrice: "KSh 175,000", stainlessPrice: "KSh 210,000" },
      { size: "200 Litres", people: "500–600", mildPrice: "KSh 200,000", stainlessPrice: "KSh 250,000" },
      { size: "300 Litres", people: "600–800", mildPrice: "KSh 250,000", stainlessPrice: "KSh 310,000" },
      { size: "400 Litres", people: "800–1200", mildPrice: "KSh 280,000", stainlessPrice: "KSh 350,000" },
      { size: "500 Litres", people: "1200–1600", mildPrice: "KSh 300,000", stainlessPrice: "KSh 380,000" },
    ],
  },

  // 3. Four Burner Woodstove (some rows are mild-only or stainless-only)
  {
    category: "Four Burner Woodstove",
    image: Prod3,
    specs: [
      { size: "40 Litres (10 x 4)", mildPrice: "KSh 110,000", stainlessPrice: "KSh 160,000" },
      { size: "80 Litres (20 x 4)", mildPrice: "KSh 130,000", stainlessPrice: "KSh 190,000" },
      // Mild pot (no stainless price)
      { size: "Mild Steel Pot", mildPrice: "KSh 110,000" },
      // Stainless pot (no mild price)
      { size: "Stainless Steel Pot", stainlessPrice: "KSh 180,000" },
    ],
  },

  // 4. Woodstove Ovens & Proofer Cabinets (single price)
  {
    category: "Woodstove Ovens & Firewood Proofer Cabinets",
    image: Prod4,
    specs: [
      { product: "Woodstove Oven", capacity: "24 Loaves", price: "KSh 90,000" },
      { product: "Woodstove Oven", capacity: "48 Loaves", price: "KSh 100,000" },
      { product: "Proofer Cabinet", capacity: "48 Loaves", price: "KSh 120,000" },
      { product: "Proofer Cabinet", capacity: "90 Loaves", price: "KSh 150,000" },
    ],
  },

  // 5. Water Heater – Kuni Booster (single price)
  {
    category: "Water Heater – Kuni Booster",
    image: Prod5,
    specs: [
      { size: "100 Litres Booster (Low Pressure)", price: "KSh 110,000" },
      { size: "200 Litres Booster (Low Pressure)", price: "KSh 130,000" },
      { size: "200 Litres Booster (High Pressure)", price: "KSh 450,000" },
      { size: "500 Litres Booster (High Pressure)", price: "KSh 650,000" },
      { size: "1000 Litres Booster (High Pressure)", price: "KSh 780,000" },
    ],
  },

  // 6. Insulated Tea Urns
  {
    category: "Insulated Tea Urns",
    image: Prod6,
    specs: [
      { size: "60 Litres", price: "KSh 125,000" },
      { size: "80 Litres", price: "KSh 150,000" },
      { size: "100 Litres", price: "KSh 175,000" },
      { size: "120 Litres", price: "KSh 200,000" },
    ],
  },

  // 7. Stainless Steel Tables
  {
    category: "Stainless Steel Tables",
    image: Prod7,
    specs: [
      { size: "Large Size", price: "KSh 55,000" },
      { size: "Small Size", price: "KSh 32,000" },
    ],
  },

  // 8. Super-Combine Woodstove (keeps single price and normalized storage)
  {
    category: "Super-Combine Woodstove",
    image: Prod8,
    specs: [
      { size: "200 Litres", storage: "400", price: "KSh 310,000" },
      { size: "300 Litres", storage: "500", price: "KSh 360,000" },
      { size: "400 Litres", storage: "600", price: "KSh 380,000" },
      { size: "600 Litres", storage: "800", price: "KSh 580,000" },
    ],
  },
];

export default function ProductTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProduct = productsData[activeIndex];

  // Build ordered columns: union of keys in all specs, then order by priority
  const allKeys = Array.from(
    new Set(productsData[activeIndex].specs.flatMap((s) => Object.keys(s)))
  );

  const priority = [
    "model",
    "product",
    "size",
    "capacity",
    "People",
    "people",
    "storage",
    "weight",
    "mildPrice",
    "stainlessPrice",
    "price",
  ];

  // Put priority keys first (if present), then the rest in alphabetical order
  const ordered = [
    ...priority.filter((k) => allKeys.includes(k)),
    ...allKeys.filter((k) => !priority.includes(k)).sort(),
  ];

  const headerLabel = (key) => {
    if (key === "mildPrice") return "Mild Steel Price";
    if (key === "stainlessPrice") return "Stainless Steel Price";
    if (key === "price") return "Price";
    // convert camelCase or lowercase to Title Case
    return key
      .replace(/([A-Z])/g, " $1")
      .replace(/_/g, " ")
      .split(" ")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");
  };

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
        <h3>Table of the Product Categories</h3>

          <table className={styles.specTable}>
            <thead>
              <tr>
                {ordered.map((col) => (
                  <th key={col}>{headerLabel(col)}</th>
                ))}
              </tr>
            </thead>

            <tbody>
              {activeProduct.specs.map((spec, idx) => (
                <tr key={idx}>
                  {ordered.map((col) => (
                    <td key={col}>{spec[col] !== undefined && spec[col] !== "" ? spec[col] : "-"}</td>
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
