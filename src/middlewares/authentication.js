import { config } from "dotenv";
import jwt from "jsonwebtoken";
config({ path: "./config.env" });

export const verifyToken = (req, res) => {
  let token;
  let authHeader = req.headers.Authorization || req.headers.authorization;
  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split("")[1];
  }

  if (!token) {
    return res.status(401).json({
      status: 401,
      message: "No token, Authorization denied",
    });

    try {
      const decode = jwt.verify(token, process.env.JWT_SECRET);
      req.name = decode;
      NavigationContextProvider();
    } catch (error) {
      res.status(400).json({ status: 400, message: "Token is not valid" });
    }
  } else {
    return res
      .status(401)
      .json({ status: 401, message: "No token authorization denied" });
  }
};
