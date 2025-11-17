import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import navConfig from "../config/nav.config";
import styles from "../styles/Navbar.module.scss";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const pathname = location.pathname || "/";
  const navLinks = navConfig[pathname] || [];
  const [open, setOpen] = useState(false);

  const handleNavClick = (e, path) => {
    if (path.startsWith("#")) {
      e.preventDefault();
      const el = document.getElementById(path.slice(1));
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      navigate(path);
    }
    setOpen(false); // close menu after navigation
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <a href="/" className={styles.logo}>PEKAMO TRADERS</a>

        {/* Hamburger button */}
        <button
          className={styles.toggle}
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>

        {/* Links */}
        <ul className={`${styles.links} ${open ? styles.open : ""}`}>
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
