"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

type Profile = {
  _id: string;
  name: string;
  age: number;
  gender: string;
  pronouns: string;
  bio?: string;
};

const DEFAULT_AVATAR = "/Assets/avatar.png";

export default function HomePage() {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/v1/getallpost");
        setProfiles(res.data.responseData || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProfiles();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (!profiles.length) return <p>No profiles found</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {profiles.map((p) => (
        <Link key={p._id} href={`/profile/${p._id}`}>
          <div className="p-4 rounded-lg shadow bg-white cursor-pointer hover:shadow-md">
            <img
              src={DEFAULT_AVATAR}
              alt="avatar"
              className="w-20 h-20 rounded-full mx-auto"
            />
            <h3 className="text-center mt-2 font-bold">{p.name}</h3>
            <p className="text-center text-sm text-gray-600">
              {p.gender} | {p.age} | {p.pronouns}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
