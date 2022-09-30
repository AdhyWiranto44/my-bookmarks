export default function FormField({ name, type, onChange }: any) {
  return (
    <>
      <label className="block text-black" htmlFor={name || ""}>
        {name || ""}
      </label>
      <input
        className="bg-white text-black"
        type={type || ""}
        name={name || ""}
        onChange={onChange || ""}
      />
    </>
  );
}
