const express = require("express");
const Message = require("../models/Message");

const router = express.Router();

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

router.post("/", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body || {};

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: "All fields are required." });
    }

    if (!emailPattern.test(email)) {
      return res.status(400).json({ message: "Please enter a valid email address." });
    }

    if (!process.env.MONGODB_URI) {
      return res.status(503).json({
        message: "Database is not configured yet. Please email piyushsaini9098@gmail.com directly.",
      });
    }

    await Message.create({ name, email, subject, message });

    return res.status(201).json({
      message: "Thanks for reaching out. I will get back to you shortly.",
    });
  } catch (error) {
    console.error("Contact submission failed", error);
    return res.status(500).json({ message: "Unable to send message right now." });
  }
});

module.exports = router;
