import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import multer from "multer";
import cors from "cors";
import bodyParser from "body-parser";

import timeSlot from "./routes/timeSlot.js";
import adminRoute from "./routes/adminRoute.js";
import offerRoute from "./routes/offersRoute.js";
import photoRoute from "./routes/photoRoute.js";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(bodyParser.json({ limit: "200mb" }));
app.use(bodyParser.urlencoded({ limit: "200mb", extended: true }));

// Database connection
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to database");
  } catch (err) {
    console.log(err);
  }
};

// Routes
app.use("/api/check/", timeSlot);
app.use("/api/admin/", adminRoute);
app.use("/api/crud/", offerRoute);
app.use("/api/photos/", photoRoute);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  connect();
  console.log(`Server is running on port ${PORT}`);
});
