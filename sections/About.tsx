import Image from "next/image";
import web1 from "@/public/web1.png";
import DropdownLinkButton from "@/components/DropdownLinkButton2";

export default function About() {
  return (
    <section className="py-10">
      <div>
        <h3 className="text-3xl py-1 dark:text-white text-center">About Me</h3>
        <p className="text-md leading-8 text-gray-800 dark:text-gray-200 text-center">
          My introduction
        </p>
      </div>
      <div className="py-10 flex justify-center">
        <div>
          <Image
            className="rounded-lg object-cover"
            width={300}
            height={300}
            src={web1}
            alt="web1"
          />
        </div>
      </div>

      <div className=" justify-center py-4 pb-4">
      <div>
          Web developer, with extensive knowledge and years of experience, working in web technologies and UI / UX design, delivering quality working.
        </div>
      <div className="flex justify-center py-4">
        <div className="px-4">
          <h1 className="text-2xl">08+</h1>
          <p className="justify-center text-md py-2 leading-6 text-gray-800 dark:text-gray-200">
            Years experience
          </p>
        </div>
        <div className="px-4">
          <h1 className="text-2xl">08+</h1>
          <p className="justify-center text-md py-2 leading-6 text-gray-800 dark:text-gray-200">
            Projects
          </p>
        </div>
        <div className="px-4">
          <h1 className="text-2xl">08+</h1>
          <p className="justify-center text-md py-2 leading-6 text-gray-800 dark:text-gray-200">
            Companies Worked
          </p>
        </div>
      </div>
      </div>
      <div className="py-4">
        <DropdownLinkButton/>
      </div>
    </section>
  );
}
