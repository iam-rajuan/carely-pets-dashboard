"use client";

import DropdownSelect from "../../components/DropDownSelect";
import { Dog, Heart, Pencil } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "JAN", value: 10 },
  { name: "FEB", value: 20 },
  { name: "MAR", value: 38 },
  { name: "APR", value: 30 },
  { name: "MAY", value: 25 },
  { name: "JUN", value: 28 },
  { name: "JUL", value: 18 },
  { name: "AUG", value: 25 },
  { name: "SEP", value: 35 },
  { name: "OCT", value: 15 },
  { name: "NOV", value: 38 },
  { name: "DEC", value: 30 },
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const years = ["2021", "2022", "2023", "2024", "2025"];

export default function DashboardPage() {
  return (
    <div className="space-y-8 w-full">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">
            Monthly Breakdown
          </h1>
          <p className="text-gray-500 text-sm">
            This section will show monthly income of your app.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <DropdownSelect label="Month" options={months} />
          <DropdownSelect label="Year" options={years} />
        </div>
      </div>

      {/* SUMMARY CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <SummaryCard
          title="ADOPTION"
          value="$252.00"
          icon={<Dog className="h-5 w-5 text-[#00A7C7]" />}
        />
        <SummaryCard
          title="SERVICE"
          value="$252.00"
          icon={<Heart className="h-5 w-5 text-[#00A7C7]" />}
        />
        <SummaryCard
          title="TOTAL"
          value="$600.00"
          icon={<Pencil className="h-5 w-5 text-[#00A7C7]" />}
        />
      </div>

      {/* USER METRICS */}
      <div className="bg-white border rounded-2xl p-5 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-800">User Metrics</h2>

          <button className="px-4 py-1.5 bg-[#D6F2F8] text-gray-700 rounded-lg text-sm hover:bg-[#c9edf5]">
            Year
          </button>
        </div>

        <div className="w-full h-[300px] md:h-[380px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" tick={{ fontSize: 12 }} axisLine={false} />
              <YAxis tick={{ fontSize: 12 }} axisLine={false} />
              <Tooltip />
              <Bar dataKey="value" fill="#00A7C7" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

interface SummaryCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
}

function SummaryCard({ title, value, icon }: SummaryCardProps) {
  return (
    <div className="bg-white border rounded-2xl p-6 shadow-sm flex justify-between items-center">
      <div>
        <p className="text-xs tracking-wide text-gray-900">{title}</p>
        <p className="text-2xl text-gray-900 font-semibold mt-1">{value}</p>
      </div>
      <div className="p-3 bg-[#D6F2F8] rounded-xl">{icon}</div>
    </div>
  );
}
