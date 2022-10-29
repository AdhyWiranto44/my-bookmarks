import Bookmarks from "../components/Bookmarks";
import Filter from "../components/Filter";
import Navbar from "../components/navbar";
import { useState, useEffect } from "react";
import { getAllBookmarks } from "./api/bookmarks";
import BookmarkSearchbar from "../components/BookmarkSearchbar";
import Favorites from "../components/Favorites";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [bookmarks, setBookmarks] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const handleGetBookmarks = async () => {
    const response: any = await getAllBookmarks();
    const bookmarks = response.data.data.bookmarks;

    setBookmarks(bookmarks);
    setLoading(false);
  };

  // const handleGetFavorites = async () => {
  //   const response: any = await getAllFavorites();
  //   const favorites = response.data.data.favorites;

  //   setFavorites(favorites);
  //   setLoading(false);
  // };

  const renderBookmarks = () => {
    if (loading) {
      return <h1 className="text-xl text-black">Loading...</h1>;
    } else {
      return <Bookmarks bookmarks={bookmarks} />;
    }
  };

  const renderFavorites = () => {
    if (loading) {
      return <h1 className="text-xl text-black">Loading...</h1>;
    } else {
      return <Favorites favorites={favorites} />;
    }
  };

  useEffect(() => {
    // handleGetFavorites();
    handleGetBookmarks();
  }, []);

  return (
    <>
      <Navbar headingText="My Bookmarks" />
      <div className="px-4 lg:w-6/12 mx-auto mt-2 mb-2 pb-2">
        <div className="text-center mb-3">
          <p className="font-bold text-3xl text-gray-900 dark:text-gray-100">
            Find Now
          </p>
          <p className="font-semibold text-lg text-gray-900 dark:text-gray-100">
            <span className="text-gray-500">in</span> My Bookmarks
          </p>
        </div>
        <BookmarkSearchbar
          bookmarks={bookmarks}
          setBookmarks={setBookmarks}
          placeholder="Find by description"
        />
        <Filter bookmarks={bookmarks} setBookmarks={setBookmarks} />
      </div>
      <div className="px-4 lg:px-44 mb-4">{renderFavorites()}</div>
      <div className="px-4 lg:px-44">{renderBookmarks()}</div>
    </>
  );
}
