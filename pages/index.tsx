import Bookmarks from "../components/Bookmarks";
import Filter from "../components/Filter";
import Navbar from "../components/navbar";
import Searchbar from "../components/Searchbar";

export default function Home() {
  return (
    <>
      <div className="bg-gray-100 bg-opacity-70 backdrop-blur-sm sticky top-0 z-10">
        <Navbar headingText="My Bookmarks" />
        <div className="px-4 lg:w-6/12 mx-auto mt-2 mb-2 pb-2">
          <div className="text-center mb-3">
            <p className="font-bold text-3xl text-gray-900">Find Now</p>
            <p className="font-semibold text-lg text-gray-900">
              <span className="text-gray-400">in</span> My Bookmarks
            </p>
          </div>
          <Searchbar placeholder="Find by description" />
          <Filter />
        </div>
      </div>
      <div className="px-4 lg:px-44">
        <Bookmarks />
      </div>
    </>
  );
}
