import Button from "./Button";
import { HiOutlineSearch } from "react-icons/hi";

export default function Searchbar({ onkeyup, placeholder }: any) {
  return (
    <div className="bg-opacity-50 dark:bg-opacity-30 bg-white dark:bg-black border dark:border-slate-600 rounded-xl flex items-center">
      <input
        className="rounded-lg mx-2 px-4 py-2 w-full bg-transparent text-black dark:text-white"
        type="text"
        onKeyUp={onkeyup}
        placeholder={placeholder}
      />
      <Button
        text="Search"
        icon={
          <div className="mr-1">
            <HiOutlineSearch />
          </div>
        }
      />
    </div>
  );
}
