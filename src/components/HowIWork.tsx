"use client";

import { useEffect, useRef, useState } from "react";

export default function HowIWork() {
  const steps = [
    {
      number: "01",
      title: "Understand the Problem",
      description: "Start by understanding the problem properly: goals, constraints, edge cases. No assumptions—just clarity.",
      icon: (
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="M21 21l-4.3-4.3" />
        </svg>
      ),
    },
    {
      number: "02",
      title: "Clear Specification",
      description: "Convert requirements into a compact specification: flows, data models, and failure scenarios documented upfront.",
      icon: (
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <path d="M14 2v6h6" />
          <path d="M8 13h8" />
          <path d="M8 17h6" />
        </svg>
      ),
    },
    {
      number: "03",
      title: "Design for Change",
      description: "Build with change in mind so new features don't require rewrites. Scalable architecture from day one.",
      icon: (
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 16V8a2 2 0 0 0-1-1.73L13 2.27a2 2 0 0 0-2 0L4 6.27A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4a2 2 0 0 0 1-1.73z" />
          <path d="M3.3 7l8.7 5 8.7-5" />
          <path d="M12 22V12" />
        </svg>
      ),
    },
    {
      number: "04",
      title: "AI-Assisted Development",
      description: "Use AI tools like Claude and GPT for speed, but personally handle all critical paths to ensure quality.",
      icon: (
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2v2" />
          <path d="M8 22h8" />
          <rect x="5" y="6" width="14" height="12" rx="3" />
          <path d="M9 12h.01" />
          <path d="M15 12h.01" />
          <path d="M9 16h6" />
        </svg>
      ),
    },
    {
      number: "05",
      title: "Root Cause Fixes",
      description: "Test, observe, and fix issues at the root so they don't reappear elsewhere. Sustainable, long-term solutions.",
      icon: (
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14.7 6.3a5 5 0 0 0-6.4 6.4l-5.3 5.3a2 2 0 1 0 2.8 2.8l5.3-5.3a5 5 0 0 0 6.4-6.4l-2.3 2.3-3-3z" />
        </svg>
      ),
    },
  ];

  const whyMe = [
    {
      title: "Clarity over chaos",
      text: "I reduce ambiguity fast: requirements, edge cases, and success criteria become a clear plan before code changes.",
      icon: (
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 6 9 17l-5-5" />
        </svg>
      ),
    },
    {
      title: "Built for change",
      text: "I design systems that stay maintainable: clean interfaces, safe refactors, and production-grade reliability from day one.",
      icon: (
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2l7 4v8c0 5-3 8-7 8s-7-3-7-8V6l7-4z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      ),
    },
    {
      title: "Outcome-driven delivery",
      text: "I optimise for shipped value: measurable improvements, fewer regressions, and a system you can confidently evolve.",
      icon: (
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="3" />
          <path d="M12 9V2" />
        </svg>
      ),
    },
  ];

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

  return (
    <section
      id="how-i-work"
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-white to-gray-50/80"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-3">
          How I Work
        </h2>
        <p className="text-lg md:text-xl text-gray-600 text-center mb-14 max-w-2xl mx-auto">
          A practical, repeatable process for turning requirements into a stable, shippable product.
        </p>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 mb-14">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`hiw-card relative rounded-2xl border border-gray-200/80 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6 ${
                revealed ? "revealed" : "opacity-0"
              }`}
              style={revealed ? { animationDelay: `${index * 80}ms` } : undefined}
            >
              <div className="absolute -top-3 -left-3 w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-lg">
                {step.number}
              </div>
              <div className="mt-2 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 ring-1 ring-gray-200 flex items-center justify-center text-gray-800">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Why Me Section */}
        <div className="relative overflow-hidden rounded-3xl border border-gray-200/70 bg-gradient-to-br from-gray-900 via-slate-900 to-indigo-950 p-10 text-white">
          <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.5),transparent_55%),radial-gradient(circle_at_80%_10%,rgba(59,130,246,0.45),transparent_60%),radial-gradient(circle_at_50%_90%,rgba(16,185,129,0.35),transparent_55%)]" />
          <div className="relative">
            <h3 className="text-3xl font-bold text-center mb-3">
              Why Work With Me?
            </h3>
            <p className="text-center text-white/80 max-w-2xl mx-auto mb-10">
              Senior-level execution, strong communication, and a bias for shipping stable systems—not demos.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyMe.map((item, index) => (
              <div
                key={index}
                className={`why-card rounded-2xl bg-white/10 border border-white/15 backdrop-blur p-6 hover:bg-white/15 transition-all duration-300 ${
                  revealed ? "revealed" : "opacity-0"
                }`}
                style={
                  revealed
                    ? { animationDelay: `${(steps.length + index) * 80}ms` }
                    : undefined
                }
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-white">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">
                      {item.title}
                    </h4>
                    <p className="text-white/85 text-sm leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
