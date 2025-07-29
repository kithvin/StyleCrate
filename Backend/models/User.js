import mongoose from "mongoose";

// Define the schema for the User model
const userSchema = new mongoose.Schema({
    
    // User name (required)
    name: { type: String, required: true },

    // User email address (required and must be unique)
    email: { type: String, required: true, unique: true },

    // User password (required)
    password: { type: String, required: true },

    // Object to store user cart items (default is an empty object)
    cartItems: { type: Object, default: {} },

}, {
    // Prevent Mongoose from removing empty objects from the schema
    minimize: false
});

// Create the User model only if it doesn't already exist (avoids model overwrite issues in development)
const User = mongoose.models.user || mongoose.model("user", userSchema);

// Export the User model for use in other parts of the application
export default User;