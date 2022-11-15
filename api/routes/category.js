import express from "express";
import {
  adminAndCsMiddleware,
  adminMiddleware,
  csMiddleware,
  requireSignin,
  userMiddleware,
} from "../controllers/authCtrl.js";
import { create } from "../controllers/categoryCtrl.js";

const router = express.Router();

router.post("/create", requireSignin, userMiddleware, create);

export default router;
