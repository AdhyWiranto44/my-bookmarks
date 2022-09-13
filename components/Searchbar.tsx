import Button from "./Button";
import { HiOutlineSearch } from "react-icons/hi";

export default function Searchbar(props: any) {
  return (
    <div className="bg-white border rounded-xl flex items-center">
      <input
        className="rounded-lg mx-2 px-4 py-2 w-full"
        type="text"
        placeholder={props.placeholder}
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
