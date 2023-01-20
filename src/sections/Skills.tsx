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
      <div className=" flex justify-center gap-36">
        <div>
          <h1 className=" text-2xl py-2 text-gray-900 dark:text-gray-200 text-opacity-60">
            Frontend Developer
          </h1>
          <p>Gello</p>
        </div>
        <div>
          <h1 className=" text-2xl py-2 text-gray-800 dark:text-gray-200">
            Backend Developer
          </h1>
          <p>Gello</p>
        </div>
      </div>
    </section>
  );
}
