import Contact from "../models/Contact.js";
import transporter from "../utils/email.js"; // your Nodemailer setup
import dotenv from "dotenv";
dotenv.config();

// POST /api/contact
export const createContact = async (req, res) => {
  try {
    const { name, email, phone, siteType, woodSpendBracket, preferredContact } =
      req.body;

    // validation: name, siteType, woodSpendBracket required
    if (!name || !siteType || !woodSpendBracket) {
      return res.status(400).json({
        error: "Name, site type, and wood spend bracket are required.",
      });
    }

    // validation: at least one contact method (email or phone)
    if (!email && !phone) {
      return res
        .status(400)
        .json({ error: "Provide at least an email or phone." });
    }

    const contact = new Contact({
      name,
      email,
      phone,
      siteType,
      woodSpendBracket,
      preferredContact: preferredContact || "phone",
    });

    await contact.save();

    // --- SEND EMAIL NOTIFICATION ---
    if (process.env.RECEIVER_EMAIL) {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.RECEIVER_EMAIL,
        subject: "New Contact Form Submission",
        html: `
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email || "N/A"}</p>
          <p><strong>Phone:</strong> ${phone || "N/A"}</p>
          <p><strong>Site Type:</strong> ${siteType}</p>
          <p><strong>Wood Spend Bracket:</strong> ${woodSpendBracket}</p>
          <p><strong>Preferred Contact:</strong> ${preferredContact || "phone"}</p>
        `,
      });
    }

    res
      .status(201)
      .json({
        message: "Contact submitted successfully and email sent",
        contact,
      });
  } catch (err) {
    console.error("Error in createContact:", err);
    res.status(500).json({ error: "Server error" });
  }
};
