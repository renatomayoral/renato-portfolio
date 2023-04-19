'use client';
import SkillButton from "components/Buttons/SkillButton";
import { AiOutlineShop, AiOutlineDatabase } from "react-icons/ai";
import SkillComponent from "components/shared/SkillComponent";
import { SiHtml5, SiTailwindcss, SiCss3, SiReact, SiJavascript, SiTypescript, SiMongodb, SiDocker, SiPython, SiGraphql } from "react-icons/si";
import {TbBrandNextjs} from "react-icons/tb"

export default function Skills() {
  return (
    <section className="py-10">
      <div>
        <h3 className="text-3xl md:text-4xl py-1 dark:text-white text-center font-semibold">
          Skills
        </h3>
        <p className="text-md md:text-lg font-medium text-gray-500 dark:text-gray-400 text-center">
          My technical level
        </p>
      </div>
      <div className="justify-center md:flex py-10 ">
        <SkillButton
          titleIcon={<AiOutlineShop />}
          title="Frontend"
          experienceTime="More than 3 years"
          skills1={
            <SkillComponent
              skillIcon={<SiHtml5 />}
              language={"HTML5"}
              percentage={"25%"}
              width={"w-3/12"}
            />   
          }
          skills2={
            <SkillComponent
              skillIcon={<SiCss3 />}
              language={"CSS3"}
              percentage={"50%"}
              width={"w-6/12"}

            />   
          }
          skills3={
            <SkillComponent
              skillIcon={<SiTailwindcss />}
              language={"TailwindCSS"}
              percentage={"75%"}
              width={"w-9/12"}

            />   
          }
          skills4={
            <SkillComponent
              skillIcon={<SiReact />}
              language={"React"}
              percentage={"50%"}
              width={"w-6/12"}

            />   
          }
          skills5={
            <SkillComponent
              skillIcon={<TbBrandNextjs />}
              language={"Nextjs"}
              percentage={"50%"}
              width={"w-6/12"}

            />   
          }
          skills6={
            <SkillComponent
              skillIcon={<SiJavascript />}
              language={"Javascript"}
              percentage={"50%"}
              width={"w-6/12"}

            />   
          }
          
        />
        <SkillButton
          titleIcon={<AiOutlineDatabase />}
          title="Backend"
          experienceTime="More than 3 years"
          skills1={
            <SkillComponent
              skillIcon={<SiTypescript />}
              language={"Typescript"}
              percentage={"50%"}
              width={"w-3/12"}
            />   
          }
          skills2={
            <SkillComponent
              skillIcon={<SiMongodb />}
              language={"MongoDB"}
              percentage={"50%"}
              width={"w-6/12"}

            />   
          }
          skills3={
            <SkillComponent
              skillIcon={<SiDocker/>}
              language={"Docker"}
              percentage={"75%"}
              width={"w-9/12"}

            />   
          }
          skills4={
            <SkillComponent
              skillIcon={<SiPython />}
              language={"Python"}
              percentage={"50%"}
              width={"w-6/12"}

            />   
          }
          skills5={
            <SkillComponent
              skillIcon={<SiGraphql/>}
              language={"Graphql"}
              percentage={"50%"}
              width={"w-6/12"}

            />   
          }

        />
      </div>
    </section>
  );
}
