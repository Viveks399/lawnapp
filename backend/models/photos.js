// models/Photo.js
import mongoose from "mongoose";

const photoSchema = new mongoose.Schema({
  content: {
    type: Buffer, // Store the image as binary data
    required: true,
  },
  description: {
    type: String,
  },
  isVisible: {
    type: Boolean,
    default: true,
  },
  mimetype: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Photo = mongoose.model("Photo", photoSchema);
export default Photo;
