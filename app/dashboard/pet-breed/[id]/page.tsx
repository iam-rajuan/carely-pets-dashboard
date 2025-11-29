"use client";

import { useState } from "react";
import { ChevronDown, X } from "lucide-react";

const petTypes = ["Dog", "Cat", "Bird", "Exotic Pet", "Small Pet"];

// Example initial breed data (comes from backend normally)
const initialBreeds = [
  "Husky",
  "German Shepard",
  "Bull Dog",
  "Poodle",
  "Labrador",
];

export default function EditPetBreed() {
  const [selectedType, setSelectedType] = useState("Dog");
  const [breeds, setBreeds] = useState<string[]>(initialBreeds);
  const [breedInput, setBreedInput] = useState("");

  const addBreed = () => {
    if (!breedInput.trim()) return;
    setBreeds([...breeds, breedInput.trim()]);
    setBreedInput("");
  };

  const removeBreed = (breed: string) => {
    setBreeds(breeds.filter((b) => b !== breed));
  };

  return (
    <div className="p-6 md:p-10">
      {/* TITLE */}
      <h1 className="text-2xl font-semibold text-gray-900">Edit Pet Breed</h1>
      <p className="text-sm text-gray-600 mt-1">
        Edit the details as you think.
      </p>

      {/* PET TYPE */}
      <div className="mt-8">
        <label className="text-xs font-medium text-gray-500">PET TYPE</label>
        <div className="relative mt-2">
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="w-full bg-gray-50 border rounded-xl px-4 py-3 text-gray-800 appearance-none"
          >
            {petTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-4 h-4 w-4 text-gray-500 pointer-events-none" />
        </div>
      </div>

      {/* BREED SECTION */}
      <div className="mt-8">
        <label className="text-xs font-medium text-gray-500">BREED</label>

        <div className="bg-gray-50 w-full border rounded-xl min-h-[110px] mt-2 p-3">
          {/* Breed Tags */}
          <div className="flex flex-wrap gap-2 mb-3">
            {breeds.map((breed) => (
              <span
                key={breed}
                className="px-3 py-1 bg-gray-700 text-white rounded-lg flex items-center gap-2 text-sm"
              >
                {breed}
                <X
                  onClick={() => removeBreed(breed)}
                  className="h-4 w-4 cursor-pointer hover:text-gray-300"
                />
              </span>
            ))}
          </div>

          {/* Add Breed Input */}
          <div className="flex items-center justify-between border-t pt-3">
            <input
              value={breedInput}
              onChange={(e) => setBreedInput(e.target.value)}
              placeholder="Add a breed..."
              className="flex-1 bg-transparent outline-none text-gray-800 text-sm"
            />

            <button
              onClick={addBreed}
              className="text-[#0E6473] font-medium hover:opacity-80"
            >
              + Add
            </button>
          </div>
        </div>
      </div>

      {/* BUTTONS */}
      <div className="flex justify-end gap-4 mt-10">
        <button className="px-6 py-2 bg-gray-100 rounded-lg text-gray-800 hover:bg-gray-200">
          Cancel
        </button>
        <button className="px-6 py-2 bg-[#A5E8F0] rounded-lg text-gray-900 font-medium hover:bg-[#93e0ea]">
          Save
        </button>
      </div>
    </div>
  );
}
