"use client";

import { useState } from "react";
import { ChevronDown, MoreHorizontal } from "lucide-react";
import ConfirmModal from "../report/ConfirmModal";
import { useRouter } from "next/navigation";

interface ServiceRequest {
  id: number;
  customer: string;
  serviceType: string;
  petType: string;
  petBreed: string;
  petAge: string;
  status: "Pending" | "Completed";
}

export default function ServiceManagementPage() {
  const router = useRouter();

  // ----------------------------
  // Dummy Data
  // ----------------------------

  const [data, setData] = useState<ServiceRequest[]>([
    {
      id: 1,
      customer: "Courtney Henry",
      serviceType: "Vet",
      petType: "Dog",
      petBreed: "Husky",
      petAge: "1 year",
      status: "Pending",
    },
    {
      id: 2,
      customer: "Guy Hawkins",
      serviceType: "Grooming",
      petType: "Cat",
      petBreed: "Persian Cat",
      petAge: "1 year",
      status: "Completed",
    },
    {
      id: 3,
      customer: "Wade Warren",
      serviceType: "Walking",
      petType: "Dog",
      petBreed: "Labrador Retriever",
      petAge: "1 year",
      status: "Pending",
    },
    {
      id: 4,
      customer: "Theresa Webb",
      serviceType: "Training",
      petType: "Bird",
      petBreed: "Parrot",
      petAge: "1 year",
      status: "Pending",
    },
    {
      id: 5,
      customer: "Savannah Nguyen",
      serviceType: "Grooming",
      petType: "Exotic Pet",
      petBreed: "Hermann's tortoise",
      petAge: "1 year",
      status: "Completed",
    },
  ]);

  type StatusFilter = "All" | "Pending" | "Completed";
  const [selectedStatus, setSelectedStatus] = useState<StatusFilter>("All");
  const [openMenu, setOpenMenu] = useState<number | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<number | null>(null);

  const filteredData =
    selectedStatus === "All"
      ? data
      : data.filter((item) => item.status === selectedStatus);

  // ------------------------
  // Actions
  // ------------------------

  const updateStatus = (id: number, status: "Pending" | "Completed") => {
    setData((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status } : item))
    );
    setOpenMenu(null);
  };

  const deleteEntry = () => {
    if (deleteTarget === null) return;
    setData((prev) => prev.filter((item) => item.id !== deleteTarget));
    setDeleteTarget(null);
  };

  return (
    <div className="p-6">
      {/* TITLE */}
      <h1 className="text-2xl font-semibold text-gray-900">
        Service Management
      </h1>
      <p className="text-gray-600 text-sm mt-1">
        This section will show which customers request for service.
      </p>

      {/* STATUS FILTER */}
      <div className="flex justify-end mt-5">
        <div className="relative">
          <button
            onClick={() => setOpenMenu(openMenu === -1 ? null : -1)}
            className="flex items-center gap-2 border px-4 py-2 rounded-xl bg-white shadow-sm text-gray-800"
          >
            Status
            <ChevronDown className="h-4 w-4 text-gray-500" />
          </button>

          {openMenu === -1 && (
            <div className="absolute right-0 mt-2 bg-white shadow-md rounded-xl w-40 border z-20">
              {["All", "Pending", "Completed"].map((status) => (
                <button
                  key={status}
                  onClick={() => {
                    setSelectedStatus(status as StatusFilter);
                    setOpenMenu(null);
                  }}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  {status}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* TABLE */}
      <div className="mt-4 bg-white border rounded-xl shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-700">
            <tr>
              <th className="p-4 text-left">NO.</th>
              <th className="p-4 text-left">Customer name</th>
              <th className="p-4 text-left">Service Type</th>
              <th className="p-4 text-left">Pet Type</th>
              <th className="p-4 text-left">Pet Breed</th>
              <th className="p-4 text-left">Pet Age</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredData.map((item, idx) => (
              <tr key={item.id} className="border-t">
                <td className="p-4 text-gray-700">{idx + 1}</td>
                <td className="p-4 text-gray-800">{item.customer}</td>
                <td className="p-4 text-gray-700">{item.serviceType}</td>
                <td className="p-4 text-gray-700">{item.petType}</td>
                <td className="p-4 text-gray-700">{item.petBreed}</td>
                <td className="p-4 text-gray-700">{item.petAge}</td>

                {/* STATUS BADGE */}
                <td className="p-4">
                  {item.status === "Pending" ? (
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full flex items-center w-fit gap-2">
                      Pending{" "}
                      <span className="w-2 h-2 bg-yellow-500 rounded-full" />
                    </span>
                  ) : (
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full flex items-center w-fit gap-2">
                      Completed{" "}
                      <span className="w-2 h-2 bg-green-500 rounded-full" />
                    </span>
                  )}
                </td>

                {/* ACTION MENU */}
                <td className="p-4 relative">
                  <button
                    onClick={() =>
                      setOpenMenu(openMenu === item.id ? null : item.id)
                    }
                  >
                    <MoreHorizontal className="h-5 w-5 text-gray-700" />
                  </button>

                  {openMenu === item.id && (
                    <div className="absolute right-0 mt-2 w-48 bg-white border shadow-lg rounded-xl z-20">
                      <button
                        onClick={() =>
                          router.push(
                            `/dashboard/service-management/${item.id}`
                          )
                        }
                        className="w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                      >
                        View
                      </button>

                      <button
                        onClick={() => setDeleteTarget(item.id)}
                        className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
                      >
                        Delete
                      </button>

                      <div className="border-t my-1"></div>

                      <p className="px-4 pt-1 text-xs text-gray-500">ACTION</p>

                      <button
                        onClick={() => updateStatus(item.id, "Completed")}
                        className="w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                      >
                        Completed
                      </button>

                      <button
                        onClick={() => updateStatus(item.id, "Pending")}
                        className="w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                      >
                        Not Completed
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* FOOTER */}
      <p className="text-gray-600 text-sm mt-4">
        No of Results {filteredData.length} out of {data.length}
      </p>

      {/* PAGINATION */}
      <div className="flex items-center gap-2 mt-4">
        <button className="border px-2 py-1 rounded-lg">&lt;</button>
        <button className="border px-2 py-1 rounded-lg bg-gray-900 text-white">
          1
        </button>
        <button className="border px-2 py-1 rounded-lg">2</button>
        <button className="border px-2 py-1 rounded-lg">&gt;</button>
      </div>

      {/* DELETE MODAL */}
      <ConfirmModal
        open={deleteTarget !== null}
        onClose={() => setDeleteTarget(null)}
        onConfirm={deleteEntry}
      />
    </div>
  );
}
