export default function TableRow(props: any) {
  return (
    <tr
      className={
        (props.num % 2 === 0 && "bg-blue-100 dark:bg-blue-800") +
        " hover:bg-blue-200 dark:hover:bg-blue-900"
      }
    >
      {props.children}
    </tr>
  );
}
