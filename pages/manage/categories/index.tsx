import Heading1 from "../../../components/Heading1";
import ButtonLink from "../../../components/ButtonLink";
import { FaClipboardList, FaHome } from "react-icons/fa";
import { IoChevronBack } from "react-icons/io5";

export default function BookmarkPage() {
  return (
    <>
      <div className="bg-gray-100 bg-opacity-70 backdrop-blur-sm sticky top-0 z-10 py-4 px-4 lg:px-10">
        <div className="flex items-center">
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
            <Heading1 text="List of Categories" />
          </div>
        </div>
      </div>
    </>
  );
}
