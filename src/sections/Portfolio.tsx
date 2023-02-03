import CarouselCard from "../components/CarouselCard";
import web1 from "@/public/web1.png";
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
      {portfolioData[0]}
      
    </section>
  );
}
