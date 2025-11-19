import Subscription from "../models/Subscription.js";
import transporter from "../utils/email.js"; // Your Nodemailer setup
import dotenv from "dotenv";
dotenv.config();

// POST /api/subscribe
export const createSubscription = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) return res.status(400).json({ error: "Email is required" });

    const existing = await Subscription.findOne({ email });
    if (existing)
      return res.status(409).json({ error: "Email already subscribed" });

    const sub = new Subscription({ email });
    await sub.save();

    // --- SEND EMAIL NOTIFICATION ---
    if (process.env.RECEIVER_EMAIL) {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.RECEIVER_EMAIL,
        subject: "New Subscription",
        html: `
          <h3>New Subscription</h3>
          <p><strong>Email:</strong> ${email}</p>
        `,
      });
    }

    res.status(201).json({
      message: "Subscribed successfully and email sent",
      subscription: sub,
    });
  } catch (err) {
    console.error("Error in createSubscription:", err);
    res.status(500).json({ error: "Server error" });
  }
};
