"use client";

import { useState } from "react";
import {
  ChevronDown,
  Calendar,
  PawPrint,
  User,
  BriefcaseMedical,
  MoreHorizontal,
} from "lucide-react";
import ConfirmModal from "../../report/ConfirmModal";

export default function ViewServicePage() {
  const [openMenu, setOpenMenu] = useState(false);
  const [status, setStatus] = useState<"Pending" | "Completed">("Completed");
  const [deleteOpen, setDeleteOpen] = useState(false);

  return (
    <div className="p-6">
      {/* TITLE */}
      <h1 className="text-2xl font-semibold text-gray-900">
        Service Management
      </h1>
      <p className="text-gray-600 text-sm mt-1">
        This section will show details of that service the customer has booked.
      </p>

      {/* ACTION BUTTON */}
      <div className="flex justify-end mt-4 relative">
        <button
          onClick={() => setOpenMenu(!openMenu)}
          className="flex items-center gap-2 border px-4 py-2 rounded-xl bg-white shadow-sm text-gray-800"
        >
          Action
          <ChevronDown className="h-4 w-4 text-gray-500" />
        </button>

        {openMenu && (
          <div className="absolute right-0 mt-2 w-48 bg-white border shadow-lg rounded-xl z-20">
            <button
              className="w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
              onClick={() => {}}
            >
              View
            </button>

            <button
              className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
              onClick={() => setDeleteOpen(true)}
            >
              Delete
            </button>

            <div className="border-t my-1" />

            <p className="px-4 pt-1 text-xs text-gray-500">ACTION</p>

            <button
              className="w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
              onClick={() => setStatus("Completed")}
            >
              Completed
            </button>

            <button
              className="w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
              onClick={() => setStatus("Pending")}
            >
              Not Completed
            </button>
          </div>
        )}
      </div>

      {/* CUSTOMER INFORMATION */}
      <div className="mt-6 bg-white border rounded-xl p-6 shadow-sm">
        <div className="flex justify-between">
          <h2 className="font-semibold text-gray-900">Customer Information</h2>

          {status === "Completed" ? (
            <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs flex items-center gap-2">
              Completed{" "}
              <span className="w-2 h-2 bg-green-600 rounded-full"></span>
            </span>
          ) : (
            <span className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-xs flex items-center gap-2">
              Pending{" "}
              <span className="w-2 h-2 bg-yellow-600 rounded-full"></span>
            </span>
          )}
        </div>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">
          <div>
            <p className="text-xs text-gray-500 uppercase">Name</p>
            <p className="text-gray-800 font-medium">John Doe</p>
          </div>

          <div>
            <p className="text-xs text-gray-500 uppercase">Phone</p>
            <p className="text-gray-800 font-medium">555 666 8898</p>
          </div>
        </div>
      </div>

      {/* SERVICE DETAILS */}
      <div className="mt-4 bg-white border rounded-xl p-6 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* SERVICE */}
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
              <BriefcaseMedical className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase">Service</p>
              <p className="text-gray-800 font-medium">Full Grooming Session</p>
            </div>
          </div>

          {/* DATE & TIME */}
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
              <Calendar className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase">Date & Time</p>
              <p className="text-gray-800 font-medium">Tuesday, Oct 25, 2026</p>
            </div>
          </div>

          {/* WITH */}
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
              <User className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase">With</p>
              <p className="text-gray-800 font-medium">Carely Pets</p>
            </div>
          </div>

          {/* FOR */}
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
              <PawPrint className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase">For</p>
              <p className="text-gray-800 font-medium">Bubby</p>
            </div>
          </div>
        </div>
      </div>

      {/* ORDER SUMMARY */}
      <div className="mt-4 bg-white border rounded-xl p-6 shadow-sm">
        <h2 className="font-semibold text-gray-900 mb-3">Order Summary</h2>

        <div className="flex justify-between text-sm mb-2">
          <div>
            <p className="text-gray-800 font-medium">Grooming</p>
            <p className="text-gray-600">Bubby</p>
          </div>
          <p className="text-gray-800 font-medium">$ 250.00</p>
        </div>

        <div className="flex justify-between text-sm">
          <p className="text-gray-700">Subtotal</p>
          <p className="text-gray-800 font-medium">$ 250.00</p>
        </div>

        <div className="flex justify-between text-sm mt-1">
          <p className="text-gray-700">Tax</p>
          <p className="text-gray-800 font-medium">(5%) $ 12.50</p>
        </div>

        <div className="flex justify-between text-base font-semibold text-gray-900 mt-4 pt-3 border-t">
          <p>Total</p>
          <p>$ 237.50</p>
        </div>
      </div>

      {/* PAYMENT STATUS */}
      <div className="mt-4 bg-white border rounded-xl p-6 shadow-sm text-center text-gray-800 font-medium flex justify-center items-center gap-2">
        Paid
        <span className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
          <span className="w-2 h-2 bg-white rounded-full"></span>
        </span>
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
