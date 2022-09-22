import { IoChevronBack } from "react-icons/io5";
import ButtonLink from "../../../components/ButtonLink";
import Heading1 from "../../../components/Heading1";
import ManageHeader from "../../../components/ManageHeader";
import ManageLayout from "../../../layouts/manageLayout";

export default function addNewPage() {
  return (
    <ManageLayout>
      <ManageHeader>
        <ButtonLink
          text=""
          href="/manage/bookmarks"
          icon={
            <>
              <IoChevronBack />
            </>
          }
        />
        <div className="ml-2">
          <Heading1 text="Add new bookmarks" />
        </div>
      </ManageHeader>
      <h1>add new bookmarks</h1>
    </ManageLayout>
  );
}
