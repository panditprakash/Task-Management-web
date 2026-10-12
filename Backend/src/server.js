// import "dotenv/config";
import "dotenv/config";
import app from "./app.js";
import connectDatabase from "./Config/db.js";

/**
 * Start the application.
 * First connect to MongoDB,
 * then start the Express server.
 */
const startServer = async () => {
  const port = process.env.PORT || 5000;

  await connectDatabase();

  app.listen(port, () => {
    console.log(`Server Running: http://localhost:${port}`);
    
  });
};

startServer();
