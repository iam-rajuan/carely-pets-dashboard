"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function ViewRequestPage() {
  const [statusMenu, setStatusMenu] = useState(false);
  const [status, setStatus] = useState("Pending"); // "Pending" | "Delivered" | "Not Delivered"

  const pets = [
    {
      id: 1,
      name: "Pet name",
      breed: "Pet breed",
      price: "$250.00",
      img: "https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=300",
    },
    {
      id: 2,
      name: "Pet name",
      breed: "Pet breed",
      price: "$250.00",
      img: "https://images.unsplash.com/photo-1558944351-c9c99f6d9a8f?q=80&w=300",
    },
  ];

  return (
    <div className="p-6">
      {/* HEADER */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">View Request</h1>
          <p className="text-gray-600 text-sm mt-1">
            This section will show which customer request for adoption.
          </p>
        </div>

        {/* ACTION DROPDOWN */}
        <div className="relative">
          <button
            onClick={() => setStatusMenu(!statusMenu)}
            className="px-4 py-2 bg-white border rounded-lg text-gray-800 text-sm flex items-center gap-2"
          >
            Action <ChevronDown className="h-4 w-4" />
          </button>

          {statusMenu && (
            <div className="absolute right-0 mt-2 w-40 bg-white border rounded-xl shadow-md z-20">
              <button
                className="w-full text-left px-4 py-2 hover:bg-gray-50 text-gray-800"
                onClick={() => {
                  setStatus("Delivered");
                  setStatusMenu(false);
                }}
              >
                Delivered
              </button>

              <button
                className="w-full text-left px-4 py-2 hover:bg-gray-50 text-gray-800"
                onClick={() => {
                  setStatus("Not Delivered");
                  setStatusMenu(false);
                }}
              >
                Not Delivered
              </button>
            </div>
          )}
        </div>
      </div>

      {/* CUSTOMER INFORMATION */}
      <div className="mt-6 bg-white border rounded-xl p-6">
        <div className="flex justify-between items-start">
          <h2 className="text-lg font-semibold text-gray-900">
            Customer Information
          </h2>

          {/* STATUS CHIP */}
          {status === "Pending" && (
            <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full flex items-center gap-1">
              Pending <span className="h-2 w-2 bg-yellow-500 rounded-full" />
            </span>
          )}

          {status === "Delivered" && (
            <span className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full flex items-center gap-1">
              Delivered <span className="h-2 w-2 bg-green-500 rounded-full" />
            </span>
          )}

          {status === "Not Delivered" && (
            <span className="px-3 py-1 bg-red-100 text-red-700 text-xs rounded-full flex items-center gap-1">
              Not Delivered <span className="h-2 w-2 bg-red-500 rounded-full" />
            </span>
          )}
        </div>

        {/* ROW */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mt-6 text-gray-800">
          <div>
            <p className="text-xs text-gray-500">ORDER ID</p>
            <p className="font-medium mt-1">5559599</p>
          </div>

          <div>
            <p className="text-xs text-gray-500">ORDER DATE</p>
            <p className="font-medium mt-1">Jul 4, 2025</p>
          </div>

          <div>
            <p className="text-xs text-gray-500">NAME</p>
            <p className="font-medium mt-1">John Doe</p>
          </div>

          <div>
            <p className="text-xs text-gray-500">ADDRESS</p>
            <p className="font-medium mt-1">43, John Hopkins, NYC</p>
          </div>

          <div>
            <p className="text-xs text-gray-500">PHONE</p>
            <p className="font-medium mt-1">555 666 8898</p>
          </div>
        </div>
      </div>

      {/* PET LIST */}
      <div className="mt-6 bg-white border rounded-xl p-6">
        <h2 className="text-lg font-semibold text-gray-900">
          List of pets for adoption
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {pets.map((p) => (
            <div
              key={p.id}
              className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl border"
            >
              <Image
                src={p.img}
                alt="pet"
                width={50}
                height={50}
                className="rounded-full object-cover"
              />

              <div className="flex-1">
                <p className="font-medium text-gray-800">{p.name}</p>
                <p className="text-sm text-gray-500">{p.breed}</p>
              </div>

              <p className="text-gray-800 font-semibold">{p.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ORDER SUMMARY */}
      <div className="mt-6 bg-white border rounded-xl p-6">
        <h2 className="text-lg font-semibold text-gray-900">Order Summary</h2>

        <div className="mt-4 text-gray-800">
          <SummaryRow label="Bubby" sub="Persian Cat" price="$250.00" />
          <SummaryRow label="Chubby" sub="Stray Cat" price="$150.00" />

          <SummaryRow label="Subtotal" price="$400.00" />
          <SummaryRow label="Tax" sub="(5%)" price="$20.00" />
          <SummaryRow label="Processioning fee" price="$40.00" />
          <SummaryRow label="Shipping cost" price="$40.00" />

          <SummaryRow label="Total" bold price="$460.00" />
        </div>
      </div>

      {/* PAYMENT STATUS */}
      <div className="mt-6 bg-white border rounded-xl p-4 text-center">
        <span className="px-4 py-2 bg-green-100 text-green-700 text-sm rounded-full flex items-center justify-center gap-2 w-fit mx-auto">
          Paid <span className="h-2 w-2 bg-green-500 rounded-full"></span>
        </span>
      </div>
    </div>
  );
}

/* COMPONENT FOR ROW ITEMS */
interface SummaryRowProps {
  label: string;
  sub?: string;
  price?: string | number;
  bold?: boolean;
}

function SummaryRow({ label, sub, price, bold = false }: SummaryRowProps) {
  return (
    <div className="flex justify-between items-start border-b py-3">
      <div>
        <p
          className={`text-gray-800 ${bold ? "font-semibold" : "font-medium"}`}
        >
          {label}
        </p>
        {sub && <p className="text-xs text-gray-500">{sub}</p>}
      </div>

      <p className={`text-gray-800 ${bold ? "font-semibold" : "font-medium"}`}>
        {price}
      </p>
    </div>
  );
}
