import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectDB from "./configs/db.js";
import "dotenv/config";

const app = express();
const port = process.env.PORT || 5000;

// Define allowed origins for CORS
const allowedOrigins = ["http://localhost:3000"];

// Connect to MongoDB database
await connectDB();

// Middleware Configuration
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

// Root route to test if API is working
app.get("/", (req, res) => {
  res.send("API is Working 🚀");
});

// Start the server and listen on the defined port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});