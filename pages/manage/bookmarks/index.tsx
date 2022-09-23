import Heading1 from "../../../components/Heading1";
import ButtonLink from "../../../components/ButtonLink";
import { IoChevronBack } from "react-icons/io5";
import ManageLayout from "../../../layouts/manageLayout";
import ManageHeader from "../../../components/ManageHeader";
import { useEffect, useState } from "react";
import { getAllBookmarks, insertBookmark } from "../../api/bookmarks";
import {
  FaArrowUp,
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
import { BsXLg } from "react-icons/bs";

export default function BookmarkPage() {
  const defaultForm: any = {
    name: "",
    description: "",
    url: "",
    category: 0,
  };
  const [categories, setCategories] = useState([]);
  const [form, setForm] = useState(defaultForm);
  const [formDisplay, setFormDisplay] = useState(false);
  const [bookmarks, setBookmarks] = useState([]);

  const handleGetBookmarks = async () => {
    const response = await getAllBookmarks();
    const bookmarks = response.data.data.bookmarks;

    setBookmarks(bookmarks);
  };

  useEffect(() => {
    handleGetBookmarks();
  }, []);

  const handleGetCategories = async () => {
    const response = await getAllCategories();
    const categories = response.data.data.categories;

    setCategories(categories);
  };

  useEffect(() => {
    handleGetCategories();
  }, []);

  const handleAddNewBookmark = async () => {
    await insertBookmark(form);
    handleGetBookmarks();
  };

  const renderCategories = () => {
    return categories.map((category, idx) => {
      return (
        <option key={idx} value={category.id}>
          {category.name}
        </option>
      );
    });
  };

  const renderForm = () => {
    return formDisplay === true ? (
      <>
        <div className="mb-3">
          <label className="block" htmlFor="name">
            Name
          </label>
          <input
            className=""
            type="text"
            name="name"
            onChange={(e: any) => {
              setForm({ ...form, name: e.target.value });
            }}
          />
        </div>
        <div className="mb-3">
          <label className="block" htmlFor="description">
            Description
          </label>
          <input
            type="text"
            name="description"
            onChange={(e: any) => {
              setForm({ ...form, description: e.target.value });
            }}
          />
        </div>
        <div className="mb-3">
          <label className="block" htmlFor="url">
            Url
          </label>
          <input
            type="text"
            name="url"
            onChange={(e: any) => {
              setForm({ ...form, url: e.target.value });
            }}
          />
        </div>
        <div className="mb-3">
          <select
            onChange={(e) => {
              setForm({ ...form, category: parseInt(e.target.value) });
            }}
          >
            <option value="0">-- Select category --</option>
            {renderCategories()}
          </select>
        </div>
        <Button
          btnColor="blue"
          icon={
            <div className="mr-1">
              <FaPlus />
            </div>
          }
          text="Add"
          onClick={(e: any) => {
            console.log(form);

            // handleAddNewBookmark();
          }}
        />
      </>
    ) : (
      ""
    );
  };

  const renderTableHeaders = () => {
    return bookmarks.length > 0
      ? Object.keys(bookmarks[0]).map((head, idx) => {
          if (!["id", "slug"].includes(head))
            return <TableHead key={idx}>{head}</TableHead>;
        })
      : "";
  };

  const renderBookmarkRows = () => {
    return bookmarks.length > 0
      ? bookmarks.map((bookmark, idx) => {
          return (
            <TableRow key={idx}>
              <TableData>{bookmark.name}</TableData>
              <TableData>{bookmark.category}</TableData>
              <TableData>{bookmark.description}</TableData>
              <TableData>
                <a href={bookmark.url}>{bookmark.url}</a>
              </TableData>
              <TableData>{bookmark.createdAt}</TableData>
              <TableData>{bookmark.updatedAt}</TableData>
              <TableData>
                <div className="flex items-center">
                  <div className="ml-2">
                    <ButtonLink
                      name="Edit"
                      href={`/manage/bookmarks/${bookmark.slug}`}
                      btnColor={"yellow"}
                      icon={<FaEdit />}
                    />
                  </div>
                  <Button
                    name="Edit"
                    href={`/manage/bookmarks/${bookmark.slug}`}
                    btnColor={"red"}
                    icon={<FaTrashAlt />}
                    onClick={(e: any) => {
                      console.log(bookmark.slug);
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
          <TableHeader>{renderTableHeaders()}</TableHeader>
          <TableBody>{renderBookmarkRows()}</TableBody>
          <TableHeader>{renderTableHeaders()}</TableHeader>
        </TableContainer>
      </div>
    </ManageLayout>
  );
}
