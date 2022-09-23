import Bookmarks from "../components/Bookmarks";
import Filter from "../components/Filter";
import Navbar from "../components/navbar";
import Searchbar from "../components/Searchbar";
import { useState, useEffect } from "react";
import { getAllBookmarks } from "./api/bookmarks";

export default function Home() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleGetBookmarks = async () => {
    const response: any = await getAllBookmarks();
    const bookmarks = response.data.data.bookmarks;

    setBookmarks(bookmarks);
  };

  useEffect(() => {
    handleGetBookmarks();
  }, []);

  return (
    <>
      <Navbar headingText="My Bookmarks" />
      <div className="px-4 lg:w-6/12 mx-auto mt-2 mb-2 pb-2">
        <div className="text-center mb-3">
          <p className="font-bold text-3xl text-gray-900">Find Now</p>
          <p className="font-semibold text-lg text-gray-900">
            <span className="text-gray-400">in</span> My Bookmarks
          </p>
        </div>
        <Searchbar
          bookmarks={bookmarks}
          setBookmarks={setBookmarks}
          placeholder="Find by description"
        />
        <Filter />
      </div>
      <div className="px-4 lg:px-44">
        <Bookmarks bookmarks={bookmarks} />
      </div>
    </>
  );
}
