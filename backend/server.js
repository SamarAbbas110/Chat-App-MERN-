import express from "express";
import { config } from "dotenv";
import chats from "./Data/Data.js"; // Ensure this is using the correct path
const app = express();//-
import cors from "cors";

config();
app.use(cors());

app.get("/", (req, res) => {//-
  res.send("Hello World!");//-
});

app.get("/api/chats", (req, res) => {
  res.send(chats);
});

app.get("/api/chats/:id", (req , res) => {
  const chat = chats.find((c) => c._id === req.params.id);
  res.send(chat)
  console.log(chat)
})


const PORT = process.env.PORT || 5000;//-
app.listen(5000, () => {
  console.log(`Port Listen on ${PORT}`);
});