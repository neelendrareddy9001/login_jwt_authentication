import mongoose from "mongoose";

const userScheema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: { type: String, enum: ["admin", "customer"], default: "customer" },
});

export const User = mongoose.model("Users", userScheema);

export default User;
