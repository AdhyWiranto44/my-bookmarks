import Link from "next/link";

export default function ButtonLink(props) {
  return (
    <Link href={props.href}>
      <a className="text-white font-bold bg-violet-500 border border-violet-700 py-2 px-6 rounded-lg flex items-center">
        {props.icon}
        {props.text}
      </a>
    </Link>
  );
}
