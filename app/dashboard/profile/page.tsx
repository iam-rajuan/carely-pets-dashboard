"use client";

import { useState } from "react";
import { Pencil, Lock, ChevronRight } from "lucide-react";

export default function ProfilePage() {
  const [editing, setEditing] = useState(false);

  const user = {
    name: "John Doe",
    email: "john@gmail.com",
    avatar:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=800",
  };

  return (
    <div className="space-y-10 w-full">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">
          Personal Information
        </h1>

        <button
          onClick={() => setEditing(!editing)}
          className="flex items-center gap-2 bg-[#D6F2F8] hover:bg-[#c9edf5] px-5 py-2 rounded-xl text-sm font-medium text-gray-700 transition"
        >
          <Pencil className="h-4 w-4" />
          Edit
        </button>
      </div>

      {/* PROFILE SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Section - Avatar */}
        <div className="flex flex-col items-center md:items-start gap-6">
          <div className="relative w-36 h-36">
            <img
              src={user.avatar}
              alt="avatar"
              className="w-full h-full rounded-full object-cover border"
            />

            {/* Edit Icon */}
            <button className="absolute bottom-2 right-2 bg-white shadow-md p-2 rounded-full border hover:bg-gray-50 transition">
              <Pencil className="h-4 w-4 text-gray-700" />
            </button>
          </div>
        </div>

        {/* Right Section - Info */}
        <div className="space-y-8 w-full">
          {/* NAME */}
          <div>
            <p className="text-xs font-semibold text-gray-500 tracking-wide">
              NAME
            </p>

            {editing ? (
              <input
                type="text"
                defaultValue={user.name}
                className="mt-1 w-full border-b border-gray-300 text-gray-700 py-2 focus:outline-none focus:border-[#00A7C7]"
              />
            ) : (
              <p className="mt-1 text-gray-900 font-medium border-b pb-2">
                {user.name}
              </p>
            )}
          </div>

          {/* EMAIL */}
          <div>
            <p className="text-xs font-semibold text-gray-500 tracking-wide">
              EMAIL
            </p>

            <p className="mt-1 text-gray-900 font-medium border-b pb-2">
              {user.email}
            </p>
          </div>

          {/* CHANGE PASSWORD */}
          <button className="flex items-center gap-3 text-sm text-[#00A7C7] font-medium hover:opacity-70 transition">
            <Lock className="h-4 w-4" />
            Change Password
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
