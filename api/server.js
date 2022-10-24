import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import path from "node:path";
import { fileURLToPath } from "node:url";
import routes from "./routes/index.js";
dotenv.config();
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/public", express.static(path.join(__dirname, "uploads")));
routes(app);

// Connect to mongodb
mongoose.connect(process.env.MONGO_URI, () => console.log("DB Connected"));

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
