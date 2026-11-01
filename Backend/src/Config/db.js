// import mongoose from "mongoose";
// import dns from "dns";

// // querySrv ECONNREFUSED _mongodb._tcp.task.aoryosy.mongodb.net (This error fix code) this error show in terminal
// dns.setServers(["1.1.1.1", "8.8.8.8"]);

// const connectDB = async () => {
//   const mongoURI = process.env.MONGO_URI;

//   if (!mongoURI) {
//     throw new Error("MONGO_URI is missing from environment variables.");
//   }

//   const connection = await mongoose.connect(mongoURI);
//   console.log(`✅ MongoDB connected: ${connection.connection.host}`);
// };

// export default connectDB;

import mongoose from "mongoose";

const connectDB = async () => {
  const mongoURI = process.env.MONGO_URI;

  if (!mongoURI) {
    throw new Error("MONGO_URI is missing from environment variables.");
  }

  const conn = await mongoose.connect(mongoURI);
  console.log(`✅ MongoDB connected: ${conn.connection.host}`);
};

export default connectDB;
