import express from "express";
import { getOffers, updateOrCreateOffer, deleteOffer } from "../controller/offers-controller.js";
import adminAuth from "../middleware/adminAuth.js";

const router = express.Router();

router.get("/offers", getOffers);
router.post("/createoffer", adminAuth, updateOrCreateOffer);
router.delete("/offer/:id", adminAuth, deleteOffer);

export default router;
