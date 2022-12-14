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
  updateCategory,
} from "../../api/category";
import TableHead from "../../../components/table/TableHead";
import TableRow from "../../../components/table/TableRow";
import TableData from "../../../components/table/TableData";
import {
  FaArrowLeft,
  FaChevronDown,
  FaChevronUp,
  FaEdit,
  FaHome,
  FaPlus,
  FaTrashAlt,
} from "react-icons/fa";
import Button from "../../../components/Button";
import FormField from "../../../components/form/FormField";
import DataNotFound from "../../../components/DataNotFound";
import Loading from "../../../components/Loading";
import CategorySearchbar from "../../../components/CategorySearchbar";

export default function CategoryPage() {
  const defaultForm: any = {
    name: "",
  };
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState(defaultForm);
  const [formDisplay, setFormDisplay] = useState(false);
  const [formBtnIsEdit, setFormBtnIsEdit] = useState(false);
  const [categories, setCategories] = useState([]);
  const [categorySlug, setCategorySlug] = useState("");

  const handleGetCategories = async () => {
    const response = await getAllCategories();
    const categories = response.data.data.categories;

    setCategories(categories);
    setLoading(false);
  };

  const handleAddNewCategory = async () => {
    try {
      const added: any = await addNewCategory(form);
    } catch (err: any) {
      alert(err);
    }
  };

  const handleUpdateCategory = async () => {
    try {
      const updated: any = await updateCategory(categorySlug, form);
    } catch (err: any) {
      alert(err);
    }
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
    if (!loading) {
      return categories.length > 0 ? (
        categories.map((category, idx) => {
          return (
            <TableRow key={idx} num={idx}>
              <td className="px-2 text-black dark:text-gray-100">{idx + 1}</td>
              <TableData>{category.name}</TableData>
              <TableData>
                <div className="flex items-center">
                  <div className="ml-2">
                    <Button
                      name="Edit"
                      btnColor={"yellow"}
                      icon={<FaEdit />}
                      onClick={async (e: any) => {
                        setForm({ ...category });
                        setCategorySlug(category.slug);
                        setFormBtnIsEdit(true);
                        setFormDisplay(true);
                      }}
                    />
                  </div>
                  <Button
                    name="Delete"
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
      ) : (
        <DataNotFound />
      );
    } else {
      return <Loading />;
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
                setFormDisplay(true);
              }}
            />
          </div>
          {formBtnIsEdit === false ? (
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
          ) : (
            <div className="flex">
              <Button
                btnColor="outlineGray"
                icon={
                  <div className="mr-1">
                    <FaArrowLeft />
                  </div>
                }
                text="Cancel"
                onClick={async (e: any) => {
                  setFormBtnIsEdit(false);
                  setForm(defaultForm);
                  setFormDisplay(false);
                }}
              />
              <Button
                btnColor="yellow"
                icon={
                  <div className="mr-1">
                    <FaEdit />
                  </div>
                }
                text="Edit"
                onClick={async (e: any) => {
                  await handleUpdateCategory();
                  setFormBtnIsEdit(false);
                  setForm(defaultForm);
                  setFormDisplay(false);
                  await handleGetCategories();
                }}
              />
            </div>
          )}
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
        <ButtonLink
          text=""
          href="/"
          icon={
            <>
              <FaHome />
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
      <div className="mt-3">{renderForm()}</div>
      <div className="mx-auto w-full lg:w-6/12">
        <CategorySearchbar
          setCategories={setCategories}
          placeholder={"Find categories by name"}
        />
      </div>
      <div className="text-black mt-4 overflow-x-auto">
        <TableContainer>
          <TableHeader>
            <TableHead>#</TableHead>
            {renderTableHeaders()}
            <TableHead>Aksi</TableHead>
          </TableHeader>
          <TableBody>{renderCategoryRows()}</TableBody>
          <TableHeader>
            <TableHead>#</TableHead>
            {renderTableHeaders()}
            <TableHead>Aksi</TableHead>
          </TableHeader>
        </TableContainer>
      </div>
    </ManageLayout>
  );
}
