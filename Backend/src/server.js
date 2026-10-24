// import "dotenv/config";
import cors from "cors";

import "dotenv/config";
import app from "./app.js";
import connectDatabase from "./Config/db.js";
import "dotenv/config";




/**
 * Start the application.
 * First connect to MongoDB,
 * then start the Express server.
 */

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


const startServer = async () => {
  const port = process.env.PORT || 5000;

  await connectDatabase();

  app.listen(port, () => {
    console.log(`Server Running: http://localhost:${port}`);
    
  });
};

startServer();
