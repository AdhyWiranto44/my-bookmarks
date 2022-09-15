import { BsThreeDotsVertical, BsGlobe } from "react-icons/bs";
import ButtonLink from "./ButtonLink";

export default function Bookmark() {
  return (
    <a
      href="#"
      className="bg-white opacity-75 hover:opacity-100 m-3 rounded-xl bg-[url('../public/github.jpg')] bg-center bg-opacity-10 bg-cover duration-300 hover:shadow-custom"
    >
      <div className="bg-white bg-opacity-80 p-3 mt-40 rounded-b-xl backdrop-blur-md">
        <div className="flex justify-between items-center mb-3">
          <div className="break-all">
            <h3 className="font-semibold text-xl">Github</h3>
            <p className="text-gray-800">Git repository service</p>
          </div>
          <button className="mx-2">
            <BsThreeDotsVertical className="text-xl" />
          </button>
        </div>
        <div className="flex">
          <ButtonLink
            href="#"
            text="Visit"
            icon={
              <div className="mr-1">
                <BsGlobe />
              </div>
            }
          />
        </div>
      </div>
    </a>
  );
}
