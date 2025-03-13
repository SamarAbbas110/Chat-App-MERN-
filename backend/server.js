import express from "express";
import chats from "./Data/Data.js"; // Ensure this is using the correct path
const app = express(); //-
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import { NotFound, ErrorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();
connectDB();
app.use(cors());
app.use(express.json()); // Body parser
app.get("/", (req, res) => {
  //-
  res.send("Hello World!"); //-
});
console.log("User Routes Loaded");
app.use("/api/user", userRoutes);

app.use(NotFound);
app.use(ErrorHandler);

const PORT = process.env.PORT || 5000; //-
app.listen(5000, () => {
  console.log(`Port Listen on ${PORT}`);
});
