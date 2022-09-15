import Bookmark from "./Bookmark";
import { useState, useEffect } from "react";

export default function Bookmarks() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleGetBookmarks = () => {
    setBookmarks([
      {
        name: "Github",
        description: "Git repository service",
        href: "https://github.com/",
      },
      {
        name: "Youtube",
        description: "Video streaming service",
        href: "https://youtube.com/",
      },
      {
        name: "Twitter",
        description: "Social media",
        href: "https://twitter.com/",
      },
    ]);
  };

  useEffect(() => {
    handleGetBookmarks();
  });

  const renderBookmarks = () => {
    return bookmarks.length > 0
      ? bookmarks.map((bm: any, idx: any) => {
          return (
            <Bookmark
              key={idx}
              name={bm.name}
              description={bm.description}
              href={bm.href}
            />
          );
        })
      : "";
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
      {renderBookmarks()}
    </div>
  );
}
