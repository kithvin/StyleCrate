// Import required modules
import express from "express"; // Import Express framework
import authUser from "../middleware/authUser.js"; // Middleware to authenticate user
import { updateCart } from "../controllers/cartController.js"; // Controller function to update cart

// Initialize a new router instance for cart routes using Express
const cartRouter = express.Router();

// Define route for updating user cart
// This route requires authentication before it allows cart update
cartRouter.post("/update", authUser, updateCart);

// Export the cartRouter to be used in the main server configuration
export default cartRouter;