export default function FormSelect({
  name,
  selectedValue,
  defaultValue,
  loopData,
  onChange,
}: any) {
  return (
    <>
      <label className="block text-black mb-1" htmlFor={name || ""}>
        {name || ""}
      </label>
      <select
        className="bg-white text-black px-3 py-2 rounded-md border w-full md:w-4/12"
        onChange={onChange || ""}
        value={selectedValue || "0"}
      >
        <option value={defaultValue || "0"}>-- Select {name || ""} --</option>
        {loopData()}
      </select>
    </>
  );
}
