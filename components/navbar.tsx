import Heading1 from "./Heading1";
import ButtonLink from "./ButtonLink";
import { BsGearFill } from "react-icons/bs";

export default function Navbar(props: any) {
  return (
    <div className="bg-gray-100 bg-opacity-70 backdrop-blur-sm flex items-center justify-between py-4 px-4 lg:px-10 sticky top-0">
      <Heading1 text={props.headingText} />
      <ButtonLink
        href="/bookmarks"
        text="Manage"
        icon={
          <div className="mr-1">
            <BsGearFill />
          </div>
        }
      />
    </div>
  );
}
