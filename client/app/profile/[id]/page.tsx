"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import axios from "axios";
import Image from "next/image";
import {
  FaDownload,
  FaEnvelope,
  FaPhone,
  FaPlay,
  FaArrowLeft,
} from "react-icons/fa";

const DEFAULT_AVATAR = "/Assets/avatar.png";

type Profile = {
  _id: string;
  name: string;
  age: number;
  gender: string;
  pronouns: string;
  bio?: string;
};

export default function ProfileDetails() {
  const { id } = useParams();
  const [profile, setProfile] = useState<Profile>();
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8000/api/v1/getsinglepost?postID=${id}`
        );
        setProfile(res.data.responseData || {});
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, [id]);

  if (loading) return <p className="text-center py-10">Loading...</p>;
  if (!profile) return <p className="text-center py-10">Profile not found</p>;

  return (
    <div className="profile-page min-h-screen bg-gray-50">
      {/* Back button */}
      <div className="max-w-6xl px-4 py-4">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-gray-700 hover:text-orange-500 transition text-sm sm:text-base"
        >
          <FaArrowLeft className="h-4 w-4" />
          Back
        </button>
      </div>

      {/* Header */}
      <div
        className="relative w-full h-[160px] sm:h-[200px] md:h-[240px] lg:h-[280px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/Assets/header-bg.png')" }}
      >
        <div className="absolute left-4 right-4 sm:left-10 sm:right-10 bottom-4 flex flex-col sm:flex-row items-center justify-between gap-4 px-4 sm:px-6 text-white">
          {/* Contact */}
          <div className="flex gap-4 sm:gap-6 md:gap-9">
            <button className="flex items-center gap-2 hover:underline text-xs sm:text-sm md:text-base">
              <FaEnvelope className="h-4 w-4" />
              Email
            </button>
            <button className="flex items-center gap-2 hover:underline text-xs sm:text-sm md:text-base">
              <FaPhone className="h-4 w-4 rotate-90" />
              Phone
            </button>
          </div>
          {/* Download Resume */}
          <button className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm md:text-base rounded-full bg-white/10 backdrop-blur-sm text-white font-medium border border-white/50 shadow hover:shadow-md hover:bg-white/20 transition">
            <FaDownload className="h-4 w-4 text-white" />
            Download My Resume
          </button>
        </div>
      </div>

      {/* Profile Section */}
      <div className="max-w-3xl mx-auto px-4">
        <div className="profile-info-section">
          {/* Avatar */}
          <div className="relative -mt-16 sm:-mt-20 md:-mt-24 flex justify-center">
            {/* Ellipse */}
            <div className="absolute -top-6 sm:-top-8 left-1/2 -translate-x-1/2 z-0">
              <Image
                src="/Assets/Ellipse 9.png"
                alt="decorative ellipse"
                width={700}
                height={300}
                className="opacity-100 w-50 sm:w-52 md:w-60"
              />
            </div>
            {/* Avatar container */}
            <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full border-4 border-white shadow-lg overflow-hidden relative z-10">
              <Image
                src={DEFAULT_AVATAR}
                alt="avatar"
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Name, Gender, Pronouns */}
          <div className="text-center mt-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
              {profile.name}
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 font-semibold">
              {profile.gender} | {profile.age} | {profile.pronouns}
            </p>
          </div>

          {/* Watch Resume Button */}
          <div className="flex justify-center mt-5 sm:mt-6 md:mt-8">
            <button className="flex items-center text-xs sm:text-sm md:text-base gap-2 px-3 sm:px-5 py-1.5 sm:py-2 rounded-full bg-orange-500 text-white font-medium shadow hover:bg-orange-600 transition">
              <FaPlay className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
              Watch my Visual Resume Now
            </button>
          </div>
        </div>
      </div>

      <div className="content-section px-4">
        {/* Tabs */}
        <div className="w-full border border-gray-300 rounded-lg py-3 sm:py-4 mt-8 shadow-m overflow-x-auto">
          <div className="flex flex-col sm:flex-row justify-around px-2 sm:px-4 md:px-6 text-xs sm:text-sm md:text-base">
            <div className="flex-1 text-center px-2 py-2">
              Core Skills & Technical Proficiencies
            </div>
            <div className="flex-1 text-center px-2 py-2">
              Professional Journey & Internship Roles
            </div>
            <div className="flex-1 text-center px-2 py-2">
              Case Insights & Key Projects
            </div>
            <div className="flex-1 text-center px-2 py-2">
              Learning & Academic Milestones
            </div>
            <div className="flex-1 text-center px-2 py-2">
              Endorsements from Mentors & Peers
            </div>
          </div>
        </div>

        {/* Bio */}
        <div className="mt-6 text-gray-700 leading-relaxed text-justify text-xs sm:text-sm md:text-base">
          {profile.bio || "No bio available"}
        </div>

        {/* Image */}
        <div className="mt-8 flex justify-center">
          <Image
            src="/Assets/Group 549.png"
            alt="Profile additional image"
            width={1000}
            height={400}
            className="rounded-lg object-cover w-full max-w-5xl"
          />
        </div>

        {/* Case Insights Section */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-6 p-4 sm:p-6 rounded-lg">
          <div className="flex-1">
            <Image
              src="/Assets/Heading 2.png"
              alt="Case Insights & Key Projects"
              width={300}
              height={100}
              className="object-contain w-32 sm:w-48 md:w-60"
            />
          </div>
          <div className="flex-1 flex justify-end">
            <Image
              src="/Assets/Group 513.png"
              alt="Case Studies and Projects tabs"
              width={200}
              height={60}
              className="object-contain w-28 sm:w-40 md:w-48"
            />
          </div>
        </div>

        {/* Case Study Cards */}
        <div className="mt-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Left Card */}
          <div className="flex-1 flex flex-col items-center text-center">
            <Image
              src="/Assets/Mask group2.jpg"
              alt="ONDC Case Study"
              width={300}
              height={200}
              className="w-full h-auto rounded-lg object-cover shadow-md transition-shadow"
            />
            <div className="mt-3 sm:mt-4 font-bold text-base sm:text-lg md:text-2xl">
              ONDC Case Study
            </div>
          </div>
          {/* Middle Card */}
          <div className="flex-1 flex flex-col items-center text-center">
            <Image
              src="/Assets/Mask group 3.jpg"
              alt="Jal Jeevan Mission Case Study"
              width={300}
              height={200}
              className="w-full h-auto rounded-lg object-cover shadow-md transition-shadow"
            />
            <div className="mt-3 sm:mt-4 font-bold text-base sm:text-lg md:text-2xl">
              Jal Jeevan Mission Case Study
            </div>
          </div>
          {/* Right Card */}
          <div className="flex-1 flex flex-col items-center text-center">
            <Image
              src="/Assets/Mask group.jpg"
              alt="FinEasy Case Study"
              width={300}
              height={200}
              className="w-full h-76 rounded-xl object-cover shadow-md transition-shadow"
            />
            <div className="mt-3 sm:mt-4 font-bold text-base sm:text-lg md:text-2xl">
              FinEasy Case Study
            </div>
          </div>
        </div>

        {/* Visual Resume */}
        <div className="mt-12">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
              Visual Resume
            </h2>
          </div>
          <div className="flex justify-center">
            <div className="relative rounded-2xl shadow-2xl overflow-hidden w-full max-w-4xl">
              <div className="relative w-full h-auto">
                <Image
                  src="/Assets/mpv-shot0035 2.png"
                  alt="Visual Resume Video Thumbnail"
                  width={480}
                  height={296}
                  className="object-cover w-full h-full"
                />
                <div
                  className="pointer-events-none absolute bottom-0 left-0 w-full h-1/3"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0))",
                  }}
                />
              </div>
              <div className="absolute inset-0 flex flex-col justify-between">
                <div className="absolute left-3 sm:left-4 md:left-6 bottom-3 sm:bottom-4 md:bottom-6 flex items-center gap-2">
                  <Image
                    src="/Assets/Group (1).png"
                    alt="YouTube Logo"
                    width={120}
                    height={24}
                    className="object-contain w-28 sm:w-36 md:w-40"
                  />
                </div>
                <div className="absolute right-3 sm:right-4 md:right-6 bottom-3 sm:bottom-4 md:bottom-6 flex items-center gap-2">
                  <Image
                    src="/Assets/Group 268.png"
                    alt="Group 268"
                    width={24}
                    height={24}
                    className="object-contain w-6 sm:w-7 md:w-8"
                  />
                  <Image
                    src="/Assets/Group 10.png"
                    alt="Group 10"
                    width={120}
                    height={30}
                    className="object-contain w-28 sm:w-36 md:w-40"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="mt-16 sm:mt-20 bg-gray-100 w-full py-12 sm:py-16">
        <div className="w-full px-4">
          <div
            className="rounded-2xl p-6  sm:p-8 md:p-12 text-center mb-6 sm:mb-8 shadow-2xl max-w-4xl mx-auto relative overflow-hidden"
            style={{
              backgroundImage: "url('/Assets/header-bg.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="relative z-10">
              <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
                Connect with {profile.name}
              </h2>
              <button className="inline-flex items-center gap-2 sm:gap-3 bg-white text-orange-400 px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-full font-semibold text-xs sm:text-sm md:text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <FaDownload className="h-3 w-3 sm:h-4 sm:w-4" />
                Download My Resume
              </button>
            </div>
          </div>

          {/* Contact & Social Links */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6 max-w-4xl mx-auto">
            <div className="flex items-center gap-3 sm:gap-4">
              <Image
                src="/Assets/Group 90.png"
                alt="Group 90"
                width={60}
                height={40}
                className="object-contain w-10 sm:w-12 md:w-16"
              />
              <Image
                src="/Assets/Group 89.png"
                alt="Group 89"
                width={60}
                height={20}
                className="object-contain w-10 sm:w-12 md:w-16"
              />
            </div>
            <div className="flex items-center gap-3 sm:gap-4">
              <Image
                src="/Assets/Group 75.png"
                alt="Group 75"
                width={60}
                height={40}
                className="object-contain w-10 sm:w-12 md:w-16"
              />
              <Image
                src="/Assets/Group 91.png"
                alt="Group 91"
                width={60}
                height={20}
                className="object-contain w-10 sm:w-12 md:w-16"
              />
            </div>
          </div>

          <div className="border-2 border-gray-300 my-6 sm:my-8 max-w-4xl mx-auto"></div>

          <div className="text-center text-xs sm:text-sm md:text-base text-gray-600 max-w-4xl mx-auto">
          <p>© 2024 MAHE B&apos;LRU</p>
          </div>
        </div>
      </div>
    </div>
  );
}
