"use client";

import { X } from "lucide-react";
import HealthRecordFormModal, {
  HealthRecordFormValues,
} from "./HealthRecordFormModal";
import { useState } from "react";

const types = [
  { label: "Vaccination", color: "bg-green-50", icon: "💉" },
  { label: "Check-up", color: "bg-blue-50", icon: "🩺" },
  { label: "Medication", color: "bg-red-50", icon: "💊" },
  { label: "Tick & Flea", color: "bg-purple-50", icon: "🪳" },
  { label: "Surgery", color: "bg-pink-50", icon: "🐾" },
  { label: "Dental", color: "bg-orange-50", icon: "🦷" },
  { label: "Other", color: "bg-gray-100", icon: "📄" },
];

interface RecordTypeModalProps {
  open: boolean;
  onClose: () => void;
  onSave: (record: HealthRecordFormValues) => void;
}

export default function RecordTypeModal({
  open,
  onClose,
  onSave,
}: RecordTypeModalProps) {
  const [openForm, setOpenForm] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  if (!open) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
        <div className="bg-white w-[380px] p-6 rounded-2xl shadow-xl">
          <div className="flex justify-between items-center mb-4">
            <p className="text-lg font-semibold text-gray-900">
              Select Record Type
            </p>
            <X className="cursor-pointer" onClick={onClose} />
          </div>

          <div className="grid grid-cols-3 gap-4">
            {types.map((t) => (
              <div
                key={t.label}
                onClick={() => {
                  setSelected(t.label);
                  setOpenForm(true);
                }}
                className={`border rounded-xl p-3 cursor-pointer hover:bg-gray-50 flex flex-col items-center`}
              >
                <span className="text-2xl">{t.icon}</span>
                <p className="text-sm text-gray-800 mt-2">{t.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {openForm && (
        <HealthRecordFormModal
          open={openForm}
          onClose={() => setOpenForm(false)}
          type={selected!}
          onSave={onSave}
        />
      )}
    </>
  );
}
