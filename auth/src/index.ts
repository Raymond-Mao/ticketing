import { app } from "./app";
import mongoose from "mongoose";

const start = async () => {
  try {
    await mongoose.connect("mongodb://auth-mongo-srv:27017/auth");
    console.log("Connected to MongoDb");
  } catch (error) {
    console.error(error);
  }
  app.listen(3000, () => {
    console.log("listening on 3000");
  });
};

start();
