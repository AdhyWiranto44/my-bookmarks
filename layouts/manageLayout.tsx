export default function ManageLayout(props: any) {
  return (
    <div className="bg-gray-100 bg-opacity-70 backdrop-blur-sm sticky top-0 z-10 py-4 px-4 lg:px-10">
      {props.children}
    </div>
  );
}
