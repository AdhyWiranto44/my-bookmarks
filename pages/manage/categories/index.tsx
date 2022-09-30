import { useState, useEffect } from "react";
import Heading1 from "../../../components/Heading1";
import ButtonLink from "../../../components/ButtonLink";
import { IoChevronBack } from "react-icons/io5";
import ManageLayout from "../../../layouts/manageLayout";
import ManageHeader from "../../../components/ManageHeader";
import TableContainer from "../../../components/table/TableContainer";
import TableHeader from "../../../components/table/TableHeader";
import TableBody from "../../../components/table/TableBody";
import {
  addNewCategory,
  deleteCategory,
  getAllCategories,
} from "../../api/category";
import TableHead from "../../../components/table/TableHead";
import TableRow from "../../../components/table/TableRow";
import TableData from "../../../components/table/TableData";
import {
  FaChevronDown,
  FaChevronUp,
  FaEdit,
  FaPlus,
  FaTrashAlt,
} from "react-icons/fa";
import Button from "../../../components/Button";
import FormField from "../../../components/form/FormField";

export default function CategoryPage() {
  const defaultForm: any = {
    name: "",
  };
  const [form, setForm] = useState(defaultForm);
  const [formDisplay, setFormDisplay] = useState(false);
  const [categories, setCategories] = useState([]);

  const handleGetCategories = async () => {
    const response = await getAllCategories();
    const categories = response.data.data.categories;

    setCategories(categories);
  };

  const handleDeleteCategory = async (slug: string) => {
    try {
      const wantToDelete: boolean = confirm(`Delete ${slug}`);
      wantToDelete && (await deleteCategory(slug));
    } catch (err: any) {
      alert(err);
    }
  };

  useEffect(() => {
    handleGetCategories();
  }, []);

  const renderTableHeaders = () => {
    return categories.length > 0
      ? Object.keys(categories[0]).map((head, idx) => {
          if (!["id", "slug", "createdAt", "updatedAt"].includes(head))
            return <TableHead key={idx}>{head}</TableHead>;
        })
      : "";
  };

  const renderCategoryRows = () => {
    return categories.length > 0
      ? categories.map((category, idx) => {
          return (
            <TableRow key={idx} num={idx}>
              <TableData>{category.name}</TableData>
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
                    onClick={async (e: any) => {
                      await handleDeleteCategory(category.slug);
                      await handleGetCategories();
                    }}
                  />
                </div>
              </TableData>
            </TableRow>
          );
        })
      : "";
  };

  const handleAddNewCategory = async () => {
    try {
      const added: any = await addNewCategory(form);
    } catch (err: any) {
      alert(err);
    }
  };

  const renderForm = () => {
    return (
      formDisplay && (
        <>
          <div className="mb-3">
            <FormField
              name="name"
              type="text"
              value={form.name}
              onChange={(e: any) => {
                setForm({ ...form, name: e.target.value });
              }}
            />
          </div>
          <Button
            btnColor="blue"
            icon={
              <div className="mr-1">
                <FaPlus />
              </div>
            }
            text="Add"
            onClick={async (e: any) => {
              await handleAddNewCategory();
              setForm(defaultForm);
              await handleGetCategories();
            }}
          />
        </>
      )
    );
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
      <div className="inline-block">
        <Button
          btnColor="outlineBlue"
          icon={
            formDisplay === false ? (
              <div className="mr-1">
                <FaChevronUp />
              </div>
            ) : (
              <div className="mr-1">
                <FaChevronDown />
              </div>
            )
          }
          text="Add new"
          onClick={(e: any) => {
            if (formDisplay === true) {
              setFormDisplay(false);
              setForm(defaultForm);
            } else {
              setFormDisplay(true);
            }
          }}
        />
      </div>
      <div className="">{renderForm()}</div>
      <div className="text-black mt-4 overflow-x-scroll">
        <TableContainer>
          <TableHeader>
            {renderTableHeaders()}
            <TableHead>Aksi</TableHead>
          </TableHeader>
          <TableBody>{renderCategoryRows()}</TableBody>
          <TableHeader>
            {renderTableHeaders()}
            <TableHead>Aksi</TableHead>
          </TableHeader>
        </TableContainer>
      </div>
    </ManageLayout>
  );
}
