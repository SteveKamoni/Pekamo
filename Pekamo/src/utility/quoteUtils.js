export const getSpecsForCategory = (categories, selected) => {
  if (!selected) return [];
  return categories.find((c) => c.category === selected)?.specs || [];
};

export const getSpecObject = (categories, category, spec) => {
  const catObj = categories.find((c) => c.category === category);
  if (!catObj) return null;

  return catObj.specs.find(
    (s) => s.size === spec || s.product === spec || s.capacity === spec
  );
};

export const getPriceForSpec = (specObj, material) => {
  if (!specObj) return null;

  if (specObj.price) return normalizePrice(specObj.price);

  if (specObj.mildPrice && specObj.stainlessPrice) {
    return material === "stainless"
      ? normalizePrice(specObj.stainlessPrice)
      : normalizePrice(specObj.mildPrice);
  }

  return null;
};

export const normalizePrice = (val) => {
  if (typeof val === "number") return val;
  return parseInt(val.replace(/\D/g, "")) || 0;
};

export const calculateTotal = (items) => {
  return items.reduce((sum, item) => {
    const unit = normalizePrice(item.unitPrice);
    return sum + unit * item.quantity;
  }, 0);
};
