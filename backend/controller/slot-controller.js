import Time from "../models/timeSlot.js";
import User from "../models/user.js";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
dotenv.config();

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

export const checkSlot = async (req, res) => {
  const { date } = req.query;

  if (!date) {
    return res.status(400).json({ error: "Date is required." });
  }

  try {
    const timeSlots = await Time.find({ date: date, status: "available" });
    res.json(timeSlots);
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).json({ error: error.message });
  }
};

export const bookSlot = async (req, res) => {
  console.log(req.body);
  const {
    firstName,
    lastName,
    email,
    phone,
    address,
    message,
    date,
    timeSlotId,
    timeSlotText,
  } = req.body;

  try {
    // Check if the time slot is still available
    const timeSlot = await Time.findOne({
      _id: timeSlotId,
      date: date,
      status: "available",
    });

    if (!timeSlot) {
      return res
        .status(400)
        .json({ success: false, message: "Time slot is no longer available." });
    }

    // Create a new user associated with the selected time slot
    const user = new User({
      firstName,
      lastName,
      email,
      phone,
      address,
      message,
      timeSlot: timeSlot._id,
    });

    await user.save();

    timeSlot.status = "booked";
    await timeSlot.save();

    const userMailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: "Booking Confirmation: Green Glow Lawn Service",
      text: `Hi ${firstName} ${lastName},\n\nThank you for booking a lawn service with Green Glow.\nYour selected time slot: ${timeSlotText} on ${date} has been confirmed.\n\nAddress: ${address}\n\nWe look forward to serving you soon!\n\nBest regards,\nGreen Glow Team`,
    };

    await transporter.sendMail(userMailOptions);

    const adminMailOptions = {
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: `New Booking: Green Glow Service for ${firstName} ${lastName}`,
      text: `New lawn service booking details:\n\nName: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nAddress: ${address}\nMessage: ${message}\nTime Slot: ${timeSlotText} on ${date}\n\nPlease review this booking and prepare for the service.`,
    };

    await transporter.sendMail(adminMailOptions);

    res.json({
      success: true,
      message: `Thank you ${firstName} ${lastName}, your time slot (${timeSlotText}) on ${date} has been booked successfully!`,
    });
    console.log(
      `Thank you ${firstName} ${lastName}, your time slot (${timeSlotText}) on ${date} has been booked successfully!`
    );
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
