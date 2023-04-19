'use client';
import Image from "next/image";

export default function Books() {
  return (
    <section className="books">
      <div className=" flex items-center text-gray-600">
      <div className="container py-12 mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl py-1 dark:text-white text-center font-medium">
            Books
          </h1>
          <h5 className="text-base md:text-lg text-gray-400 mb-1">
            My reading list
          </h5>
        </div>
        <div className="flex flex-wrap justify-center space-x-10 w-full">
          <div className="p-6 lg:w-72 sm:w-1/2 w-full h-full mb-4 rounded-lg shadow-xl bg-gray-200 transform transition-all hover:translate-y-2 duration-300 hover:shadow-2xl">
            <div className="h-full rounded-lg overflow-hidden">
              <Image
                className="w-full h-72 rounded-lg object-fit"
                src="https://m.media-amazon.com/images/I/41SH-SvWPxL.jpg"
                alt="blog"
                width={400}
                height={400}
              />
              <div className="transition duration-300 ease-in">
                <h1 className="text-2xl font-semibold mb-3">Clean Code</h1>
                <h2 className="text-base font-medium text-teal-600 mb-1">
                  A Handbook of Agile Software Craftsmanship.
                </h2>
                <p className="leading-relaxed mb-3">
                  Even bad code can function. But if code isn’t clean, it can
                  bring a development organization to its knees. Every year,
                  countless hours and significant resources are lost because of
                  poorly written code. But it doesn’t have to be that way.
                </p>
              </div>
            </div>
          </div>
          <div className="p-6 lg:w-72 sm:w-1/2 w-full h-full mb-4 rounded-lg shadow-xl bg-gray-200 transform transition-all hover:translate-y-2 duration-300 hover:shadow-2xl">
            <div className="h-full rounded-lg overflow-hidden">
              <Image
                className="w-full h-72 rounded-lg object-fit"
                src="https://m.media-amazon.com/images/I/51y5IIx7g2L._SX260_.jpg"
                alt="blog"
                width={400}
                height={400}
              />
              <div className="transition duration-300 ease-in">
                <h1 className="text-2xl font-semibold mb-3">SEO 2023</h1>
                <h2 className="text-base font-medium text-teal-600 mb-1">
                  Learn search engine optimization with smart internet marketing
                  strategies.
                </h2>
                <p className="leading-relaxed mb-3">
                  No matter your background, SEO 2023 will walk you through
                  search engine optimization techniques used to grow countless
                  websites online, exact steps to rank high in Google, and how
                  get a ton of customers.
                </p>
              </div>
            </div>
          </div>
          <div className="p-6 lg:w-72 sm:w-1/2 w-full h-full mb-4 rounded-lg shadow-xl bg-gray-200 transform transition-all hover:translate-y-2 duration-300 hover:shadow-2xl">
            <div className="h-full rounded-lg overflow-hidden">
              <Image
                className="w-full h-72 rounded-lg object-fit"
                src="https://m.media-amazon.com/images/I/41kW8itWddL._SX322_BO1,204,203,200_.jpg"
                alt="blog"
                width={400}
                height={400}
              />
              <div className="transition duration-300 ease-in">
                <h1 className="text-2xl font-semibold mb-3">
                  Klara and the Sun
                </h1>
                <h2 className="text-base font-medium text-teal-600 mb-1">
                  A novel (Vintage International).
                </h2>
                <p className="leading-relaxed mb-3">
                  Here is the story of Klara, an Artificial Friend with
                  outstanding observational qualities, who, from her place in
                  the store, watches carefully the behavior of those who come in
                  to browse, and of those who pass on the street outside. She
                  remains hopeful that a customer will soon choose her. Klara
                  and the Sun is a thrilling book that offers a look at our
                  changing world through the eyes of an unforgettable narrator,
                  and one that explores the fundamental question: what does it
                  mean to love?
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      </div>
    </section>
  );
}
