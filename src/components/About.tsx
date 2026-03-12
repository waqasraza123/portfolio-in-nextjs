"use client";

import { useEffect, useRef, useState } from "react";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) {
      setRevealed(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setRevealed(true);
      },
      { threshold: 0.12, rootMargin: "0px 0px -90px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const upworkProof = [
    { label: "Total earnings", value: "$100K+", gradient: "from-emerald-500 to-teal-500" },
    { label: "Job success", value: "95%", gradient: "from-sky-500 to-blue-600" },
    { label: "Total jobs", value: "178", gradient: "from-violet-500 to-fuchsia-500" },
    { label: "Total hours", value: "6,849", gradient: "from-amber-500 to-orange-500" },
    { label: "Avg response", value: "0–4 hrs", gradient: "from-slate-600 to-indigo-600" },
    { label: "Availability", value: "30+ hrs/week", gradient: "from-rose-500 to-pink-500" },
  ];

  const recentWins = [
    {
      title: "Deep Research Agent (LangChain + OpenAI)",
      detail:
        "Tool workflows + strict guardrails to keep usage costs predictable in production.",
      tags: ["Agents", "LangChain", "OpenAI", "Guardrails"],
    },
    {
      title: "Audio ingestion + transcription cost reduction",
      detail:
        "Amazon Transcribe + FFmpeg pipeline that reduced running costs by ~70%.",
      tags: ["FFmpeg", "Transcribe", "Pipelines", "Cost control"],
    },
    {
      title: "4-layer Stripe + POS system (EU payments)",
      detail:
        "Webhooks + retries with Redis for reliability across business payments in €.",
      tags: ["Stripe", "Webhooks", "Redis", "Idempotency"],
    },
    {
      title: "CrimeStats: 10M+ records into Supabase",
      detail:
        "Automated NZ Police downloads + ingestion pipeline with validation and dedupe.",
      tags: ["Supabase", "ETL", "Data ingest", "Automation"],
    },
    {
      title: "Branded PDFs at scale",
      detail:
        "Playwright PDF pipeline across multiple sites with consistent rendering.",
      tags: ["Playwright", "PDF", "Automation"],
    },
  ];

  const competencies = [
    "Full‑stack web & mobile (Next.js, Node.js, Flutter)",
    "RAG chat + support systems with reliable guardrails",
    "ETL + data pipelines (Supabase/Postgres, Redis, queues)",
    "Stripe subscriptions, Connect, payouts, webhooks",
    "Background jobs, retries, idempotency, logging, performance tuning",
    "Cloud + deployment (Docker, AWS/GCP, VPS)",
  ];

  const experience = [
    {
      role: "Full‑Stack AI Product Engineer",
      org: "Upwork",
      dates: "2013 – Present",
      detail:
        "Founder of 2 startups and former CTO. Building AI apps, automations, data pipelines and payment systems for global clients.",
    },
    {
      role: "Software Engineer",
      org: "Delivery Hero Berlin",
      dates: "2020 – 2021",
      detail:
        "Built and maintained high‑performance delivery web experiences and backend services in a global org.",
    },
    {
      role: "Remote CTO / Lead Engineer",
      org: "Hello HD (EU Startup)",
      dates: "2019 – 2020",
      detail:
        "Owned outcomes: shipped MVP features, led remote delivery, and built systems that scaled with the team.",
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-gray-50 to-gray-100"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-3">
          About Me
        </h2>
        <p className="text-lg md:text-xl text-gray-600 text-center mb-14 max-w-3xl mx-auto">
          Founder of 2 startups and former CTO. I build production-grade AI apps,
          data pipelines, workflow automation, and Stripe payments.
        </p>

        <div className="max-w-6xl mx-auto">
          {/* Proof row */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
            {upworkProof.map((p, index) => (
              <div
                key={p.label}
                className={`about-card rounded-2xl border border-gray-200/80 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-4 ${
                  revealed ? "revealed" : "opacity-0"
                }`}
                style={revealed ? { animationDelay: `${index * 70}ms` } : undefined}
              >
                <div
                  className={`w-9 h-9 rounded-xl bg-gradient-to-br ${p.gradient} text-white flex items-center justify-center shadow-sm mb-3`}
                >
                  <span className="text-sm font-extrabold">↗</span>
                </div>
                <div className="text-xl font-extrabold text-gray-900">
                  {p.value}
                </div>
                <div className="text-xs font-semibold text-gray-600">
                  {p.label}
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Narrative + competencies */}
            <div
              className={`about-card lg:col-span-5 rounded-3xl border border-gray-200/80 bg-white shadow-sm p-8 ${
                revealed ? "revealed" : "opacity-0"
              }`}
              style={revealed ? { animationDelay: `${upworkProof.length * 70 + 50}ms` } : undefined}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                What I do (and how I do it)
              </h3>
              <p className="text-gray-700 leading-relaxed mb-5">
                I’m Waqas Raza, an <span className="font-semibold">AI-first product engineer</span>.
                I don’t just bolt an LLM onto an app—I design reliable systems with
                guardrails, predictable costs, and controlled failure modes.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                My background spans heavy Laravel platforms, modern TypeScript backends,
                Next.js frontends, and production Flutter apps. If you need someone
                who can move fast <span className="font-semibold">without breaking stability</span>,
                that’s my lane.
              </p>

              <div className="mt-6">
                <h4 className="text-sm font-extrabold text-gray-900 mb-3">
                  Core competencies
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  {competencies.map((c) => (
                    <li key={c} className="flex items-start gap-2">
                      <span className="text-emerald-500 mt-0.5">✓</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Recent wins */}
            <div
              className={`about-card lg:col-span-7 rounded-3xl border border-gray-200/80 bg-white shadow-sm p-8 ${
                revealed ? "revealed" : "opacity-0"
              }`}
              style={revealed ? { animationDelay: `${upworkProof.length * 70 + 140}ms` } : undefined}
            >
              <div className="flex items-end justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Recent wins
                  </h3>
                  <p className="text-gray-600">
                    A snapshot of the kind of problems I solve.
                  </p>
                </div>
                <div className="hidden sm:block text-xs text-gray-500">
                  Upwork • Top Rated
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {recentWins.map((win) => (
                  <div
                    key={win.title}
                    className="rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-5 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="text-sm font-extrabold text-gray-900 mb-1">
                      {win.title}
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed mb-3">
                      {win.detail}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {win.tags.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-full text-xs font-semibold bg-gray-50 text-gray-700 border border-gray-200"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-xs text-gray-500 mt-6">
                I delivered my last 50+ projects using AI-native workflows, cutting development time and cost while improving stability and test coverage.
              </p>
            </div>
          </div>

          {/* Experience + Education */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
            <div
              className={`about-card rounded-3xl border border-gray-200/80 bg-white shadow-sm p-8 ${
                revealed ? "revealed" : "opacity-0"
              }`}
              style={revealed ? { animationDelay: `${upworkProof.length * 70 + 230}ms` } : undefined}
            >
              <h3 className="text-xl font-extrabold text-gray-900 mb-5">
                Experience
              </h3>
              <div className="space-y-5">
                {experience.map((e) => (
                  <div key={e.role} className="border-l-2 border-gray-200 pl-4">
                    <div className="flex items-center justify-between gap-4">
                      <div className="font-bold text-gray-900">{e.role}</div>
                      <div className="text-xs font-semibold text-gray-500 whitespace-nowrap">
                        {e.dates}
                      </div>
                    </div>
                    <div className="text-sm text-gray-600 font-semibold">
                      {e.org}
                    </div>
                    <p className="text-sm text-gray-700 mt-2 leading-relaxed">
                      {e.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div
              className={`about-card rounded-3xl border border-gray-200/80 bg-white shadow-sm p-8 ${
                revealed ? "revealed" : "opacity-0"
              }`}
              style={revealed ? { animationDelay: `${upworkProof.length * 70 + 300}ms` } : undefined}
            >
              <h3 className="text-xl font-extrabold text-gray-900 mb-5">
                Education
              </h3>
              <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-6">
                <div className="font-bold text-gray-900">
                  National University of Sciences and Technology
                </div>
                <div className="text-gray-700">
                  Bachelor of Engineering (BEng), Software Engineering
                </div>
                <div className="text-sm text-gray-500 mt-1">2013 – 2017</div>
                <div className="mt-4 text-xs text-gray-500">
                  Location: Lahore, Pakistan • English: Fluent • ID + Phone verified
                </div>
              </div>
              <div className="mt-6 text-sm text-gray-700">
                <span className="font-semibold">Response time:</span> typically 0–4 hours.{" "}
                <span className="font-semibold">Availability:</span> 30+ hrs/week.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}