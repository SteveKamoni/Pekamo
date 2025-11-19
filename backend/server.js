// import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import connectDB from "./config/db.js";

import contactRoutes from "./routes/contactRoutes.js";
import quoteRoutes from "./routes/quoteRoutes.js";
import subscriptionRoutes from "./routes/subscriptionRoutes.js";

// dotenv.config({ path: "./.env" });
console.log("MONGO_URI =", process.env.MONGO_URI);
connectDB(); // connect to MongoDB

const app = express();

// ---------------------
// Middleware
// ---------------------
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

// ---------------------
// Routes
// ---------------------
app.use("/api/contact", contactRoutes);
app.use("/api/quote", quoteRoutes);
app.use("/api/subscribe", subscriptionRoutes);

// ---------------------
// 404 Handler
// ---------------------
app.use((req, res, next) => {
  res.status(404).json({ error: "Route not found" });
});

// ---------------------
// Global Error Handler
// ---------------------
app.use((err, req, res, next) => {
  console.error("Global error:", err.stack);
  res.status(500).json({ error: "Server error" });
});

// ---------------------
// Start server
// ---------------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🚀`);
});
