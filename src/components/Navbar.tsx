import { BsFillMoonStarsFill } from "react-icons/bs";
import { IoLanguage } from "react-icons/io5";
import { useTheme } from "next-themes";



export default function Navbar() {
    const menuLinks = [
        {name: "HOME", link: "#home"},
        {name: "ABOUT", link: "#about"},
        {name: "SKILLS", link: "#skills"},
        {name: "QUALIFICATION", link: "#qualification"},
        {name: "PORTFOLIO", link: "#portfolio"},
        {name: "BOOKS", link: "#books"},

    ]
 
    const { theme, setTheme } = useTheme();
  return (
    <nav className=" py-10 mb-3 flex justify-evenly">
        <ul className="flex justify-center items-center">
          <li className="px-4 bg-teal-600 rounded-md text-white font-medium text-sm mx-2">HOME</li>
          <li className="px-4 bg-teal-600 rounded-md text-white font-medium text-sm mx-2">ABOUT</li>
          <li className="px-4 bg-teal-600 rounded-md text-white font-medium text-sm mx-2">SKILLS</li>
          <li className="px-4 bg-teal-600 rounded-md text-white font-medium text-sm mx-2">QUALIFICATION</li>
          <li className="px-4 bg-teal-600 rounded-md text-white font-medium text-sm mx-2">PORTFOLIO</li>
          <li className="px-4 bg-teal-600 rounded-md text-white font-medium text-sm mx-2">COURSES</li>
          <li className="px-4 bg-teal-600 rounded-md text-white font-medium text-sm mx-2">BOOKS</li>
        </ul>
        <ul className="flex">
          <li className="px-4">
            <IoLanguage className="cursor-pointer text-2xl" />
          </li>
          <li className="px-4">
            <BsFillMoonStarsFill
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="cursor-pointer text-2xl"
            />
          </li>
        </ul>
      </nav>
  )
}


