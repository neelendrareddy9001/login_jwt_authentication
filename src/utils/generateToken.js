import jwt from "jsonwebtoken";

import { config } from "dotenv";
config({ path: "./config.env" });

const user = {
  id: 1,
  name: "john",
  email: "john@gami.com",
  password: "john@",
  role: "admin",
};

const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: "1h" });
console.log(`JWT token for ${user.email}: ${token}`);
