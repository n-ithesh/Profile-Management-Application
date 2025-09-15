import dotenv from "dotenv";
import mongoose from "mongoose";
import ProfileModel from "./model/post.model.js";

dotenv.config({ path: "./.env" });

const MONGO_URL = process.env.MONGO_URL;

const seedProfiles = async () => {
  try {
    await mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(" Connected to MongoDB");

    // Sample data (10+ profiles with detailed bios)
    const profiles = [
      {
        name: "Alice",
        age: 25,
        gender: "Female",
        pronouns: "She/Her",
        bio: "Alice is a frontend developer from Bangalore who specializes in React and modern UI/UX practices. She loves creating seamless user experiences and is passionate about design systems.",
      },
      {
        name: "Bob",
        age: 30,
        gender: "Male",
        pronouns: "He/Him",
        bio: "Bob is a backend engineer with expertise in Node.js and Express. He has a strong interest in building scalable APIs and enjoys mentoring junior developers.",
      },
      {
        name: "Charlie",
        age: 28,
        gender: "Male",
        pronouns: "He/Him",
        bio: "Charlie is a full-stack developer who thrives in dynamic environments. He’s a coffee enthusiast and loves contributing to open-source projects in his free time.",
      },
      {
        name: "David",
        age: 32,
        gender: "Male",
        pronouns: "He/Him",
        bio: "David is a UX designer passionate about minimalism. His work focuses on creating clean and intuitive digital products that simplify everyday tasks.",
      },
      {
        name: "Eva",
        age: 27,
        gender: "Female",
        pronouns: "She/Her",
        bio: "Eva is a mobile developer who specializes in Flutter. She enjoys building cross-platform applications and teaching coding bootcamps for beginners.",
      },
      {
        name: "Frank",
        age: 35,
        gender: "Male",
        pronouns: "He/Him",
        bio: "Frank is a database administrator with expertise in SQL and NoSQL systems. He has a knack for optimizing queries and ensuring data integrity.",
      },
      {
        name: "Grace",
        age: 26,
        gender: "Female",
        pronouns: "She/Her",
        bio: "Grace is a data scientist who loves Python and machine learning. She frequently works on predictive modeling and enjoys solving real-world problems with data.",
      },
      {
        name: "Hannah",
        age: 29,
        gender: "Female",
        pronouns: "She/Her",
        bio: "Hannah is a cloud engineer with an AWS focus. She’s passionate about cloud-native solutions, DevOps automation, and container orchestration with Kubernetes.",
      },
      {
        name: "Ian",
        age: 31,
        gender: "Male",
        pronouns: "He/Him",
        bio: "Ian is a DevOps engineer who loves building CI/CD pipelines and automating workflows. He’s an advocate for open-source tools and infrastructure as code.",
      },
      {
        name: "Jane",
        age: 24,
        gender: "Female",
        pronouns: "She/Her",
        bio: "Jane is a UI designer with a passion for vibrant colors and typography. She works closely with developers to bring creative designs to life.",
      },
      {
        name: "Kevin",
        age: 33,
        gender: "Male",
        pronouns: "He/Him",
        bio: "Kevin is a tech lead and JavaScript fanatic. He enjoys architecting frontend systems, mentoring teams, and exploring new frameworks.",
      },
    ];

    // Clear existing data
    await ProfileModel.deleteMany();
    console.log(" Cleared old profiles");

    // Insert new data
    await ProfileModel.insertMany(profiles);
    console.log("Profiles seeded successfully");

    process.exit(0);
  } catch (error) {
    console.error(" Seeding failed:", error.message);
    process.exit(1);
  }
};

seedProfiles();
