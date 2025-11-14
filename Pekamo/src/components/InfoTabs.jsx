import React, { useState } from 'react';
import styles from '../styles/InfoTabs.module.scss';
import AboutSection from './AboutSection';
import VisionSection from './VisionSection';
import MissionSection from './MissionSection';

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
        return <AboutSection />;
      case 'vision':
        return <VisionSection />;
      case 'mission':
        return <MissionSection />;
      default:
        return null;
    }
  };

  return (
    <section className={styles.infoTabs} id='about'>
      <nav className={styles.nav}>
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`${styles.tabButton} ${activeTab === tab.id ? styles.active : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </nav>
      <div className={styles.content}>
        {renderContent()}
      </div>
    </section>
  );
};

export default InfoTabs;
