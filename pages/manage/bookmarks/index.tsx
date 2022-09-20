import Heading1 from "../../../components/Heading1";
import ButtonLink from "../../../components/ButtonLink";
import { IoChevronBack } from "react-icons/io5";
import ManageLayout from "../../../layouts/manageLayout";
import ManageHeader from "../../../components/ManageHeader";
import { useEffect, useState } from "react";
import { getAllBookmarks } from "../../api/bookmarks";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Button from "../../../components/Button";

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
            return (
              <th className="border border-black" key={idx}>
                {head}
              </th>
            );
        })
      : "";
  };

  const renderBookmarkRows = () => {
    return bookmarks.length > 0
      ? bookmarks.map((bookmark, idx) => {
          return (
            <tr className="border border-black" key={idx}>
              <td className="border border-black">{bookmark.name}</td>
              <td className="border border-black">{bookmark.description}</td>
              <td className="border border-black">
                <a href={bookmark.url}>{bookmark.url}</a>
              </td>
              <td className="border border-black">{bookmark.createdAt}</td>
              <td className="border border-black">{bookmark.updatedAt}</td>
              <td className="border border-black">
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
              </td>
            </tr>
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
      <div className="text-black mt-4">
        <table className="border border-black">
          <thead className="border border-black">
            {renderTableHeaders()}
            <th className="border border-black">aksi</th>
          </thead>
          <tbody className="border border-black">{renderBookmarkRows()}</tbody>
          <thead className="border border-black">
            {renderTableHeaders()}
            <th className="border border-black">aksi</th>
          </thead>
        </table>
      </div>
    </ManageLayout>
  );
}
