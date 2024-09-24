import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import Admin from "../models/admin.js";

dotenv.config();

// Admin Login Function
export const adminLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if admin exists with the provided email
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(400).json({ message: "Invalid email or password." });
    }

    // Check if the provided password matches the hashed password
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password." });
    }

    // Generate JWT token (valid for 1 hour)
    const token = jwt.sign({ _id: admin._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    // Send token back to admin to use in future requests
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
