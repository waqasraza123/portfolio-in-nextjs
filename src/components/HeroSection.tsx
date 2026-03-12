"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import Link from "next/link";

const HeroCodeToUiScene = dynamic(
  () => import("./HeroCodeToUiScene"),
  { ssr: false }
);

type ProofStatItem = {
  value: number | null;
  suffix: string;
  label: string;
  color: string;
  literal?: string;
};

const PROOF_STATS: ProofStatItem[] = [
  { value: 175, suffix: "+", label: "Projects", color: "text-gray-900" },
  { value: 6700, suffix: "+", label: "Hours Worked", color: "text-gray-900" },
  { value: 70, suffix: "%", label: "Cost Reduction (case)", color: "text-green-600" },
  { value: null, suffix: "", label: "LangChain + OpenAI Agent", color: "text-blue-600", literal: "Recent" },
];

function useReducedMotion() {
  const [reduced, setReduced] = useState(true);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = () => setReduced(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return reduced;
}

function useCountUp(target: number | null, suffix: string, enabled: boolean, durationMs = 1500) {
  const [display, setDisplay] = useState(enabled ? 0 : (target ?? 0));
  useEffect(() => {
    if (target == null || !enabled) {
      if (target != null) setDisplay(target);
      return;
    }
    const start = performance.now();
    const step = (now: number) => {
      const elapsed = now - start;
      const t = Math.min(elapsed / durationMs, 1);
      const eased = 1 - (1 - t) * (1 - t);
      setDisplay(Math.round(eased * target));
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, suffix, enabled, durationMs]);
  return display + suffix;
}

function ProofStat({
  stat,
  reducedMotion,
}: {
  stat: ProofStatItem;
  reducedMotion: boolean;
}) {
  const countUpValue = useCountUp(
    stat.value,
    stat.suffix,
    !reducedMotion && stat.value != null
  );
  const displayValue = stat.literal ?? countUpValue;
  return (
    <div className="text-center">
      <div className={`text-3xl md:text-4xl font-bold ${stat.color}`}>
        {displayValue}
      </div>
      <div className="text-gray-500 text-sm">{stat.label}</div>
    </div>
  );
}

export default function Hero() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="relative flex flex-col justify-center items-center bg-white text-gray-800 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100" />

      <div className="relative z-10 text-center py-16 px-6 max-w-5xl mx-auto">
        <div className="mb-8 flex flex-col items-center gap-3">
          <div className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-2xl shadow-lg">
            <span className="text-2xl md:text-3xl font-bold">$20–$30</span>
            <span className="text-lg md:text-xl font-medium">/hour</span>
          </div>
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Available for new projects
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">
          AI-native full-stack engineer
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-2 max-w-3xl mx-auto font-semibold">
          Building SaaS, automations, and production-grade web apps
        </p>
        <p className="text-lg md:text-xl text-gray-500 mb-6 max-w-2xl mx-auto">
          Next.js, Node.js, Python, Stripe, Supabase, agents, and end-to-end
          product delivery
        </p>

        <HeroCodeToUiScene />

        <div className="flex flex-wrap justify-center gap-8 mb-10">
          {PROOF_STATS.map((stat) => (
            <ProofStat key={stat.label} stat={stat} reducedMotion={reducedMotion} />
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="#case-studies"
            className="px-8 py-4 font-semibold text-white bg-blue-600 rounded-xl shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300 flex items-center gap-2"
          >
            View Case Studies
          </Link>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.upwork.com/freelancers/waqasraza"
            className="px-8 py-4 font-semibold text-white bg-gray-800 rounded-xl shadow-lg hover:bg-gray-700 hover:shadow-xl transition-all duration-300 flex items-center gap-2"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
            </svg>
            Hire Me on Upwork
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/waqasraza123"
            className="px-8 py-4 font-semibold text-gray-700 bg-white border-2 border-gray-200 rounded-xl shadow-sm hover:border-gray-300 hover:shadow-md transition-all duration-300 flex items-center gap-2"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            View GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
