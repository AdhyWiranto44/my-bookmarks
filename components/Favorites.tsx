import { FaHeart } from "react-icons/fa";
import Bookmark from "./Bookmark";
import DataNotFound from "./DataNotFound";

export default function Favorites(props: any) {
  const renderFavorites = () => {
    return (
      <>
        <Bookmark
          key={"123"}
          name={"fv.name"}
          description={"fv.description"}
          url={"fv.url"}
          isFavorite={true}
        />
        <Bookmark
          key={"123"}
          name={"fv.name"}
          description={"fv.description"}
          url={"fv.url"}
          isFavorite={true}
        />
        <Bookmark
          key={"123"}
          name={"fv.name"}
          description={"fv.description"}
          url={"fv.url"}
          isFavorite={true}
        />
      </>
    );
    // return props.favorites.length > 0 ? (
    //   props.favorites.map((fv: any, idx: any) => {
    //     return (
    //       <Bookmark
    //         key={idx}
    //         name={fv.name}
    //         description={fv.description}
    //         url={fv.url}
    //       />
    //     );
    //   })
    // ) : (
    //   <DataNotFound />
    // );
  };

  return (
    <>
      <h2 className="text-xl font-semibold border-b-2 text-black dark:text-white border-black dark:border-white pb-2 mb-4 flex items-center">
        <FaHeart className="mr-1" />
        Favorites
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4">
        {renderFavorites()}
      </div>
    </>
  );
}
