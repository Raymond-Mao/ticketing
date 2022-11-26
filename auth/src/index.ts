import { app } from "./app";
import mongoose from "mongoose";

const start = async () => {
  console.log("start up.");

  if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI must be defined");
  }
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDb");
  } catch (error) {
    console.error(error);
  }
  app.listen(3000, () => {
    console.log("listening on 3000");
  });
};

start();
