import User from "../models/user.js";

// Get Bookings Function
export const getBookings = async (req, res) => {
  try {
    console.log("Fetching bookings...");

    const bookings = await User.find().populate("timeSlot");
    res.json(bookings);
  } catch (error) {
    console.error("Error fetching bookings:", error);
    res.status(500).json({ message: "Error fetching bookings." });
  }
};
