export default function FormSelect({
  name,
  defaultValue,
  loopData,
  onChange,
}: any) {
  return (
    <select className="bg-white text-black" onChange={onChange || ""}>
      <option value={defaultValue || "0"}>-- Select {name || ""} --</option>
      {loopData()}
    </select>
  );
}
