import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import navConfig from "../config/nav.config";
import styles from "../styles/Navbar.module.scss";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const pathname = location.pathname || "/";
  const navLinks = navConfig[pathname] || [];

  const handleNavClick = (e, path) => {
    if (path.startsWith("#")) {
      e.preventDefault();
      const el = document.getElementById(path.slice(1));
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      navigate(path);
    }
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <a href="/" className={styles.logo}>PEKAMO TRADERS</a>
        <ul className={styles.links}>
          {navLinks.map(link => (
            <li key={link.label}>
              <a
                href={link.path}
                onClick={(e) => handleNavClick(e, link.path)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/quote"
              onClick={(e) => handleNavClick(e, "/quote")}
            >
              Quote
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
