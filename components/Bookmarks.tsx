import { FaClipboardList, FaHeart } from "react-icons/fa";
import Bookmark from "./Bookmark";
import DataNotFound from "./DataNotFound";

export default function Bookmarks(props: any) {
  const renderBookmarks = () => {
    return props.bookmarks.length > 0 ? (
      props.bookmarks.map((bm: any, idx: any) => {
        return (
          <Bookmark
            key={idx}
            id={bm.id}
            name={bm.name}
            description={bm.description}
            url={bm.url}
            handleGetFavorites={props.handleGetFavorites}
          />
        );
      })
    ) : (
      <DataNotFound />
    );
  };

  return (
    <>
      <h2 className="text-xl font-semibold border-b-2 text-black dark:text-white border-black dark:border-white pb-2 mb-4 flex items-center">
        <FaClipboardList className="mr-1" />
        My List
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {renderBookmarks()}
      </div>
    </>
  );
}
