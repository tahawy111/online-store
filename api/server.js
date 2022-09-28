import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import routes from "./routes/index.js";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

routes(app);

// Connect to mongodb
mongoose.connect(process.env.MONGO_URI, () => console.log("DB Connected"));

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
