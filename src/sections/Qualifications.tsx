import { MdWorkOutline, MdOutlineCastForEducation } from "react-icons/md";
import {GiAchievement } from "react-icons/gi"
import {AiOutlineSafetyCertificate} from "react-icons/ai"
import WorkItem from "../components/QualificationComponents/WorkItems";
import EducationItem from "../components/QualificationComponents/EducationItems";
import CertificatesItem from "../components/QualificationComponents/CertificatesItems";
import AchievementsItem from "../components/QualificationComponents/AchievementsItems";
import {
  workData,
  educationData,
  achievementsData,
  certificatesData,
} from "../data/qualificationData";

import { useState } from "react";

export default function Qualifications() {
  const [isEducation, setIsEducation] = useState(true);
  const [isWork, setIsWork] = useState(false);
  const [isAchievements, setIsAchievements] = useState(false);
  const [isCertificates, setIsCertificate] = useState(false);
  const isEducationHandler = () => {
    setIsEducation(true);
    setIsWork(false);
    setIsAchievements(false);
    setIsCertificate(false);
  };
  const isWorkHandler = () => {
    setIsEducation(false);
    setIsWork(true);
    setIsAchievements(false);
    setIsCertificate(false);
  };

  const isAchievementsHandler = () => {
    setIsEducation(false);
    setIsWork(false);
    setIsAchievements(true);
    setIsCertificate(false);
  };

  const isCertificatesHandler = () => {
    setIsEducation(false);
    setIsWork(false);
    setIsAchievements(false);
    setIsCertificate(true);
  };

  return (
    <section className="py-10">
      <div>
        <h1 className="text-3xl py-1 dark:text-white text-center font-semibold">
          Qualification
        </h1>
        <p className="text-md md:text-lg font-medium text-gray-500 dark:text-gray-400 text-center">
          My journey
        </p>
      </div>
      <div className="flex-col justify-center py-10 font-semibold">
        <div className="flex flex-wrap justify-center p-6">
          <button
            onClick={isEducationHandler}
            className="flex items-center justify-center text-lg py-2 px-4 text-gray-600 dark:text-gray-200 cursor-pointer"
          >
            <MdOutlineCastForEducation className="mx-1" />
            Education
          </button>

          <button
            onClick={isWorkHandler}
            className="flex items-center justify-center text-lg py-2 px-4 text-gray-600 dark:text-gray-200 cursor-pointer"
          >
            <MdWorkOutline className="mx-1" />
            Work
          </button>

          <button
            onClick={isAchievementsHandler}
            className="flex items-center justify-center text-lg py-2 px-4 text-gray-600 dark:text-gray-200 cursor-pointer"
          >
            <GiAchievement className="mx-1" />
            Achievements
          </button>
          <button
            onClick={isCertificatesHandler}
            className="flex items-center justify-center text-lg py-2 px-4 text-gray-600 dark:text-gray-200 cursor-pointer"
          >
            <AiOutlineSafetyCertificate className="mx-1" />
            Certificates
          </button>
          </div>
        

        <div className="py-10 flex justify-center">
          <div className="flex-col justify-center max-w-sm">
          {isEducation &&
            educationData.map((item, idx) => (
              <EducationItem
                key={idx}
                year={item.year}
                title={item.title}
                details={item.details}
              />
            ))}

          {isWork &&
            workData.map((item, idx) => (
              <WorkItem
                key={idx}
                year={item.year}
                title={item.title}
                company={item.company}
                details={item.details}
              />
            ))}

          {isAchievements &&
            achievementsData.map((item, idx) => (
              <AchievementsItem
                key={idx}
                year={item.year}
                title={item.title}
                details={item.details}
              />
            ))}
          {isCertificates &&
            certificatesData.map((item, idx) => (
              <CertificatesItem
                key={idx}
                year={item.year}
                title={item.title}
                details={item.details}
              />
            ))}
            </div>
        </div>
      </div>
    </section>
  );
}
