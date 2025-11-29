export function GenderRow() {
  return (
    <div>
      <label className="text-xs text-gray-500 font-medium">GENDER</label>
      <div className="flex items-center gap-6 mt-2 text-gray-800">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="gender"
            className="h-4 w-4"
            defaultChecked
          />
          Male
        </label>

        <label className="flex items-center gap-2 cursor-pointer">
          <input type="radio" name="gender" className="h-4 w-4" />
          Female
        </label>
      </div>
    </div>
  );
}
