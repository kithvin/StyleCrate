// Import required modules
import express from "express";
import { upload } from "../configs/multer.js"; // Multer config for file uploads
import authSeller from "../middleware/authSeller.js" // Middleware to authenticate seller
import {
  addProduct,
  changeStock,
  productById,
  productList,
} from "../controllers/productController.js"; // Product controller functions

// Create a new Express router
const productRouter = express.Router();

// Route to add a new product (seller authentication + image upload required)
productRouter.post("/add", upload.array(["images"]), authSeller, addProduct);

// productRouter.post('/add', upload.array('images'), authSeller, addProduct);

// Route to get the list of all products
productRouter.get("/list", productList);

// Route to get a single product by ID
productRouter.get("/id", productById);

// Route to update the inStock status of a product
productRouter.post("/stock", authSeller, changeStock);

export default productRouter; // Export the product router for use in other parts of the application