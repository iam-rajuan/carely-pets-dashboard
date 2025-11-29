"use client";

import { useState } from "react";
import { MoreHorizontal, Plus, ChevronDown } from "lucide-react";
import ConfirmModal from "../report/ConfirmModal";
import { useRouter } from "next/navigation";

export default function PetTypePage() {
  const router = useRouter();

  const [menuOpen, setMenuOpen] = useState<number | null>(null);
  const [deleteOpen, setDeleteOpen] = useState(false);

  const petTypes = [
    { id: 1, name: "Dog" },
    { id: 2, name: "Cat" },
    { id: 3, name: "Bird" },
    { id: 4, name: "Exotic Pet" },
    { id: 5, name: "Small Pet" },
  ];

  return (
    <div className="p-6">
      {/* Title */}
      <h1 className="text-2xl font-semibold text-gray-900">Pet Type</h1>
      <p className="text-sm text-gray-600 mt-1">
        This section will show how many pet types are in this system. You can
        add maximum of 5–7.
      </p>

      {/* Add Button */}
      <div className="flex justify-end mt-4">
        <button
          onClick={() => router.push("/dashboard/pet-type/add")}
          className="flex items-center gap-2 bg-[#D6F2F8] hover:bg-[#c9edf5] px-4 py-2 rounded-xl text-gray-800 font-medium shadow-sm"
        >
          <Plus className="h-4 w-4" />
          Add Pet Type
        </button>
      </div>

      {/* Table */}
      <div className="mt-4 bg-white border rounded-xl shadow-sm">
        <table className="w-full text-left">
          <thead className="text-gray-600 bg-gray-50 text-sm">
            <tr>
              <th className="py-4 px-6">NO.</th>
              <th className="py-4 px-6">Pet Type</th>
              <th className="py-4 px-6 text-right">Action</th>
            </tr>
          </thead>

          <tbody className="text-gray-800">
            {petTypes.map((p, index) => (
              <tr
                key={p.id}
                className="border-t border-gray-300 hover:bg-gray-50 transition"
              >
                <td className="py-4 px-6">{index + 1}</td>
                <td className="py-4 px-6">{p.name}</td>

                {/* ACTION MENU */}
                <td className="py-4 px-6 text-right relative">
                  <button
                    onClick={() => setMenuOpen(menuOpen === p.id ? null : p.id)}
                    className="p-2 rounded-lg hover:bg-gray-100"
                  >
                    <MoreHorizontal className="h-5 w-5 text-gray-300" />
                  </button>

                  {menuOpen === p.id && (
                    <div className="absolute right-6 mt-2 w-40 bg-white border rounded-xl shadow-lg z-20">
                      <button
                        className="w-full px-4 py-2 text-left hover:bg-gray-100 text-gray-800"
                        onClick={() =>
                          router.push(`/dashboard/pet-type/${p.id}`)
                        }
                      >
                        Edit
                      </button>

                      <button
                        className="w-full px-4 py-2 text-left hover:bg-gray-100 text-red-600"
                        onClick={() => setDeleteOpen(true)}
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* DELETE MODAL */}
      <ConfirmModal
        open={deleteOpen}
        onClose={() => setDeleteOpen(false)}
        onConfirm={() => {}}
      />
    </div>
  );
}
