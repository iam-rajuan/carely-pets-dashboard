"use client";

import { X, Upload } from "lucide-react";

interface HealthRecordFormModalProps {
  open: boolean;
  onClose: () => void;
  type: string;
}

export default function HealthRecordFormModal({
  open,
  onClose,
  type,
}: HealthRecordFormModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center overflow-y-auto">
      <div className="bg-white w-[900px] p-8 rounded-2xl shadow-xl max-h-[90vh] overflow-y-auto">
        {/* HEADER */}
        <div className="flex justify-between items-center mb-5">
          <p className="text-xl font-semibold text-gray-900">
            Add {type} Record
          </p>
          <X className="cursor-pointer" onClick={onClose} />
        </div>

        {/* RECORD DETAILS */}
        <p className="text-gray-900 font-medium mb-2">Record Details</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <input className="input" placeholder="Record Name" />
          <input className="input" placeholder="Batch / Lot No." />
          <input className="input" placeholder="Other information" />
        </div>

        {/* VETERINARIAN INFO */}
        <p className="text-gray-900 font-medium mb-2">
          Veterinarian Information
        </p>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
          <input className="input" placeholder="Designation" />
          <input className="input" placeholder="Name" />
          <input className="input" placeholder="Clinic Name" />
          <input className="input" placeholder="License No" />
          <input className="input" placeholder="Contact" />
        </div>

        {/* VITAL SIGNS */}
        <p className="text-gray-900 font-medium mb-2">Vital Signs</p>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
          <input className="input" placeholder="Weight" />
          <input className="input" placeholder="Temperature" />
          <input className="input" placeholder="Heart Rate" />
          <input className="input" placeholder="Respiratory" />
          <select className="input">
            <option>Normal</option>
            <option>High</option>
            <option>Low</option>
          </select>
        </div>

        {/* ATTACHMENTS */}
        <p className="text-gray-900 font-medium mb-2">Attachments</p>

        <button className="flex items-center gap-2 px-4 py-2 bg-[#D6F2F8] mb-3 rounded-xl">
          <Upload className="h-4 w-4 text-gray-700" />
          Upload files
        </button>

        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="border rounded-xl px-4 py-3 mb-3 flex justify-between items-center bg-gray-50"
          >
            <div>
              <p className="text-gray-800 font-medium">File name</p>
              <p className="text-xs text-gray-500">File type • 245KB</p>
            </div>
            <X className="text-gray-600 cursor-pointer" />
          </div>
        ))}

        {/* FOOTER BUTTONS */}
        <div className="flex justify-end gap-3 mt-6">
          <button className="px-6 py-2 bg-gray-100 rounded-xl hover:bg-gray-200">
            Cancel
          </button>
          <button className="px-6 py-2 bg-[#D6F2F8] rounded-xl hover:bg-[#c9edf5] text-gray-800 font-medium">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
