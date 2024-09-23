import jwt from "jsonwebtoken";
import Admin from "../models/Admin.js";

// Middleware to protect routes that require admin access
const adminAuth = async (req, res, next) => {
  try {
    // Get the token from the request headers
    const token = req.header("Authorization").replace("Bearer ", "");

    // Verify the token using the secret key
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Find the admin by ID
    const admin = await Admin.findById(decoded._id);
    if (!admin) {
      return res.status(403).json({ message: "Access denied. Admin only." });
    }

    // Attach admin to request object so you can use it later in the route
    req.admin = admin;

    // Proceed to the next middleware or route handler
    console.log("reacher here");
    next();
  } catch (error) {
    res.status(401).json({ message: "Not authorized. Please log in as admin." });
  }
};

export default adminAuth;
