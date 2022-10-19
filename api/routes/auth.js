import express from "express";
import {
  activation,
  register,
  login,
  adminRegister,
  adminLogin,
} from "./../controllers/authCtrl.js";
const router = express.Router();

router.post("/register", register);
router.post("/admin/register", adminRegister);
router.post("/activation", activation);
router.post("/login", login);
router.post("/admin/login", adminLogin);

export default router;
