"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import ProfileCard, { Profile } from "@/components/ProfileCard";
import Link from "next/link";

const DEFAULT_AVATAR = "/Assets/avatar.png";

export default function HomePage() {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProfiles = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/v1/getallpost"
        );

        const profilesWithAvatar = (response.data.responseData || []).map(
          (p: Profile) => ({
            ...p,
            avatar: DEFAULT_AVATAR,
          })
        );

        setProfiles(profilesWithAvatar);
      } catch (error) {
        console.error("Error fetching profiles:", error);
      } finally {
        setLoading(false);
      }
    };

    getProfiles();
  }, []);

  if (loading) {
    return <p className="text-center text-gray-600">Loading profiles...</p>;
  }

  if (!profiles.length) {
    return <p className="text-center text-gray-600">No profiles found</p>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="flex items-start justify-center py-10">
        <section
          className="
            grid gap-8 
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            xl:grid-cols-3
            max-w-7xl w-full px-4
          "
        >
          {profiles.map((p) => (
            <Link href={`/profile/${p._id}`} key={p._id}>
              <ProfileCard profile={p} />
            </Link>
          ))}
        </section>
      </main>
    </div>
  );
}
