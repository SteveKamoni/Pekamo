import mongoose from "mongoose";

const QuoteItemSchema = new mongoose.Schema({
  // corresponds to the quote table `item.name`
  name: { type: String, required: true, trim: true },

  // corresponds to item.category
  category: { type: String, trim: true },

  // quantity (integer)
  quantity: { type: Number, required: true, min: 1 },

  // original unitPrice string from the front-end (e.g. "KSh 20,000")
  unitPriceRaw: { type: String, trim: true },

  // normalized numeric price in KES (e.g. 20000)
  unitPrice: { type: Number, required: true, min: 0 },

  // item total = unitPrice * quantity
  total: { type: Number, required: true, min: 0 },
});

const QuoteSchema = new mongoose.Schema(
  {
    // top-level contact fields (from formData)
    name: { type: String, required: true, trim: true },
    company: { type: String, trim: true },
    phone: { type: String, required: true, trim: true },
    email: { type: String, required: true, lowercase: true, trim: true },
    notes: { type: String, trim: true },

    // the select the user chooses before adding items
    selectedCategory: { type: String, trim: true },
    selectedSpec: { type: String, trim: true },

    // top-level material choice (formData.material)
    material: { type: String, enum: ["mild", "stainless"], default: "mild" },

    // array of items added in the quote UI
    items: { type: [QuoteItemSchema], default: [] },

    // computed server-side: sum of item totals
    itemsTotal: { type: Number, default: 0 },

    requestId: { type: String, index: true }, // optional identifier you can generate
    status: {
      type: String,
      enum: ["pending", "reviewing", "quoted", "closed"],
      default: "pending",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Quote", QuoteSchema);
