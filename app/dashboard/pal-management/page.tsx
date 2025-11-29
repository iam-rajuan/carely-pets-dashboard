"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, Eye, Download, ChevronLeft, ChevronRight } from "lucide-react";
import { useParams } from "next/navigation";

export default function PetPalPage() {
  const [page, setPage] = useState(1);

  const data = [
    {
      id: 1,
      name: "Jane Cooper",
      username: "@username",
      email: "exaple@gmail.com",
      status: "Active",
    },
    {
      id: 2,
      name: "Jenny Wilson",
      username: "@username",
      email: "exaple@gmail.com",
      status: "Deletion Request",
    },
    {
      id: 3,
      name: "Wade Warren",
      username: "@username",
      email: "exaple@gmail.com",
      status: "Active",
    },
    {
      id: 4,
      name: "Floyd Miles",
      username: "@username",
      email: "exaple@gmail.com",
      status: "Active",
    },
    {
      id: 5,
      name: "Guy Hawkins",
      username: "@username",
      email: "exaple@gmail.com",
      status: "Deletion Request",
    },
  ];

  const router = useRouter();

  return (
    <div className="space-y-8 w-full">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Pet’s Pal</h1>
          <p className="text-gray-500 text-sm">
            This section will show superficial data of a user.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {/* SEARCH */}
          <div className="relative">
            <input
              placeholder="Search username or name"
              className="w-64 md:w-80 px-4 py-2 pr-10 bg-white border border-gray-300 rounded-xl text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00A7C7]/40"
            />
            <Search className="h-4 w-4 absolute right-4 top-1/2 -translate-y-1/2 text-gray-700" />
          </div>

          {/* EXPORT BUTTON */}
          <button className="flex items-center gap-2 bg-[#D6F2F8] hover:bg-[#c9edf5] px-5 py-2 rounded-xl text-sm text-gray-700">
            <Download className="h-4 w-4" />
            Export
          </button>
        </div>
      </div>

      {/* TABLE */}
      <div className="bg-white border rounded-2xl shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50">
            <tr>
              <th className="py-3 px-5 text-sm font-medium text-gray-600">
                NO.
              </th>
              <th className="py-3 px-5 text-sm font-medium text-gray-600">
                Pet Owner Name
              </th>
              <th className="py-3 px-5 text-sm font-medium text-gray-600">
                Username
              </th>
              <th className="py-3 px-5 text-sm font-medium text-gray-600">
                Email
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
            {data.map((item, index) => (
              <tr key={item.id} className="border-t">
                <td className="py-4 px-5 text-gray-700">{index + 1}</td>

                <td className="py-4 px-5 text-gray-900">{item.name}</td>

                <td className="py-4 px-5 text-gray-600">{item.username}</td>

                <td className="py-4 px-5 text-gray-600">{item.email}</td>

                <td className="py-4 px-5">
                  {item.status === "Active" ? (
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full flex items-center gap-1 w-fit">
                      Active{" "}
                      <span className="h-2 w-2 bg-green-500 rounded-full"></span>
                    </span>
                  ) : (
                    <span className="px-3 py-1 bg-red-100 text-red-700 text-xs rounded-full flex items-center gap-1 w-fit">
                      Deletion Request{" "}
                      <span className="h-2 w-2 bg-red-500 rounded-full"></span>
                    </span>
                  )}
                </td>

                <td className="py-4 px-5">
                  <button
                    onClick={() =>
                      router.push(`/dashboard/pal-management/${item.id}`)
                    }
                    className="p-2 bg-[#D6F2F8] hover:bg-[#c9edf5] rounded-xl"
                  >
                    <Eye className="h-5 w-5 text-gray-700" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* FOOTER SUMMARY */}
      <p className="text-sm text-gray-600">
        No of Results {data.length} out of 100
      </p>

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
    </div>
  );
}
