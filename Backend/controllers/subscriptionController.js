import Subscription from "../models/Subscription.js";
import nodemailer from "nodemailer";

export const handleSubscription = async (req, res) => {
  const { email } = req.body;

  try {
    const existing = await Subscription.findOne({ email });
    if (existing) {
      return res.status(200).json({ message: "This email is already subscribed." });
    }

    const newSubscription = await Subscription.create({ email });

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.ADMIN_EMAIL,
        pass: process.env.ADMIN_PASS,
      },
    });

    const mailOptions = {
      from: process.env.ADMIN_EMAIL,
      to: process.env.ADMIN_EMAIL,
      subject: "New Newsletter Subscription",
      text: `A new user subscribed: ${email}`,
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({ message: "Subscribed successfully!", subscription: newSubscription });
  } catch (error) {
    console.error("Subscription error:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
