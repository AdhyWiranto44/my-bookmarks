import Searchbar from "./Searchbar";
import { findCategories, getAllCategories } from "../pages/api/category";

export default function CategorySearchbar({ setCategories, placeholder }: any) {
  const handleFindCategory = async (desc: string) => {
    setTimeout(async () => {
      try {
        const response: any = await findCategories(desc);
        setCategories(response.data.data.categories);
      } catch (err: any) {
        const response: any = await getAllCategories();
        setCategories(response.data.data.categories);
      }
    }, 1000);
  };

  return (
    <Searchbar
      onkeyup={(e: any) => {
        handleFindCategory(e.target.value || "");
      }}
      placeholder={placeholder || "Search..."}
    />
  );
}
