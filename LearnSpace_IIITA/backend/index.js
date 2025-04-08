import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import { connectDB } from "./db/connectDB.js";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

import adminAuthRoutes from "./routes/adminAuth.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Determine current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Middleware
app.use(cors({
    origin: "http://localhost:5173", // Update with your admin frontend URL if needed
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true // Enable cookies
}));
app.use(express.json());
app.use(cookieParser());

// Serve static files if needed
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Use only the admin authentication routes
app.use("/api/admin", adminAuthRoutes);

app.listen(PORT, () => {
    connectDB();
    console.log("Server is running on port", PORT);
});
