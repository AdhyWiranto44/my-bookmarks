import Link from "next/link";
import colorOption from "../helpers/buttonColors";

export default function ButtonLink(props: any) {
  const btnColor = props.btnColor
    ? colorOption[props.btnColor]
    : colorOption.purple;

  return (
    <Link href={props.href}>
      <a
        className={`${btnColor} py-2 px-6 mr-2 my-2 rounded-lg flex items-center`}
      >
        {props.icon}
        {props.text}
      </a>
    </Link>
  );
}
