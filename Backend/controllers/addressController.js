// Import the Address model
import Address from "../models/Address.js";

// Controller to add a new address
// Route: POST /api/address/add

export const addAddress = async (req, res) => {
  try {
    // const { address, userId } = req.body;
    const { address } = req.body;
    const userId = req.user.id;

    // Create a new address record in the database with the associated user ID
    await Address.create({ ...address, userId });

    // Send success response
    res.json({ success: true, message: "Address added Successfully" });
  } catch (error) {
    // Log and send error response
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

// Controller to get all addresses for a specific user
// Route: POST /api/address/get

export const getAddress = async (req, res) => {
  try {
    // const { userId } = req.body;
    const userId = req.user.id;

    // Find all address records associated with the given user ID
    const addresses = await Address.find({ userId });

    // Send the retrieved addresses as a response
    res.json({ success: true, addresses });
  } catch (error) {
    // Log and send error response
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};