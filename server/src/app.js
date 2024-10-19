//import cors from "cors";
//import db from "./util/db-connect.js";
//import usersRouter from "./routes/users.js";
//import notesRouter from "./routes/notes.js"; // New

//const app = express();
//const PORT = process.env.PORT || 3000;

//app.use(cors());
//app.use(cors({ origin: "http://localhost:5173" })); // For Vite's default port

//app.use(express.json()); // Parse JSON request bodies

// Use routers
//app.use("/users", usersRouter);
//app.use("/notes", notesRouter); // New

//app.listen(PORT, () => {
//console.log(`Server is running at port: ${PORT}`);
//});

import express from "express";
import cors from "cors";
import db from "./util/db-connect.js"; // MongoDB connection
import usersRouter from "./routes/users.js"; // Users route

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON bodies

// Use routes
app.use("/users", usersRouter);

// Basic route for testing
app.get("/", (req, res) => {
  res.json({ success: true, message: "API is running" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
