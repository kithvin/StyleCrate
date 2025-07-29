import jwt from "jsonwebtoken";

// Login : Seller : /api/seller/login

export const sellerLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if provided credentials match the environment variables
    if (
      password === process.env.SELLER_PASSWORD &&
      email === process.env.SELLER_EMAIL
    ) {
      // Generate JWT token for seller
      const token = jwt.sign({ email }, process.env.JWT_SECRET, {
        expiresIn: "7d", // Token valid for 7 days
      });

      // Set the token as an HTTP-only cookie to improve security
      res.cookie("sellerToken", token, {
        httpOnly: true, //Prevents client-side JavaScript from accessing the cookie
        secure: process.env.NODE_ENV === "production", // Only send over HTTPS in production
        sameSite: process.env.NODE_ENV === "production" ? "none" : "strict", // Cross-site cookie settings for production
        maxAge: 7 * 24 * 60 * 60 * 1000, // Cookie expiration set to 7 days
      });

      // Successful login response
      return res.json({ success: true, message: "Logged In" });
    } else {
      // Invalid email or password response
      return res.json({ success: false, message: "Invalid Credentials" });
    }
  } catch (error) {
    // Log and handle errors during login
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

// Check Authentication (isAuth) : /api/seller/is-auth

export const isSellerAuth = async (req, res) => {
  try {
    // If this endpoint is reached, the seller is authenticated
    return res.json({ success: true });
  } catch (error) {
    // Log and handle errors during auth check
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

// Logout Seller : /api/seller/logout

export const sellerLogout = async (req, res) => {
  try {
    // Clear the sellerToken cookie to log the user out
    res.clearCookie("sellerToken", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
    });
    // Successful logout response
    return res.json({ success: true, message: "Logged Out" });
  } catch (error) {
    // Log and handle errors during logout
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};