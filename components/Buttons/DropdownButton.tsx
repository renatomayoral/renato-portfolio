'use client';
import { useState } from "react";
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";

const UpTriangle = ({size}:{size:number}) => {
  const borderStyle = '1px solid rgb(229, 231, 235)'
  return <div style={{
    position: "absolute",
    top: '-4px',
    left: '13px',
    width: `${size}px`,
    height: `${size}px`,
    transform: 'rotate(45deg)',
    backgroundColor: 'white',
    borderLeft: borderStyle,
    borderTop: borderStyle
    
  }}>
  </div>
}

export default function DropdownButton({ options }: { options: string[] }) {
  const [isExpanded, setIsExpended] = useState(false);
  const isCaretDown = isExpanded;
  const isCaretUp = !isExpanded;

  return (
    <div className="relative">
      <button
        onClick={() => setIsExpended(!isExpanded)}
        className="flex items-center bg-gradient-to-r from-cyan-600 to-teal-600 hover:bg-slate-800 px-2 py-1 text-white rounded-md"
      >
        <p className="mr-1">Download CV</p>
        <div>
          {isCaretDown && <AiFillCaretDown />}
          {isCaretUp && <AiFillCaretUp />}
        </div>
      </button>
      {isExpanded && (
        <div className="absolute bg-white rounded border py-1 mt-2">
          <UpTriangle size={7}/>
          <ul>
            {options.map((option) => (
              <li
                className="hover:bg-blue-500 hover:text-white py-1 px-2 cursor-pointer"
                key={option}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
