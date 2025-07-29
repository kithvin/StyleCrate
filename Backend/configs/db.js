
import mongoose from "mongoose";

// Function to establish a connection to the MongoDB database
const connectDB = async () => {
  try {
    // Log a message when the database connection is successfully established
    mongoose.connection.on("connected", () => {
      console.log(
        `Database Connected to: ${mongoose.connection.db.databaseName}`
      );
    });

    // Connect to MongoDB using the URI from environment variables
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "StylecrateDB", // Explicitly specify the database name
      retryWrites: true,
      w: "majority",
      appName: "StyleCrate-Cluster",
    });
  } catch (error) {
    // Log an error message if connection fails
    console.error("MongoDB connection error:", error.message);
    process.exit(1); // Exit process with failure
  }
};

// Export the connection function to use in other parts of the application
export default connectDB;