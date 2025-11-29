"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

// Props if fetching from backend later
interface EditPetTypeProps {
  initialValue?: string;
}

export default function EditPetType({
  initialValue = "Dog",
}: EditPetTypeProps) {
  const router = useRouter();
  const [type, setType] = useState(initialValue);

  return (
    <div className="p-6 max-w-4xl">
      {/* PAGE TITLE */}
      <h1 className="text-2xl font-semibold text-gray-900">Edit Pet Type</h1>

      {/* INPUT FIELD */}
      <div className="mt-8">
        <label className="block text-xs font-medium text-gray-600 mb-2">
          TYPE
        </label>

        <input
          type="text"
          value={type}
          onChange={(e) => setType(e.target.value)}
          placeholder="Enter pet type"
          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-800 placeholder:text-gray-400
            focus:outline-none focus:ring-2 focus:ring-[#9BE3F4]"
        />
      </div>

      {/* BUTTONS */}
      <div className="flex justify-end mt-8 gap-3">
        <button
          onClick={() => router.back()}
          className="px-5 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium"
        >
          Cancel
        </button>

        <button
          onClick={() => console.log("Updated value:", type)}
          className="px-6 py-2 rounded-xl bg-[#9BE3F4] hover:bg-[#8ad9ec] text-gray-900 font-medium shadow-sm"
        >
          Save
        </button>
      </div>
    </div>
  );
}
