const WorkItem = ({
  year,
  title,
  company,
  details,
}: {
  year: string;
  title: string;
  company?: string;
  details: string;
}) => {
  return (
    <ol className=" flex flex-col md:flex-row relative border-l border-stone-200">
      <li className=" mb-10 ml-4">
        <div className=" absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white"/>
        <p className=" flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
          <span className=" inline-block px-2 py-1 font-semibold text-white bg-teal-600 rounded-md">{year}</span>
          <span className=" text-lg font-semibold text-teal-600">{title}</span>
          <span className=" my-1 text-base semi-bold leading-none text-stone-400 dark:text-gray-400 ">{company}</span>
          
        </p>
        <p className=" my-2 text-base font-normal text-stone-700 dark:text-white">{details}</p>
      </li>
    </ol>
  );
};

export default WorkItem;
