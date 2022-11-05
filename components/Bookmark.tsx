import { useRouter } from "next/router";
import { BsGlobe } from "react-icons/bs";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { MdContentCopy } from "react-icons/md";
import { deleteFavorite, insertFavorite } from "../pages/api/favorite";
import ButtonLink from "./ButtonLink";

export default function Bookmark(props: any) {
  const router = useRouter();

  const handleAddNewFavorite = async (id: number) => {
    const result = await insertFavorite({ bookmark: id });
  };

  const handleRemoveFavorite = async (id: number) => {
    const result = await deleteFavorite(id);
  };

  return (
    <a
      href={props.url || "#"}
      className="bg-white dark:bg-black opacity-75 hover:opacity-100 m-3 rounded-xl bg-[url('../public/web-placeholder.jpg')] bg-center bg-opacity-10 bg-cover duration-300 hover:shadow-custom border dark:border-slate-600 border-gray-300 h-half-screen relative"
    >
      <div
        className="bg-white dark:bg-gray-700 bg-opacity-80 p-3 backdrop-blur-md absolute w-full bottom-0"
        style={{
          borderRadius: "0 0 0.67rem 0.67rem",
        }}
      >
        <div className="flex justify-between items-center mb-3">
          <div className="break-before-right">
            <h3 className="font-semibold text-xl text-black dark:text-white">
              {props.name}
            </h3>
            <p className="text-gray-800 dark:text-gray-200">
              {props.description}
            </p>
          </div>
          <button
            className="mx-2 rounded-full duration-300 hover:bg-gray-200 dark:hover:bg-gray-800 p-2"
            title="Copy Url"
            onClick={(e: any) => {
              e.preventDefault();
              navigator.clipboard.writeText(props.url);
              alert(`Url Copied! ${props.url}`);
            }}
          >
            <MdContentCopy className="text-xl text-black dark:text-white" />
          </button>
        </div>
        <div className="flex items-center justify-between">
          <ButtonLink
            href={props.url || "#"}
            text="Visit"
            icon={
              <div className="mr-1">
                <BsGlobe />
              </div>
            }
          />
          <button
            className="mx-2 rounded-full duration-300 hover:bg-gray-200 dark:hover:bg-gray-800 p-2"
            title="Set/Unset Favorite"
            onClick={(e: any) => {
              e.preventDefault();

              if (props.isFavorite) {
                const isConfirmed = confirm("Want to unset favorite?");
                if (isConfirmed) {
                  const result = handleRemoveFavorite(props.id);

                  alert(`Unset Favorite`);
                  props.handleGetFavorites();
                }
              } else {
                const isConfirmed = confirm("Want to set favorite?");
                if (isConfirmed) {
                  const result = handleAddNewFavorite(props.id);

                  alert(`Set Favorite`);
                  props.handleGetFavorites();
                }
              }
            }}
          >
            {props.isFavorite ? (
              <FaHeart className="text-xl text-black dark:text-white" />
            ) : (
              <FaRegHeart className="text-xl text-black dark:text-white" />
            )}
          </button>
        </div>
      </div>
    </a>
  );
}
