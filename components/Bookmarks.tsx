import Bookmark from "./Bookmark";
import { useState, useEffect } from "react";
import { getAllBookmarks } from "../pages/api/bookmarks";

export default function Bookmarks(props: any) {
  const renderBookmarks = () => {
    return props.bookmarks.length > 0
      ? props.bookmarks.map((bm: any, idx: any) => {
          return (
            <Bookmark
              key={idx}
              name={bm.name}
              description={bm.description}
              url={bm.url}
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
