import "dotenv/config";
import app from "./app.js";
import connectDatabase from "./Config/db.js";
import profileRoutes from "./routes/profileRoutes.js"


/**
 * Start the application.
 * First connect to MongoDB,
 * then start the Express server.
 */
const startServer = async () => {
  const port = process.env.PORT || 5000;

  await connectDatabase();
  app.use("/api/profile", profileRoutes);

  app.listen(port, () => {
    console.log(
      `Server Running: http://localhost:${port}`
    );
  });
};

startServer();
