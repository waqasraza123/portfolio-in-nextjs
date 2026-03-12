"use client";

import { useRef, useEffect, useState } from "react";

const CATEGORY_THEMES = [
  {
    title: "AI & Automation",
    gradient: "from-violet-500 to-fuchsia-500",
    bg: "from-violet-50 to-fuchsia-50",
    ring: "ring-violet-200",
    iconBg: "bg-gradient-to-br from-violet-500 to-fuchsia-500",
    pillHover: "hover:border-violet-300 hover:bg-violet-50 hover:text-violet-800",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z" />
        <path d="M5 21l2.5-7.5L15 11l-7.5 2.5L5 21z" />
        <path d="M19 21l-2.5-7.5L9 11l7.5-2.5L19 21z" />
      </svg>
    ),
    skills: ["OpenAI/GPT", "RAG", "Agents", "LangChain", "LangGraph", "CrewAI", "Embeddings", "Vector DB", "n8n", "Zapier"],
  },
  {
    title: "Backend",
    gradient: "from-sky-500 to-blue-600",
    bg: "from-sky-50 to-blue-50",
    ring: "ring-sky-200",
    iconBg: "bg-gradient-to-br from-sky-500 to-blue-600",
    pillHover: "hover:border-sky-300 hover:bg-sky-50 hover:text-sky-800",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="8" x="2" y="2" rx="2" />
        <rect width="20" height="8" x="2" y="14" rx="2" />
        <path d="M6 6h.01" />
        <path d="M6 18h.01" />
      </svg>
    ),
    skills: ["Node.js", "Express.js", "NestJS", "Python", "FastAPI", "Serverless"],
  },
  {
    title: "Frontend",
    gradient: "from-cyan-500 to-teal-500",
    bg: "from-cyan-50 to-teal-50",
    ring: "ring-cyan-200",
    iconBg: "bg-gradient-to-br from-cyan-500 to-teal-500",
    pillHover: "hover:border-cyan-300 hover:bg-cyan-50 hover:text-cyan-800",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
      </svg>
    ),
    skills: ["React", "Next.js", "TypeScript", "Tailwind", "Redux"],
  },
  {
    title: "Data",
    gradient: "from-emerald-500 to-green-600",
    bg: "from-emerald-50 to-green-50",
    ring: "ring-emerald-200",
    iconBg: "bg-gradient-to-br from-emerald-500 to-green-600",
    pillHover: "hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-800",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
      </svg>
    ),
    skills: ["Supabase", "PostgreSQL", "Pinecone", "MongoDB", "Prisma", "Redis"],
  },
  {
    title: "Payments",
    gradient: "from-amber-500 to-orange-500",
    bg: "from-amber-50 to-orange-50",
    ring: "ring-amber-200",
    iconBg: "bg-gradient-to-br from-amber-500 to-orange-500",
    pillHover: "hover:border-amber-300 hover:bg-amber-50 hover:text-amber-800",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="14" x="2" y="5" rx="2" />
        <path d="M2 10h20" />
      </svg>
    ),
    skills: ["Stripe", "Connect", "Webhooks", "Payouts", "PayPal", "Paddle"],
  },
  {
    title: "DevOps",
    gradient: "from-slate-600 to-indigo-600",
    bg: "from-slate-50 to-indigo-50",
    ring: "ring-slate-200",
    iconBg: "bg-gradient-to-br from-slate-600 to-indigo-600",
    pillHover: "hover:border-slate-300 hover:bg-slate-100 hover:text-slate-800",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
      </svg>
    ),
    skills: ["CI/CD", "Docker", "AWS", "GCP", "Vercel", "Render"],
  },
  {
    title: "Mobile",
    gradient: "from-rose-500 to-pink-500",
    bg: "from-rose-50 to-pink-50",
    ring: "ring-rose-200",
    iconBg: "bg-gradient-to-br from-rose-500 to-pink-500",
    pillHover: "hover:border-rose-300 hover:bg-rose-50 hover:text-rose-800",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="14" height="20" x="5" y="2" rx="2" />
        <path d="M12 18h.01" />
      </svg>
    ),
    skills: ["Flutter", "Dart", "Push Notifications", "In-App Purchases"],
  },
] as const;

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setRevealed(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setRevealed(true);
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-white to-gray-50/80"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-3">
          Tech Stack
        </h2>
        <p className="text-lg md:text-xl text-gray-600 text-center mb-14 max-w-2xl mx-auto">
          10+ years of hands-on experience, AI-first approach
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {CATEGORY_THEMES.map((cat, index) => (
            <div
              key={cat.title}
              className={`
                skill-card rounded-2xl p-6 border border-gray-200/80 bg-white
                shadow-sm hover:shadow-xl hover:-translate-y-1
                transition-all duration-300 ease-out
                ${revealed ? "revealed" : "opacity-0"}
              `}
              style={revealed ? { animationDelay: `${index * 70}ms` } : undefined}
            >
              <div className={`rounded-xl p-3 w-fit bg-gradient-to-br ${cat.bg} ring-1 ${cat.ring} mb-4`}>
                <div className={`${cat.iconBg} p-2 rounded-lg text-white shadow-sm`}>
                  {cat.icon}
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`
                      px-3 py-1.5 text-sm font-medium rounded-lg
                      bg-gray-50 text-gray-700 border border-gray-200
                      transition-all duration-200 ${cat.pillHover}
                    `}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
