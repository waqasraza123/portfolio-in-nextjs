"use client";

export default function Hero() {
  return (
    <section className="relative flex flex-col justify-center items-center h-screen bg-white text-gray-800 overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-gray-100 to-gray-200 animate-gradient-xy"></div>

      {/* Hero Content */}
      <div className="relative z-10 text-center">
        {/* Introductory Text */}
        <h1 className="text-6xl md:text-8xl font-extrabold mb-4 tracking-tight animate-fade-in">
          I&apos;M <span className="text-blue-500">WAQAS</span>
          <img
            src="/images/waqas-raza-upwork.jpg"
            alt="Profile"
            className="w-20 h-20 object-cover rounded-full border-4 border-white shadow-lg inline-block ml-4 animate-fade-in"
          />
          <span className="text-blue-500"> R.</span>
        </h1>

        <h2 className="text-5xl md:text-7xl font-extrabold mb-4 animate-fade-in">
          <span className="text-black">FULL STACK</span>
          <img
            src="/images/attention-to-details.jpg"
            alt="Eye"
            className="w-40 h-20 object-cover rounded-full shadow-lg inline-block ml-4 animate-fade-in delay-300"
          />
          <span className="text-blue-500"> WEB</span>
        </h2>

        <h3 className="text-5xl md:text-7xl font-extrabold animate-fade-in">
          DEVELOPER
        </h3>

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
