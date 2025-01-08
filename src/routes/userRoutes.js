import express from "express";
import { signup } from "../controllers/userController.js";

const routes = express.Router();

routes.post("/signup", signup);
routes.post("/sigini");

export default routes;
