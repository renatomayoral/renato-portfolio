import PortfolioCard from "../components/PortfolioCard";
import { portfolioData } from "../data/portfolioData";

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
      <div className="py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {portfolioData.map((props) => (
          <PortfolioCard 
            key={props.id}
            {...props}
             />
        ))}
      </div>
    </section>
  );
}
