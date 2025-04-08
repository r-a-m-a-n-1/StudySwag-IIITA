import express from "express";
import { adminLogin, verifyOTP, adminLogout, checkAdminAuth } from "../controllers/adminAuth.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

// Admin authentication routes
router.post("/login", adminLogin);          // Step 1: Submit credentials and receive OTP
router.post("/verify-otp", verifyOTP);        // Step 2: Verify OTP and log in
router.post("/logout", adminLogout);          // Logout route
router.get("/check-auth", verifyToken, checkAdminAuth);  // Check if admin is authenticated

export default router;
