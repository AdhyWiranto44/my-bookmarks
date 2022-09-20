import { useState, useEffect } from "react";
import Heading1 from "../../../components/Heading1";
import ButtonLink from "../../../components/ButtonLink";
import { IoChevronBack } from "react-icons/io5";
import ManageLayout from "../../../layouts/manageLayout";
import ManageHeader from "../../../components/ManageHeader";
import TableContainer from "../../../components/table/TableContainer";
import TableHeader from "../../../components/table/TableHeader";
import TableBody from "../../../components/table/TableBody";
import { getAllCategories } from "../../api/category";
import TableHead from "../../../components/table/TableHead";
import TableRow from "../../../components/table/TableRow";
import TableData from "../../../components/table/TableData";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Button from "../../../components/Button";

export default function CategoryPage() {
  const [categories, setCategories] = useState([]);

  const handleGetCategories = async () => {
    const response = await getAllCategories();
    const categories = response.data.data.categories;

    setCategories(categories);
  };

  useEffect(() => {
    handleGetCategories();
  }, []);

  const renderTableHeaders = () => {
    return categories.length > 0
      ? Object.keys(categories[0]).map((head, idx) => {
          if (!["id", "slug"].includes(head))
            return <TableHead key={idx}>{head}</TableHead>;
        })
      : "";
  };

  const renderCategoryRows = () => {
    return categories.length > 0
      ? categories.map((category, idx) => {
          return (
            <TableRow key={idx}>
              <TableData>{category.name}</TableData>
              <TableData>{category.createdAt}</TableData>
              <TableData>{category.updatedAt}</TableData>
              <TableData>
                <div className="flex items-center">
                  <div className="ml-2">
                    <ButtonLink
                      name="Edit"
                      href={`/manage/categories/${category.slug}`}
                      btnColor={"yellow"}
                      icon={<FaEdit />}
                    />
                  </div>
                  <Button
                    name="Edit"
                    href={`/manage/categories/${category.slug}`}
                    btnColor={"red"}
                    icon={<FaTrashAlt />}
                    onClick={(e: any) => {
                      console.log(category.slug);
                    }}
                  />
                </div>
              </TableData>
            </TableRow>
          );
        })
      : "";
  };

  return (
    <ManageLayout>
      <ManageHeader>
        <ButtonLink
          text=""
          href="/manage"
          icon={
            <>
              <IoChevronBack />
            </>
          }
        />
        <div className="ml-2">
          <Heading1 text="List of Categories" />
        </div>
      </ManageHeader>
      <div className="text-black mt-4 overflow-x-scroll">
        <TableContainer>
          <TableHeader>{renderTableHeaders()}</TableHeader>
          <TableBody>{renderCategoryRows()}</TableBody>
          <TableHeader>{renderTableHeaders()}</TableHeader>
        </TableContainer>
      </div>
    </ManageLayout>
  );
}
