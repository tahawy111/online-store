import express from "express";
import {
  adminAndCsMiddleware,
  requireSignin,
} from "../controllers/authCtrl.js";
import { create, get } from "../controllers/categoryCtrl.js";

const router = express.Router();

router.post("/create", requireSignin, adminAndCsMiddleware, create);
router.get("/get", get);

export default router;
