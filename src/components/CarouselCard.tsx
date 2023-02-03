
import Image from "next/image";
import { BsArrowRightShort } from "react-icons/bs";


export default function CarouselCard(props:any) {
  return (
    <div className=" sm:flex justify-center text-center m-16">
    <div className="flex justify-center">
      <Image
        className="rounded-lg object-fit"
        width={250}
        height={250}
        src={props.imageSource}
        alt={props.imageDescription}
      />
    </div>

    <div className=" sm:flex sm:px-8 flex-col py-4 justify-center">
      <h1 className=" text-left font-semibold text-xl">{props.title}</h1>
      <div className="flex flex-col justify-center">
        <div className="flex-col md:text-md max-w-md mx-auto text-start">
          <p className=" py-2 text-gray-800 dark:text-gray-200 justify-center ">
           {props.text}
          </p>

          <div className=" justify-start flex pt-2">
            <a href={props.cardLink} target="_blank" className=" flex justify-center bg-gradient-to-r from-cyan-600 to-teal-600 text-white px-4 py-2 rounded-md items-center">
              Demo
              <BsArrowRightShort className=" text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}


