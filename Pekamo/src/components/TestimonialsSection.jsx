import React from "react";
import styles from "../styles/testimonialsSection.module.scss";

const Testimonials = () => {
const testimonials = [
  {
    id: 1,
    name: "Michelle K.",
    role: "Head Cook, St. Marys School",
    text: "After Pekamo installed the institutional stove, our kitchen runs faster and uses far less wood. Meal prep time dropped by 25% and smoke in the kitchen is virtually gone — staff report fewer headaches and a safer workspace.",
    avatar: "https://placehold.co/80x80?text=MK"
  },
  {
    id: 2,
    name: "Sarah T.",
    role: "Hostel Manager, Green Hostels",
    text: "The retrofit solution cut our monthly fuel spend nearly in half. The stove maintains consistent heat for long cooking shifts and requires minimal maintenance. Our staff appreciate the cleaner air and reliable performance.",
    avatar: "https://placehold.co/80x80?text=ST"
  },
  {
    id: 3,
    name: "James L.",
    role: "Operations Manager, Nakuru Hospital",
    text: "We needed reliable hot water and safer kitchen operations. Pekamo’s engineered system delivered both — hot water availability is steady and smoke-related complaints have dropped dramatically. The measurable savings justified the investment within months.",
    avatar: "https://placehold.co/80x80?text=JL"
  },
  {
    id: 4,
    name: "Emily R.",
    role: "Executive Chef, Central Catering Co.",
    text: "Performance, durability, and ease-of-use stood out. The new wood-fueled stove holds temperature precisely, speeds up service, and reduced our wood consumption by around 60%. Installation was professional and the team trained our chefs thoroughly.",
    avatar: "https://placehold.co/80x80?text=ER"
  }
];


  // Duplicate testimonials for seamless infinite scrolling
  const scrollingTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className={styles.testimonials}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>WHAT CLIENTS SAY ABOUT US</h2>
        </div>

        <div className={styles.carouselWrapper}>
          <div className={styles.carouselTrack}>
            {scrollingTestimonials.map((testimonial, index) => (
              <div key={`${testimonial.id}-${index}`} className={styles.testimonialCard}>
                <div className={styles.cardContent}>
                  <div className={styles.quoteIcon}>“</div>
                  <p className={styles.testimonialText}>{testimonial.text}</p>
                </div>
                <div className={styles.clientInfo}>
                  <div className={styles.avatar}>
                    <img src={testimonial.avatar} alt={testimonial.name} />
                  </div>
                  <div className={styles.clientDetails}>
                    <h4 className={styles.clientName}>{testimonial.name}</h4>
                    <p className={styles.clientRole}>{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
