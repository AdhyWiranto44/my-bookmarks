import Heading1 from "./Heading1";
import ButtonLink from "./ButtonLink";
import { BsGearFill } from "react-icons/bs";
import Image from "next/image";

export default function Navbar(props: any) {
  return (
    <header className="bg-gray-100 dark:bg-slate-900 bg-opacity-0 dark:bg-opacity-0 backdrop-blur-sm flex items-center justify-between py-4 px-4 lg:px-10 sticky top-0 z-10">
      <div className="flex items-center">
        <Image src="/img/logo.png" alt="My Bookmarks" width={64} height={48} />
      </div>
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
