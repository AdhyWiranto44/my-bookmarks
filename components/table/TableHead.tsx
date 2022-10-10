export default function TableHead(props: any) {
  return (
    <th className="border-b-2 border-b-slate-300 dark:border-b-slate-800 p-3 text-left duration-300 text-gray-500 hover:text-gray-800 dark:hover:text-gray-500">
      {props.children}
    </th>
  );
}
