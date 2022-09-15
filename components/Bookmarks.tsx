import Bookmark from "./Bookmark";
import { useState, useEffect } from "react";

export default function Bookmarks() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleGetBookmarks = () => {
    setBookmarks([{}, {}, {}, {}]);
  };

  useEffect(() => {
    handleGetBookmarks();
  });

  const renderBookmarks = () => {
    return bookmarks.length > 0
      ? bookmarks.map((bm: any, idx: any) => {
          return <Bookmark key={idx} />;
        })
      : "";
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
      {renderBookmarks()}
    </div>
  );
}
