// /server/routes/users.js
import express from "express";
import User from "../models/User.js";

const router = express.Router();

// Get all users
router.get("/", async (req, res) => {
  const result = await User.find({});
  res.json(result);
});

// Add a new user
router.post("/", async (req, res) => {
  const data = req.body;
  const user = new User(data);
  await user.save();
  res.json({ success: true });
});

// Delete a user by ID
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await User.findByIdAndDelete(id);
  res.json({ success: true });
});

export default router;
