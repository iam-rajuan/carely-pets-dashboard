export function NeuteredRow() {
  return (
    <div>
      <label className="text-xs text-gray-500 font-medium">NEUTERED</label>
      <div className="flex items-center gap-6 mt-2 text-gray-800">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="neutered"
            className="h-4 w-4"
            defaultChecked
          />
          Yes
        </label>

        <label className="flex items-center gap-2 cursor-pointer">
          <input type="radio" name="neutered" className="h-4 w-4" />
          No
        </label>
      </div>
    </div>
  );
}
