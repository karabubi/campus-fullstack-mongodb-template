// /server/app.js
import express from "express";
import cors from "cors";
import db from "./util/db-connect.js";
import usersRouter from "./routes/users.js";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json()); // To parse JSON request bodies

// Use users router
app.use("/users", usersRouter);

app.get("/", (req, res) => {
  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}`);
});
