import User from "../models/User.js";
// Update user cart data
// Route: POST /api/cart/update

export const updateCart = async (req, res) => {
    try {
      // Destructure userId and cartItems from request body
      const { userId, cartItems } = req.body;
  
    //   const userId = req.user.id;
    //   const { cartItems } = req.body;
  
      // Update the user's cartItems in the database
      await User.findByIdAndUpdate(userId, { cartItems });
  
      // Send success response
      res.json({ success: true, message: "Cart Update" });
    } catch (error) {
      // Log and send error response if update fails
      console.log(error.message);
      res.json({ success: false, message: error.message });
    }
  };