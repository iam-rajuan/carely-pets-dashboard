"use client";

import Image from "next/image";
import {
  PawPrint,
  HeartPulse,
  Thermometer,
  Activity,
  Syringe,
  Bone,
  User,
} from "lucide-react";
import { useParams } from "next/navigation";

export default function PetDetailsPage() {
  const { id, petId } = useParams();
  const adopted = true;

  const pet = {
    name: "Bubby",
    age: "2 years",
    breed: "Husky",
    gender: "Male",
    type: "Dog",
    trained: "Yes",
    neutered: "Yes",
    vaccinated: "Yes",
    heartRate: "45 bpm",
    respiratory: "56 rpm",
    temperature: "36°C",
    weight: "56 lbs",
    personality: "Friendly, Loyal, Good with kids, Intelligent, Energetic",
    memoryStart: "Nov 14, 2025",
    about:
      "A playful, affectionate cat who spends her days exploring cozy corners, chasing soft toys, and curling up in warm laps. She's curious, gentle, and always ready to share a quiet moment of comfort. Meow...",
    images: [
      "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=800",
      "https://images.unsplash.com/photo-1537151625747-768eb6cf92b6?w=800",
      "https://images.unsplash.com/photo-1548690312-e3b52b124b18?w=800",
    ],
  };

  const records = [
    { title: "Vaccination", count: 12, color: "bg-[#D6F2F8]" },
    { title: "Check-up", count: 12, color: "bg-blue-100" },
    { title: "Medication", count: 12, color: "bg-red-100" },
    { title: "Tick & Flea", count: 12, color: "bg-purple-100" },
    { title: "Surgery", count: 12, color: "bg-pink-100" },
    { title: "Dental", count: 12, color: "bg-orange-100" },
    { title: "Other", count: 12, color: "bg-gray-100" },
  ];

  return (
    <div className="space-y-12 w-full">
      {/* STATUS */}
      <div className="flex justify-start">
        <span
          className={`px-4 py-1 rounded-full text-sm font-medium ${
            adopted
              ? "bg-green-100 text-green-700"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {adopted ? "Adopted" : "Not Adopted"}
        </span>
      </div>

      {/* GALLERY */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {pet.images.map((img) => (
          <div key={img} className="rounded-xl overflow-hidden h-56 md:h-64">
            <Image
              src={img}
              alt="Pet Image"
              width={800}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* NAME & AGE */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900 flex items-center gap-2">
          {pet.name} <span className="text-[#00A8C5]">•</span> {pet.age}
        </h1>

        <div className="text-right">
          <p className="text-xs text-gray-500">Memory Start</p>
          <p className="text-sm font-medium">{pet.memoryStart}</p>
        </div>
      </div>

      {/* INFO GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t pt-6">
        {[
          {
            label: "Type",
            value: pet.type,
            icon: <PawPrint className="h-5 w-5" />,
          },
          {
            label: "Gender",
            value: pet.gender,
            icon: <User className="h-5 w-5" />,
          },
          {
            label: "Breed",
            value: pet.breed,
            icon: <Bone className="h-5 w-5" />,
          },
          {
            label: "Trained",
            value: pet.trained,
            icon: <Activity className="h-5 w-5" />,
          },
          {
            label: "Neutered",
            value: pet.neutered,
            icon: <Activity className="h-5 w-5" />,
          },
          {
            label: "Vaccinated",
            value: pet.vaccinated,
            icon: <Syringe className="h-5 w-5" />,
          },
          {
            label: "Heart Rate",
            value: pet.heartRate,
            icon: <HeartPulse className="h-5 w-5" />,
          },
          {
            label: "Respiratory",
            value: pet.respiratory,
            icon: <Activity className="h-5 w-5" />,
          },
          {
            label: "Temperature",
            value: pet.temperature,
            icon: <Thermometer className="h-5 w-5" />,
          },
          {
            label: "Weight",
            value: pet.weight,
            icon: <Bone className="h-5 w-5" />,
          },
          {
            label: "Personality",
            value: pet.personality,
            icon: <PawPrint className="h-5 w-5" />,
          },
        ].map((item) => (
          <div key={item.label} className="flex gap-4 items-start">
            <div className="w-10 h-10 bg-[#D6F2F8] text-[#00A8C5] rounded-xl flex items-center justify-center">
              {item.icon}
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase">{item.label}</p>
              <p className="text-sm font-medium text-gray-900">{item.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ABOUT */}
      <div className="border-t pt-6">
        <h2 className="text-sm font-medium text-gray-700 mb-2">About Pet</h2>
        <p className="text-gray-600 leading-relaxed">
          {pet.about}{" "}
          <span className="text-[#00A8C5] cursor-pointer">See more</span>
        </p>
      </div>

      {/* HEALTH RECORDS */}
      <div className="border-t pt-6">
        <h2 className="text-sm font-medium text-gray-700 mb-4">
          Health Records
        </h2>

        {records.length === 0 ? (
          <div className="text-gray-500 text-sm">
            No health records available.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {records.map((rec) => (
              <div
                key={rec.title}
                className="bg-white rounded-xl border p-5 flex flex-col shadow-sm"
              >
                <p className="text-xs text-gray-500 uppercase">{rec.title}</p>
                <h3 className="text-2xl font-semibold text-gray-900 mt-1">
                  {rec.count}
                </h3>

                <div className="flex-1" />

                <button className="mt-4 bg-[#D6F2F8] hover:bg-[#c9edf5] text-[#006778] py-2 rounded-lg text-sm font-medium">
                  View →
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
