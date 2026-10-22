import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import "dotenv/config";
import profileRoutes from "./routes/profileRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";

// Create Express application
const app = express();

/**             
 * Enable Cross-Origin Resource Sharing.
 * This allows the React frontend
 * to communicate with the backend.
 */

// Allow local development and deployed frontend
const allowedOrigins = [
  process.env.FRONTEND_URL,
  process.env.Live_LINK,
];

app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);




// app.use(
//   cors({
//     origin: process.env.FRONTEND_URL,
//     credentials: true,
//   })
// );

// Parse incoming JSON requests
app.use(express.json());

// Parse URL encoded data
app.use(express.urlencoded({ extended: true }));

// Read cookies from requests
app.use(cookieParser());

/**
 * Authentication Routes
 */
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/auth/reset-password/:token",authRoutes);
// app.use("/api/auth/forgot-password",authRoutes)
/**
 *
 * This route confirms that the server is running.
 */
app.get("/", (request, response) => {
  response.json({
    success: true,
    message: "TaskFlow Backend is Running Successfully",
  });
});

export default app;
