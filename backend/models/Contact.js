import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema(
  {
    // matches `form.name`
    name: { type: String, required: true, trim: true },

    // matches `form.email` (optional on front-end but validated client-side)
    email: { type: String, lowercase: true, trim: true },

    // matches `form.phone` (optional on front-end but validated client-side)
    phone: { type: String, trim: true },

    // matches selects: form.siteType
    siteType: {
      type: String,
      enum: ["school", "hospital", "hotel", "hostel", "industrial", "other"],
      required: true,
    },

    // matches selects: form.woodSpendBracket
    woodSpendBracket: {
      type: String,
      enum: ["<50k", "50-150k", "150-300k", ">300k"],
      required: true,
    },

    // matches `form.preferredContact` ('phone' or 'email')
    preferredContact: {
      type: String,
      enum: ["phone", "email"],
      default: "phone",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Contact", ContactSchema);
