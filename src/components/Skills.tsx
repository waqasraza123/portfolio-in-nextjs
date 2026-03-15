"use client";

import { useRef, useEffect, useState } from "react";

const CATEGORIES = [
  {
    title: "AI & Automation",
    accent: "bg-gradient-to-r from-violet-500 to-fuchsia-500",
    pill: "bg-violet-500/12 text-violet-800 border-violet-200",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z" />
      </svg>
    ),
    skills: ["OpenAI/GPT", "RAG", "Agents", "LangChain", "LangGraph", "CrewAI", "Embeddings", "Vector DB", "n8n", "Zapier"],
  },
  {
    title: "Backend",
    accent: "bg-gradient-to-r from-sky-500 to-blue-600",
    pill: "bg-sky-500/12 text-sky-800 border-sky-200",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="8" x="2" y="2" rx="2" />
        <rect width="20" height="8" x="2" y="14" rx="2" />
      </svg>
    ),
    skills: ["Node.js", "Express.js", "NestJS", "Python", "FastAPI", "Serverless"],
  },
  {
    title: "Frontend",
    accent: "bg-gradient-to-r from-cyan-500 to-teal-500",
    pill: "bg-cyan-500/12 text-cyan-800 border-cyan-200",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
      </svg>
    ),
    skills: ["React", "Next.js", "TypeScript", "Tailwind", "Redux"],
  },
  {
    title: "Data",
    accent: "bg-gradient-to-r from-emerald-500 to-green-600",
    pill: "bg-emerald-500/12 text-emerald-800 border-emerald-200",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
    skills: ["Supabase", "PostgreSQL", "Pinecone", "MongoDB", "Prisma", "Redis"],
  },
  {
    title: "Payments",
    accent: "bg-gradient-to-r from-amber-500 to-orange-500",
    pill: "bg-amber-500/12 text-amber-800 border-amber-200",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="14" x="2" y="5" rx="2" />
        <path d="M2 10h20" />
      </svg>
    ),
    skills: ["Stripe", "Connect", "Webhooks", "Payouts", "PayPal", "Paddle"],
  },
  {
    title: "DevOps",
    accent: "bg-gradient-to-r from-slate-600 to-indigo-600",
    pill: "bg-slate-500/12 text-slate-800 border-slate-200",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
      </svg>
    ),
    skills: ["CI/CD", "Docker", "AWS", "GCP", "Vercel", "Render"],
  },
  {
    title: "Mobile",
    accent: "bg-gradient-to-r from-rose-500 to-pink-500",
    pill: "bg-rose-500/12 text-rose-800 border-rose-200",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
      { threshold: 0.08, rootMargin: "0px 0px -20px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-12 md:py-14 bg-gradient-to-b from-gray-50/80 to-white"
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
            Tech Stack
          </h2>
          <p className="text-sm text-gray-500">
            10+ years · AI-first
          </p>
        </div>

        <div
          className={`
            overflow-hidden rounded-2xl border border-gray-200/90 bg-white/95 shadow-sm
            shadow-gray-200/50
            transition-all duration-500 ease-out
            ${revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}
          `}
        >
          <div className="divide-y divide-gray-100">
            {CATEGORIES.map((cat, index) => (
              <div
                key={cat.title}
                className={`skill-strip flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 py-3 px-4 sm:py-2.5 sm:px-5 hover:bg-gray-50/70 transition-colors duration-200 ${revealed ? "skill-strip--revealed" : ""}`}
                style={revealed ? { animationDelay: `${Math.min(index * 50, 280)}ms` } : undefined}
              >
                <div className="flex items-center gap-2.5 min-w-0 sm:w-40 shrink-0">
                  <span
                    className={`flex items-center justify-center w-8 h-8 rounded-lg shrink-0 ${cat.accent} text-white`}
                    aria-hidden
                  >
                    {cat.icon}
                  </span>
                  <span className="text-sm font-semibold text-gray-800 truncate">
                    {cat.title}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5 sm:pl-0 pl-10">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`inline-flex items-center px-2 py-0.5 text-xs font-medium rounded-md border ${cat.pill}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
