import React, { useState, useEffect } from 'react';
import styles from '../styles/ContactSection.module.scss';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

/* --- Replace these with your real tracking/submit implementations --- */
const trackEvent = (name, payload) => {
  // Example: window.dataLayer?.push({ event: name, ...payload });
  console.log('trackEvent', name, payload);
};
const submitLead = async (payload) => {
  // POST to your API or enqueue lead; return { ok: true } on success
  console.log('submitLead', payload);
  return { ok: true };
};
/* ------------------------------------------------------------------- */

const LS_KEY = 'pekamo:contact:qualifier';

const initial = {
  siteType: '',
  woodSpendBracket: '',
  name: '',
  email: '',
  phone: '',
  preferredContact: 'phone',
};

export default function ContactSection() {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(LS_KEY);
    if (saved) setForm((prev) => ({ ...prev, ...JSON.parse(saved) }));
  }, []);

  useEffect(() => {
    // save partial answers (debounced-ish)
    const t = setTimeout(() => {
      localStorage.setItem(LS_KEY, JSON.stringify({
        siteType: form.siteType,
        woodSpendBracket: form.woodSpendBracket,
        name: form.name,
        email: form.email,
        phone: form.phone,
        preferredContact: form.preferredContact,
      }));
    }, 300);
    return () => clearTimeout(t);
  }, [form]);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Please enter your name';
    if (!form.email.trim() && !form.phone.trim()) {
      e.contact = 'Provide at least an email or a phone';
    } else if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = 'Enter a valid email';
    } else if (form.phone && !/^[0-9 +()-]{6,20}$/.test(form.phone)) {
      e.phone = 'Enter a valid phone number';
    }
    if (!form.siteType) e.siteType = 'Please select your site type';
    if (!form.woodSpendBracket) e.woodSpendBracket = 'Choose a bracket';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onChange = (field) => (ev) =>
    setForm((s) => ({ ...s, [field]: ev.target.value }));

  const onSubmit = async (ev) => {
    ev.preventDefault();
    if (!validate()) return trackEvent('contact_qualifier_validation_failed', { errors });
    setSubmitting(true);
    trackEvent('contact_qualifier_submit', { siteType: form.siteType, bracket: form.woodSpendBracket });
    const res = await submitLead(form);
    setSubmitting(false);
    if (res?.ok) {
      setSubmitted(true);
      localStorage.removeItem(LS_KEY);
      trackEvent('contact_qualifier_success', { siteType: form.siteType });
    } else {
      trackEvent('contact_qualifier_error', { error: res?.error || 'unknown' });
      setErrors({ submit: 'Unable to submit. Please try again later.' });
    }
  };

  return (
    <section className={styles.contact} id="contact">
      <div className={styles.container}>
        <div className={styles.left}>
          <h2 className={styles.heading}>Get in touch</h2>
          <p className={styles.lead}>
            Reach our team for general enquiries, installations and support. For
            detailed quotations use the dedicated quote page.
          </p>

          <address
            className={styles.directory}
            aria-label="Company contact details"
          >
            <div className={styles.item}>
              <strong>Office</strong>
              <span>Unit 4, Industrial Park Rd, Nakuru</span>
            </div>

            <div className={styles.item}>
              <strong>Phone</strong>
              <a href="tel:+254700000000" className={styles.link}>
                +254 700 000 000
              </a>
            </div>

            <div className={styles.item}>
              <strong>Email</strong>
              <a href="mailto:info@pekamo.co" className={styles.link}>
                info@pekamo.co
              </a>
            </div>

            <div className={styles.item}>
              <strong>Hours</strong>
              <span>Mon–Sun 8:00–17:00</span>
            </div>

            <div
              className={styles.socials}
              role="navigation"
              aria-label="Social links"
            >
              <a href="#" className={styles.socialLink} aria-label="Facebook">
                <span className="sr-only"></span>
                <FaFacebookF />
              </a>
              <a href="#" className={styles.socialLink} aria-label="Twitter">
                <span className="sr-only"></span>
                <FaTwitter />
              </a>
              <a href="#" className={styles.socialLink} aria-label="LinkedIn">
                <span className="sr-only"></span>
                <FaLinkedinIn />
              </a>
            </div>

            <div className={styles.micro}>
              Installed in <strong>120+</strong> kitchens across Kenya
            </div>
          </address>
        </div>

        <div className={styles.right}>
          <div
            className={styles.card}
            role="region"
            aria-labelledby="qualifier-heading"
          >
            <h3 id="qualifier-heading">Quick Project Details</h3>

            {submitted ? (
              <div className={styles.thanks} role="status">
                <p>Thanks — we received your request.</p>
                <p>
                  We’ll reach out within 24 hours to schedule a call or site
                  visit.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className={styles.form} noValidate>
                <label className={styles.field}>
                  <span className={styles.label}>Site type</span>
                  <select
                    value={form.siteType}
                    onChange={onChange("siteType")}
                    aria-required="true"
                  >
                    <option value="">Select type</option>
                    <option value="school">School / College</option>
                    <option value="hospital">Hospital / Clinic</option>
                    <option value="hotel">Hotel / Restaurant</option>
                    <option value="hostel">Hostel / Institution</option>
                    <option value="industrial">Industrial / Factory</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.siteType && (
                    <div className={styles.error}>{errors.siteType}</div>
                  )}
                </label>

                <label className={styles.field}>
                  <span className={styles.label}>
                    Estimated monthly wood spend
                  </span>
                  <select
                    value={form.woodSpendBracket}
                    onChange={onChange("woodSpendBracket")}
                    aria-required="true"
                  >
                    <option value="">Choose range</option>
                    <option value="<50k">Less than KSh 50,000</option>
                    <option value="50-150k">KSh 50,000 – 150,000</option>
                    <option value="150-300k">KSh 150,000 – 300,000</option>
                    <option value=">300k">Over KSh 300,000</option>
                  </select>
                  {errors.woodSpendBracket && (
                    <div className={styles.error}>
                      {errors.woodSpendBracket}
                    </div>
                  )}
                </label>

                <label className={styles.field}>
                  <span className={styles.label}>Full Name</span>
                  <input
                    type="text"
                    value={form.name}
                    onChange={onChange("name")}
                    aria-required="true"
                  />
                  {errors.name && (
                    <div className={styles.error}>{errors.name}</div>
                  )}
                </label>

                <div className={styles.twoCol}>
                  <label className={styles.field}>
                    <span className={styles.label}>Email</span>
                    <input
                      type="email"
                      value={form.email}
                      onChange={onChange("email")}
                    />
                    {errors.email && (
                      <div className={styles.error}>{errors.email}</div>
                    )}
                  </label>

                  <label className={styles.field}>
                    <span className={styles.label}>Phone</span>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={onChange("phone")}
                    />
                    {errors.phone && (
                      <div className={styles.error}>{errors.phone}</div>
                    )}
                  </label>
                </div>

                <label className={styles.field}>
                  <span className={styles.label}>Preferred contact</span>
                  <div className={styles.inline}>
                    <label>
                      <input
                        type="radio"
                        name="preferred"
                        value="phone"
                        checked={form.preferredContact === "phone"}
                        onChange={() =>
                          setForm((s) => ({ ...s, preferredContact: "phone" }))
                        }
                      />
                      <span>Phone</span>
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="preferred"
                        value="email"
                        checked={form.preferredContact === "email"}
                        onChange={() =>
                          setForm((s) => ({ ...s, preferredContact: "email" }))
                        }
                      />
                      <span>Email</span>
                    </label>
                  </div>
                </label>

                {errors.contact && (
                  <div className={styles.error}>{errors.contact}</div>
                )}
                {errors.submit && (
                  <div className={styles.error}>{errors.submit}</div>
                )}

                <div className={styles.actions}>
                  <button
                    type="submit"
                    className={styles.primary}
                    disabled={submitting}
                  >
                    {submitting ? "Sending…" : "Request Contact"}
                  </button>

                  <a
                    href="/quote"
                    className={styles.linkButton}
                    onClick={() => trackEvent("request_quote_cta")}
                  >
                    Go to Quote page
                  </a>
                </div>

                <div className={styles.privacy}>
                  <label>
                    <input type="checkbox" required /> I consent to be contacted
                    about my enquiry.
                  </label>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
