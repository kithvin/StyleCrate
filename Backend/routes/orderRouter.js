// Import required modules
import express from "express";

// Import middleware to authenticate regular users and sellers
import authUser from "../middleware/authUser.js";

// Import order-related controller functions
import {
  getAllOrders, // Get all orders (admin/seller view)
  getUserOrders, // Get all orders placed by a specific user
  placeOrderCOD,
  placeOrderStripe, // Place an order using Cash on Delivery
} from "../controllers/orderController.js";
import authSeller from "../middleware/authSeller.js";

// Initialize a new Express router instance for order routes
const orderRouter = express.Router();

// Place order using Cash on Delivery (COD) - Only accessible by authenticated users
// orderRouter.post("/cod", authUser, placeOrderCOD);
orderRouter.post("/cod", authUser, placeOrderCOD);
// Get orders for a specific user - Only accessible by authenticated users
// orderRouter.get("/user", authUser, getUserOrders);
orderRouter.get("/user", authUser, getUserOrders);
// Get all orders - Only accessible by authenticated sellers/admins
orderRouter.get("/seller", authSeller, getAllOrders);


orderRouter.post("/stripe", authUser, placeOrderStripe);

export default orderRouter; // Export the router for use in the main application