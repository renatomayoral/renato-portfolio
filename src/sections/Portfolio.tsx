import Image from "next/image";
import web1 from "@/public/web1.png";
import { BsArrowRightShort } from "react-icons/bs";



export default function Portfolio() {
  return (
    <section className="py-10 flex-col">
      <div>
        <h1 className="text-3xl py-1 dark:text-white text-center font-medium">
          Portfolio
        </h1>
        <p className="text-md md:text-xl text-gray-600 dark:text-gray-400 text-center">
          Most recent work
        </p>
      </div>

      <div className=" sm:flex justify-center text-center m-16">
        <div className="flex justify-center">
          <Image
            className="rounded-lg object-fit"
            width={250}
            height={250}
            src={web1}
            alt="web1"
          />
        </div>

        <div className=" sm:flex sm:px-8 flex-col py-4 justify-center">
          <h1 className=" text-left font-semibold text-xl">Modern Website</h1>
          <div className="flex flex-col justify-center">
            <div className="flex-col md:text-md max-w-md mx-auto text-start">
              <p className=" py-2 text-gray-800 dark:text-gray-200 justify-center ">
                Since the beginning of my journey as a freelance designer and
                developer, I've done remote work for agencies consulted for
                startups.
              </p>

              <div className=" justify-start flex pt-2">
                <button className=" flex justify-center bg-gradient-to-r from-cyan-600 to-teal-600 text-white px-4 py-2 rounded-md items-center">
                  Demo
                  <BsArrowRightShort className=" text-2xl" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
