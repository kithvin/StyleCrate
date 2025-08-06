// // Import mongoose to define the schema and model
// import mongoose from "mongoose";

// // Define the schema for storing order data
// const orderSchema = new mongoose.Schema(
//   {
//     // Reference to the user placing the order
//     userId: { type: String, required: true, ref: "user" },

//     // List of ordered items with product reference and quantity
//     items: [
//       {
//         product: { type: String, required: true, ref: "product" }, // Product reference
//         quantity: { type: Number, required: true }, // Quantity of the product
//       },
//     ],

//     // Total amount of the order
//     amount: { type: Number, required: true },
//     // Shipping address reference
//     address: { type: String, required: true, ref: "address" },
//     // Current status of the order
//     status: { type: String, default: "Order Placed" },
//     // Payment type
//     paymentType: { type: String, required: true },
//     // Indicates if the order is paid
//     isPaid: { type: Boolean, required: true, default: false },
//   },
//   { timestamps: true } // Automatically adds createdAt and updatedAt fields
// );

// // Create the Order model, or use an existing one if already defined
// const Order = mongoose.models.Order || mongoose.model("order", orderSchema);

// // Export the Order model for use in other parts of the application
// export default Order;

import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true, ref: "user" },
    items: [
      {
        product: { type: String, required: true, ref: "product" },
        quantity: { type: Number, required: true },
      },
    ],
    amount: { type: Number, required: true },
    address: { type: String, required: true, ref: "address" },
    status: { 
      type: String, 
      default: "Order Placed",
      enum: ["Order Placed", "Processing", "Shipped", "Delivered", "Cancelled"]
    },
    paymentType: { 
      type: String, 
      required: true,
      enum: ["COD", "Online"] 
    },
    isPaid: { type: Boolean, required: true, default: false },
    paymentDetails: { type: Object } // Store additional payment info if needed
  },
  { timestamps: true }
);

const Order = mongoose.models.Order || mongoose.model("Order", orderSchema);
export default Order;