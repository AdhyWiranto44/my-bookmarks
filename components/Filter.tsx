export default function Filter() {
  return (
    <>
      <select className="text-violet-500 font-bold bg-transparent mt-4 cursor-pointer">
        <option className="font-normal" value="">
          Choose category
        </option>
        <option className="font-normal" value="library">
          Library
        </option>
        <option className="font-normal" value="tool">
          Tool
        </option>
        <option className="font-normal" value="framework">
          Framework
        </option>
      </select>
    </>
  );
}
