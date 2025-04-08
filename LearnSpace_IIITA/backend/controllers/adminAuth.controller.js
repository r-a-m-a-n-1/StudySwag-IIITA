import jwt from "jsonwebtoken";
import crypto from "crypto";
import { sendOTPEmail } from "../mailtrap/emails.js"; // Make sure you implement this helper

// Predefined admin credentials from environment variables
const adminName = process.env.ADMIN_NAME;
const adminEmail = process.env.ADMIN_EMAIL;
const adminPassword = process.env.ADMIN_PASSWORD;

// In-memory storage for OTP (only one active admin session allowed)
let currentOTP = null;
let otpExpiresAt = null;

// Admin login: verifies credentials and sends an OTP
export const adminLogin = async (req, res) => {
  const { name, email, password } = req.body;
  
  if (!name || !email || !password) {
    return res.status(400).json({ success: false, message: "All fields are required" });
  }
  
  // Check against predefined admin credentials
  if (name !== adminName || email !== adminEmail || password !== adminPassword) {
    return res.status(401).json({ success: false, message: "Invalid admin credentials" });
  }
  
  // Generate a 6-digit OTP
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  currentOTP = otp;
  otpExpiresAt = Date.now() + 5 * 60 * 1000; // OTP valid for 5 minutes
  
  // Send OTP to admin email
  try {
    await sendOTPEmail(adminEmail, otp);
    res.status(200).json({ success: true, message: "OTP sent to admin email" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to send OTP" });
  }
};

// Verify the OTP. On success, issue a JWT token in a cookie.
export const verifyOTP = async (req, res) => {
  const { otp } = req.body;
  
  if (!otp) {
    return res.status(400).json({ success: false, message: "OTP is required" });
  }
  
  // Validate OTP and its expiry
  if (otp !== currentOTP || Date.now() > otpExpiresAt) {
    return res.status(400).json({ success: false, message: "Invalid or expired OTP" });
  }
  
  // Clear OTP from memory
  currentOTP = null;
  otpExpiresAt = null;
  
  // Generate a JWT token (for admin, we simply flag it in the payload)
  const token = jwt.sign({ admin: true }, process.env.JWT_SECRET, { expiresIn: "1h" });
  res.cookie("token", token, { httpOnly: true });
  
  res.status(200).json({ success: true, message: "Admin logged in successfully" });
};

// Clear the JWT token cookie for logout
export const adminLogout = (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ success: true, message: "Admin logged out successfully" });
};

// Check if admin is authenticated (token already verified by middleware)
export const checkAdminAuth = (req, res) => {
  res.status(200).json({ success: true, message: "Admin is authenticated" });
};
