import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("<h1>♥♥♥ I love programming 123</h1>");
});

// Connect to mongodb
mongoose.connect(process.env.MONGO_URI, () => console.log("DB Connected"));

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
