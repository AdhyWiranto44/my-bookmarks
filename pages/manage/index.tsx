import Heading1 from "../../components/Heading1";
import ButtonLink from "../../components/ButtonLink";
import { FaClipboardList, FaHome } from "react-icons/fa";

export default function ManagePage() {
  return (
    <>
      <div className="bg-gray-100 bg-opacity-70 backdrop-blur-sm sticky top-0 z-10 py-4 px-4 lg:px-10">
        <div className="flex items-center">
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
        </div>
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
      </div>
    </>
  );
}
