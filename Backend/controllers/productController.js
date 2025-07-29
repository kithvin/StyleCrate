// Import Cloudinary for image uploads
import { v2 as cloudinary } from "cloudinary";
// Import the Product model
import Product from "../models/Product.js";

// Add a new product to the database with image upload
// Route: POST /api/product/add
export const addProduct = async (req, res) => {
    try {
      // Parse the product data from the request body
      let productData = JSON.parse(req.body.productData);
  
      // Get the uploaded image files
      const images = req.files;
  
      // Upload each image to Cloudinary and get secure URLs
      let imagesUrl = await Promise.all(
        images.map(async (item) => {
          let result = await cloudinary.uploader.upload(item.path, {
            resource_type: "image",
          });
          return result.secure_url;
        })
      );
  
      // Save product data with image URLs to the database
      await Product.create({ ...productData, image: imagesUrl });
  
      // Send success response
      res.json({ success: true, message: "Product Added" });
    } catch (error) {
      // Handle and log errors
      console.log(error.message);
      res.json({ success: false, message: error.message });
    }
  };
  
  // Get a list of all products
  // Route: GET /api/product/list
  
  export const productList = async (req, res) => {
    try {
      // Fetch all products from the database
      const products = await Product.find({});
      res.json({ success: true, products });
    } catch (error) {
      // Handle and log errors
      console.log(error.message);
      res.json({ success: false, message: error.message });
    }
  };
  
  // Get a single product by its ID
  // Route: GET /api/product/id
  
  export const productById = async (req, res) => {
    try {
      const { id } = req.body;
  
      // Find the product by ID
      const product = await Product.findById(id);
      res.json({ success: true, product });
    } catch (error) {
      // Handle and log errors
      console.log(error.message);
      res.json({ success: false, message: error.message });
    }
  };

  // Update the stock status of a product (inStock)
// Route: POST /api/product/stock
export const changeStock = async (req, res) => {
    try {
      const { id, inStock } = req.body;
      // Update the inStock value for the specified product
      await Product.findByIdAndUpdate(id, { inStock });
      res.json({ success: true, message: "Stock Updated" });
    } catch (error) {
      // Handle and log errors
      console.log(error.message);
      res.json({ success: false, message: error.message });
    }
  };