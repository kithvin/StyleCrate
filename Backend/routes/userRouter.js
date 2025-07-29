// Import required modules
import express from "express"; // Import Express framework
import { Register,login,isAuth,logout } from "../controllers/userController.js"; // Controller function
import authUser from "../middleware/authUser.js"; // Authentication middleware

// Create a new Express Router instance
const userRouter = express.Router();

// Register a new user
// POST /api/user/register
userRouter.post("/register", Register);

// Login a user
// POST /api/user/login
userRouter.post("/login", login);

// Check if user is authenticated (protected route)
// GET /api/user/is-auth
userRouter.get("/is-auth", authUser, isAuth);

// Logout user (protected route)
// GET /api/user/logout
userRouter.get("/logout", authUser, logout);

// Export the router to use in the main server file
export default userRouter;
