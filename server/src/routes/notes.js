//import express from "express";
//import Note from "../models/Note.js";

//const router = express.Router();

// Get notes by userId
//router.get("/", async (req, res) => {
//const { userId } = req.query;
//const notes = await Note.find({ userId });
//res.json(notes);
//});

// Create a new note
//router.post("/", async (req, res) => {
//const { userId, title, description } = req.body;
//const newNote = new Note({
//userId,
//title,
//description,
// });
//await newNote.save();
// res.json({ success: true });
//});

// Delete a note by ID
//router.delete("/:id", async (req, res) => {
//const { id } = req.params;
//await Note.findByIdAndDelete(id);
//res.json({ success: true });
//});

//export default router;

import express from "express";
import User from "../models/User.js"; // Import the User model

const router = express.Router();

// Get all users (from MongoDB)
router.get("/", async (req, res) => {
  try {
    const users = await User.find({}); // Fetch all users from MongoDB
    res.json(users); // Send the list of users
  } catch (err) {
    console.error("Error fetching users:", err);
    res.status(500).json({ error: "Database query failed" });
  }
});

// Add a new user
router.post("/", async (req, res) => {
  try {
    const newUser = new User(req.body); // Create a new user
    await newUser.save(); // Save the user in MongoDB
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
    await User.findByIdAndDelete(id); // Delete the user from MongoDB
    res.json({ success: true });
  } catch (err) {
    console.error("Error deleting user:", err);
    res.status(500).json({ error: "Failed to delete user" });
  }
});

export default router;
