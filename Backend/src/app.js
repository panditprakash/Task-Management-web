import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import "dotenv/config";
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
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

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
