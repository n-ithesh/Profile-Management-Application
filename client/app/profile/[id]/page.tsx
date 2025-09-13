"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import axios from "axios";

const DEFAULT_AVATAR = "/Assets/avatar.png";

interface Profile {
  _id: string;
  name: string;
  gender: string;
  age: number;
  pronouns: string;
  bio: string;
  createdAt?: string;
  updatedAt?: string;
  avatar?: string;
}

export default function ProfileDetails() {
  const { id } = useParams();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProfile = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/v1/getsinglepost/${id}`
        );

        const data = response.data.responseData || response.data;

        setProfile({
          ...data,
          avatar: DEFAULT_AVATAR,
        });
      } catch (error) {
        console.error("Error fetching profile:", error);
      } finally {
        setLoading(false);
      }
    };

    getProfile();
  }, [id]);

  if (loading) return <p className="text-center text-gray-600">Loading...</p>;
  if (!profile) return <p className="text-center text-gray-600">Profile not found</p>;

  return (
    <main className="flex flex-col min-h-screen bg-gray-50">
      {/* ---------- HEADER ---------- */}
      <header className="relative bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">
          <h1 className="text-xl font-bold">TAPMI</h1>
        </div>

        {/* Avatar & Info */}
        <div className="flex flex-col items-center text-center py-10">
          <Image
            src={profile.avatar || DEFAULT_AVATAR}
            alt={profile.name}
            width={120}
            height={120}
            className="rounded-full border-4 border-white shadow-lg"
          />
          <h2 className="mt-4 text-2xl font-bold">{profile.name}</h2>
          <p className="text-white/90">
            {profile.gender} | {profile.age} | {profile.pronouns}
          </p>
        </div>
      </header>

      {/* ---------- ABOUT ---------- */}
      <section className="max-w-4xl mx-auto px-6 py-10 space-y-6">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-800">Bio</h3>
          <p className="text-gray-700 leading-relaxed">{profile.bio}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700">
          <div>
            <h3 className="font-semibold">Created At</h3>
            <p>{new Date(profile.createdAt || "").toLocaleString()}</p>
          </div>
          <div>
            <h3 className="font-semibold">Last Updated</h3>
            <p>{new Date(profile.updatedAt || "").toLocaleString()}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
