import Button from "./Button";
import { HiOutlineSearch } from "react-icons/hi";
import {
  findArchive,
  findBookmarks,
  getAllArchive,
  getAllBookmarks,
} from "../pages/api/bookmarks";
import Searchbar from "./Searchbar";

export default function ArchiveSearchbar({ setBookmarks, placeholder }: any) {
  const handleFindArchive = async (desc: string) => {
    setTimeout(async () => {
      try {
        const response: any = await findArchive(desc);
        setBookmarks(response.data.data.archive);
      } catch (err: any) {
        const response: any = await getAllArchive();
        setBookmarks(response.data.data.archive);
      }
    }, 1000);
  };

  return (
    <Searchbar
      onkeyup={(e: any) => {
        handleFindArchive(e.target.value || "");
      }}
      placeholder={placeholder || "Search..."}
    />
  );
}
