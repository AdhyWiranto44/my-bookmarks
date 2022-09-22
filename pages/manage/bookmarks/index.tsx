import Heading1 from "../../../components/Heading1";
import ButtonLink from "../../../components/ButtonLink";
import { IoChevronBack } from "react-icons/io5";
import ManageLayout from "../../../layouts/manageLayout";
import ManageHeader from "../../../components/ManageHeader";
import { useEffect, useState } from "react";
import { getAllBookmarks } from "../../api/bookmarks";
import { FaEdit, FaPlus, FaTrashAlt } from "react-icons/fa";
import Button from "../../../components/Button";
import TableContainer from "../../../components/table/TableContainer";
import TableHeader from "../../../components/table/TableHeader";
import TableHead from "../../../components/table/TableHead";
import TableBody from "../../../components/table/TableBody";
import TableRow from "../../../components/table/TableRow";
import TableData from "../../../components/table/TableData";

export default function BookmarkPage() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleGetBookmarks = async () => {
    const response = await getAllBookmarks();
    const bookmarks = response.data.data.bookmarks;

    setBookmarks(bookmarks);
  };

  useEffect(() => {
    handleGetBookmarks();
  }, []);

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
        <ButtonLink
          btnColor="blue"
          href="/manage/bookmarks/add-new"
          icon={
            <div className="mr-1">
              <FaPlus />
            </div>
          }
          text="Add new"
        />
      </div>
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
