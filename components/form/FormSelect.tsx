export default function FormSelect({
  name,
  selectedValue,
  defaultValue,
  loopData,
  onChange,
}: any) {
  return (
    <select
      className="bg-white text-black"
      onChange={onChange || ""}
      value={selectedValue || "0"}
    >
      <option value={defaultValue || "0"}>-- Select {name || ""} --</option>
      {loopData()}
    </select>
  );
}
