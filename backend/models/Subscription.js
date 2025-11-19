import mongoose from "mongoose";

const SubscriptionSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Invalid email format"],
      unique: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Subscription", SubscriptionSchema);
