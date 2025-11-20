import React, { useState, useEffect } from 'react';
import styles from '../styles/FooterSection.module.scss';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

export default function FooterSection() {
  const [email, setEmail] = useState('');
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState(''); // 'success', 'duplicate', 'error'
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim()) {
      setStatus('error');
      setMessage('Please enter a valid email.');
      return;
    }

    try {
      setSending(true);
      const res = await fetch('http://localhost:5000/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus('success');
        setMessage('Thank you for subscribing!');
        setEmail('');
      } else if (res.status === 409) {
        const data = await res.json();
        setStatus('duplicate');
        setMessage(data.error || 'You are already subscribed.');
      } else {
        setStatus('error');
        setMessage('Subscription failed. Please try again.');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
      setMessage('Something went wrong. Please try again later.');
    } finally {
      setSending(false);
    }
  };

  // Auto-clear messages after 5 seconds
  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => {
        setStatus('');
        setMessage('');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        {/* ...other footer content remains unchanged... */}

                {/* Branding */}
        <div className={styles.branding}>
          <h4>PEKAMO TRADERS</h4>
          <p className={styles.description}>
            We engineer smart, wood-fueled energy systems that reduce costs and improve lives.
          </p>
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

        <div className={styles.column}>
          <h5>Resources</h5>
          <ul>
            <li><a href="/faqs">FAQs</a></li>
            <li><a href="/brochure">Brochure</a></li>
          </ul>

          <div className={styles.subscribe}>
            <h3>Subscribe for updates</h3>
            <i>100+ kitchens rely on us — stay informed.</i>

            <form className={styles.form} onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" disabled={sending}>
                {sending ? 'Submitting...' : 'Submit'}
              </button>
            </form>

            {message && (
              <p
                className={styles.message}
                style={{
                  color:
                    status === 'success'
                      ? 'green'
                      : status === 'duplicate'
                      ? 'orange'
                      : 'red',
                }}
              >
                {message}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Bottom content unchanged */}
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
}
