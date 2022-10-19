import express from "express";
import { requireSignin } from "../controllers/authCtrl.js";
import { create } from "../controllers/productCtrl.js";
const router = express.Router();

export default router;
