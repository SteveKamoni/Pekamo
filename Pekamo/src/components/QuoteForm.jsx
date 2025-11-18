import React, { useState } from "react";
import styles from "../styles/QuoteForm.module.scss";
import { productsData, accessoriesData } from "../data/productsData";

const allCategories = [...productsData, ...accessoriesData];

const QuoteForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        phone: "",
        email: "",
        notes: "",
        selectedCategory: "",
        selectedSpec: "",
        material: "mild",
    });

    const [quoteItems, setQuoteItems] = useState([]);
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = (field, value) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const handleAddProduct = () => {
        const categoryObj = allCategories.find(
            (c) => c.category === formData.selectedCategory
        );
        const specObj = categoryObj?.specs.find((s) => {
            return (
                s.size === formData.selectedSpec ||
                s.product === formData.selectedSpec ||
                s.capacity === formData.selectedSpec
            );
        });

        if (!specObj) return;

        let price = specObj.price;
        if (!price && specObj.mildPrice && specObj.stainlessPrice) {
            price =
                formData.material === "stainless"
                    ? specObj.stainlessPrice
                    : specObj.mildPrice;
        }

        const newItem = {
            id: quoteItems.length + 1,
            name: formData.selectedSpec,
            category: formData.selectedCategory,
            quantity: 1,
            unitPrice: price,
        };

        setQuoteItems((prev) => [...prev, newItem]);
    };

    const handleQuantityChange = (index, value) => {
        const updated = [...quoteItems];
        updated[index].quantity = Number(value);
        setQuoteItems(updated);
    };

    const getTotal = () => {
        return quoteItems.reduce((sum, item) => {
            const numericPrice = parseInt(item.unitPrice.replace(/\D/g, ""));
            return sum + numericPrice * item.quantity;
        }, 0);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you’d send data to backend
        setSubmitted(true);
    };

    const selectedSpecs = formData.selectedCategory
        ? allCategories.find((c) => c.category === formData.selectedCategory)
            ?.specs || []
        : [];

    return (
        <section className={styles.quoteForm} id="form">
            <h2>Get Your Quote</h2>

            {!submitted ? (
                <>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.grid}>
                            <input
                                type="text"
                                placeholder="Name"
                                value={formData.name}
                                onChange={(e) => handleInputChange("name", e.target.value)}
                                required
                            />
                            <input
                                type="text"
                                placeholder="Company / Organization"
                                value={formData.company}
                                onChange={(e) => handleInputChange("company", e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="Phone"
                                value={formData.phone}
                                onChange={(e) => handleInputChange("phone", e.target.value)}
                                required
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={(e) => handleInputChange("email", e.target.value)}
                                required
                            />
                        </div>

                        <textarea
                            placeholder="Additional requirements or notes"
                            value={formData.notes}
                            onChange={(e) => handleInputChange("notes", e.target.value)}
                            className={styles.notes}
                            name="text-area"
                        />

                        <div className={styles.selector}>
                            <select
                                value={formData.selectedCategory}
                                onChange={(e) =>
                                    handleInputChange("selectedCategory", e.target.value)
                                }
                            >
                                <option value="">Select Product Category</option>
                                {allCategories.map((cat) => (
                                    <option key={cat.category} value={cat.category}>
                                        {cat.category}
                                    </option>
                                ))}
                            </select>

                            {selectedSpecs.length > 0 && (
                                <select
                                    value={formData.selectedSpec}
                                    onChange={(e) =>
                                        handleInputChange("selectedSpec", e.target.value)
                                    }
                                >
                                    <option value="">Select Product</option>
                                    {selectedSpecs.map((spec, i) => {
                                        const label = spec.size || spec.product || spec.capacity;
                                        return (
                                            <option key={i} value={label}>
                                                {label}
                                            </option>
                                        );
                                    })}
                                </select>
                            )}

                            {selectedSpecs.some((s) => s.mildPrice && s.stainlessPrice) && (
                                <select
                                    value={formData.material}
                                    onChange={(e) =>
                                        handleInputChange("material", e.target.value)
                                    }
                                >
                                    <option value="mild">Mild Steel</option>
                                    <option value="stainless">Stainless Steel</option>
                                </select>
                            )}

                            <button type="button" onClick={handleAddProduct}>
                                Add Product
                            </button>
                        </div>
                    </form>

                    <div className={styles.tableWrap}>
                        <h3>Products</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>No.</th>
                                    <th>Name</th>
                                    <th>Category</th>
                                    <th>Items</th>
                                    <th>Unit Price</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {quoteItems.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.category}</td>
                                        <td>
                                            <input
                                                type="number"
                                                min="1"
                                                value={item.quantity}
                                                onChange={(e) =>
                                                    handleQuantityChange(index, e.target.value)
                                                }
                                            />
                                        </td>
                                        <td>{item.unitPrice}</td>
                                        <td>
                                            KSh{" "}
                                            {parseInt(item.unitPrice.replace(/\D/g, "")) *
                                                item.quantity}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className={styles.summary}>
                            <p>You’ve selected {quoteItems.length} product(s).</p>
                            <p className={styles.total}>
                                Estimated Total: KSh {getTotal().toLocaleString()}
                            </p>
                        </div>
                        <button className={styles.submit} onClick={handleSubmit}>
                            Submit
                        </button>
                    </div>
                </>
            ) : (
                <div className={styles.confirmation}>
                    <h3>Thank you, {formData.name}!</h3>
                    <p>
                        Your quote request has been received. We’ll contact you shortly with
                        details.
                    </p>
                </div>
            )}
        </section>
    );
};

export default QuoteForm;
