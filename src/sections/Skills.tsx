import SkillButton from "../components/SkillButton";

export default function Skills() {
  return (
    <section className="py-10">
      
      <div>
        <h3 className="text-3xl py-1 dark:text-white text-center font-extrabold">
          Skills
        </h3>
        <p className="text-md text-gray-800 dark:text-gray-200 text-center">
          My technical level
        </p>
      </div>
      <div className="justify-center md:flex ">
      <SkillButton/>
      <SkillButton/>
        
      </div>
    </section>
    
    
  );
}
