import Navbar from "../components/navbar";
import Searchbar from "../components/Searchbar";

export default function Home() {
  return (
    <>
      <Navbar headingText="My Bookmarks" />
      <div className="px-4 lg:w-6/12 mx-auto mt-8 mb-4">
        <div className="text-center mb-3">
          <p className="font-bold text-3xl">Find Now</p>
          <p className="font-semibold text-lg">
            <span className="text-gray-400">in</span> My Bookmarks
          </p>
        </div>
        <Searchbar placeholder="Find by description" />
      </div>
      <div className="px-4 lg:px-44">
        <select className="text-violet-500 font-bold bg-transparent mt-4 cursor-pointer">
          <option value="">Choose category</option>
          <option value="library">Library</option>
          <option value="tool">Tool</option>
          <option value="framework">Framework</option>
        </select>
      </div>
    </>
  );
}
