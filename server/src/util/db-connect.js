//dotenv.config(); // Ensure environment variables are loaded

//const DB_LINK =
// process.env.DB_LINK || "mongodb://127.0.0.1:27017/note-taking-app"; // Default connection string

// Connect to MongoDB
//const connectDB = async () => {
//try {
//await mongoose.connect(DB_LINK, {
//useNewUrlParser: true,
//useUnifiedTopology: true,
//});
//console.log("MongoDB connected successfully!");
//} catch (error) {
//console.error("MongoDB connection failed:", error.message);
//process.exit(1); // Exit process with failure
//}
//};

//export default connectDB; // Default export
//import mongoose from "mongoose";
//import dotenv from "dotenv";

//dotenv.config(); // Load environment variables

//const DB_LINK = process.env.DB_LINK; // MongoDB connection string from .env

// Establish a connection to MongoDB
//mongoose.connect(DB_LINK, {
//useNewUrlParser: true,
//useUnifiedTopology: true,
//});

// Get the connection
//const db = mongoose.connection;

// Handle connection events
//db.on("connected", () => {
//console.log("Connected to MongoDB");
//});

//db.on("error", (err) => {
//console.error("MongoDB connection error:", err);
//});

//export default db; // No poolPromise here!

import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const DB_LINK = process.env.DB_LINK; // MongoDB connection string from .env

// Connect to MongoDB without deprecated options
mongoose
  .connect(DB_LINK)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

export default mongoose.connection; // Export the connection
