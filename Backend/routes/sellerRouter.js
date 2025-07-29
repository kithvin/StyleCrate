import express from "express"; // Import Express framework
import {
  isSellerAuth,
  sellerLogin,
  sellerLogout,
} from "../controllers/sellerController.js"; // Import seller controller functions

import authSeller from "../middleware/authSeller.js"; // Import authentication middleware for seller



// Create router instance
const sellerRouter = express.Router();

// Seller login route
sellerRouter.post("/login", sellerLogin);

// Check if seller is authenticated
sellerRouter.get("/is-auth", authSeller, isSellerAuth);

// Seller logout route
sellerRouter.get("/logout", sellerLogout);

// Export router
export default sellerRouter;