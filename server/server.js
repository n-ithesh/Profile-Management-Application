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
  origin: [
    "http://localhost:3000",                
    "https://profilemanagementapplication.netlify.app"    
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
import PostRoute from "./router/post.route.js";
app.use("/api/v1", PostRoute);
app.get('/', (req, res) => {
  res.send({
    activeStatus: true,
    error: false,
  });
});


// Start server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
