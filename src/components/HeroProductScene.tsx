"use client";

export default function HeroProductScene() {
  return (
    <div
      className="flex flex-wrap justify-center items-end gap-4 sm:gap-6 py-8 px-2"
      aria-hidden="true"
    >
      {/* SaaS Dashboard mock */}
      <div className="hero-scene-card hero-scene-card-1 w-[140px] sm:w-[160px] rounded-xl bg-white/90 backdrop-blur border border-gray-200/80 shadow-lg overflow-hidden">
        <div className="h-2 bg-gradient-to-r from-blue-500 to-blue-600" />
        <div className="p-2 sm:p-3 space-y-2">
          <div className="flex gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
            <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
            <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
          </div>
          <div className="space-y-1.5">
            <div className="h-1.5 w-full rounded bg-gray-100" />
            <div className="h-1.5 w-4/5 rounded bg-gray-100" />
            <div className="h-1.5 w-3/5 rounded bg-gray-100" />
          </div>
          <div className="grid grid-cols-2 gap-1">
            <div className="h-4 rounded bg-blue-50 border border-blue-100" />
            <div className="h-4 rounded bg-gray-50 border border-gray-100" />
          </div>
        </div>
        <p className="text-[10px] font-medium text-gray-400 px-2 pb-2 text-center">
          SaaS
        </p>
      </div>

      {/* API / flow blocks */}
      <div className="hero-scene-card hero-scene-card-2 flex flex-col items-center gap-2 py-3 px-4 rounded-xl bg-white/90 backdrop-blur border border-gray-200/80 shadow-lg">
        <div className="flex items-center gap-1">
          <div className="w-6 h-6 rounded-md bg-emerald-500/20 border border-emerald-300/60 flex items-center justify-center">
            <span className="text-[10px] text-emerald-700 font-bold">API</span>
          </div>
          <svg
            className="w-4 h-4 text-gray-300 hero-scene-pulse"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
          <div className="w-6 h-6 rounded-md bg-blue-500/20 border border-blue-300/60 flex items-center justify-center">
            <span className="text-[10px] text-blue-700 font-bold">DB</span>
          </div>
        </div>
        <div className="flex gap-1">
          <div className="w-2 h-2 rounded-full bg-green-400" />
          <div className="w-2 h-2 rounded-full bg-amber-400" />
          <div className="w-2 h-2 rounded-full bg-blue-400" />
        </div>
        <p className="text-[10px] font-medium text-gray-400">Backend</p>
      </div>

      {/* Mobile app mock */}
      <div className="hero-scene-card hero-scene-card-3 w-[72px] sm:w-[80px] rounded-2xl bg-white/90 backdrop-blur border border-gray-200/80 shadow-lg overflow-hidden">
        <div className="h-4 flex items-center justify-center border-b border-gray-100">
          <div className="w-4 h-1 rounded-full bg-gray-200" />
        </div>
        <div className="p-2 space-y-2">
          <div className="h-3 rounded bg-gray-100" />
          <div className="h-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100" />
          <div className="flex justify-center gap-1">
            <div className="w-1 h-1 rounded-full bg-gray-300" />
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            <div className="w-1 h-1 rounded-full bg-gray-300" />
          </div>
        </div>
        <p className="text-[10px] font-medium text-gray-400 pb-2 text-center">
          App
        </p>
      </div>
    </div>
  );
}
