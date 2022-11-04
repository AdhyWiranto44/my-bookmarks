import Heading1 from "../../components/Heading1";
import ButtonLink from "../../components/ButtonLink";
import { FaClipboardList, FaHome } from "react-icons/fa";
import ManageLayout from "../../layouts/manageLayout";
import ManageHeader from "../../components/ManageHeader";

export default function ManagePage() {
  return (
    <ManageLayout>
      <ManageHeader>
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
          <Heading1 text="Manage" />
        </div>
      </ManageHeader>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4">
        <div className="mx-3 mb-2">
          <ButtonLink
            text="Manage Bookmarks"
            href="/manage/bookmarks"
            icon={
              <div className="mr-1">
                <FaClipboardList />
              </div>
            }
          />
        </div>
        <div className="mx-3 mb-2">
          <ButtonLink
            text="Manage Archive"
            href="/manage/bookmarks/archive"
            icon={
              <div className="mr-1">
                <FaClipboardList />
              </div>
            }
          />
        </div>
        <div className="mx-3 mb-2">
          <ButtonLink
            text="Manage Categories"
            href="/manage/categories"
            icon={
              <div className="mr-1">
                <FaClipboardList />
              </div>
            }
          />
        </div>
      </div>
    </ManageLayout>
  );
}
