import Subscription from "../models/Subscription.js";
import transporter from "../utils/email.js"; // Nodemailer setup
import dotenv from "dotenv";
dotenv.config();

// POST /api/subscribe
export const createSubscription = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) return res.status(400).json({ error: "Email is required" });

    // Check for existing subscription
    const existing = await Subscription.findOne({ email });
    if (existing)
      return res
        .status(409)
        .json({ message: "This email is already subscribed." });

    // Create new subscription
    const sub = new Subscription({ email });
    await sub.save();

    // Attempt to send notification email
    if (process.env.RECEIVER_EMAIL) {
      try {
        await transporter.sendMail({
          from: process.env.EMAIL_USER,
          to: process.env.RECEIVER_EMAIL,
          subject: "New Subscription",
          html: `<h3>New Subscription</h3><p><strong>Email:</strong> ${email}</p>`,
        });
      } catch (mailErr) {
        console.error("Email send failed:", mailErr);
        // Don't block subscription creation, just log
      }
    }

    // Respond with success regardless of email result
    res.status(201).json({
      message: "Subscribed successfully!",
      subscription: sub,
    });
  } catch (err) {
    console.error("Error in createSubscription:", err);
    res.status(500).json({ error: "Server error" });
  }
};
