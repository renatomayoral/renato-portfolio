import Head from "next/head";
import Hero from "@/src/sections/Hero";
import Portfolio from "@/src/sections/Portfolio";
import About from "@/src/sections/About";
import Skills from "@/src/sections/Skills";
import Qualifications from "@/src/sections/Qualifications";
import Books from "../sections/Books";


export default function Home() {
  
  return (
    <div>
      <Head>
        <title>Renato Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
