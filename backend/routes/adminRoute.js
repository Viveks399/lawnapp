import express from "express";
import { adminLogin } from "../controller/auth-controller.js";
import { getBookings } from "../controller/admin-controller.js";
import adminAuth from "../middleware/adminAuth.js";

const router = express.Router();

router.post("/login", adminLogin); // Use the function in your login route
router.get("/bookings", adminAuth, getBookings);

export default router;
