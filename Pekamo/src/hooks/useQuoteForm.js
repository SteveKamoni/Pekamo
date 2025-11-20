import { useState } from "react";
import {
  getSpecsForCategory,
  getSpecObject,
  getPriceForSpec,
  calculateTotal,
} from "../utility/quoteUtils";

export default function useQuoteForm(allCategories) {
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
  const [loading, setLoading] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const addProduct = () => {
    const specObj = getSpecObject(
      allCategories,
      formData.selectedCategory,
      formData.selectedSpec
    );
    if (!specObj) return;

    const price = getPriceForSpec(specObj, formData.material);

    const newItem = {
      id: Date.now(),
      name: formData.selectedSpec,
      category: formData.selectedCategory,
      quantity: 1,
      unitPrice: price,
    };

    setQuoteItems((prev) => [...prev, newItem]);

    // Reset only spec + material
    setFormData((prev) => ({
      ...prev,
      selectedSpec: "",
      material: "mild",
    }));
  };

  const removeProduct = (id) => {
    setQuoteItems((prev) => prev.filter((item) => item.id !== id));
  };

  const changeQuantity = (id, qty) => {
    setQuoteItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Number(qty) } : item
      )
    );
  };

  const submitForm = async () => {
    setLoading(true);
    const payload = { ...formData, items: quoteItems };

    try {
      const res = await fetch("http://localhost:5000/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setSubmitted(true);
      }
    } catch (err) {
      console.error("Quote submission error:", err);
    } finally {
      setLoading(false);
    }
  };

  return {
    formData,
    quoteItems,
    submitted,
    loading,
    handleInputChange,
    addProduct,
    removeProduct,
    changeQuantity,
    submitForm,
    selectedSpecs: getSpecsForCategory(
      allCategories,
      formData.selectedCategory
    ),
    total: calculateTotal(quoteItems),
  };
}
