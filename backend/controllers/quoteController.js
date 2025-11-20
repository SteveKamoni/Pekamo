import Quote from "../models/Quote.js";
import { nanoid } from "nanoid";
import transporter from "../utils/email.js"; // Nodemailer setup
import dotenv from "dotenv";
dotenv.config();

// POST /api/quote
export const createQuote = async (req, res) => {
  try {
    const {
      name,
      company,
      phone,
      email,
      notes,
      selectedCategory,
      selectedSpec,
      material,
      items,
    } = req.body;

    if (!name || !phone || !email) {
      return res
        .status(400)
        .json({ error: "Name, phone, and email are required." });
    }

    if (!items || !Array.isArray(items) || items.length === 0) {
      return res
        .status(400)
        .json({ error: "Add at least one product to the quote." });
    }

    // compute totals server-side
    const processedItems = items.map((item) => {
      const unitPriceNumeric = Number(item.unitPrice); // <-- treat as number
      const total = unitPriceNumeric * item.quantity;
      return {
        name: item.name,
        category: item.category,
        quantity: item.quantity,
        unitPriceRaw: item.unitPrice,
        unitPrice: unitPriceNumeric,
        total,
      };
    });

    const itemsTotal = processedItems.reduce((sum, i) => sum + i.total, 0);

    const quote = new Quote({
      name,
      company,
      phone,
      email,
      notes,
      selectedCategory,
      selectedSpec,
      material: material || "mild",
      items: processedItems,
      itemsTotal,
      requestId: nanoid(10), // generate unique ID
    });

    await quote.save();

    // --- SEND EMAIL NOTIFICATION ---
    if (process.env.RECEIVER_EMAIL) {
      let itemsHtml = processedItems
        .map(
          (i) =>
            `<li>${i.name} (${i.category}) x ${i.quantity} - KES ${i.unitPriceRaw} each, Total: KES ${i.total}</li>`
        )
        .join("");

      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.RECEIVER_EMAIL,
        subject: `New Quote Request - ${quote.requestId}`,
        html: `
          <h3>New Quote Request</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Company:</strong> ${company || "N/A"}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Material:</strong> ${material || "mild"}</p>
          <p><strong>Selected Category:</strong> ${selectedCategory || "N/A"}</p>
          <p><strong>Selected Spec:</strong> ${selectedSpec || "N/A"}</p>
          <p><strong>Notes:</strong> ${notes || "N/A"}</p>
          <p><strong>Items:</strong></p>
          <ul>${itemsHtml}</ul>
          <p><strong>Total:</strong> KES ${itemsTotal}</p>
          <p><strong>Request ID:</strong> ${quote.requestId}</p>
        `,
      });
    }

    res.status(201).json({
      message: "Quote request submitted successfully and email sent",
      quote,
    });
  } catch (err) {
    console.error("Error in createQuote:", err);
    res.status(500).json({ error: "Server error" });
  }
};
