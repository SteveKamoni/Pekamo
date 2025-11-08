import React, { useState } from 'react';
import styles from '../styles/InfoTabs.module.scss';
import img1 from "../assets/hero.jpg"

const tabs = [
  { id: 'about', label: 'About' },
  { id: 'vision', label: 'Vision' },
  { id: 'mission', label: 'Mission' },
];

const InfoTabs = () => {
  const [activeTab, setActiveTab] = useState('about');

  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return (
          <div className={styles.panel} id='about'>
            <h2>Who are we @ PEKAMO</h2>
            <p>
              PEKAMO Traders is a leading manufacturer and supplier of wood-fueled energy solutions.
              We produce and supply high-quality wood fuels to help businesses reduce energy costs and carbon emissions.
              Our products are designed to meet the specific needs of our clients, ensuring optimal performance and efficiency.
            </p>
          </div>
        );

      case 'vision':
        return (
          <div className={`${styles.panel} ${styles.visionLayout}`}>
            <div className={styles.visionImage}>
              <img
                src={img1}
                alt="Two people discussing sustainable solutions"
              />
            </div>
            <div className={styles.visionText}>
              <h2>What is our vision?</h2>
              <p>
                Our vision is to lead Africa’s transition toward sustainable, energy-efficient cooking and heating systems —
                where every institution, from schools to hotels, can prepare meals efficiently while protecting the environment and reducing costs.
              </p>
              <h3>Building a cleaner, smarter future.</h3>
              <p>
                At Pekamo Traders, we envision a future where modern engineering and local innovation work hand in hand to eliminate smoke-filled kitchens,
                cut down firewood consumption, and create long-lasting solutions that empower communities.
                Through continuous improvement and responsible manufacturing, we aim to set new standards in quality, efficiency, and sustainability across East Africa.
              </p>
            </div>
          </div>
        );

      case 'mission':
        return (
          <div className={styles.panel}>
            <h2>Our Mission</h2>
            <div className={styles.missionGrid}>
              <div>
                <h3>Smarter Wood-Fueled Engineering</h3>
                <p>
                  We design and build advanced wood-fueled stoves, ovens, and boilers that deliver maximum heat with minimal smoke.
                  Our mission is to make traditional wood energy cleaner, safer, and more efficient for modern institutional kitchens.
                </p>
              </div>
              <div>
                <h3>Empowering Local Craftsmanship</h3>
                <p>
                  We take pride in Kenyan engineering — sourcing local materials and employing skilled artisans to craft durable,
                  high-performance systems that serve schools, hotels, and industries across the region.
                </p>
              </div>
              <div>
                <h3>Sustaining the Environment</h3>
                <p>
                  By cutting wood consumption by up to 75%, our designs help reduce deforestation, improve air quality,
                  and create a smaller carbon footprint powered by smarter combustion.
                </p>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className={styles.infoTabs}>
      <nav className={styles.tabNav} role="tablist">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={activeTab === tab.id ? 'active' : ''}
            onClick={() => setActiveTab(tab.id)}
            role="tab"
            aria-selected={activeTab === tab.id}
            aria-controls={`${tab.id}-panel`}
          >
            {tab.label}
          </button>
        ))}
      </nav>
      <div id={`${activeTab}-panel`} role="tabpanel">
        {renderContent()}
      </div>
    </section>
  );
};

export default InfoTabs;
