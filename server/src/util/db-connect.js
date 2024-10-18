// /server/util/db-connect.js
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const DB_LINK = process.env.DB_LINK;

const db = mongoose.connect(
  "mongodb+srv://karabubi66:CnSE7R2Ap6XiNxzH@cluster.qq1pl.mongodb.net/note-taking-app"
);

export default db;
