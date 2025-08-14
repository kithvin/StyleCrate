import "dotenv/config";
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectDB from "./configs/db.js";
import userRouter from "./routes/userRouter.js";
import sellerRouter from "./routes/sellerRouter.js";
import connectCloudinary from "./configs/cloudinary.js"; // Import Cloudinary routes
import productRouter from "./routes/productRouter.js"; // Import product routes
import cartRouter from "./routes/cartRouter.js";
import addressRouter from "./routes/addressRouter.js";
import orderRouter from "./routes/orderRouter.js";
import { stripeWebhooks } from "./controllers/orderController.js";
import subscriptionRoute from "./routes/subscriptionRoute.js";

const app = express();
const port = process.env.PORT || 5000;

// Define allowed origins for CORS
const allowedOrigins = ["http://localhost:3000","https://stylecrate.vercel.app"];

app.post('/stripe',express.raw({type:'application/jason'}),stripeWebhooks)

// Connect to MongoDB database
await connectDB();

// Connect to cloudinary
await connectCloudinary();

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

app.use('/api/user', userRouter); // All user-related routes start with /api/user

app.use('/api/seller', sellerRouter); // All seller-related routes start with /api/seller

app.use('/api/product', productRouter); // All product-related routes start with /api/product

app.use('/api/cart', cartRouter) // All cart-related routes start with /api/product

app.use("/api/address", addressRouter); // All address-related routes start with /api/address

app.use("/api/order", orderRouter); // All order-related routes start with /api/order

app.use("/api/subscribe", subscriptionRoute); 


// Start the server and listen on the defined port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});