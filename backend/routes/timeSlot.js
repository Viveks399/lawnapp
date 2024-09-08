import express from "express";
import { checkSlot, bookSlot } from "../controller/slot-controller.js";

const router = express.Router();

router.get("/checkSlot", checkSlot);
router.post("/bookSlot", bookSlot);

export default router;
