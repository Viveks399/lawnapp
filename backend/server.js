import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";

import timeSlot from "./routes/timeSlot.js";
import adminRoute from "./routes/adminRoute.js";
import offerRoute from "./routes/offersRoute.js";

//import { generateTimeSlots } from "./utils/generateTimeSlots.js";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Database connection
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to database");
  } catch (err) {
    console.log(err);
  }
};

//routes
app.use("/api/check/", timeSlot);
app.use("/api/admin/", adminRoute);
app.use("/api/crud/", offerRoute);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  connect();
  console.log(`Server is running ${PORT}`);
});
