import React, { useState } from "react";
import styles from "../styles/QuoteForm.module.scss";
import { productsData, accessoriesData } from "../data/productsData";
import useQuoteForm from "../hooks/useQuoteForm";

const allCategories = [...productsData, ...accessoriesData];

export default function QuoteForm() {
  // hook from your existing useQuoteForm.js
  const {
    formData,
    quoteItems,
    selectedSpecs,
    submitted,
    loading,
    total,
    handleInputChange,
    addProduct,
    removeProduct,
    changeQuantity,
    submitForm,
  } = useQuoteForm(allCategories);

  const [errors, setErrors] = useState({});
  const [addError, setAddError] = useState("");

  const emailIsValid = (v) => /^\S+@\S+\.\S+$/.test(v);
  const phoneIsValid = (v) => /^(?:\+254|0)7\d{8}$/.test(v);

  function validateBeforeSubmit() {
    const e = {};

    if (!formData.name || formData.name.trim().length < 2) {
      e.name = "Enter your full name (at least 2 characters).";
    }

    // Require at least one contact: email OR phone
    const hasEmail = formData.email && formData.email.trim().length > 0;
    const hasPhone = formData.phone && formData.phone.trim().length > 0;

    if (!hasEmail && !hasPhone) {
      e.contact = "Provide at least an email or a phone number.";
    } else {
      if (hasEmail && !emailIsValid(formData.email)) e.email = "Enter a valid email.";
      if (hasPhone && !phoneIsValid(formData.phone)) e.phone = "Enter a valid Kenyan phone number (07XXXXXXXX or +2547XXXXXXXX).";
    }

    // Only require category/spec if there are NO items added
    if (!quoteItems || quoteItems.length === 0) {
      if (!formData.selectedCategory) e.selectedCategory = "Select a category.";
      if (formData.selectedCategory && !formData.selectedSpec) e.selectedSpec = "Select a product/spec before submitting.";
    }

    if (!formData.consent) e.consent = "You must consent to be contacted.";

    if (!quoteItems || quoteItems.length === 0) e.items = "Add at least one product to the quote.";

    setErrors(e);
    return Object.keys(e).length === 0;
  }

  const handleAdd = () => {
    setAddError("");
    if (!formData.selectedCategory) {
      setAddError("Please select a category first.");
      return;
    }
    if (!formData.selectedSpec) {
      setAddError("Please select a product/spec to add.");
      return;
    }

    addProduct();

    setAddError("");
    setErrors((prev) => ({ ...prev, selectedSpec: undefined }));
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setErrors({});

    if (!validateBeforeSubmit()) {
      const firstErr = document.querySelector("[aria-invalid='true'], .error");
      if (firstErr) firstErr.focus?.();
      return;
    }

    await submitForm();
  };

  return (
    <section className={styles.quoteForm} id="form">
      <h2>Get Your Quote</h2>

      {!submitted ? (
        <>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.grid}>
              <label>
                <input
                  type="text"
                  placeholder="Name"
                  value={formData.name || ""}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  aria-invalid={!!errors.name}
                />
                {errors.name && <div className={styles.error} role="alert">{errors.name}</div>}
              </label>

              <label>
                <input
                  type="text"
                  placeholder="Company / Organization"
                  value={formData.company || ""}
                  onChange={(e) => handleInputChange("company", e.target.value)}
                />
              </label>

              <label>
                <input
                  type="text"
                  placeholder="Phone"
                  value={formData.phone || ""}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  aria-invalid={!!errors.phone || !!errors.contact}
                />
                {errors.phone && <div className={styles.error} role="alert">{errors.phone}</div>}
              </label>

              <label>
                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email || ""}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  aria-invalid={!!errors.email || !!errors.contact}
                />
                {errors.email && <div className={styles.error} role="alert">{errors.email}</div>}
              </label>
            </div>

            <textarea
              placeholder="Additional requirements or notes"
              value={formData.notes || ""}
              onChange={(e) => handleInputChange("notes", e.target.value)}
              className={styles.notes}
            />

            <div className={styles.selector}>
              <select
                value={formData.selectedCategory || ""}
                onChange={(e) => handleInputChange("selectedCategory", e.target.value)}
                aria-invalid={!!errors.selectedCategory}
              >
                <option value="">Select Product Category</option>
                {allCategories.map((cat) => (
                  <option key={cat.category} value={cat.category}>
                    {cat.category}
                  </option>
                ))}
              </select>
              {errors.selectedCategory && <div className={styles.error} role="alert">{errors.selectedCategory}</div>}

              {selectedSpecs.length > 0 && (
                <select
                  value={formData.selectedSpec || ""}
                  onChange={(e) => handleInputChange("selectedSpec", e.target.value)}
                  aria-invalid={!!errors.selectedSpec}
                >
                  <option value="">Select Product</option>
                  {selectedSpecs.map((spec, i) => {
                    const label = spec.size || spec.product || spec.capacity;
                    return <option key={i} value={label}>{label}</option>;
                  })}
                </select>
              )}
              {errors.selectedSpec && <div className={styles.error} role="alert">{errors.selectedSpec}</div>}

              {selectedSpecs.some((s) => s.mildPrice && s.stainlessPrice) && (
                <select
                  value={formData.material || "mild"}
                  onChange={(e) => handleInputChange("material", e.target.value)}
                >
                  <option value="mild">Mild Steel</option>
                  <option value="stainless">Stainless Steel</option>
                </select>
              )}

              <button type="button" onClick={handleAdd} disabled={!formData.selectedSpec || loading}>
                Add Product
              </button>
              {addError && <div className={styles.error} role="alert">{addError}</div>}
            </div>
          </form>

          <div className={styles.tableWrap}>
            <h3>Products</h3>
            {errors.items && <div className={styles.error} role="alert">{errors.items}</div>}

            <table>
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Items</th>
                  <th>Unit Price</th>
                  <th>Total</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {quoteItems.map((item, index) => (
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.category}</td>
                    <td>
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) => changeQuantity(item.id, e.target.value)}
                      />
                    </td>
                    <td>KSh {Number(item.unitPrice).toLocaleString()}</td>
                    <td>KSh {(Number(item.unitPrice) * item.quantity).toLocaleString()}</td>
                    <td>
                      <button onClick={() => removeProduct(item.id)} aria-label="Remove item">✕</button>
                    </td>
                  </tr>
                ))}
                {quoteItems.length === 0 && (
                  <tr>
                    <td colSpan="7" style={{ textAlign: "center", padding: "1rem" }}>
                      No products added yet.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>

            <div className={styles.summary}>
              <p>You’ve selected {quoteItems.length} product(s).</p>
              <p className={styles.total}>Estimated Total: KSh {Number(total || 0).toLocaleString()}</p>
            </div>

            <div style={{ marginTop: 12 }}>
              <label style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <input
                  type="checkbox"
                  checked={!!formData.consent}
                  onChange={(e) => handleInputChange("consent", e.target.checked)}
                />
                I consent to be contacted about my enquiry.
              </label>
              {errors.consent && <div className={styles.error} role="alert">{errors.consent}</div>}
            </div>

            <div style={{ marginTop: 16 }}>
              <button
                className={styles.submit}
                onClick={handleSubmit}
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className={styles.confirmation}>
          <h3>Thank you, {formData.name}!</h3>
          <p>Your quote request has been received. We’ll contact you shortly with details.</p>
        </div>
      )}
    </section>
  );
}
