import express from "express";
import { requireSignin } from "../controllers/authCtrl.js";
import { create } from "../controllers/productCtrl.js";
const router = express.Router();

router.post("/create", requireSignin, create);

export default router;