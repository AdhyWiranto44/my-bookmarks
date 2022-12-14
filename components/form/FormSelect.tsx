export default function FormSelect({
  name,
  selectedValue,
  defaultValue,
  loopData,
  onChange,
}: any) {
  return (
    <>
      <label
        className="block text-black dark:text-gray-100 mb-1"
        htmlFor={name || ""}
      >
        {name || ""}
      </label>
      <select
        className="bg-opacity-50 dark:bg-opacity-30 bg-white dark:bg-black text-black dark:text-white px-3 py-2 rounded-md border dark:border-slate-600 w-full md:w-4/12"
        onChange={onChange || ""}
        value={selectedValue || "0"}
      >
        <option value={defaultValue || "0"}>-- Select {name || ""} --</option>
        {loopData()}
      </select>
    </>
  );
}
