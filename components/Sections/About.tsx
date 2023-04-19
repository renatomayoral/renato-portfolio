'use client';
import Image from "next/image";
import renato from "public/renato.jpg";
import DropdownButton from "components/Buttons/DropdownButton";

export default function About() {
  return (
    <section className="py-5 flex-col">
      <div>
        <h3 className="text-3xl md:text-4xl py-1 dark:text-white text-center">
          About Me
        </h3>
        <p className="text-md md:text-lg font-medium text-gray-500 dark:text-gray-400 text-center">
          My introduction
        </p>
      </div>
      <div className="md:flex py-10 justify-center">
        <div className=" justify-center flex">
          <div>
            <Image
              className="rounded-lg object-cover"
              width={200}
              height={200}
              src={renato}
              alt="web1"
            />
          </div>
        </div>
        <div className="px-6 flex-col justify-center">
          <div className="justify-evenly text-left md:text-lg max-w-xl mx-auto py-10">
            Web developer, with extensive knowledge and years of experience,
            working in web technologies and UI / UX design, delivering quality
            working.
          </div>
          <div className="flex-grow flex py-4 ">
            <div className="px-4 flex-1 justify-evenly">
              <h1 className="text-2xl text-center">03+</h1>
              <p className="justify-center text-md py-2 text-gray-800 dark:text-gray-200 text-center">
                Years experience
              </p>
            </div>
            <div className="px-4 flex-1 justify-evenly">
              <h1 className="text-2xl text-center">05+</h1>
              <p className="justify-center text-md py-2 text-gray-800 dark:text-gray-200 text-center">
                Projects
              </p>
            </div>
          </div>
          <div className="pb-10 py-10 flex justify-center">
            <DropdownButton options={["Portuguese PT-BR", "English"]} />
          </div>
        </div>
      </div>
    </section>
  );
}
