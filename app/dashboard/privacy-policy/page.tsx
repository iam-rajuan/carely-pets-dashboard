"use client";

import { useState } from "react";
import RichTextEditor from "../../components/RichTextEditor";

export default function PrivacyPolicyPage() {
  const [content, setContent] = useState("");

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-600">
          Update the privacy policy shown to users across the platform.
        </p>
      </div>

      <RichTextEditor value={content} onChange={setContent} />

      <div className="flex justify-end gap-3">
        <button
          type="button"
          className="px-5 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium"
        >
          Cancel
        </button>
        <button
          type="button"
          className="px-5 py-2 rounded-xl bg-[#D6F2F8] hover:bg-[#c9edf5] text-gray-800 font-medium"
        >
          Save changes
        </button>
      </div>
    </div>
  );
}
