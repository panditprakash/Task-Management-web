// import cors from "cors";
// import express from "express";
// import cookieParser from "cookie-parser";
// import "dotenv/config";
// import profileRoutes from "./routes/profileRoutes.js";
// import authRoutes from "./routes/authRoutes.js";
// import userRoutes from "./routes/userRoutes.js";
// import taskRoutes from "./routes/taskRoutes.js";

// // Create Express application
// const app = express();



// // Allow local development and deployed frontend
// const allowedOrigins = [process.env.Live_LINK, process.env.FRONTEND_URL];

// app.use(
//   cors({
//     origin: function (origin, callback) {
//       // Allow requests with no origin (like mobile apps, curl, or Postman)
//       if (!origin || allowedOrigins.includes(origin)) {
//         callback(null, true);
//       } else {
//         callback(new Error("Blocked by CORS"));
//       }
//     },
//     credentials: true,
//     methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
//     allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
//   }),
// );

// // Explicitly handle preflight requests across all routes
// // app.options("*", cors());



// // Parse incoming JSON requests
// app.use(express.json());

// // Parse URL encoded data
// app.use(express.urlencoded({ extended: true }));

// // Read cookies from requests
// app.use(cookieParser());

// /**
//  * Authentication Routes
//  */
// app.use("/api/auth", authRoutes);
// app.use("/api/user", userRoutes);
// app.use("/api/tasks", taskRoutes);
// app.use("/api/profile", profileRoutes);
// app.use("/api/auth/reset-password/:token", authRoutes);
// // app.use("/api/auth/forgot-password",authRoutes)
// /**
//  *
//  * This route confirms that the server is running.
//  */
// app.get("/", (request, response) => {
//   response.json({
//     success: true,
//     message: "TaskFlow Backend is Running Successfully",
//   });
// });

// export default app;



import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import "dotenv/config";

import profileRoutes from "./routes/profileRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";

const app = express();

// Allowed frontend origins
const allowedOrigins = [
  "http://localhost:5173",
  process.env.FRONTEND_URL,
  process.env.LIVE_LINK,
].filter(Boolean);

// CORS configuration
const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    console.error("CORS blocked origin:", origin);
    return callback(new Error("Not allowed by CORS"));
  },

  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],

  allowedHeaders: [
    "Content-Type",
    "Authorization",
    "X-Requested-With",
  ],

  credentials: true,
};

// IMPORTANT: CORS must come before API routes
app.use(cors(corsOptions));

// Parse incoming requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// API routes
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/profile", profileRoutes);

// Health check route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "TaskFlow Backend is Running Successfully",
  });
});

export default app;
