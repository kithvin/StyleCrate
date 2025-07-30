// Import mongoose to define the schema and model
import mongoose from "mongoose";

// Define the address schema for storing address data
const addressSchema = new mongoose.Schema({
  userId: { type: String, required: true }, // The user ID associated with the address
  firstName: { type: String, required: true }, // First name of the address holder
  lastName: { type: String, required: true }, // Last name of the address holder
  email: { type: String, required: true }, // Email address of the address holder
  street: { type: String, required: true }, // Street address
  city: { type: String, required: true }, // City of the address
  state: { type: String, required: true }, // State of the address
  zipcode: { type: Number, required: true }, // Zip code of the address
  country: { type: String, required: true }, // Country of the address
  phone: { type: String, required: true }, // Phone number of the address holder
});

// Create the Address model if it doesn't already exist in mongoose
const Address =
  mongoose.models.Address || mongoose.model("address", addressSchema);

// Export the Address model for use in other parts of the application
export default Address;