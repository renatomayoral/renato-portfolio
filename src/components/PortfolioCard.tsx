
import Image from "next/image";
import {FiGithub, FiExternalLink} from "react-icons/fi"


export default function PortfolioCard(props:any) {
  return (
    <div className="justify-center text-center m-4 p bg-gray-200 rounded-md transition ease-in-out delay-150 hover:-translate-y-2 ">
    <div className="flex justify-center m-4">
      <Image
        className="rounded-lg object-fit"
        width={250}
        height={250}
        src={props.imageSource}
        alt={props.imageDescription}
      />
    </div>

    <div className=" sm:flex sm:px-8 flex-col py-4 m-4 justify-center">
      <h1 className=" text-left font-semibold text-xl">{props.title}</h1>
      <div className="flex flex-col justify-center">
        <div className="flex-col md:text-md max-w-md mx-auto text-start">
          <p className=" py-2 dark:text-gray-200 text-gray-800 justify-center ">
           {props.text}
          </p>

          <div className=" justify-start flex gap-4">
            <a href={props.cardLink} target="_blank" className=" flex justify-center bg-gradient-to-r from-cyan-600 to-teal-600 text-white px-4 py-2 rounded-md items-center">
              
              <FiGithub className=" text-2xl" />
            </a>
            <a href={props.cardLink} target="_blank" className=" flex justify-center bg-gradient-to-r from-cyan-600 to-teal-600 text-white px-4 py-2 rounded-md items-center">
              
              <FiExternalLink className=" text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}


