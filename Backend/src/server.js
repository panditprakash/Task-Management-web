import dns from "node:dns"; // or const dns = require('node:dns');
dns.setServers(["8.8.8.8", "8.8.4.4"]);
import "dotenv/config";
import app from "./app.js";
import connectDatabase from "./Config/db.js";

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET is missing from environment variables.");
    }

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
