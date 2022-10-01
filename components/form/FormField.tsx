export default function FormField({ name, type, value, onChange }: any) {
  return (
    <>
      <label className="block text-black mb-1" htmlFor={name || ""}>
        {name || ""}
      </label>
      <input
        className="bg-white text-black px-3 py-2 rounded-md border w-full md:w-4/12"
        type={type || ""}
        name={name || ""}
        value={value || ""}
        onChange={onChange || ""}
      />
    </>
  );
}
