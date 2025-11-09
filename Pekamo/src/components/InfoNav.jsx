import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../styles/InfoNav.module.scss';

const InfoNav = () => {
  return (
    <nav className={styles.nav}>
      <NavLink
        to="/info/about"
        className={({ isActive }) =>
          `${styles.link} ${isActive ? styles.active : ''}`
        }
      >
        About
      </NavLink>
      <NavLink
        to="/info/vision"
        className={({ isActive }) =>
          `${styles.link} ${isActive ? styles.active : ''}`
        }
      >
        Vision
      </NavLink>
      <NavLink
        to="/info/mission"
        className={({ isActive }) =>
          `${styles.link} ${isActive ? styles.active : ''}`
        }
      >
        Mission
      </NavLink>
    </nav>
  );
};

export default InfoNav;
