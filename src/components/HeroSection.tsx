"use client";

export default function Hero() {
  return (
    <section className="relative flex flex-col justify-center items-center mt-16 bg-white text-gray-800 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100"></div>

      {/* Hero Content */}
      <div className="relative z-10 text-center py-16 px-6 max-w-5xl mx-auto">
        
        {/* New Year Sprint Drop Banner */}
        <div className="mb-8 animate-pulse-slow">
          <div className="inline-block bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 p-[2px] rounded-2xl">
            <div className="bg-white rounded-2xl px-6 py-4">
              <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4">
                <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Limited Slots
                </span>
                <div className="text-center md:text-left">
                  <p className="text-gray-900 font-bold text-sm md:text-base">
                    New Year Sprint Drop <span className="text-gray-500 font-normal">(ends Jan 25, 2026)</span>
                  </p>
                  <p className="text-gray-600 text-sm">
                    100+ hour projects only. Pay 50 hours worth → get up to 100 hours of delivery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          Available for new projects
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
          Full-Stack <span className="text-blue-600">AI Product</span> Engineer
          <br />
          <span className="text-2xl md:text-3xl text-gray-600 font-semibold">
            RAG • Agents • Node.js • Python
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
          I build <span className="font-semibold text-gray-800">RAG/LLM apps</span> that don&apos;t hallucinate, 
          don&apos;t leak secrets, and don&apos;t break under load.{" "}
          <span className="font-semibold text-gray-800">End-to-end:</span> backend, AI, Stripe, deployment.
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 mb-10">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gray-900">$100K+</div>
            <div className="text-gray-500 text-sm">Total Earnings</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gray-900">175</div>
            <div className="text-gray-500 text-sm">Jobs Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-green-600">100%</div>
            <div className="text-gray-500 text-sm">Job Success</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-600">Top Rated</div>
            <div className="text-gray-500 text-sm">Upwork Status</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            target="_blank"
            href="https://www.upwork.com/freelancers/waqasraza"
            className="px-8 py-4 font-semibold text-white bg-blue-600 rounded-xl shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300 flex items-center gap-2"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"/>
            </svg>
            Hire Me on Upwork
          </a>
          <a
            target="_blank"
            href="https://github.com/waqasraza123"
            className="px-8 py-4 font-semibold text-gray-700 bg-white border-2 border-gray-200 rounded-xl shadow-sm hover:border-gray-300 hover:shadow-md transition-all duration-300 flex items-center gap-2"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
