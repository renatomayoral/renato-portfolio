import { useState } from "react";
import { AiFillCaretUp, AiFillCaretDown, AiOutlineShop } from "react-icons/ai";
import { SiHtml5 } from "react-icons/si";

export default function skillButton() {
  const [isExpanded, setIsExpended] = useState(false);
  const isCaretDown = isExpanded;
  const isCaretUp = !isExpanded;

  return (
    <div className=" flex flex-col p-4">
      <button
        onClick={() => setIsExpended(!isExpanded)}
        className=" flex justify-center items-center dark:text-white text-black rounded-md"
      >
        <AiOutlineShop className=" text-3xl text-teal-600" />
        <div className="flex-col mx-2 ">
          <h1 className=" font-semibold text-lg">Frontend developer</h1>
          <p className="flex text-sm text-gray-400 leading-none ">More than 3 years</p>
        </div>
        <div>
          {isCaretDown && <AiFillCaretDown />}
          {isCaretUp && <AiFillCaretUp />}
        </div>
      </button>
      {isExpanded && (
        <div className=" flex justify-center py-1 mt-2 ">
          

          <ul className="py-2">
          <div className="flex items-center px-2">
            <SiHtml5 className="mx-2 mt-2 text-2xl"/>
          
            <div className="flex-col">
              <div className="flex justify-between">
                <li>HTML5</li>
                <p>25%</p>
              </div>
              <div className="w-44 bg-gray-200 rounded-full ">
                <div className="bg-gradient-to-r from-cyan-600 to-teal-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full w-1/4"></div>
              </div>
            </div>
            </div>
          </ul>
        </div>
      )}
    </div>
  );
}
