import express from "express";
import { signup } from "../controllers/userController.js";

const routes = express.Router();

routes.post("/create", signup);

export default routes;
