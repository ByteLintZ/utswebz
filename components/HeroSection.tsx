import Image from "next/image";


const HeroSection = () => {
  return (
    <section className="relative bg-gray-900 text-white h-screen">
      <div className="absolute inset-0">
        <Image
          src="/hero.png"
          alt="Hero"
          fill
          quality={100}
          className="object-cover"
        />
      </div>
      <div className="relative container mx-auto h-full flex flex-col justify-center items-start p-5">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight" style={{ lineHeight: '1.5' }}>
          Instant collaboration <br /> for remote teams
        </h1>
        <p className="pb-8 mt-4 max-w-lg text-lg sm:text-xl lg:text-2xl" style={{ lineHeight: '1.5' }}>
          All-in-one place for your remote team to chat, collaborate and track
          project progress.
        </p>
        <form className="mt-8 flex flex-col sm:flex-row gap-4">
          <div className="relative w-full sm:w-auto">
            <input
              type="email"
              placeholder="Email"
              className="p-3 pr-12 text-gray-900 w-full sm:w-96 border border-gray-300 rounded-none"
            />
            <span className="absolute right-0 top-0 h-full flex items-center px-3 bg-gray-300 text-gray-900 pointer-events-none">
              →
            </span>
          </div>
          <button
            type="submit"
            className="py-3 px-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white w-full sm:w-64 hover:from-blue-600 hover:to-blue-800"
          >
            Get Early Access!
          </button>
        </form>
      </div>
    </section>
  );
};

export default HeroSection;
