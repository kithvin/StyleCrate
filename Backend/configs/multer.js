// Import the Multer library for handling multipart/form-data (file uploads)
import multer from "multer";

// Configure Multer to use disk storage (default settings)
export const upload = multer ({storage:multer.diskStorage({})});