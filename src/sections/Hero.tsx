import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub, AiFillMail} from "react-icons/ai";
import Image from "next/image";
import renatotransp from "@/public/renatotransp.png";
import {useTheme} from 'next-themes'
import DropdownButton from "../components/DropdownButton";


export default function Hero() {
  const {theme, setTheme} = useTheme()
  return (
    
    <section className="min-h-screen">
      <nav className="py-10 mb-10 flex justify-between">
        <h1 className="text-xl font-burtons">Renato Mayoral</h1>
        <ul className="flex items-center">
        <li className="px-4">
            Home
          </li>
          <li className="px-4">
            About
          </li>
          <li className="px-4">
            Skills
          </li>
          <li className="px-4">
            Qualification
          </li>
          <li className="px-4">
            Portfolio
          </li>
          <li>
            <BsFillMoonStarsFill onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="cursor-pointer text-2xl" />
          </li>
          <li className="px-4">
      <DropdownButton options={[
          'Portuguese PT-BR',
          'English'
        ]} />
        </li>
        </ul>
      </nav>

      <div className="text-center p-10">
        <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
          Renato Mayoral
        </h2>
        <h3 className="text-xl py-2 font-light md:text-3xl">
          Web Developer and Entrepreneur
        </h3>
        <p className="text-md py-5 leading-6 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-gray-400">
          Self-taught web developer trying to solve real world problems through technology.
        </p>
      </div>
      <a className="text-5xl flex justify-center gap-8 text-gray-600">
        <AiFillLinkedin />
        <AiFillGithub />
      </a>
      <div className="relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 mx-auto overflow-hidden">
        <Image
          src={renatotransp}
          alt={"Portfolio owener Photo"}
          object-fit="cover"
          height={300}
          width={300}
        />
      </div>
      <div className=" justify-center flex pt-6">
        
        <button onClick={() => window.location.href = 'mailto:mailto:renatomayoral@gmail.com'} className=" mt-2 bg-gradient-to-r from-cyan-600 to-teal-600 text-white px-4 py-2 rounded-md ml-8 flex items-center gap-2">
        Contact Me 
        <AiFillMail />
        </button>

      </div>
    </section>
  );
}
