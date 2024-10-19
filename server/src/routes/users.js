import express from "express";
import User from "../models/User.js"; // Import the Mongoose User model

const router = express.Router();

// Fetch all users from MongoDB
router.get("/", async (req, res) => {
  try {
    const users = await User.find(); // Use Mongoose to get all users
    res.json(users);
  } catch (err) {
    console.error("Error fetching users:", err);
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

// Add a new user
router.post("/", async (req, res) => {
  try {
    const newUser = new User(req.body); // Create a new user
    await newUser.save(); // Save the new user to MongoDB
    res.json({ success: true, user: newUser });
  } catch (err) {
    console.error("Error adding user:", err);
    res.status(500).json({ error: "Failed to add user" });
  }
});

// Delete a user by ID
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await User.findByIdAndDelete(id); // Find and delete user by ID
    res.json({ success: true });
  } catch (err) {
    console.error("Error deleting user:", err);
    res.status(500).json({ error: "Failed to delete user" });
  }
});

export default router;
