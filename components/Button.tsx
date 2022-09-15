export default function Button(props: any) {
  return (
    <button className="text-gray-700 font-bold bg-yellow-400 border border-yellow-600 duration-300 hover:bg-yellow-500 active:bg-yellow-600 py-2 px-6 mr-2 my-2 rounded-lg flex items-center">
      {props.icon}
      {props.text}
    </button>
  );
}
