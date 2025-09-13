import mongoose from "mongoose";

const connectWithMongoose = async () => {
  const MONGO_URL = process.env.MONGO_URL;
  try {
    const connectionInstance = await mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(" Database connected:", connectionInstance.connection.host);
  } catch (error) {
    console.error(" Database connection failed:", error.message);
    process.exit(1);
  }
};

export { connectWithMongoose };
