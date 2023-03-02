import {portfolioData} from "../data/portfolioData"

export default function Portfolio() {



  return (
    <section className="py-10 flex-col">
      <div>
        <h1 className="text-3xl py-1 dark:text-white text-center font-medium">
          Portfolio
        </h1>
        <p className="text-md md:text-xl text-gray-600 dark:text-gray-400 text-center">
          Most recent work
        </p>
      </div>
      <div className="md:flex py-10">
      {portfolioData[0]}
      {portfolioData[1]}
      {portfolioData[2]}
      {portfolioData[3]}
      </div>
      
    </section>
  );
}
