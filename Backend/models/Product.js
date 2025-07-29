import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    // Product name (required)
    name: { type: String, required: true },

    // Product description (required)
    description: { type: Array, required: true },

    // Product price (required)
    price: { type: Number, required: true },

    // Product OfferPrice (required)
    offerPrice: { type: Number, required: true },

    // Product image (required)
    image: { type: Array, required: true },

    // Product category(required)
    category: { type: String, required: true },

    // Boolean flag to indicate if the item is currently in stock; defaults to true
    inStock: { type: Boolean, default: true },
  },
  { timestamps: true }
); // Object to store user's cart items; defaults to an empty object

// Create the Product model only if it doesn't already exist (avoids model overwrite issues in development)
const Product =
  mongoose.models.product || mongoose.model('product', productSchema);

// Export the Product model for use in other parts of the application
export default Product;