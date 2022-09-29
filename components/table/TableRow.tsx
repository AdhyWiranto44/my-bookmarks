export default function TableRow(props: any) {
  return (
    <tr
      className={(props.num % 2 === 0 && "bg-blue-100") + " hover:bg-blue-200"}
    >
      {props.children}
    </tr>
  );
}
