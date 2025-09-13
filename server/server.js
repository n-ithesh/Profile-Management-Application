import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

import express from "express";
import cors from "cors";
import { connectWithMongoose } from "./db/connection1.db.js";

const app = express();

// DB connection
connectWithMongoose();

// Middlewares
app.use(cors({
  origin: "http://localhost:3000", // frontend
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
import PostRoute from "./router/post.route.js";
app.use("/api/v1", PostRoute);

// Start server
app.listen(8000, () => {
  console.log(" Server is running on http://localhost:8000");
});
