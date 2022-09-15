import Link from "next/link";

export default function ButtonLink(props: any) {
  return (
    <Link href={props.href}>
      <a className="text-white font-bold bg-violet-500 border border-violet-700 duration-300 hover:bg-violet-600 active:bg-violet-700 py-2 px-6 rounded-lg flex items-center">
        {props.icon}
        {props.text}
      </a>
    </Link>
  );
}
