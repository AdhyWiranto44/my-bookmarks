import Link from "next/link";
import colorOption from "../helpers/buttonColors";

export default function ButtonLink({ btnColor, href, icon, text }: any) {
  return (
    <Link href={href}>
      <a
        className={`${
          btnColor ? colorOption[btnColor] : colorOption.purple
        } py-2 px-6 mr-2 my-2 rounded-lg flex items-center`}
      >
        {icon}
        {text}
      </a>
    </Link>
  );
}
