// // // import "dotenv/config";
// // import cors from "cors";

// // import "dotenv/config";
// // import app from "./app.js";
// // import connectDatabase from "./Config/db.js";
// // import "dotenv/config";




// // /**
// //  * Start the application.
// //  * First connect to MongoDB,
// //  * then start the Express server.
// //  */

// // const allowedOrigins = [
// //   process.env.FRONTEND_URL,
// //   process.env.Live_LINK,
// // ];

// // app.use(
// //   cors({
// //     origin: allowedOrigins,
// //     methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
// //     allowedHeaders: ["Content-Type", "Authorization"],
// //   })
// // );


// // const startServer = async () => {
// //   const port = process.env.PORT || 5000;

// //   await connectDatabase();

// //   app.listen(port, () => {
// //     console.log(`Server Running: http://localhost:${port}`);
    
// //   });
// // };

// // startServer();

// import "dotenv/config";
// import cors from "cors";
// import app from "./app.js";
// import connectDatabase from "./Config/db.js";

// // Add fallback check for CORS origins
// const allowedOrigins = [
//   process.env.FRONTEND_URL ,
//   process.env.BACKEN_URL,
// ].filter(Boolean); // removes undefined values if env variables are missing

// app.use(
//   cors({
//     origin: (origin, callback) => {
//       // allow requests with no origin (like mobile apps, curl, postman)
//       if (!origin || allowedOrigins.includes(origin)) {
//         return callback(null, true);
//       }
//       return callback(new Error("CORS policy violation"), false);
//     },
//     methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
//     allowedHeaders: ["Content-Type", "Authorization"],
//     credentials: true,
//   })
// );

// // Optional: Add a base route so visiting the root URL doesn't show 404
// app.get("/", (req, res) => {
//   res.status(200).json({ status: "API is working properly" });
// });

// // Ensure DB connects
// connectDatabase().catch((err) => {
//   console.error("Database connection failed:", err);
// });

// // Run app.listen ONLY in local development
// if (process.env.NODE_ENV !== "production") {
//   const port = process.env.PORT || 5000;
//   app.listen(port, () => {
//     console.log(`Server Running: http://localhost:${port}`);
//   });
// }

// // CRITICAL FOR VERCEL: Export the app instance
// export default app;




import "dotenv/config";
import app from "./app.js";
import connectDatabase from "./Config/db.js";

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDatabase();

    app.listen(PORT, () => {
      console.log(`TaskFlow server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Server startup failed:", error);
    process.exit(1);
  }
};

startServer();
//
