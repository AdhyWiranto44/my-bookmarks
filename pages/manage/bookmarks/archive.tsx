import Heading1 from "../../../components/Heading1";
import ButtonLink from "../../../components/ButtonLink";
import { IoChevronBack } from "react-icons/io5";
import ManageLayout from "../../../layouts/manageLayout";
import ManageHeader from "../../../components/ManageHeader";
import { useEffect, useState } from "react";
import {
  deleteBookmark,
  getAllArchive,
  getAllBookmarks,
  insertBookmark,
  updateBookmark,
} from "../../api/bookmarks";
import {
  FaArchive,
  FaBackward,
  FaEdit,
  FaHome,
  FaTrashAlt,
  FaTrashRestoreAlt,
} from "react-icons/fa";
import Button from "../../../components/Button";
import TableContainer from "../../../components/table/TableContainer";
import TableHeader from "../../../components/table/TableHeader";
import TableHead from "../../../components/table/TableHead";
import TableBody from "../../../components/table/TableBody";
import TableRow from "../../../components/table/TableRow";
import TableData from "../../../components/table/TableData";
import { getAllCategories } from "../../api/category";
import Loading from "../../../components/Loading";
import DataNotFound from "../../../components/DataNotFound";
import BookmarkSearchbar from "../../../components/BookmarkSearchbar";
import ArchiveSearchbar from "../../../components/ArchiveSearchbar";

export default function BookmarkPage() {
  const defaultForm: any = {
    name: "",
    description: "",
    url: "",
    category: "",
  };
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [form, setForm] = useState(defaultForm);
  const [bookmarks, setBookmarks] = useState([]);
  const [bookmarkSlug, setBookmarkSlug] = useState("");

  const handleGetBookmarks = async () => {
    const response = await getAllArchive();
    const bookmarks = response.data.data.archive;

    setBookmarks(bookmarks);
    setLoading(false);
  };

  const handleGetCategories = async () => {
    const response = await getAllCategories();
    const categories = response.data.data.categories;

    setCategories(categories);
  };

  const handleRestoreBookmark = async (slug: string) => {
    try {
      const wantToRestore: boolean = confirm(`Unarchive bookmark ${slug}?`);
      wantToRestore && (await updateBookmark(slug, { deletedAt: null }));
    } catch (err: any) {
      alert(err);
    }
  };

  const handleDeleteBookmark = async (slug: string) => {
    try {
      const wantToDelete: boolean = confirm(`Delete archive ${slug}?`);
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

  const renderTableHeaders = () => {
    return bookmarks.length > 0
      ? Object.keys(bookmarks[0]).map((head, idx) => {
          if (
            !["id", "slug", "createdAt", "updatedAt", "deletedAt"].includes(
              head
            )
          ) {
            return <TableHead key={idx}>{head}</TableHead>;
          }
        })
      : "";
  };

  const renderBookmarkRows = () => {
    if (!loading) {
      return bookmarks.length > 0 ? (
        bookmarks.map((bookmark, idx) => {
          return (
            <TableRow key={idx} num={idx}>
              <td className="px-2 text-black dark:text-gray-100">{idx + 1}</td>
              <TableData>{bookmark.name}</TableData>
              <TableData>{bookmark.category}</TableData>
              <TableData>{bookmark.description}</TableData>
              <TableData>
                <a className="underline" href={bookmark.url}>
                  {bookmark.url}
                </a>
              </TableData>
              <TableData>
                <div className="flex items-center">
                  <div className="ml-2">
                    <Button
                      name="Restore"
                      btnColor={"blue"}
                      icon={<FaTrashRestoreAlt />}
                      onClick={async (e: any) => {
                        await handleRestoreBookmark(bookmark.slug);
                        await handleGetBookmarks();
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
      ) : (
        <DataNotFound />
      );
    } else {
      return <Loading />;
    }
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
          <Heading1 text="Archive" />
        </div>
      </ManageHeader>
      <div className="mx-auto w-full lg:w-6/12">
        <ArchiveSearchbar
          setBookmarks={setBookmarks}
          placeholder={"Find archive by description"}
        />
      </div>
      <div className="text-black mt-4 overflow-x-auto">
        <TableContainer>
          <TableHeader>
            <TableHead>#</TableHead>
            {renderTableHeaders()}
            <TableHead>Aksi</TableHead>
          </TableHeader>
          <TableBody>{renderBookmarkRows()}</TableBody>
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
