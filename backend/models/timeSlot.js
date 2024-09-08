// models/TimeSlot.js
import mongoose from "mongoose";

const timeSlotSchema = new mongoose.Schema({
  slot: { type: String, required: true },
  date: { type: String, required: true },
  status: {
    type: String,
    enum: ["available", "pending", "booked"],
    default: "available",
  },
});

const Time = mongoose.model("TimeSlot", timeSlotSchema);

export default Time;
