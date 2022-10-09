export default function TableData(props: any) {
  return (
    <td className="px-2 w-full text-black dark:text-gray-100">
      {props.children}
    </td>
  );
}
