import Heading1 from "../../../components/Heading1";
import ButtonLink from "../../../components/ButtonLink";
import { IoChevronBack } from "react-icons/io5";
import ManageLayout from "../../../layouts/manageLayout";
import ManageHeader from "../../../components/ManageHeader";
import { useEffect, useState } from "react";
import {
  deleteBookmark,
  getAllBookmarks,
  insertBookmark,
  updateBookmark,
} from "../../api/bookmarks";
import {
  FaArrowLeft,
  FaChevronDown,
  FaChevronUp,
  FaEdit,
  FaPlus,
  FaTrashAlt,
} from "react-icons/fa";
import Button from "../../../components/Button";
import TableContainer from "../../../components/table/TableContainer";
import TableHeader from "../../../components/table/TableHeader";
import TableHead from "../../../components/table/TableHead";
import TableBody from "../../../components/table/TableBody";
import TableRow from "../../../components/table/TableRow";
import TableData from "../../../components/table/TableData";
import { getAllCategories } from "../../api/category";
import FormField from "../../../components/form/FormField";
import FormSelect from "../../../components/form/FormSelect";

export default function BookmarkPage() {
  const defaultForm: any = {
    name: "",
    description: "",
    url: "",
    category: "",
  };
  const [categories, setCategories] = useState([]);
  const [form, setForm] = useState(defaultForm);
  const [formDisplay, setFormDisplay] = useState(false);
  const [formBtnIsEdit, setFormBtnIsEdit] = useState(false);
  const [bookmarks, setBookmarks] = useState([]);
  const [bookmarkSlug, setBookmarkSlug] = useState("");

  const handleGetBookmarks = async () => {
    const response = await getAllBookmarks();
    const bookmarks = response.data.data.bookmarks;

    setBookmarks(bookmarks);
  };

  const handleGetCategories = async () => {
    const response = await getAllCategories();
    const categories = response.data.data.categories;

    setCategories(categories);
  };

  const handleUpdateBookmark = async () => {
    try {
      const updated: any = await updateBookmark(bookmarkSlug, form);
    } catch (err: any) {
      alert(err);
    }
  };

  const handleDeleteBookmark = async (slug: string) => {
    try {
      const wantToDelete: boolean = confirm(`Delete ${slug}`);
      wantToDelete && (await deleteBookmark(slug));
    } catch (err: any) {
      alert(err);
    }
  };

  useEffect(() => {
    handleGetBookmarks();
  }, []);

  useEffect(() => {
    handleGetCategories();
  }, []);

  const handleAddNewBookmark = async () => {
    try {
      const added: any = await insertBookmark(form);
    } catch (err: any) {
      alert(err);
    }
  };

  const renderCategories = () => {
    return categories.map((category, idx) => {
      return (
        <option key={idx} value={category.slug}>
          {category.name}
        </option>
      );
    });
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
          <div className="mb-3">
            <FormField
              name="description"
              type="text"
              value={form.description}
              onChange={(e: any) => {
                setForm({ ...form, description: e.target.value });
              }}
            />
          </div>
          <div className="mb-3">
            <FormField
              name="url"
              type="text"
              value={form.url}
              onChange={(e: any) => {
                setForm({ ...form, url: e.target.value });
              }}
            />
          </div>
          <div className="mb-3">
            <FormSelect
              name="category"
              defaultValue="0"
              loopData={renderCategories}
              onChange={(e: any) => {
                setForm({ ...form, category: e.target.value });
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
                await handleAddNewBookmark();
                setForm(defaultForm);
                await handleGetBookmarks();
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
                  await handleUpdateBookmark();
                  setFormBtnIsEdit(false);
                  setForm(defaultForm);
                  setFormDisplay(false);
                  await handleGetBookmarks();
                }}
              />
            </div>
          )}
          {/* <Button
            btnColor="blue"
            icon={
              <div className="mr-1">
                <FaPlus />
              </div>
            }
            text="Add"
            onClick={async (e: any) => {
              await handleAddNewBookmark();
              setForm(defaultForm);
              await handleGetBookmarks();
            }}
          /> */}
        </>
      )
    );
  };

  const renderTableHeaders = () => {
    return bookmarks.length > 0
      ? Object.keys(bookmarks[0]).map((head, idx) => {
          if (!["id", "slug", "createdAt", "updatedAt"].includes(head)) {
            return <TableHead key={idx}>{head}</TableHead>;
          }
        })
      : "";
  };

  const renderBookmarkRows = () => {
    return bookmarks.length > 0
      ? bookmarks.map((bookmark, idx) => {
          return (
            <TableRow key={idx} num={idx}>
              <TableData>{bookmark.name}</TableData>
              <TableData>{bookmark.category}</TableData>
              <TableData>{bookmark.description}</TableData>
              <TableData>
                <a href={bookmark.url}>{bookmark.url}</a>
              </TableData>
              <TableData>
                <div className="flex items-center">
                  <div className="ml-2">
                    <Button
                      name="Edit"
                      btnColor={"yellow"}
                      icon={<FaEdit />}
                      onClick={async (e: any) => {
                        setForm({ ...bookmark });
                        setBookmarkSlug(bookmark.slug);
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
                      await handleDeleteBookmark(bookmark.slug);
                      await handleGetBookmarks();
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
          <Heading1 text="List of Bookmarks" />
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
          <TableBody>{renderBookmarkRows()}</TableBody>
          <TableHeader>
            {renderTableHeaders()}
            <TableHead>Aksi</TableHead>
          </TableHeader>
        </TableContainer>
      </div>
    </ManageLayout>
  );
}
