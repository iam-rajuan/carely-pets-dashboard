import { useState } from "react";
import RecordTypeModal from "./RecordTypeModal";

const recordTypes = [
  {
    title: "Vaccination",
    count: 12,
    color: "bg-green-50",
    dot: "bg-green-500",
  },
  { title: "Check-up", count: 12, color: "bg-blue-50", dot: "bg-blue-500" },
  { title: "Medication", count: 12, color: "bg-red-50", dot: "bg-red-500" },
  {
    title: "Tick & Flea",
    count: 12,
    color: "bg-purple-50",
    dot: "bg-purple-500",
  },
  { title: "Surgery", count: 12, color: "bg-pink-50", dot: "bg-pink-500" },
  { title: "Dental", count: 12, color: "bg-orange-50", dot: "bg-orange-500" },
  { title: "Other", count: 12, color: "bg-gray-100", dot: "bg-gray-700" },
];

export default function HealthRecordsSection() {
  const [openTypeModal, setOpenTypeModal] = useState(false);

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-gray-900">Add Health Records</p>

        <button
          onClick={() => setOpenTypeModal(true)}
          className="px-4 py-2 bg-[#D6F2F8] hover:bg-[#c9edf5] rounded-xl flex items-center gap-2"
        >
          <span className="text-gray-800 font-medium">+ Add Health Record</span>
        </button>
      </div>

      <p className="text-xs text-gray-500">
        Click on &quot;Add Health Record&quot; and select which record you want
        to put.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {recordTypes.map((item) => (
          <div
            key={item.title}
            className="bg-white border rounded-xl p-4 shadow-sm"
          >
            <p className="text-xs text-gray-500">{item.title}</p>
            <p className="text-xl font-semibold text-gray-900 mt-1">
              {item.count}
            </p>

            <button className="text-gray-600 text-sm mt-4 flex items-center gap-1 hover:underline">
              View →
            </button>
          </div>
        ))}
      </div>

      {openTypeModal && (
        <RecordTypeModal
          open={openTypeModal}
          onClose={() => setOpenTypeModal(false)}
        />
      )}
    </div>
  );
}
