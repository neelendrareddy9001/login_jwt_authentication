import express from "express";
import { signin, signup } from "../controllers/userController.js";
import { verifyToken } from "../middlewares/authentication.js";

const routes = express.Router();

routes.post("/signup", signup);
routes.post("/signin", verifyToken, signin);

export default routes;
