import Image from "next/image";
import web1 from "@/public/web1.png";
import {BsArrowRightShort} from 'react-icons/bs'

export default function Portfolio() {
  return (
    <section className="py-10 flex-col">
      <div>
        <h1 className="text-3xl py-1 dark:text-white text-center font-extrabold">
          Portfolio
        </h1>
        <p className="text-md text-gray-800 dark:text-gray-200 text-center">
          Most recent work
        </p>
      </div>
      <div className="flex max-w-4xl">
        <div className="flex py-10 lg:flex-row ">
          <div className="flex-1">
            <Image
              className="rounded-lg object-cover"
              width={1400}
              height={1400}
              src={web1}
              alt="web1"
            />
          </div>
        </div>
        <div className="p-10 justify-center">
          <h1>Modern Website</h1>
          <p className="text-md py-2 text-gray-800 dark:text-gray-200">
            Since the beginning of my journey as a freelance designer and
            developer, I've done remote work for
            <span className="text-teal-500"> agencies </span>
            consulted for <span className="text-teal-500">startups </span>
          </p>
          <div className=" justify-start flex pt-2">
            <button className=" flex bg-gradient-to-r from-cyan-600 to-teal-600 text-white px-4 py-2 rounded-md items-center">
              Demo
              <BsArrowRightShort className=" text-2xl"/>
              
            </button>
            
          </div>
        </div>
      </div>
    </section>
  );
}
