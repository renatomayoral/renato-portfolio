import { useState } from "react";

export default function QualificationButton() {
  const [isEducation, setIsEducation] = useState(true);
  const [isWork, setIsWork] = useState(false);
  const isEducationHandler = ()=>{
    setIsEducation(true);
    setIsWork(false)
  }
  const isWorkHandler = ()=>{
    setIsEducation(false);
    setIsWork(true)
  }

  return (
    <div className="flex space-x-4 py-6">
      <button
        onClick={isEducationHandler}
        className="flex items-center bg-gradient-to-r from-cyan-600 to-teal-600 hover:bg-slate-800 px-2 py-1 text-white rounded-md"
      >
        <p className="mr-1">Education</p>
      </button>
      {isEducation && 
        <div className=" bg-white rounded border py-1 mt-2">Line 1 Education</div>
      }
      
      <button
        onClick={isWorkHandler} 
        className="flex items-center bg-gradient-to-r from-cyan-600 to-teal-600 hover:bg-slate-800 px-2 py-1 text-white rounded-md"
      >
        <p className="mr-1">Work</p>
      </button>
      


      {isWork && (
        <div className=" bg-white rounded border py-1 mt-2">Line 2 Work</div>
      )}
    </div>
  );
}
