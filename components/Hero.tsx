import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Image from "next/image";
import deved from "../public/dev-ed-wave.png";
import {useTheme} from 'next-themes'

export default function Hero() {
  const {theme, setTheme} = useTheme()
  return (
    <section className="min-h-screen">
      <nav className="py-10 mb-12 flex justify-between">
        <h1 className="text-xl font-burtons">Renato Mayoral</h1>
        <ul className="flex items-center">
          <li>
            <BsFillMoonStarsFill onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="cursor-pointer text-2xl" />
          </li>
          <li>
            <a className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8">
              Resume
            </a>
          </li>
        </ul>
      </nav>

      <div className="text-center p-10">
        <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
          Dimitri Marco
        </h2>
        <h3 className="text-xl py-2 font-light md:text-3xl">
          Web Developer and Entrepreneur
        </h3>
        <p className="text-md py-5 leading-6 text-gray-800 md:text-xl max-w-xl mx-auto">
          Freelancer providing services for programming need. join me down below
          and lets get done. gkgkjgkgkgkjgjkgjkgjkgj kgjkgjgjg gjgkgkjg
          jgkjgkjgdftydyty.
        </p>
      </div>
      <a className="text-5xl flex justify-center gap-8 text-gray-600">
        <AiFillLinkedin />
        <AiFillGithub />
      </a>
      <div className="relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 mx-auto overflow-hidden">
        <Image
          src={deved}
          alt={"Portfolio owener Photo"}
          object-fit="cover"
          fill
        />
      </div>
    </section>
  );
}
