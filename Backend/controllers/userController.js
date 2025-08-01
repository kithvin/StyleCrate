import User from "../models/User.js"; // Import User model
import bcrypt from "bcryptjs"; // Import bcryptjs for password hashing
import jwt from "jsonwebtoken"; // Import jsonwebtoken for token generation

// Register User : /api/user/register

export const Register = async (req, res) => {
  try {
    // Destructure name, email, and password from request body
    const { name, email, password } = req.body;

    // Validate input fields
    if (!name || !email || !password) {
      return res.json({ success: false, message: "Missing Details" });
    }

    // Check if the user already exists in the database
    const existingUser = await User.findOne({ email });

    if (existingUser)
      return res.json({ success: false, message: "User already exits" });

    // Hash the user's password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user with hashed password
    const user = await User.create({ name, email, password: hashedPassword });

    // Generate JWT token with user's ID
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    // Set the JWT token in cookies
    res.cookie("token", token, {
      httpOnly: true, // Prevent JavaScript to access cookie
      secure: process.env.NODE_ENV === "production", // Use secure cookies in production
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict", // CSRF protection
      maxAge: 7 * 24 * 60 * 60 * 1000, // Cookie expiration time
    });

    // Send success response with user's name and email
    return res.json({
      success: true,
      user: { email: user.email, name: user.name },
    });
  } catch (error) {
    console.log(error.message); // Log the error in the console
    res.json({ success: false, message: error.message }); // Send error response
  }
};

// Login User : /api/user/login

export const login = async (req, res) => {
  try {
    // Destructure email and password from request body
    const { email, password } = req.body;

    // Validate input fields
    if (!email || !password)
      return res.json({
        success: false,
        message: "Email and password are required",
      });

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({
        success: false,
        message: "Invalid email or password",
      });
    }

    // Compare entered password with stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.json({
        success: false,
        message: "Invalid email or password",
      });

    // Generate JWT token after successful login
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    // Set JWT token in cookies for authentication
    res.cookie("token", token, {
      httpOnly: true, // Prevent JavaScript to access cookie
      secure: process.env.NODE_ENV === "production", // Use secure cookies in production
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict", // CSRF protection
      maxAge: 7 * 24 * 60 * 60 * 1000, // Cookie expiration time
    });

    // Send success response with user's name and email
    return res.json({
      success: true,
      user: { email: user.email, name: user.name },
    });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

// Check Authentication : /api/user/is-auth

export const isAuth = async (req, res) => {
  try {
    // Extract userId from the request body
    //if error backend error use (const userId = req.user.id);
    const userId = req.user.id;

    // Find the user by ID and exclude the password field
    const user = await User.findById(userId).select("-password");

    // Return the authenticated user data
    return res.json({ success: true, user });
  } catch (error) {
    console.log(error.message);

    // Handle errors and return failure response
    res.json({ success: false, message: error.message });
  }
};

// Logout : /api/user/logout

export const logout = async (req, res) => {
  try {
    // Clear the authentication token cookie
    res.clearCookie("token", {
      httpOnly: true, // Prevent access from client-side scripts
      secure: process.env.NODE_ENV === "production", // Use secure cookies in production
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict", // Handle cross-site settings
    });

    // Return success message
    return res.json({ success: true, message: "Logged Out" });
  } catch (error) {
    console.log(error.message);
    // Handle errors and return failure response
    res.json({ success: false, message: error.message });
  }
};
