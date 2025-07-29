// Import the jsonwebtoken package to handle JWT operations
import jwt from "jsonwebtoken";

// Middleware function to authenticate seller requests
const authSeller = async (req, res, next) => {
  // Extract the sellerToken from cookies
  const { sellerToken } = req.cookies;

  // If the token is not present, respond with "Not Authorized"
  if (!sellerToken) {
    return res.json({ success: false, message: "Not Authorized" });
  }
  try {
    // Verify and decode the token using the JWT secret
    const tokenDecode = jwt.verify(sellerToken, process.env.JWT_SECRET);

    // Check if the decoded token email matches the authorized seller email
    if (tokenDecode.email === process.env.SELLER_EMAIL) {
      // If matched, proceed to the next middleware or route handler
      next();
    } else {
      // If email doesn't match, respond with "Not Authorized"
      return res.json({ success: false, message: "Not Authorized" });
    }
  } catch (error) {
    // If token verification fails, respond with the error message
    return res.json({ success: false, message: error.message });
  }
};

// Export the middleware function for use in other parts of the application
export default authSeller;
