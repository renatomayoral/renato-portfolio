export default function SkillComponent(props: {
  skillIcon: any;
  language: string;
  percentage: string;
  width:string;
}) {

  return (
    <div className="flex items-center p-2">
      <div className="mx-2 mt-2 text-2xl">{props.skillIcon}</div>
      <div className="flex-col">
        <div className="flex justify-between">
          <li>{props.language}</li>
          <p>{props.percentage}</p>
        </div>
        <div className="w-44 bg-gray-200 rounded-full ">
          <div className={`bg-gradient-to-r from-cyan-600 to-teal-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full ${props.width}`}></div>
        </div>
      </div>
    </div>
  );
}
