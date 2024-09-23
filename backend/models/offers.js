import mongoose from "mongoose";

const offerSchema = new mongoose.Schema({
  content: { type: String, required: true },
  isVisible: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

const Offers = mongoose.model("Offers", offerSchema);

export default Offers;
