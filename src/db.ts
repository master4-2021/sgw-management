import mongoose from "mongoose";
import config from "./config";

const connectDB = async () => {
  try {
    await mongoose.connect(config.db_uri!);
    console.log("MongoDB connected...");
  } catch (err) {
    console.error("Failed to connect to DB", err);
    process.exit(1);
  }
};

export default connectDB;
