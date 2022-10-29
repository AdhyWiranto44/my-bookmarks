import ButtonLink from "./ButtonLink";
import Image from "next/image";
import { FaClipboardList } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useState } from "react";

export default function Navbar(props: any) {
  const [toggleNav, setToggleNav] = useState(false);

  return (
    <header className="bg-gray-100 dark:bg-slate-900 bg-opacity-0 dark:bg-opacity-0 backdrop-blur-sm flex items-center justify-between py-4 px-4 lg:px-10 sticky top-0 z-10">
      <div className="flex items-center">
        <Image src="/img/logo.png" alt="My Bookmarks" width={64} height={48} />
      </div>
      <HiOutlineMenuAlt3
        className="text-4xl md:hidden"
        onClick={(e) => {
          toggleNav ? setToggleNav(false) : setToggleNav(true);
        }}
      />
      <div
        className={`${
          !toggleNav && "hidden"
        } absolute md:static top-20 left-0 right-0 px-4 md:flex bg-gray-100 bg-opacity-75 py-4 md:py-0 md:bg-opacity-0`}
      >
        <ButtonLink
          text="Manage Bookmarks"
          href="/manage/bookmarks"
          icon={
            <div className="mr-1">
              <FaClipboardList />
            </div>
          }
        />
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
    </header>
  );
}
