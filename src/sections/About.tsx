import Image from "next/image";
import renato from "@/public/renato.jpg";
import DropdownButton from "@/src/components/DropdownButton";

export default function About() {
  return (
    <section className="py-10 flex-col">
      <div>
        <h3 className="text-3xl py-1 dark:text-white text-center">About Me</h3>
        <p className="text-md leading-8 text-gray-800 dark:text-gray-200 text-center">
          My introduction
        </p>
      </div>
      <div className="md:flex">
        <div className="py-10 justify-center flex">
          <div>
            <Image
              className="rounded-lg object-cover"
              width={300}
              height={300}
              src={renato}
              alt="web1"
            />
          </div>
        </div>
        <div className=" py-2 flex-col">
          <div className="justify-evenly text-center">
            Web developer, with extensive knowledge and years of experience,
            working in web technologies and UI / UX design, delivering quality
            working.
          </div>
          <div className="flex-grow flex py-4 ">
            <div className="px-4 flex-1 justify-evenly">
              <h1 className="text-2xl text-center">08+</h1>
              <p className="justify-center text-md py-2 text-gray-800 dark:text-gray-200 text-center">
                Years experience
              </p>
            </div>
            <div className="px-4 flex-1 justify-evenly">
              <h1 className="text-2xl text-center">08+</h1>
              <p className="justify-center text-md py-2 text-gray-800 dark:text-gray-200 text-center">
                Projects
              </p>
            </div>
            <div className="px-4 flex-1 justify-center">
              <h1 className="text-2xl text-center">08+</h1>
              <p className="justify-center text-md py-2 text-gray-800 dark:text-gray-200 text-center">
                Companies Worked
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-10 flex justify-center">
        <DropdownButton options={["Portuguese PT-BR", "English"]} />
      </div>
    </section>
  );
}
