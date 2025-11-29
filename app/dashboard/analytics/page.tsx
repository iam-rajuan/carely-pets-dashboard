"use client";

import DropdownSelect from "../../components/DropDownSelect";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { Dog, Heart, Pencil } from "lucide-react";

// Dummy Data
const userData = [
  { name: "JAN", value: 38 },
  { name: "FEB", value: 38 },
  { name: "MAR", value: 38 },
  { name: "APR", value: 38 },
  { name: "MAY", value: 38 },
  { name: "JUN", value: 38 },
  { name: "JUL", value: 38 },
  { name: "AUG", value: 38 },
  { name: "SEP", value: 38 },
  { name: "OCT", value: 38 },
  { name: "NOV", value: 38 },
  { name: "DEC", value: 38 },
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
const years = ["2022", "2023", "2024", "2025"];

export default function DashboardPage() {
  return (
    <div className="space-y-10 w-full">
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

      {/* REVENUE METRIC */}
      <div className="bg-white border rounded-2xl p-6 shadow-sm space-y-4">
        {/* Header */}
        <div className="flex items-center bg-neutral-50 justify-between">
          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              Revenue Metric
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              This section will show income of this app over the year.
            </p>
          </div>

          <DropdownSelect label="Year" options={years} />
        </div>

        {/* Chart */}
        <div className="w-full h-[300px] md:h-[380px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={userData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" tick={{ fontSize: 12 }} axisLine={false} />
              <YAxis tick={{ fontSize: 12 }} axisLine={false} />
              <Tooltip />
              <Bar dataKey="value" fill="#00A7C7" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* USER METRIC */}
      <div className="bg-white border rounded-2xl p-6 shadow-sm space-y-4">
        {/* Header */}
        <div className="flex bg-neutral-50 items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-gray-800">User Metric</h2>
            <p className="text-sm text-gray-500 mt-1">
              This section will show how many user you have over the year.
            </p>
          </div>

          <DropdownSelect label="Year" options={years} />
        </div>

        {/* Chart */}
        <div className="w-full h-[300px] md:h-[380px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={userData}>
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
        <p className="text-xs tracking-wide text-gray-800">{title}</p>
        <p className="text-2xl text-gray-800 font-semibold mt-1">{value}</p>
      </div>
      <div className="p-3 bg-[#D6F2F8] rounded-xl">{icon}</div>
    </div>
  );
}
