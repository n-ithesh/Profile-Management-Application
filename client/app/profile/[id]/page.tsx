"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";

const DEFAULT_AVATAR = "/Assets/avatar.png";

type Profile = {
  _id: string;
  name: string;
  age: number;
  gender: string;
  pronouns: string;
  bio?: string;
  createdAt?: string;
  updatedAt?: string;
};

export default function ProfileDetails() {
  const { id } = useParams();
  const [profile, setProfile] = useState<Profile>();
  const [loading, setLoading] = useState(true);

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

  if (loading) return <p>Loading...</p>;
  if (!profile) return <p>Profile not found</p>;

  return (
    <div className="p-6 max-w-lg mx-auto">
      <div className="text-center">
        <img
          src={DEFAULT_AVATAR}
          alt="avatar"
          className="w-24 h-24 rounded-full mx-auto"
        />
        <h2 className="text-xl font-bold mt-2">{profile.name}</h2>
        <p className="text-gray-600">
          {profile.gender} | {profile.age} | {profile.pronouns}
        </p>
      </div>

      <div className="mt-6">
        <h3 className="font-semibold">Bio</h3>
        <p>{profile.bio}</p>
      </div>

      <div className="mt-4 text-sm text-gray-500">
        <p>Created: {new Date(profile.createdAt || "").toLocaleString()}</p>
        <p>Updated: {new Date(profile.updatedAt || "").toLocaleString()}</p>
      </div>
    </div>
  );
}
