const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const contactRoutes = require("./routes/contact");

const app = express();
const PORT = process.env.PORT || 5000;
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || "http://localhost:3001";

app.use(
  cors({
    origin: CLIENT_ORIGIN.split(",").map((origin) => origin.trim()),
    methods: ["GET", "POST", "OPTIONS"],
  }),
);
app.use(express.json({ limit: "20kb" }));

app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
    service: "piyush-portfolio-api",
    timestamp: new Date().toISOString(),
  });
});

app.use("/api/contact", contactRoutes);

app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ message: "Something went wrong. Please try again." });
});

async function start() {
  const mongoUri = process.env.MONGODB_URI;

  app.listen(PORT, () => {
    console.log(`Portfolio API running on http://localhost:${PORT}`);
  });

  if (!mongoUri) {
    console.warn("MONGODB_URI is missing. Contact submissions will fail until it is set.");
    return;
  }

  try {
    await mongoose.connect(mongoUri, { serverSelectionTimeoutMS: 4000 });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.warn("MongoDB is not available yet. The site will still run, but contact saves will fail until it is connected.");
    console.warn(error.message);
  }
}

start().catch((error) => {
  console.error("Failed to start server", error);
  process.exit(1);
});
