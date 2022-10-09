import express from "express";
import { activation, register, login } from "./../controllers/authCtrl.js";
const router = express.Router();

router.post("/register", register);
router.post("/activation", activation);
router.post("/login", login);

export default router;
