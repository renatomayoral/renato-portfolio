import { useState } from "react";
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";

export default function SkillButton(props: {
  titleIcon: any;
  title: string;
  experienceTime: string;
  skills1?:any
  skills2?:any
  skills3?:any
  skills4?:any
  skills5?:any
  skills6?:any
}) {
  const [isExpanded, setIsExpended] = useState(false);
  const isCaretDown = isExpanded;
  const isCaretUp = !isExpanded;

  return (
    <div className=" flex flex-col p-4">
      <button
        onClick={() => setIsExpended(!isExpanded)}
        className=" flex justify-center items-center dark:text-white text-black rounded-md"
      >
        <a className=" text-3xl text-teal-600">
          {props.titleIcon}
        </a>
        <div className="flex-col mx-2 ">
          <h1 className=" font-semibold text-lg">{props.title}</h1>
          <p className="flex text-sm text-gray-400 leading-none ">
            {props.experienceTime}
          </p>
        </div>
        <div>
          {isCaretDown && <AiFillCaretDown />}
          {isCaretUp && <AiFillCaretUp />}
        </div>
      </button>
      {isExpanded && (
        <div className=" flex justify-center py-2 mt-2 ">
          <ul className="py-4">
          {props.skills1}
          {props.skills2}
          {props.skills3}
          {props.skills4}
          {props.skills5}
          {props.skills6}
          </ul>
        </div>
      )}
    </div>
  );
}
