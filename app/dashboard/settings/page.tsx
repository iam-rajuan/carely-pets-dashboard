"use client";

import { useState } from "react";
import { ChevronRight, PencilLine, Check, X } from "lucide-react";

export default function SettingsPage() {
  const [isEditingTax, setIsEditingTax] = useState(false);
  const [isEditingServices, setIsEditingServices] = useState(false);

  const [tax, setTax] = useState("5%");
  const [services, setServices] = useState({
    vet: "$250.00",
    walking: "$250.00",
    grooming: "$250.00",
    training: "$250.00",
  });

  const originalTax = "5%";
  const originalServices = {
    vet: "$250.00",
    walking: "$250.00",
    grooming: "$250.00",
    training: "$250.00",
  };

  const saveTax = () => setIsEditingTax(false);
  const cancelTax = () => {
    setTax(originalTax);
    setIsEditingTax(false);
  };

  const saveServices = () => setIsEditingServices(false);
  const cancelServices = () => {
    setServices(originalServices);
    setIsEditingServices(false);
  };

  return (
    <div className="space-y-10 p-4 md:p-6 lg:p-8">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Settings</h1>
        <p className="text-gray-600 mt-1">
          From here you can control your app settings.
        </p>
      </div>

      {/* -------------------------------------- TAX SETTINGS -------------------------------------- */}
      <div className="bg-white border rounded-2xl shadow-sm p-6 relative">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-900">
            Tax Percentage Settings
          </h2>

          {!isEditingTax ? (
            <button
              onClick={() => setIsEditingTax(true)}
              className="flex items-center gap-2 bg-[#D6F2F8] px-4 py-1.5 rounded-xl text-gray-800 hover:bg-[#c9edf5]"
            >
              <PencilLine className="w-4 h-4" /> Edit
            </button>
          ) : (
            <div className="flex gap-3">
              <button
                onClick={cancelTax}
                className="flex items-center gap-2 bg-gray-100 px-4 py-1.5 rounded-xl text-gray-700 hover:bg-gray-200"
              >
                <X className="w-4 h-4" /> Cancel
              </button>
              <button
                onClick={saveTax}
                className="flex items-center gap-2 bg-[#D6F2F8] px-4 py-1.5 rounded-xl text-gray-800 hover:bg-[#c9edf5]"
              >
                <Check className="w-4 h-4" /> Save
              </button>
            </div>
          )}
        </div>

        {/* TAX VALUE */}
        <div className="mt-6">
          <p className="text-xs font-semibold text-gray-600">TAX</p>

          {!isEditingTax ? (
            <p className="mt-2 text-gray-800">{tax}</p>
          ) : (
            <input
              className="mt-2 border border-gray-300 w-full rounded-lg px-3 py-2 bg-gray-50 text-gray-700 focus:outline-none"
              value={tax}
              onChange={(e) => setTax(e.target.value)}
            />
          )}

          <hr className="mt-4" />
        </div>
      </div>

      {/* -------------------------------------- SERVICE CHARGE -------------------------------------- */}
      <div className="bg-white border rounded-2xl shadow-sm p-6 relative">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-900">
            Services Charge
          </h2>

          {!isEditingServices ? (
            <button
              onClick={() => setIsEditingServices(true)}
              className="flex items-center gap-2 bg-[#D6F2F8] px-4 py-1.5 rounded-xl text-gray-800 hover:bg-[#c9edf5]"
            >
              <PencilLine className="w-4 h-4" /> Edit
            </button>
          ) : (
            <div className="flex gap-3">
              <button
                onClick={cancelServices}
                className="flex items-center gap-2 bg-gray-100 px-4 py-1.5 rounded-xl text-gray-700 hover:bg-gray-200"
              >
                <X className="w-4 h-4" /> Cancel
              </button>
              <button
                onClick={saveServices}
                className="flex items-center gap-2 bg-[#D6F2F8] px-4 py-1.5 rounded-xl text-gray-800 hover:bg-[#c9edf5]"
              >
                <Check className="w-4 h-4" /> Save
              </button>
            </div>
          )}
        </div>

        {/* SERVICE GRID */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* LEFT COLUMN */}
          <div>
            {/* VET */}
            <ServiceField
              label="VET"
              value={services.vet}
              editable={isEditingServices}
              onChange={(v) => setServices({ ...services, vet: v })}
            />

            {/* WALKING */}
            <ServiceField
              label="WALKING"
              value={services.walking}
              editable={isEditingServices}
              onChange={(v) => setServices({ ...services, walking: v })}
            />
          </div>

          {/* RIGHT COLUMN */}
          <div>
            {/* GROOMING */}
            <ServiceField
              label="GROOMING"
              value={services.grooming}
              editable={isEditingServices}
              onChange={(v) => setServices({ ...services, grooming: v })}
            />

            {/* TRAINING */}
            <ServiceField
              label="TRAINING"
              value={services.training}
              editable={isEditingServices}
              onChange={(v) => setServices({ ...services, training: v })}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function ServiceField({
  label,
  value,
  editable,
  onChange,
}: {
  label: string;
  value: string;
  editable: boolean;
  onChange: (value: string) => void;
}) {
  return (
    <div className="mb-6">
      <p className="text-xs font-semibold text-gray-600">{label}</p>

      {!editable ? (
        <p className="mt-2 text-gray-800 font-medium">{value}</p>
      ) : (
        <input
          className="mt-2 border border-gray-300 w-full rounded-lg px-3 py-2 bg-gray-50  text-gray-700 focus:outline-none"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      )}

      <hr className="mt-4" />
    </div>
  );
}
