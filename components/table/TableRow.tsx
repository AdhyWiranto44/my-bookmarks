export default function TableRow(props: any) {
  return (
    <tr
      className={
        (props.num % 2 === 0 &&
          "bg-gradient-to-r bg-opacity-30 from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800") +
        " hover:bg-gradient-to-r hover:from-slate-300 hover:to-slate-400 dark:hover:from-slate-800 dark:hover:to-slate-900"
      }
    >
      {props.children}
    </tr>
  );
}
