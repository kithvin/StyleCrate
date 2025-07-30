// Import required modules
import express from "express";
import authUser from "../middleware/authUser.js"; // Middleware to authenticate user
import {addAddress, getAddress} from "../controllers/addressController.js"; // Controller functions for address operations

// Create an Express router instance
const addressRouter = express.Router();

// Route to add a new address (requires authentication)
// Endpoint: POST /api/address/add
addressRouter.post("/add",authUser,addAddress);

// Route to get all addresses of a user (requires authentication)
// Endpoint: POST /api/address/get
addressRouter.get("/get",authUser,getAddress);

// Export the router to be used in the main application
export default addressRouter;