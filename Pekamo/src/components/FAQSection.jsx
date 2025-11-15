import React, { useState } from 'react';
import styles from '../styles/FAQSection.module.scss';

const faqs = [
  {
    question: "What makes Pekamo’s wood stoves different from factory-made options?",
    answer: `At Pekamo Traders, every stove is built, not mass-produced. That means each unit is designed with purpose — crafted to burn cleaner, use less wood, and last longer. Unlike factory stoves made for volume, we focus on precision airflow design, sturdy construction, and real-world testing to ensure consistent performance in Kenyan homes and businesses. Our goal isn’t just to make stoves — it’s to engineer smarter wood stoves that save fuel, reduce smoke, and stand the test of time.`,
  },
  {
    question: "Do your stoves work with all types of firewood?",
    answer: "Yes. Pekamo stoves are designed to work efficiently with a wide range of firewood types available locally.",
  },
  {
    question: "Can I request a custom design or size for my space?",
    answer: "Absolutely. We offer custom builds tailored to your kitchen layout, cooking needs, and fuel preferences.",
  },
  {
    question: "How long do your wood stoves last with proper use?",
    answer: "With proper use and maintenance, our stoves can last over a decade — built to endure daily institutional cooking.",
  },
  {
    question: "Do you offer installation or maintenance support after purchase?",
    answer: "Yes. We provide installation guidance and offer ongoing support for maintenance, upgrades, and restoration.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className={styles.faqSection} id="faq">
      <h2 className={styles.heading}>FAQs</h2>
      <div className={styles.list}>
        {faqs.map((faq, index) => (
          <div key={index} className={styles.item}>
            <button
              className={styles.question}
              onClick={() => toggle(index)}
              aria-expanded={openIndex === index}
              aria-controls={`faq-${index}`}
            >
              {faq.question}
              <span className={styles.icon}>{openIndex === index ? '−' : '+'}</span>
            </button>
            <div
              id={`faq-${index}`}
              className={styles.answer}
              style={{ maxHeight: openIndex === index ? '500px' : '0px' }}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.cta}>
        <p>Still have questions? <a href="/contact">Contact us</a> or <a href="/quote">Request a quote</a>.</p>
      </div>
    </section>
  );
}
