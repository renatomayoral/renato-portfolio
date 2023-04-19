"use client";

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { IoLanguage } from "react-icons/io5";
import { useState } from "react";
import DarkModeBtn from "components/Buttons/DarkModeBtn";
import { Link } from "react-scroll";

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
          <li className=" cursor-pointer flex px-4 h-10 bg-teal-600 rounded-md justify-center items-center text-white font-medium text-lg m-6">
            <Link to="home" spy={true} smooth={true} duration={500}>
              HOME
            </Link>
          </li>
          <li className="cursor-pointer flex px-4 h-10 bg-teal-600 rounded-md justify-center items-center text-white font-medium text-lg m-6">
            <Link to="about" spy={true} smooth={true} duration={500}>
              ABOUT
            </Link>
          </li>
          <li className="cursor-pointer flex px-4 h-10 bg-teal-600 rounded-md justify-center items-center text-white font-medium text-lg m-6">
            <Link to="skills" spy={true} smooth={true} duration={500}>
              SKILLS
            </Link>
          </li>
          <li className="cursor-pointer flex px-4 h-10 bg-teal-600 rounded-md justify-center items-center text-white font-medium text-lg m-6">
            <Link to="qualification" spy={true} smooth={true} duration={500}>
              QUALIFICATION
            </Link>
          </li>
          <li className="cursor-pointer flex px-4 h-10 bg-teal-600 rounded-md justify-center items-center text-white font-medium text-lg m-6">
            <Link to="portfolio" spy={true} smooth={true} duration={500}>
              PORTFOLIO
            </Link>
          </li>
          <li className="cursor-pointer flex px-4 h-10 bg-teal-600 rounded-md justify-center items-center text-white font-medium text-lg m-6">
            <Link to="courses" spy={true} smooth={true} duration={500}>
              COURSES
            </Link>
          </li>
          <li className="flex cursor-pointer px-4 h-10 bg-teal-600 rounded-md justify-center items-center text-white font-medium text-lg m-6">
            <Link
              to="books"
              spy={true}
              smooth={true}
              offset={200}
              duration={500}
            >
              BOOKS
            </Link>
          </li>
        </ul>
      </div>
      <ul className=" hidden md:flex justify-center items-center">
        <li className="cursor-pointer px-4 bg-teal-600 rounded-md text-white font-medium text-sm mx-2">
          <Link to="home" spy={true} smooth={true} duration={500}>
            HOME
          </Link>
        </li>
        <li className="cursor-pointer px-4 bg-teal-600 rounded-md text-white font-medium text-sm mx-2">
          <Link to="about" spy={true} smooth={true} duration={500}>
            ABOUT
          </Link>
        </li>
        <li className="cursor-pointer px-4 bg-teal-600 rounded-md text-white font-medium text-sm mx-2">
          <Link to="skills" spy={true} smooth={true} duration={500}>
            SKILLS
          </Link>
        </li>
        <li className="cursor-pointer px-4 bg-teal-600 rounded-md text-white font-medium text-sm mx-2">
          <Link to="qualification" spy={true} smooth={true} duration={500}>
            QUALIFICATION
          </Link>
        </li>
        <li className="cursor-pointer px-4 bg-teal-600 rounded-md text-white font-medium text-sm mx-2">
          <Link to="portfolio" spy={true} smooth={true} duration={500}>
            PORTFOLIO
          </Link>
        </li>
        <li className=" cursor-pointer px-4 bg-teal-600 rounded-md text-white font-medium text-sm mx-2">
          <Link to="courses" spy={true} smooth={true} duration={500}>
            COURSES
          </Link>
        </li>
        <li className=" cursor-pointer px-4 bg-teal-600 rounded-md text-white font-medium text-sm mx-2">
          <Link to="books" spy={true} smooth={true} duration={500}>
            BOOKS
          </Link>
        </li>
      </ul>

      <ul className="flex">
        <li className="px-4">
          <IoLanguage className=" cursor-pointer text-2xl text-teal-600" />
        </li>
        <li className="px-4">
          <DarkModeBtn />
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
