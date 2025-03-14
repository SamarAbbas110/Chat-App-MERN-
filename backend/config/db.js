import colors from "colors";
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (e) {
    console.error(`Error: ${e.message}`.red.underline.bold);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;
