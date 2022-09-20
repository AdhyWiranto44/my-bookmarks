import { useState, useEffect } from "react";
import { getAllCategories } from "../pages/api/category";

export default function Filter() {
  const [categories, setCategories] = useState([]);

  const handleGetCategories = async () => {
    const response = await getAllCategories();
    const categories = response.data.data.categories;

    setCategories(categories);
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
    <>
      <select className="text-violet-500 font-bold bg-transparent mt-4 cursor-pointer">
        <option className="font-normal" value="">
          Choose category
        </option>
        {renderFilters()}
      </select>
    </>
  );
}
