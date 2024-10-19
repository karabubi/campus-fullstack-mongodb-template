// /server/models/User.js
//import mongoose from "mongoose";

//const { Schema, model } = mongoose;

//const userSchema = new Schema({
// name: String,
//age: Number,
//});

//const User = model("User", userSchema);

//export default User;

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
});

const User = mongoose.model("User", userSchema); // Create a Mongoose model

export default User;
