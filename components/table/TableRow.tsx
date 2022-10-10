export default function TableRow(props: any) {
  return (
    <tr
      className={
        (props.num % 2 === 0 && "bg-slate-200 dark:bg-slate-700") +
        " hover:bg-slate-300 dark:hover:bg-slate-800"
      }
    >
      {props.children}
    </tr>
  );
}
