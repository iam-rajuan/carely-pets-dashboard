"use client";

import { useMemo, useState } from "react";
import {
  Bug,
  Bone,
  Eye,
  FileText,
  Pill,
  Scissors,
  Stethoscope,
  Syringe,
} from "lucide-react";
import HealthRecordsModal, {
  type HealthRecordsModalRecord,
} from "../components/HealthRecordsModal";

type AttachmentType = "pdf" | "doc" | "image";

interface RecordAttachment {
  id: string;
  name: string;
  type: AttachmentType;
  url: string;
  size: string;
}

interface HealthRecord {
  id: string;
  type: string;
  name: string;
  updatedAt: string;
  reminder: string;
  attachments: RecordAttachment[];
}

const snaps = [
  { id: 1, name: "File name", size: "245KB" },
  { id: 2, name: "File name", size: "245KB" },
  { id: 3, name: "File name", size: "245KB" },
];

const healthRecordTypes = [
  {
    label: "Vaccination",
    icon: Syringe,
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    label: "Check-up",
    icon: Stethoscope,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    label: "Medication",
    icon: Pill,
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
  },
  {
    label: "Tick & Flea",
    icon: Bug,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    label: "Surgery",
    icon: Scissors,
    iconBg: "bg-pink-100",
    iconColor: "text-pink-600",
  },
  {
    label: "Dental",
    icon: Bone,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
  },
  {
    label: "Other",
    icon: FileText,
    iconBg: "bg-gray-200",
    iconColor: "text-gray-600",
  },
];

const recordData: HealthRecord[] = [
    {
      id: "1",
      type: "Vaccination",
      name: "Rabies vaccination",
      updatedAt: "Jan 6, 2025",
      reminder: "Reminder in 1 week",
      attachments: [
        {
          id: "1-a",
          name: "rabies-certificate.pdf",
          type: "pdf",
          url: "/file.svg",
          size: "245KB",
        },
        {
          id: "1-b",
          name: "clinic-photo.jpg",
          type: "image",
          url: "/paw.svg",
          size: "1.2MB",
        },
      ],
    },
    {
      id: "2",
      type: "Vaccination",
      name: "DHLPP dose 2",
      updatedAt: "Jan 6, 2025",
      reminder: "Reminder in 1 week",
      attachments: [
        {
          id: "2-a",
          name: "dose2-document.doc",
          type: "doc",
          url: "/file.svg",
          size: "180KB",
        },
      ],
    },
    {
      id: "3",
      type: "Check-up",
      name: "Leptospirosis",
      updatedAt: "Jan 6, 2025",
      reminder: "Reminder in 1 week",
      attachments: [
        {
          id: "3-a",
          name: "lepto-summary.pdf",
          type: "pdf",
          url: "/file.svg",
          size: "210KB",
        },
        {
          id: "3-b",
          name: "exam-photo.jpg",
          type: "image",
          url: "/paw.svg",
          size: "980KB",
        },
      ],
    },
    {
      id: "4",
      type: "Dental",
      name: "Bordetella",
      updatedAt: "Jan 6, 2025",
      reminder: "Reminder in 1 week",
      attachments: [
        {
          id: "4-a",
          name: "bordetella.pdf",
          type: "pdf",
          url: "/file.svg",
          size: "196KB",
        },
      ],
    },
    {
      id: "5",
      type: "Medication",
      name: "Parainfluenza",
      updatedAt: "Jan 6, 2025",
      reminder: "Reminder in 1 week",
      attachments: [
        {
          id: "5-a",
          name: "parainfluenza-image.jpg",
          type: "image",
          url: "/paw.svg",
          size: "1.1MB",
        },
      ],
    },
];

