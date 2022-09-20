import Heading1 from "../../../components/Heading1";
import ButtonLink from "../../../components/ButtonLink";
import { FaClipboardList, FaHome } from "react-icons/fa";
import { IoChevronBack } from "react-icons/io5";
import ManageLayout from "../../../layouts/manageLayout";
import ManageHeader from "../../../components/ManageHeader";

export default function BookmarkPage() {
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
    </ManageLayout>
  );
}
