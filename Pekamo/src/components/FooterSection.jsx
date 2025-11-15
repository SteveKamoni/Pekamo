import React from 'react';
import styles from '../styles/FooterSection.module.scss';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';



const FooterSection = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        
        {/* Branding */}
        <div className={styles.branding}>
          {/* <img src="/logo-akdar.svg" alt="Akdar logo" className={styles.logo} /> */}

          <h4>PEKAMO TRADERS</h4>

          <p className={styles.description}>
            We engineer smart, wood-fueled energy systems that reduce costs and improve lives.
          </p>

          {/* <button className={styles.moreBtn}>More ⌄</button> */}
        </div>

        {/* Quick Links */}
        <nav className={styles.column}>
          <h5>Quick Links</h5>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#solutions">Solutions</a></li>
            <li><a href="#why-us">Why Us</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#quote">Quote</a></li>
          </ul>
        </nav>

        {/* Company */}
        <nav className={styles.column}>
          <h5>Company</h5>
          <ul>
            <li><a href="#about">Mission</a></li>
            <li><a href="#about">Vision</a></li>
            <li><a href="#products">Products</a></li>
          </ul>
        </nav>

        {/* Resources */}
        <div className={styles.column}>
          <h5>Resources</h5>
          <ul>
            <li><a href="/faqs">FAQs</a></li>
            <li><a href="/brochure">Brochure</a></li>
          </ul>

          <div className={styles.subscribe}>
            <h3>Subscribe for updates</h3>
            <i>100+ kitchens rely on us — stay informed.</i>
            <form className={styles.form}>
              <input type="email" placeholder="Your email" required />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className={styles.bottom}>
        <p>© 2023 PEKAMO Traders. All Rights Reserved.</p>

        <div className={styles.bottomRight}>
          <div className={styles.legal}>
            <a href="/terms">Terms</a>
            <a href="/privacy">Privacy</a>
          </div>

          <div className={styles.socials}>
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
