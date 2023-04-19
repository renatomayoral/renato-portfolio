import Hero from "components/Sections/Hero";
import Portfolio from "components/Sections/Portfolio";
import About from "components/Sections/About";
import Skills from "components/Sections/Skills";
import Qualifications from "components/Sections/Qualifications";
import Books from "components/Sections/Books";


export default function Home() {
  
  return (
    <div>
      <main className=" flex-col px-8 bg-white md:px-20 lg:px-40 dark:bg-gray-900 justify-center">
        <Hero />
        <About />
        <Skills />
        <Qualifications />
        <Portfolio />
        <Books/>

      </main>
    </div>
  );
}