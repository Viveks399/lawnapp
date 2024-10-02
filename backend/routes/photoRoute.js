import express from "express";
import {
  addPhoto,
  getPhotos,
  deletePhotoById,
} from "../controller/photo-controller.js";
import adminAuth from "../middleware/adminAuth.js";
import multer from "multer";

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post("/addphoto", adminAuth, upload.single("photo"), addPhoto);
router.get("/getphotos", getPhotos);
router.delete("/deletephoto/:id", adminAuth, deletePhotoById);

export default router;
