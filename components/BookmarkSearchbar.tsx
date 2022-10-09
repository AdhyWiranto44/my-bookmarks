import Button from "./Button";
import { HiOutlineSearch } from "react-icons/hi";
import { findBookmarks, getAllBookmarks } from "../pages/api/bookmarks";
import Searchbar from "./Searchbar";

export default function BookmarkSearchbar({ setBookmarks, placeholder }: any) {
  const handleFindBookmark = async (desc: string) => {
    setTimeout(async () => {
      try {
        const response: any = await findBookmarks(desc);
        setBookmarks(response.data.data.bookmarks);
      } catch (err: any) {
        const response: any = await getAllBookmarks();
        setBookmarks(response.data.data.bookmarks);
      }
    }, 1000);
  };

  return (
    <Searchbar
      onkeyup={(e: any) => {
        handleFindBookmark(e.target.value || "");
      }}
      placeholder={placeholder || "Search..."}
    />
  );
}
