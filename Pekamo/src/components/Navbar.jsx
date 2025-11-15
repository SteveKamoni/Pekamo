import React from "react";
import { useState, useEffect } from "react";
import styles from "../styles/Navbar.module.scss";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let current = "";

      sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (scrollY >= sectionTop) current = section.getAttribute("id");
      });

      setActiveSection(current || "home");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "products", label: "Products" },
    { id: "solutions", label: "Solutions" },
    { id: "why-us", label: "Why Us" },
    { id: "testimonials", label: "Testimonials" },
    { id: "contact", label: "Contact" },
    { id: "quote", label: "Quote" }
  ];

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <span className={styles.logo}>Pekamo</span>

        <ul className={styles.links}>
          {navLinks.map(link => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={activeSection === link.id ? styles.active : ""}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

