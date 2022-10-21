import express from "express";
import {
  adminAndCsMiddleware,
  requireSignin,
} from "./../controllers/authCtrl.js";
import { create } from "../controllers/productCtrl.js";
import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, `${file.fieldname}_${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage }).array("productPicture");
const router = express.Router();

router.post("/create", requireSignin, adminAndCsMiddleware, upload, create);

export default router;
