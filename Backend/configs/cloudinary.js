// Import the Cloudinary v2 SDK
import {v2 as cloudinary} from "cloudinary";

// Function to configure Cloudinary with credentials from environment variables
const connectCloudinary = async () =>{
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, // Cloudinary cloud name
        api_key: process.env.CLOUDINARY_API_KEY, // Cloudinary API key
        api_secret: process.env.CLOUDINARY_API_SECRET // Cloudinary API secret
    })
}

// Export the configuration function for use in other parts of the application
export default connectCloudinary;