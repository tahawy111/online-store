import express from "express";
import { activation, register } from "./../controllers/authCtrl.js";
const router = express.Router();

router.post("/register", register);
router.post("/activation", activation);

export default router;
