
'use client';
import { AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai";
import Image from "next/image";
import renatotransp from "public/renatotransp.png";
import Navbar from "components/shared/Navbar";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section className="min-h-screen">
      <Navbar />
      <div className="text-center  justify-center items-center">
        <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
          Renato Mayoral
        </h2>
        <h3 className="flex justify-center text-xl py-2 font-light md:text-3xl">
          I am a
          <TypeAnimation
            sequence={[
              " Web Developer", // Types 'One'
              2000, // Waits 1s
              "Entrepreneur", // Deletes 'One' and types 'Two'
              2000, // Waits 2s
              "Tech Enthusiast", // Types 'Three' without deleting 'Two'
              
            ]}
            wrapper="div"
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: "1em", paddingLeft: "6px" }}
          />
        </h3>
        <p className="text-md py-5 leading-6 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-gray-400">
          Self-taught web developer trying to solve real world problems through
          technology.
        </p>
      </div>
      <div className="text-4xl flex justify-center gap-8 text-gray-600">
        <a
          className="dark:hover:text-white hover:text-teal-600"
          href="https://www.linkedin.com/in/renato-mayoral/"
        >
          <AiFillLinkedin />
        </a>
        <a
          className="dark:hover:text-white hover:text-teal-600"
          href="https://github.com/renatomayoral"
        >
          <AiFillGithub />
        </a>
      </div>
      <div className="relative bg-gradient-to-b from-teal-500 rounded-full w-60 h-60 mt-10 mx-auto overflow-hidden">
        <Image
          src={renatotransp}
          alt={"Portfolio owener Photo"}
          object-fit="cover"
          height={300}
          width={300}
        />
      </div>
      <div className=" justify-center flex pt-10">
        <a href="mailto:renatomayoral@gmail.com" target={"_blank"} rel="noreferrer"
          className=" mt-2 bg-gradient-to-r from-cyan-600 to-teal-600 text-white px-4 py-2 rounded-md flex items-center gap-2"
        >
          Contact Me
          <AiFillMail />
        </a>
      </div>
    </section>
  );
}
