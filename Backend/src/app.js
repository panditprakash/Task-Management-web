


// import express from "express";
// import cors from "cors";
// import cookieParser from "cookie-parser";
// import "dotenv/config";

// import profileRoutes from "./routes/profileRoutes.js";
// import authRoutes from "./routes/authRoutes.js";
// import userRoutes from "./routes/userRoutes.js";
// import taskRoutes from "./routes/taskRoutes.js";

// const app = express();

// // Accept local development plus every explicitly configured frontend URL.
// // CORS_ORIGIN can contain a comma-separated list for preview deployments.
// const allowedOrigins = [
//   "http://localhost:5173",
//   process.env.FRONTEND_URL,
//   // process.env.LIVE_LINK,
//   ...((process.env.CORS_ORIGIN || "").split(",")),
// ]
//   .map((origin) => origin?.trim().replace(/\/$/, ""))
//   .filter(Boolean);

// // CORS configuration
// const corsOptions = {
//   origin: (origin, callback) => {
//     const normalizedOrigin = origin?.replace(/\/$/, "");

//     if (!normalizedOrigin || allowedOrigins.includes(normalizedOrigin)) {
//       return callback(null, true);
//     }

//     console.error("CORS blocked origin:", origin);
//     return callback(new Error("Not allowed by CORS"));
//   },

//   methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],

//   allowedHeaders: [
//     "Content-Type",
//     "Authorization",
//     "X-Requested-With",
//   ],

//   credentials: true,
// };

// // IMPORTANT: CORS must come before API routes
// app.use(cors(corsOptions));

// // Parse incoming requests
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());

// // API routes
// app.use("/api/auth", authRoutes);
// app.use("/api/user", userRoutes);
// app.use("/api/tasks", taskRoutes);
// app.use("/api/profile", profileRoutes);

// // Health check route
// app.get("/", (req, res) => {
//   res.status(200).json({
//     success: true,
//     message: "TaskFlow Backend is Running Successfully",
//   });
// });

// // Return a useful JSON response for CORS and malformed-request errors.
// app.use((error, req, res, next) => {
//   if (error.message === "Not allowed by CORS") {
//     return res.status(403).json({
//       success: false,
//       message: "This frontend origin is not allowed to access the API.",
//     });
//   }

//   if (error instanceof SyntaxError && "body" in error) {
//     return res.status(400).json({
//       success: false,
//       message: "Request body must be valid JSON.",
//     });
//   }

//   return next(error);
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

// 1. Allowed frontend origins
const allowedOrigins = [
  "http://localhost:5173",

  // Deployed Vercel frontend
  "https://task-management-web-phi.vercel.app",

  // Additional frontend URLs from Render environment variables
  ...(process.env.FRONTEND_URL || "").split(","),
  ...(process.env.CORS_ORIGIN || "").split(","),
]
  .map((origin) => origin.trim().replace(/\/+$/, ""))
  .filter(Boolean);

// 2. CORS configuration
const corsOptions = {
  origin: (origin, callback) => {
    // Allow requests without an Origin header
    if (!origin) {
      return callback(null, true);
    }

    const normalizedOrigin = origin.replace(/\/+$/, "");

    if (allowedOrigins.includes(normalizedOrigin)) {
      return callback(null, true);
    }

    console.error("CORS blocked origin:", origin);

    return callback(new Error("Not allowed by CORS"));
  },

  methods: [
    "GET",
    "POST",
    "PUT",
    "PATCH",
    "DELETE",
    "OPTIONS",
  ],

  allowedHeaders: [
    "Content-Type",
    "Authorization",
    "X-Requested-With",
  ],

  credentials: true,

  optionsSuccessStatus: 204,
};

// 3. Apply CORS before API routes
app.use(cors(corsOptions));

// 4. Parse incoming requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// 5. Health check route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "TaskFlow Backend is Running Successfully",
  });
});

// 6. API routes
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/profile", profileRoutes);

// 7. Error handling middleware
app.use((error, req, res, next) => {
  console.error("Backend Error:", error.message);

  if (error.message === "Not allowed by CORS") {
    return res.status(403).json({
      success: false,
      message: "This frontend origin is not allowed to access the API.",
    });
  }

  if (error instanceof SyntaxError && "body" in error) {
    return res.status(400).json({
      success: false,
      message: "Request body must be valid JSON.",
    });
  }

  return res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
});

export default app;

