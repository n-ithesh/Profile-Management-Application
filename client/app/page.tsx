"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { FaDownload } from "react-icons/fa";

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
  const BACKEND_URL = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const res = await axios.get(`${BACKEND_URL}/getallpost`);
        setProfiles(res.data.responseData || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProfiles();
  }, []);

  if (loading)
    return <p className="text-center text-lg font-semibold">Loading...</p>;
  if (!profiles.length)
    return (
      <p className="text-center text-lg font-semibold">No profiles found</p>
    );

  return (
    <div className="min-h-screen bg-gray-50 py-6 sm:py-10 px-3 sm:px-6 lg:px-10">
      <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-7xl mx-auto">
        {profiles.map((p) => (
          <Link key={p._id} href={`/profile/${p._id}`} className="group">
            <div className="relative flex flex-col items-center rounded-2xl shadow-md bg-white overflow-hidden hover:shadow-lg transition-shadow duration-200">
              {/* Header Banner */}
              <div className="w-full h-20 sm:h-24 md:h-28 bg-orange-500" />

              {/* Profile Image */}
              <div className="absolute top-10 sm:top-12 md:top-14 flex justify-center w-full">
                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full bg-white flex items-center justify-center shadow-md">
                  <Image
                    src={DEFAULT_AVATAR}
                    alt={p.name}
                    width={100}
                    height={100}
                    className="rounded-full object-cover w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
                  />
                </div>
              </div>

              {/* Info Section */}
              <div className="flex flex-col items-center mt-16 sm:mt-20 md:mt-24 mb-6 px-3 text-center">
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900">
                  {p.name}
                </h3>
                <div className="relative w-full max-w-xs mt-4">
                  <button
                    className="w-full flex items-center justify-center gap-2 px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-full border border-gray-100 text-gray-200 font-medium select-none text-xs sm:text-sm md:text-base"
                    disabled
                  >
                    <FaDownload className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 opacity-50" />
                    Download My Resume
                  </button>
                  <div className="absolute inset-0 flex items-center justify-center text-gray-800 font-medium text-[10px] sm:text-xs md:text-sm">
                    {p.gender} | {p.age} | {p.pronouns}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
