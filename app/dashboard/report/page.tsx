"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import ConfirmModal from "./ConfirmModal";
import ActionMenu from "./ActionMenu";

type ActionType = "delete" | "remove";

interface SelectedReportState {
  type: ActionType;
  id: number;
}

export default function ReportPage() {
  const [statusFilter, setStatusFilter] = useState("Status");
  const [filterOpen, setFilterOpen] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedReport, setSelectedReport] =
    useState<SelectedReportState | null>(null);

  const handleDeleteClick = (type: ActionType, id: number) => {
    setSelectedReport({ type, id });
    setModalOpen(true);
  };

  const confirmDelete = () => {
    console.log("Deleting:", selectedReport);
    setModalOpen(false);
  };

  const modalTexts = {
    delete: {
      title: "Are you sure you want to delete this report?",
      desc: "Deleting this report will permanently remove it from the database.",
    },
    remove: {
      title: "Are you sure you want to remove this content?",
      desc: "The content will no longer be visible to users after removal.",
    },
  };

  const data = [
    {
      id: 123,
      name: "Leslie Alexander",
      count: 45,
      username: "@username",
      status: "Resolved",
    },
    {
      id: 456, // <-- UNIQUE ID
      name: "Devon Lane",
      count: 25,
      username: "@username",
      status: "Dismissed",
    },
    {
      id: 789,
      name: "Albert Flores",
      count: 20,
      username: "@username",
      status: "Pending",
    },
  ];

  return (
    <div className="space-y-8 w-full">
      {/* HEADER */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Report Table</h1>
          <p className="text-gray-500 text-sm max-w-xl">
            Identify regulatory violations and take appropriate actions in
            accordance with legal and ethical standards.
          </p>
        </div>

        {/* STATUS DROPDOWN */}
        <div className="relative">
          <button
            onClick={() => setFilterOpen(!filterOpen)}
            className="flex items-center gap-2 bg-[#D6F2F8] hover:bg-[#c9edf5] text-gray-700 px-4 py-2 rounded-xl text-sm"
          >
            {statusFilter}
            <ChevronDown
              className={`h-4 w-4 transition-transform ${
                filterOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {filterOpen && (
            <div className="absolute right-0 mt-2 bg-white border rounded-xl shadow-md z-30 w-40">
              {["All", "Resolved", "Dismissed", "Pending"].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    setStatusFilter(item);
                    setFilterOpen(false);
                  }}
                  className="px-4 py-2 text-sm text-left text-gray-600 w-full hover:bg-gray-50"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* TABLE */}
      <div className="bg-white border rounded-2xl shadow-sm overflow-visible relative">
        <table className="w-full text-left">
          <thead className="bg-gray-50">
            <tr>
              <th className="py-3 px-5 text-sm font-medium text-gray-600">
                Report ID
              </th>
              <th className="py-3 px-5 text-sm font-medium text-gray-600">
                Reported User
              </th>
              <th className="py-3 px-5 text-sm font-medium text-gray-600">
                Report Count
              </th>
              <th className="py-3 px-5 text-sm font-medium text-gray-600">
                Reported User @username
              </th>
              <th className="py-3 px-5 text-sm font-medium text-gray-600">
                Status
              </th>
              <th className="py-3 px-5 text-sm font-medium text-gray-600">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {data.map((item) => (
              <tr key={item.id} className="border-t">
                <td className="py-4 px-5 text-gray-800">{item.id}</td>
                <td className="py-4 px-5 text-gray-900">{item.name}</td>
                <td className="py-4 px-5 text-gray-700">{item.count}</td>
                <td className="py-4 px-5 text-gray-700">{item.username}</td>

                {/* STATUS BADGE */}
                <td className="py-4 px-5">
                  {item.status === "Resolved" && (
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full flex items-center gap-1 w-fit">
                      Resolved{" "}
                      <span className="h-2 w-2 bg-green-500 rounded-full" />
                    </span>
                  )}
                  {item.status === "Dismissed" && (
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full flex items-center gap-1 w-fit">
                      Dismissed{" "}
                      <span className="h-2 w-2 bg-gray-400 rounded-full" />
                    </span>
                  )}
                  {item.status === "Pending" && (
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full flex items-center gap-1 w-fit">
                      Pending{" "}
                      <span className="h-2 w-2 bg-yellow-500 rounded-full" />
                    </span>
                  )}
                </td>

                <td className="py-4 px-5">
                  <ActionMenu
                    reportId={item.id}
                    onDeleteClick={handleDeleteClick}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* FOOTER SUMMARY */}
      <p className="text-sm text-gray-600">No of Results 8 out of 100</p>

      {/* PAGINATION */}
      <div className="flex items-center gap-2">
        <button className="p-2 border rounded-lg hover:bg-gray-50">
          <ChevronLeft className="h-4 w-4 text-gray-700" />
        </button>

        <button className="px-4 py-2 border rounded-lg bg-black text-white">
          1
        </button>

        <button className="px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-50">
          2
        </button>

        <button className="p-2 border rounded-lg hover:bg-gray-50">
          <ChevronRight className="h-4 w-4 text-gray-700" />
        </button>
      </div>
      {modalOpen && selectedReport && (
        <ConfirmModal
          open={modalOpen}
          title={modalTexts[selectedReport.type].title}
          description={modalTexts[selectedReport.type].desc}
          onClose={() => setModalOpen(false)}
          onConfirm={confirmDelete}
        />
      )}
    </div>
  );
}
