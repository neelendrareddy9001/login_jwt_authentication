import User from "../models/user.js";
import bcrypt from "bcrypt";

export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All the  filed are mandatory" });
    }
    // const createdUser = User.findOne({ name, email });
    // if (createdUser) {
    //   return res.status(400).json({ message: "user already exist" });
    // }

    const newUser = await new User({
      name,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      success: true,
      message: "User registered successfully done",
      newUser,
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Error in Registration",
    });
  }
};

export const signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (password !== hashedPassword) {
      return res.send("inavlid credentials");
    }
  } catch (error) {}
};
