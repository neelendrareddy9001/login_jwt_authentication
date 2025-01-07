import express from "express";
import { conn } from "./connection/db.js";
import { config } from "dotenv";
import bodyParser from "body-parser";

import userRoutes from "./routes/userRoutes.js";
import cookieParser from "cookie-parser";

const app = express();
config({ path: "./config.env" });
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const PORT = process.env.PORT || 6120;

app.use("/api/v1/user", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is listening at port: ${PORT}`);
});

conn();
