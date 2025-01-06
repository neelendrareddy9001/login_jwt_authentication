import express from "express";
import { conn } from "./connection/db.js";
import { config } from "dotenv";

import userRoutes from "./routes/userRoutes.js";

const app = express();
config({ path: "./config.env" });

const PORT = process.env.PORT || 6120;

app.listen(PORT, () => {
  console.log(`Server is listening at port: ${PORT}`);
});

conn();

app.use("/api/v1/user", userRoutes);
