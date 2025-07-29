// Import the JWT library to handle token verification
import jwt from "jsonwebtoken";

// Middleware to authenticate user using JWT stored in cookies
const authUser = async (req, res, next) => {
  // Extract token from request cookies
  const { token } = req.cookies;

  // If token is not present, block access
  if (!token) {
    return res.json({ success: false, message: "Not Authorized" });
  }

  try {
    // Verify the token using the secret key from environment variables
    const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);
    // If token is valid and contains a user ID, attach it to the request
    if (tokenDecode.id) {
      // if have back end error use this : req.body.userId = tokenDecode.id;
      req.user = { id: tokenDecode.id };
    } else {
      // Token is invalid or does not contain required data
      return res.json({ success: false, message: "Not Authorized" });
    }
    // Allow request to proceed to the next middleware or route
    next();
  } catch (error) {
    // Token verification failed, return error message
    return res.json({ success: false, message: error.message });
  }
};

export default authUser;
