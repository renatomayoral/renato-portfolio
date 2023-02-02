import SkillButton from "../components/SkillButton";

export default function Skills() {
  return (
    <section className="py-10">
      
      <div>
        <h3 className="text-3xl md:text-4xl py-1 dark:text-white text-center font-medium">
          Skills
        </h3>
        <p className="text-md md:text-xl text-gray-600 dark:text-gray-400 text-center">
          My technical level
        </p>
      </div>
      <div className="justify-center md:flex py-10 ">
      <SkillButton/>
      <SkillButton/>
        
      </div>
    </section>
    
    
  );
}
