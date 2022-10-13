export default function FormField({ name, type, value, onChange }: any) {
  return (
    <>
      <label
        className="block text-black dark:text-gray-100 mb-1"
        htmlFor={name || ""}
      >
        {name || ""}
      </label>
      <input
        className="bg-opacity-50 dark:bg-opacity-30 bg-white dark:bg-black text-black dark:text-white px-3 py-2 rounded-md border dark:border-slate-600 w-full md:w-4/12"
        type={type || ""}
        name={name || ""}
        value={value || ""}
        onChange={onChange || ""}
      />
    </>
  );
}
