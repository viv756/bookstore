import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js"

const app = express();

app.use(cors({
  origin: ["http://localhost:5173", "https://bookstore-1-b4ao.onrender.com"],
  credentials: true,
}));

app.options("*", cors());

app.use(express.json())

dotenv.config();

const PORT = 4001

// connect to mongodb
try {
  mongoose.connect( `mongodb://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGO_URI}?authSource=admin`, {});
  console.log("coneected to mongodb");
} catch (error) {
  console.log("error:", error);
}

// defining routes
app.use("/book", bookRoute);
app.use("/user",userRoute)

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
