import colorOption from "../helpers/buttonColors";

export default function Button(props: any) {
  const btnColor = props.btnColor
    ? colorOption[props.btnColor]
    : colorOption.yellow;

  return (
    <button
      className={`${btnColor} py-2 px-6 mr-2 my-2 rounded-lg flex items-center`}
      name={props.name}
      title={props.name}
      onClick={props.onClick ? props.onClick : () => console.log("clicked.")}
    >
      {props.icon}
      {props.text}
    </button>
  );
}
