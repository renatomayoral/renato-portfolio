import { useState } from "react";
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";
import { HiDesktopComputer } from "react-icons/hi";

export default function skillButton() {
  const [isExpanded, setIsExpended] = useState(false);
  const isCaretDown = isExpanded;
  const isCaretUp = !isExpanded;

  return (
    <div className="flex-col py-4 ">
      <button
        onClick={() => setIsExpended(!isExpanded)}
        className="flex items-center bg-white px-2 text-black rounded-md"
      >
        <HiDesktopComputer className=" text-3xl text-teal-600" />
        <div className="flex-col mx-2">
          <h1 className=" font-semibold text-lg">Frontend developer</h1>
          <p className="flex text-sm text-gray-400 ">More than 3 years</p>
        </div>
        <div>
          {isCaretDown && <AiFillCaretDown />}
          {isCaretUp && <AiFillCaretUp />}
        </div>
      </button>
      {isExpanded && (
        <div className="flex bg-white py-1 mt-2 w-48">
          <ul className="py-2">
            <div className="flex-col">
              <li className=" py-1 px-2">HTML5</li>
              <div className="w-64 bg-gray-200 rounded-full ">
                <div className="bg-gradient-to-r from-cyan-600 to-teal-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full w-1/4">
                  {" "}
                  25%
                </div>
              </div>
              <li className="hover:bg-blue-500 hover:text-white py-4 px-2">
                CSS3
              </li>
            </div>
            <div className="w-64 bg-gray-200 rounded-full">
              <div className="bg-gradient-to-r from-cyan-600 to-teal-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full w-1/2">
                {" "}
                50%
              </div>
            </div>
            <li className="hover:bg-blue-500 hover:text-white px-2 cursor-pointer">
              Html
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
