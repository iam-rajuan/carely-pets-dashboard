"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

/* -----------------------------
      TYPES
------------------------------*/

type Reporter = {
  name: string;
  username: string;
  avatar: string;
  reason: string;
};

type ReportData = {
  id: number;
  count: number;
  status: "Pending" | "Resolved" | "Dismissed";
  contentImage: string;
  contentText: string;
  user: Reporter;
  reporters: Reporter[];
};

interface InfoCardProps {
  title: string;
  value: string | number;
  iconBg: string;
}

interface StatusBadgeProps {
  status: "Pending" | "Resolved" | "Dismissed";
}

interface ReporterCardProps {
  title: string;
  user: Reporter;
}

interface ReasonCardProps {
  reporter: Reporter;
}

/* -----------------------------
   FIXED: STRICTLY TYPED DATA
------------------------------*/

const reportData: ReportData = {
  id: 1235,
  count: 45,
  status: "Pending",
  contentImage:
    "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1820&auto=format",
  contentText:
    "A heart with a paw inside could represent love for pets and the community aspect...",
  user: {
    name: "Leslie Alexander",
    username: "@username",
    avatar:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=1000&fit=crop",
    reason: "",
  },
  reporters: [
    {
      name: "Arlene McCoy",
      username: "@username",
      avatar:
        "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=1000",
      reason: "Inappropriate content",
    },
    {
      name: "Cody Fisher",
      username: "@username",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000",
      reason: "Inappropriate content",
    },
    {
      name: "Kathryn Murphy",
      username: "@username",
      avatar:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1000",
      reason: "Inappropriate content",
    },
  ],
};

/* -----------------------------
   COMPONENTS (TYPED)
------------------------------*/

function InfoCard({ title, value, iconBg }: InfoCardProps) {
  return (
    <div className="bg-white border rounded-2xl p-5 flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-xl font-semibold text-gray-900 mt-1">{value}</p>
      </div>

      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center ${iconBg}`}
      >
        <span className="text-lg">#</span>
      </div>
    </div>
  );
}

function StatusBadge({ status }: StatusBadgeProps) {
  const colors: Record<string, string> = {
    Pending: "bg-yellow-100 text-yellow-700",
    Resolved: "bg-green-100 text-green-700",
    Dismissed: "bg-gray-100 text-gray-600",
  };

  const dot: Record<string, string> = {
    Pending: "bg-yellow-500",
    Resolved: "bg-green-500",
    Dismissed: "bg-gray-400",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs flex items-center gap-2 w-fit ${colors[status]}`}
    >
      {status}
      <span className={`h-2 w-2 rounded-full ${dot[status]}`} />
    </span>
  );
}

function ReporterCard({ title, user }: ReporterCardProps) {
  return (
    <div className="bg-white border rounded-xl p-4 flex items-center gap-3">
      <img
        src={user.avatar}
        className="w-10 h-10 rounded-full object-cover"
        alt="User avatar"
      />
      <div>
        <p className="text-sm font-semibold text-gray-900">{title}</p>
        <p className="text-sm text-gray-700">{user.name}</p>
        <p className="text-xs text-gray-500">{user.username}</p>
      </div>
    </div>
  );
}

function ReasonCard({ reporter }: ReasonCardProps) {
  return (
    <div className="bg-white border rounded-xl p-4">
      <p className="text-sm font-semibold text-gray-900">Reported Reason</p>

      <p className="text-xs text-gray-500 mt-1 uppercase tracking-wide">
        CONTENT VIOLATIONS
      </p>

      <p className="text-sm text-gray-700 mt-1">{reporter.reason}</p>
    </div>
  );
}

/* -----------------------------
      MAIN PAGE
------------------------------*/

export default function ReportDetailsPage() {
  const [actionOpen, setActionOpen] = useState(false);

  const report = reportData;

  return (
    <div className="space-y-8 w-full">
      {/* TOP SECTION */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">
            Report Details
          </h1>
          <p className="text-gray-500 text-sm max-w-xl">
            This page contain result of the report, so that admin can assess the
            whole thing.
          </p>
        </div>

        <div className="relative">
          <button
            onClick={() => setActionOpen((p) => !p)}
            className="flex items-center gap-2 bg-[#D6F2F8] text-gray-700 hover:bg-[#c9edf5] px-4 py-2 rounded-xl text-sm"
          >
            Action
            <ChevronDown
              className={`h-4 w-4 transition-transform ${
                actionOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {actionOpen && (
            <div className="absolute right-0 mt-2 bg-white border rounded-xl shadow-md w-44 z-20">
              {["Delete Report", "Remove Content", "Warn User", "Dismiss"].map(
                (item) => (
                  <button
                    key={item}
                    className={`px-4 py-2 text-sm text-left w-full hover:bg-gray-50 ${
                      item === "Delete Report" ? "text-red-500" : ""
                    }`}
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          )}
        </div>
      </div>

      {/* SUMMARY CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <InfoCard title="Report ID" value={report.id} iconBg="bg-[#F7E3FF]" />

        <InfoCard
          title="Report Count"
          value={report.count}
          iconBg="bg-[#FFE9D2]"
        />

        <div className="flex items-center">
          <StatusBadge status={report.status} />
        </div>
      </div>

      {/* CONTENT SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="col-span-2 bg-white border rounded-2xl p-5 space-y-4">
          <img
            src={report.contentImage}
            className="w-full h-80 object-cover rounded-xl"
            alt=""
          />

          <p className="text-gray-700 text-sm leading-relaxed">
            {report.contentText.repeat(5)}
          </p>
        </div>

        {/* REPORTERS LIST */}
        <div className="col-span-1 space-y-4 max-h-[700px] overflow-y-auto pr-2">
          <ReporterCard title="Reported User" user={report.user} />

          {report.reporters.map((r, i) => (
            <div key={i} className="grid grid-cols-2 gap-3">
              <ReporterCard title="Reported By" user={r} />
              <ReasonCard reporter={r} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
