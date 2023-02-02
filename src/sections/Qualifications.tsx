import {MdWorkOutline, MdOutlineCastForEducation} from 'react-icons/md'
//MdWorkOutline
//MdOutlineCastForEducation

export default function Qualifications() {
  return (
    <section className="py-10">
      <div>
        <h1 className="text-3xl py-1 dark:text-white text-center font-bold">
          Qualification
        </h1>
        <p className="text-md md:text-lg font-medium text-gray-500 dark:text-gray-400 text-center">
          My journey
        </p>
      </div>
      <div className="flex justify-center py-10 font-semibold">
        <div className="flex items-center justify-center text-lg py-2 px-4 text-gray-600 dark:text-gray-200">
        <MdOutlineCastForEducation  className='mx-1'/>
          Education
        </div>
        <div className="flex items-center justify-center text-lg py-2 px-4 text-gray-600 dark:text-gray-200">
          <MdWorkOutline className='mx-1'/>
          Work
        </div>
      </div>


      <div className="flex justify-center relative bg-zinc-600">
        <div className="flex-col text-right w-full">
          <h1 className="justify-center text-md px-4 font-medium text-gray-800 dark:text-gray-200">
            Software Engineer
          </h1>
          <h2 className="justify-center text-md font-normal px-4 text-gray-800 dark:text-gray-200">
            Microsoft - Peru
          </h2>
          <p className="justify-center text-md font-light py-2 px-4 text-gray-800 dark:text-gray-200">
            2016-2020
          </p>
        </div>
        <div className="relative col-span-1 w-12 max-h-fit flex justify-center items-center bg-slate-700">
          <div className=" w-0.5 bg-gradient-to-r from-cyan-600 to-teal-600 h-full rounded-full"></div>
          
          <div className=" absolute w-5 top-0 bg-gradient-to-r from-cyan-600 to-teal-600 h-5 rounded-full justify-center "></div>
          <div className=" absolute w-5 top-1/4 bg-gradient-to-r from-cyan-600 to-teal-600 h-5 rounded-full justify-center "></div>
          <div className=" absolute w-5 top-2/4 bg-gradient-to-r from-cyan-600 to-teal-600 h-5 rounded-full justify-center "></div>
          <div className=" absolute w-5 top-3/4 bg-gradient-to-r from-cyan-600 to-teal-600 h-5 rounded-full justify-center "></div>
          <div className=" absolute w-5 bottom-0 bg-gradient-to-r from-cyan-600 to-teal-600 h-5 rounded-full justify-center "></div>
        </div>
        

        <div className=" flex-col text-left w-full">
          <div className=" flex-col py-32">
            <h1 className="justify-center text-md py-2 px-4 text-gray-800 dark:text-gray-200">
              Software Engineer
            </h1>
            <h2 className="justify-center text-md py-2 px-4 text-gray-800 dark:text-gray-200">
              Microsoft - Peru
            </h2>
            <p className="justify-center text-md py-2 px-4 text-gray-800 dark:text-gray-200">
              2016-2020
            </p>
          </div>
          <div className=" flex-col">
            <h1 className="justify-center text-md py-2 px-4 text-gray-800 dark:text-gray-200">
              Software Engineer
            </h1>
            <h2 className="justify-center text-md py-2 px-4 text-gray-800 dark:text-gray-200">
              Microsoft - Peru
            </h2>
            <p className="justify-center text-md py-2 px-4 text-gray-800 dark:text-gray-200">
              2016-2020
            </p>
          </div>
          <div className=" flex-col">
            <h1 className="justify-center text-md py-2 px-4 text-gray-800 dark:text-gray-200">
              Software Engineer
            </h1>
            <h2 className="justify-center text-md py-2 px-4 text-gray-800 dark:text-gray-200">
              Microsoft - Peru
            </h2>
            <p className="justify-center text-md py-2 px-4 text-gray-800 dark:text-gray-200">
              2016-2020
            </p>
          </div>
        </div>
        
      </div>
    </section>
  );
}
