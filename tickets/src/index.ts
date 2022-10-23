import { app } from "./app";
import mongoose from "mongoose";

const start = async () => {
  if (!process.env.MONGO_URL) {
    throw new Error("MONGO_URL must be defined");
  }
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to MongoDb");
  } catch (error) {
    console.error(error);
  }
  app.listen(3000, () => {
    console.log("listening on 3000");
  });
};

start();
