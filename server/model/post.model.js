import mongoose from "mongoose";

const profileSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    gender: {
      type: String,
      required: [true, "Gender is required"],
      enum: ["Male", "Female", "Other"],
    },
    age: {
      type: Number,
      required: [true, "Age is required"],
      min: 0,
    },
    pronouns: {
      type: String,
      required: [true, "Pronouns are required"],
      trim: true,
    },
    bio: {
      type: String,
      required: [true, "Bio is required"],
      trim: true,
    },
  },
  { timestamps: true }
);

const ProfileModel =mongoose.models.Profile || mongoose.model("Profile", profileSchema);

export default ProfileModel;
