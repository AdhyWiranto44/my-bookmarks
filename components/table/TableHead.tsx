export default function TableHead(props: any) {
  return (
    <th className="border-b-2 border-b-blue-600 p-3 text-left duration-300 text-gray-400 hover:text-gray-800">
      {props.children}
    </th>
  );
}
