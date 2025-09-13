"use client";

import Image from "next/image";

export type Profile = {
  _id: string;
  name: string;
  gender: string;
  age: number;
  pronouns: string;
  avatar?: string;
};

const DEFAULT_AVATAR = "/Assets/avatar.png";

export default function ProfileCard({ profile }: { profile: Profile }) {
  return (
    <div className="flex flex-col items-center rounded-2xl shadow-md bg-white overflow-hidden relative w-full max-w-xs">
      {/* Top orange banner */}
      <div className="w-full h-28 bg-orange-500" />

      {/* Profile Image */}
      <div className="absolute top-14 flex justify-center w-full">
        <div className="w-28 h-28 rounded-full bg-white flex items-center justify-center shadow-md">
          <Image
            src={profile.avatar || DEFAULT_AVATAR}
            alt={profile.name}
            width={100}
            height={100}
            className="rounded-full object-cover"
          />
        </div>
      </div>

      {/* Text Content */}
      <div className="flex flex-col items-center mt-20 mb-6">
        <h3 className="text-lg font-semibold text-gray-900">{profile.name}</h3>
        <div className="mt-2 px-4 py-1 bg-gray-100 rounded-full text-sm text-gray-700">
          {profile.gender} | {profile.age} | {profile.pronouns}
        </div>
      </div>
    </div>
  );
}
