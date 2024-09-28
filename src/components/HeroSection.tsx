"use client";

export default function Hero() {
  return (
    <section className="relative flex flex-col justify-center items-center h-screen bg-white text-gray-800 overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-gray-100 to-gray-200 animate-gradient-xy"></div>

      {/* Hero Content */}
      <div className="relative z-10 text-center">
        {/* Big Words */}
        <h1 className="text-6xl md:text-8xl font-extrabold mb-4 tracking-tight animate-fade-in">
          Welcome to <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 animate-text-gradient">
            Innovation
          </span>
        </h1>

        {/* Sub-heading */}
        <p className="text-lg md:text-2xl text-gray-600 mt-4 opacity-90 animate-fade-in delay-200">
          A place where creativity meets technology.
        </p> 

        {/* Call-to-Action */}
        <div className="mt-10 animate-fade-in delay-700">
          <button className="px-8 py-3 font-semibold text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 transition ease-in-out duration-300">
            Discover More
          </button>
        </div>
      </div>
    </section>
  );
}