export default function ViewPetPage() {
  const [viewType, setViewType] = useState<string | null>(null);

  const recordCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    recordData.forEach((record) => {
      counts[record.type] = (counts[record.type] ?? 0) + 1;
    });
    return counts;
  }, []);

  const recordsForView: HealthRecordsModalRecord[] = useMemo(() => {
    if (!viewType) return [];
    return recordData
      .filter((record) => record.type === viewType)
      .map((record) => ({
        id: record.id,
        title: record.name,
        subtitle: `Last updated ${record.updatedAt}, ${record.reminder}`,
        attachments: record.attachments.map((attachment) => ({
          id: attachment.id,
          name: attachment.name,
          type: attachment.type,
          url: attachment.url,
          sizeLabel: attachment.size,
        })),
      }));
  }, [viewType]);

  return (
    <div className="px-6 py-5">
      {/* PAGE HEADER */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">
            View pet for adoption
          </h1>
          <p className="text-sm text-gray-600 mt-1">
            This section will display all the information that you have added.
          </p>
        </div>

        <button className="px-4 py-2 bg-[#D6F2F8] hover:bg-[#c9edf5] rounded-lg flex items-center gap-2 text-gray-800">
          <svg
            width="18"
            height="18"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 20h9" />
            <path d="M16.5 3.5a4 4 0 0 1 5.6 5.6l-9.1 9.1L10 14l6.5-10.5Z" />
          </svg>
          Edit
        </button>
      </div>

      {/* PET TITLE */}
      <div className="flex items-center gap-2 mt-6">
        <h2 className="text-2xl font-semibold text-gray-900">Bubby</h2>
        <span className="text-gray-600 text-sm">• 2 years</span>
      </div>

      {/* PET MAIN DETAILS */}
      <div className="grid md:grid-cols-3 gap-6 bg-none border-t mt-6 pt-6">
        <Detail icon="🐶" title="TYPE" value="Dog" />
        <Detail icon="♂️" title="GENDER" value="Male" />
        <Detail icon="🐕" title="BREED" value="Husky" />

        <Detail icon="🎓" title="TRAINED" value="Yes" />
        <Detail icon="✂️" title="NEUTERED" value="Yes" />
        <Detail icon="💉" title="VACCINATED" value="Yes" />

        <Detail icon="❤️" title="HEART RATE" value="45 bpm" />
        <Detail icon="🫁" title="RESPIRATORY" value="56 rpm" />
        <Detail icon="🌡️" title="TEMPERATURE" value="36°C" />

        <Detail icon="⚖️" title="WEIGHT" value="56 lbs" />

        <div className="flex gap-3 items-start mt-4">
          <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center text-xl">
            🏠
          </div>
          <div>
            <p className="text-xs text-gray-500 font-medium">
              Shelter Information
            </p>
            <p className="font-medium text-gray-800">Carely Pets</p>
            <p className="text-gray-500 text-sm">555 458 5555</p>
          </div>
        </div>

        <div className="md:col-span-3 mt-4">
          <p className="text-xs text-gray-500 font-medium">PERSONALITY</p>
          <p className="font-medium text-gray-800 mt-1">
            Friendly, Loyal, Good with kids, Intelligent, Energetic
          </p>
        </div>
      </div>

      {/* ABOUT PET */}
      <div className="mt-10">
        <h3 className="text-lg font-semibold text-gray-900">About Pet</h3>

        <p className="text-gray-700 text-sm mt-2 max-w-3xl">
          A playful, affectionate cat who spends her days exploring cozy
          corners, chasing soft toys, and curling up in warm laps. She’s
          curious, gentle, and always ready to share a quiet moment of comfort.
          <button className="text-[#00A9C8] ml-1 hover:underline">
            See more
          </button>
        </p>
      </div>

      {/* PET SNAPS */}
      <div className="mt-10">
        <h3 className="text-lg font-semibold text-gray-900">Pet Snaps</h3>

        <div className="mt-4 border rounded-xl bg-white">
          {snaps.map((file) => (
            <div
              key={file.id}
              className="flex items-center justify-between px-4 py-4 border-b last:border-0"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                  📷
                </div>
                <div>
                  <p className="font-medium text-gray-800">{file.name}</p>
                  <p className="text-xs text-gray-500">
                    File type • {file.size}
                  </p>
                </div>
              </div>

              <Eye className="text-gray-500 w-5 h-5 cursor-pointer" />
            </div>
          ))}
        </div>
      </div>

      {/* HEALTH RECORDS */}
      <div className="mt-12">
        <h3 className="text-lg font-semibold text-gray-900">Health Records</h3>
        <p className="text-sm text-gray-600 mt-1">
          All the health records are recorded here. You can pick individual to
          view that file.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-5">
          {healthRecordTypes.map((recordType) => {
            const Icon = recordType.icon;
            return (
              <div
                key={recordType.label}
                className="bg-gray-50 border border-gray-100 rounded-2xl p-4"
              >
                <div className="flex items-start justify-between">
                  <div className="p-3">
                    <p className="text-xs text-gray-500">
                      {recordType.label}
                    </p>
                    <p className="text-2xl font-semibold text-gray-900 mt-1">
                      {recordCounts[recordType.label] ?? 0}
                    </p>
                  </div>
                  <span
                    className={`h-9 w-9 rounded-full flex items-center justify-center ${recordType.iconBg}`}
                  >
                    <Icon className={`h-4 w-4 ${recordType.iconColor}`} />
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setViewType(recordType.label)}
                  className="mt-4 w-full bg-white text-gray-600 text-sm font-medium rounded-full py-2 flex items-center justify-center gap-1 border border-gray-200 hover:bg-gray-100"
                >
                  View →
                </button>
              </div>
            );
          })}
        </div>
      </div>

      <HealthRecordsModal
        open={Boolean(viewType)}
        title={`${viewType ?? ""} Records`}
        records={recordsForView}
        onClose={() => setViewType(null)}
      />
    </div>
  );
}

/* ----------- REUSABLE DETAIL ITEM ----------- */
function Detail({
  icon,
  title,
  value,
}: {
  icon: string;
  title: string;
  value: string;
}) {
  return (
    <div className="flex gap-3 items-start">
      <div className="w-10 h-10 rounded-full bg-[#D6F2F8] flex items-center justify-center text-xl">
        {icon}
      </div>
      <div>
        <p className="text-xs text-gray-500 font-medium">{title}</p>
        <p className="font-medium text-gray-800">{value}</p>
      </div>
    </div>
  );
}
