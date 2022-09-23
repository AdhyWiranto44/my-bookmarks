import Button from "./Button";
import { HiOutlineSearch } from "react-icons/hi";
import { findBookmarks, getAllBookmarks } from "../pages/api/bookmarks";

export default function Searchbar(props: any) {
  const handleFindBookmark = async (desc: string) => {
    setTimeout(async () => {
      try {
        const response: any = await findBookmarks(desc);
        props.setBookmarks(response.data.data.bookmarks);
      } catch (err: any) {
        const response: any = await getAllBookmarks();
        props.setBookmarks(response.data.data.bookmarks);
      }
    }, 1000);
  };

  return (
    <div className="bg-white border rounded-xl flex items-center">
      <input
        className="rounded-lg mx-2 px-4 py-2 w-full bg-white"
        type="text"
        onKeyUp={(e: any) => {
          handleFindBookmark(e.target.value);
        }}
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
