import { useState, useEffect } from "react";
import {
  findBookmarksByCategory,
  getAllBookmarks,
} from "../pages/api/bookmarks";
import { getAllCategories } from "../pages/api/category";

export default function Filter({ bookmarks, setBookmarks }: any) {
  const [categories, setCategories] = useState([]);

  const handleGetCategories = async () => {
    const response = await getAllCategories();
    const categories = response.data.data.categories;

    setCategories(categories);
  };

  const handleFindBookmarksByCategory = async (category = "") => {
    try {
      let response = null;

      if (category !== "") {
        response = await findBookmarksByCategory(category);
        setBookmarks(response.data.data.bookmarks);
      } else {
        response = await getAllBookmarks();
        setBookmarks(response.data.data.bookmarks);
      }
    } catch (err: any) {
      alert(err);
    }
  };

  useEffect(() => {
    handleGetCategories();
  }, []);

  const renderFilters = () => {
    return categories.length > 0
      ? categories.map((category, idx) => {
          return (
            <>
              <option className="font-normal" value={category.slug}>
                {category.name}
              </option>
            </>
          );
        })
      : "";
  };

  return (
    <select
      className="text-violet-500 font-bold bg-transparent mt-4 cursor-pointer"
      onChange={async (e: any) => {
        handleFindBookmarksByCategory(e.target.value);
      }}
    >
      <option className="font-normal" value="">
        Choose category
      </option>
      {renderFilters()}
    </select>
  );
}
