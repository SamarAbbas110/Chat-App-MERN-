import express from "express";
import { registerUser, loginUser } from "../controller/userController.js";

const router = express.Router();

// Make sure this matches what frontend is calling
console.log("Register Route Loaded");
router.route("/").post(registerUser);
router.post("/login", loginUser);

export default router;
