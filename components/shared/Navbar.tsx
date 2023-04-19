'use client';

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { IoLanguage } from "react-icons/io5";
import { useState } from "react";
import DarkModeBtn from "components/Buttons/DarkModeBtn";

export default function Navbar() {

  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className=" py-10 mb-3 flex justify-evenly">
      <div
        className={
          !nav
            ? " fixed left-0 top-0 w-sm h-full border-r border-r-gray-300 ease-in-out duration-500"
            : "fixed right-[-100%]"
        }
      >
        <ul className=" text-center m-6 ">
          <li className=" flex px-4 h-10 bg-teal-600 rounded-md justify-center items-center text-white font-medium text-lg m-6">
            HOME
          </li>
          <li className="flex px-4 h-10 bg-teal-600 rounded-md justify-center items-center text-white font-medium text-lg m-6">
            ABOUT
          </li>
          <li className="flex px-4 h-10 bg-teal-600 rounded-md justify-center items-center text-white font-medium text-lg m-6">
            SKILLS
          </li>
          <li className="flex px-4 h-10 bg-teal-600 rounded-md justify-center items-center text-white font-medium text-lg m-6">
            QUALIFICATION
          </li>
          <li className="flex px-4 h-10 bg-teal-600 rounded-md justify-center items-center text-white font-medium text-lg m-6">
            PORTFOLIO
          </li>
          <li className="flex px-4 h-10 bg-teal-600 rounded-md justify-center items-center text-white font-medium text-lg m-6">
            COURSES
          </li>
          <li className="flex px-4 h-10 bg-teal-600 rounded-md justify-center items-center text-white font-medium text-lg m-6">
            BOOKS
          </li>
        </ul>
      </div>
      <ul className=" hidden md:flex justify-center items-center">
        <li className="px-4 bg-teal-600 rounded-md text-white font-medium text-sm mx-2">
          HOME
        </li>
        <li className="px-4 bg-teal-600 rounded-md text-white font-medium text-sm mx-2">
          ABOUT
        </li>
        <li className="px-4 bg-teal-600 rounded-md text-white font-medium text-sm mx-2">
          SKILLS
        </li>
        <li className="px-4 bg-teal-600 rounded-md text-white font-medium text-sm mx-2">
          QUALIFICATION
        </li>
        <li className="px-4 bg-teal-600 rounded-md text-white font-medium text-sm mx-2">
          PORTFOLIO
        </li>
        <li className="px-4 bg-teal-600 rounded-md text-white font-medium text-sm mx-2">
          COURSES
        </li>
        <li className="px-4 bg-teal-600 rounded-md text-white font-medium text-sm mx-2">
          BOOKS
        </li>
      </ul>

      <ul className="flex">
        <li className="px-4">
          <IoLanguage className=" cursor-pointer text-2xl text-teal-600" />
        </li>
        <li className="px-4">
        <DarkModeBtn/>
        </li>
      </ul>
      <ul>
        <div onClick={handleNav} className=" block md:hidden">
          {!nav ? (
            <AiOutlineClose className=" text-2xl text-teal-600" />
          ) : (
            <AiOutlineMenu className=" text-2xl text-teal-600" />
          )}
        </div>
      </ul>
    </nav>
  );
}
