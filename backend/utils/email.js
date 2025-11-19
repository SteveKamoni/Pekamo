import nodemailer from "nodemailer";

// DEBUG: Check if variables are loaded (optional, remove later)
console.log(
  "DEBUG - EMAIL_USER:",
  process.env.EMAIL_USER ? "✅ Found" : "❌ Missing"
);
console.log(
  "DEBUG - EMAIL_PASS:",
  process.env.EMAIL_PASS
    ? "✅ Found (length: " + process.env.EMAIL_PASS.length + ")"
    : "❌ Missing"
);

let transporter = null;

// Only create transporter if email credentials are provided
if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
  transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  transporter.verify((error, success) => {
    if (error) {
      console.error("SMTP Connection Error:", error);
      console.log("⚠️  Email functionality will be disabled");
      transporter = null;
    } else {
      console.log("✅ SMTP Connected - Email service ready");
    }
  });
} else {
  console.log(
    "⚠️  Email credentials not configured - Email functionality disabled"
  );
  console.log(
    "💡 Add EMAIL_USER and EMAIL_PASS to .env to enable email features"
  );
}

export default transporter;
