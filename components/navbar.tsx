import Heading1 from "./Heading1";
import ButtonLink from "./ButtonLink";
import { BsGearFill } from "react-icons/bs";

export default function Navbar(props: any) {
  return (
    <header className="flex items-center justify-between py-4 px-4 lg:px-10">
      <Heading1 text={props.headingText} />
      <ButtonLink
        href="/manage"
        text="Manage"
        icon={
          <div className="mr-1">
            <BsGearFill />
          </div>
        }
      />
    </header>
  );
}
