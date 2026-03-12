"use client";

import { RAW_UPWORK_HISTORY } from "../data/upwork-history";
import { useEffect, useRef, useState } from "react";

type UpworkProject = {
  title: string;
  rating: number | null;
  dates: string;
  amount: number | null;
  rateType: string;
  hours: number | null;
  year: number | null;
  billing: "Hourly" | "Fixed";
};

function parseMoney(input: string): number | null {
  const s = input.trim();
  if (!s || s === "-") return null;
  const cleaned = s.replace(/[^0-9.\-]/g, "");
  if (!cleaned) return null;
  const n = Number(cleaned);
  return Number.isFinite(n) ? n : null;
}

function parseNumber(input: string): number | null {
  const s = input.trim();
  if (!s || s === "-") return null;
  const cleaned = s.replace(/,/g, "");
  const n = Number(cleaned);
  return Number.isFinite(n) ? n : null;
}

function getEndYear(dates: string): number | null {
  const matches = dates.match(/\b(19|20)\d{2}\b/g);
  if (!matches || matches.length === 0) return null;
  const year = Number(matches[matches.length - 1]);
  return Number.isFinite(year) ? year : null;
}

function parseUpworkTable(raw: string): UpworkProject[] {
  return raw
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => l.startsWith("|"))
    .filter((l) => !l.includes("---"))
    .filter((l) => !l.toLowerCase().includes("project title"))
    .map((line) => {
      const cells = line
        .replace(/^\|/, "")
        .replace(/\|$/, "")
        .split("|")
        .map((c) => c.trim())
        .filter(Boolean);

      if (cells.length < 6) return null;

      const ratingRaw = cells[cells.length - 5];
      const dates = cells[cells.length - 4];
      const amountRaw = cells[cells.length - 3];
      const rateType = cells[cells.length - 2];
      const hoursRaw = cells[cells.length - 1];

      const title = cells
        .slice(0, cells.length - 5)
        .join(" | ")
        .trim();

      const rating = parseNumber(ratingRaw);
      const amount = parseMoney(amountRaw);
      const hours = parseNumber(hoursRaw);

      const billing: UpworkProject["billing"] =
        rateType.toLowerCase().includes("fixed") || !rateType.includes("/hr")
          ? "Fixed"
          : "Hourly";

      const year = getEndYear(dates);

      return {
        title,
        rating,
        dates,
        amount,
        rateType,
        hours,
        year,
        billing,
      } satisfies UpworkProject;
    })
    .filter((p): p is UpworkProject => Boolean(p));
}

function formatUSD(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  }).format(amount);
}

function formatUSDCompactPlus(amount: number): string {
  if (amount >= 1000) return `$${Math.round(amount / 1000)}K+`;
  return `${formatUSD(amount)}+`;
}

function formatRating(rating: number | null): string {
  if (rating == null) return "—";
  return rating.toFixed(1);
}

function formatHours(hours: number | null): string {
  if (hours == null) return "—";
  return new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(
    hours,
  );
}

function summarize(projects: UpworkProject[]) {
  const totalEarnings = projects.reduce((sum, p) => sum + (p.amount ?? 0), 0);
  const totalHours = projects.reduce((sum, p) => sum + (p.hours ?? 0), 0);

  const rated = projects.filter((p) => typeof p.rating === "number");
  const avgRating =
    rated.length > 0
      ? rated.reduce((sum, p) => sum + (p.rating ?? 0), 0) / rated.length
      : null;

  const years = projects
    .map((p) => p.year)
    .filter((y): y is number => typeof y === "number");

  const fromYear = years.length ? Math.min(...years) : null;
  const toYear = years.length ? Math.max(...years) : null;

  const fixedCount = projects.filter((p) => p.billing === "Fixed").length;
  const hourlyCount = projects.filter((p) => p.billing === "Hourly").length;

  return {
    totalEarnings,
    totalHours,
    avgRating,
    ratedCount: rated.length,
    projectCount: projects.length,
    fromYear,
    toYear,
    fixedCount,
    hourlyCount,
  };
}

function groupByYear(projects: UpworkProject[]) {
  const map = new Map<string, UpworkProject[]>();
  for (const p of projects) {
    const key = p.year ? String(p.year) : "Unknown";
    const arr = map.get(key) ?? [];
    arr.push(p);
    map.set(key, arr);
  }

  const years = Array.from(map.keys()).sort((a, b) => {
    if (a === "Unknown") return 1;
    if (b === "Unknown") return -1;
    return Number(b) - Number(a);
  });

  return { map, years };
}

const ALL_PROJECTS = parseUpworkTable(RAW_UPWORK_HISTORY);
const SUMMARY = summarize(ALL_PROJECTS);
const { map: PROJECTS_BY_YEAR, years: YEARS } = groupByYear(ALL_PROJECTS);

export default function WorkHistory() {
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
      { threshold: 0.12, rootMargin: "0px 0px -80px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      label: "Total Upwork earnings",
      value: formatUSDCompactPlus(SUMMARY.totalEarnings),
      sub:
        SUMMARY.fromYear && SUMMARY.toYear
          ? `${SUMMARY.fromYear}–${SUMMARY.toYear}`
          : undefined,
      gradient: "from-emerald-500 to-teal-500",
      icon: (
        <svg
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 1v22" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7H14a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
    },
    {
      label: "Projects delivered",
      value: `${SUMMARY.projectCount}`,
      sub: `${SUMMARY.fixedCount} fixed • ${SUMMARY.hourlyCount} hourly`,
      gradient: "from-sky-500 to-blue-600",
      icon: (
        <svg
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 7h18" />
          <path d="M7 3v18" />
          <path d="M17 3v18" />
          <path d="M3 17h18" />
        </svg>
      ),
    },
    {
      label: "Hours billed",
      value: `${formatHours(SUMMARY.totalHours)}+`,
      sub: "hourly contracts only",
      gradient: "from-violet-500 to-fuchsia-500",
      icon: (
        <svg
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 6v6l4 2" />
          <path d="M22 12a10 10 0 1 1-10-10 10 10 0 0 1 10 10Z" />
        </svg>
      ),
    },
    {
      label: "Client satisfaction",
      value:
        SUMMARY.avgRating == null ? "—" : `${SUMMARY.avgRating.toFixed(2)}/5`,
      sub: `${SUMMARY.ratedCount} rated contracts`,
      gradient: "from-amber-500 to-orange-500",
      icon: (
        <svg
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ),
    },
  ];

  const recentHighlights = [
    {
      title: "Stripe, POS & Payment Systems",
      period: "2024 – 2025",
      items: [
        "Stripe Connect onboarding & payouts for businesses (incl. compliance flows).",
        "SEPA direct debits, card vaulting, webhook handling and payout reliability.",
        "Multiple upgrades and rescue projects across Stripe SDKs and production flows.",
      ],
      tags: ["Stripe", "Connect", "Payouts", "Fintech", "Compliance"],
    },
    {
      title: "AI, RAG & Chat Experiences",
      period: "2024 – 2025",
      items: [
        "OpenAI-powered support chat with RAG backend + secure auth.",
        "AI assistants embedded into dashboards and operational tools.",
        "Production-ready AI integrations into existing web + mobile apps.",
      ],
      tags: ["OpenAI", "RAG", "Agents", "Apps"],
    },
    {
      title: "Flutter Apps & Mobile UX",
      period: "2024 – 2025",
      items: [
        "Face ID, passcode and biometric login for production apps.",
        "In-app updates, notifications, payments and performance optimization.",
        "Navigation refactors and localization (EN/DE).",
      ],
      tags: ["Flutter", "Biometrics", "Push", "Updates"],
    },
  ];

  const longTermClients = [
    {
      title: "Laravel + Filament SaaS Platform",
      role: "Senior Full-Stack Developer",
      period: "2023 – 2024",
      summary:
        "Long-running engagement building and scaling a Filament/Laravel SaaS product with billing, reporting and admin tooling.",
      highlights: [
        "1,262 hours on a single Filament/Laravel codebase.",
        "Complex reporting modules and export pipelines.",
        "Ongoing refactors to keep the platform maintainable long-term.",
      ],
    },
    {
      title: "Music Platform (Web + Mobile)",
      role: "CTO-style Partner / Lead Engineer",
      period: "2018",
      summary:
        "Built and shipped core product features for a music platform across web, APIs and mobile with subscriptions and analytics.",
      highlights: [
        "1,476 hours on an hourly music-platform contract.",
        "Subscription/payment flows and app integration work.",
        "Delivered reliably as a long-term embedded partner.",
      ],
    },
    {
      title: "Full-Stack Associate Developer",
      role: "Embedded Developer",
      period: "2024",
      summary:
        "Long-running engagement across multiple products (web, APIs and internal tooling), handling features and production incidents.",
      highlights: [
        "282 hours on a single client engagement.",
        "Handled greenfield features, refactors and production fixes.",
        "Trusted go-to engineer for complex integrations.",
      ],
    },
  ];

  return (
    <section
      id="work-history"
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-white to-gray-50/80"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-3">
          Upwork Work History
        </h2>
        <p className="text-lg md:text-xl text-gray-600 text-center mb-14 max-w-3xl mx-auto">
          Full Upwork contract history with year-by-year breakdown across
          payments, SaaS platforms, mobile apps, and modern AI integrations.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`work-card rounded-2xl border border-gray-200/80 bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-6 ${
                revealed ? "revealed" : "opacity-0"
              }`}
              style={revealed ? { animationDelay: `${index * 80}ms` } : undefined}
            >
              <div className="flex items-center justify-between mb-3">
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${stat.gradient} text-white flex items-center justify-center shadow-sm`}
                >
                  {stat.icon}
                </div>
                <div className="text-xs font-semibold text-gray-500">
                  Upwork
                </div>
              </div>
              <div className="text-3xl font-extrabold text-gray-900 mb-1">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-gray-700">
                {stat.label}
              </div>
              {stat.sub ? (
                <div className="text-xs text-gray-500 mt-1">{stat.sub}</div>
              ) : null}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Recent Focus (2024 – 2025)
            </h3>
            <p className="text-gray-600 mb-4">
              Recent contracts are heavily focused on AI-enabled products,
              payment systems and production Flutter apps. A few representative
              clusters:
            </p>

            <div className="space-y-6">
              {recentHighlights.map((block, idx) => (
                <div
                  key={block.title}
                  className={`work-card rounded-2xl border border-gray-200/80 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6 ${
                    revealed ? "revealed" : "opacity-0"
                  }`}
                  style={
                    revealed
                      ? { animationDelay: `${(stats.length + idx) * 80}ms` }
                      : undefined
                  }
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-semibold text-gray-900">
                      {block.title}
                    </h4>
                    <span className="text-xs font-medium text-gray-500">
                      {block.period}
                    </span>
                  </div>
                  <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 mb-3">
                    {block.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {block.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 bg-gray-50 text-gray-700 text-xs font-semibold rounded-full border border-gray-200 hover:border-gray-300 transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Long-Term Client Relationships
            </h3>
            <p className="text-gray-600 mb-4">
              Beyond short fixed-price tasks, I&apos;ve spent years embedded
              with clients, acting as their go-to engineer for product and
              platform work:
            </p>

            <div className="space-y-6">
              {longTermClients.map((client, idx) => (
                <div
                  key={client.title}
                  className={`work-card rounded-2xl border border-gray-200/80 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6 ${
                    revealed ? "revealed" : "opacity-0"
                  }`}
                  style={
                    revealed
                      ? {
                          animationDelay: `${(stats.length + recentHighlights.length + idx) * 80}ms`,
                        }
                      : undefined
                  }
                >
                  <div className="flex items-center justify-between mb-1">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">
                        {client.title}
                      </h4>
                      <p className="text-sm text-gray-500">{client.role}</p>
                    </div>
                    <span className="text-xs font-medium text-gray-500">
                      {client.period}
                    </span>
                  </div>
                  <p className="text-sm text-gray-700 mt-3 mb-3">
                    {client.summary}
                  </p>
                  <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                    {client.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-4">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">
                Full Contract History
              </h3>
              <p className="text-gray-600">
                Every contract from my Upwork account history, grouped by year.
              </p>
            </div>
            <div className="text-xs text-gray-500">
              Showing {SUMMARY.projectCount} projects •{" "}
              {formatUSD(SUMMARY.totalEarnings)} total
            </div>
          </div>

          <div className="space-y-4">
            {YEARS.map((yearKey) => {
              const projects = PROJECTS_BY_YEAR.get(yearKey) ?? [];
              const yearEarnings = projects.reduce(
                (sum, p) => sum + (p.amount ?? 0),
                0,
              );
              const yearHours = projects.reduce(
                (sum, p) => sum + (p.hours ?? 0),
                0,
              );

              const openByDefault =
                yearKey !== "Unknown" && Number(yearKey) >= 2024;

              return (
                <details
                  key={yearKey}
                  open={openByDefault}
                  className="bg-white rounded-2xl shadow-sm border border-gray-200/80">
                  <summary className="cursor-pointer select-none px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <span className="text-lg font-semibold text-gray-900">
                        {yearKey}
                      </span>
                      <span className="text-xs font-medium text-gray-500">
                        {projects.length} projects
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2 text-xs">
                      <span className="px-2.5 py-1 rounded-full bg-gray-50 text-gray-700 border border-gray-200">
                        {formatUSDCompactPlus(yearEarnings)}
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-gray-50 text-gray-700 border border-gray-200">
                        {formatHours(yearHours)} hrs
                      </span>
                    </div>
                  </summary>

                  <div className="px-6 pb-6">
                    <div className="overflow-x-auto rounded-xl border border-gray-200/80">
                      <table className="min-w-full text-sm">
                        <thead className="bg-gray-50 text-gray-600">
                          <tr>
                            <th className="text-left font-medium px-4 py-3">
                              Project
                            </th>
                            <th className="text-left font-medium px-4 py-3">
                              Rating
                            </th>
                            <th className="text-left font-medium px-4 py-3">
                              Dates
                            </th>
                            <th className="text-right font-medium px-4 py-3">
                              Amount
                            </th>
                            <th className="text-left font-medium px-4 py-3">
                              Type
                            </th>
                            <th className="text-right font-medium px-4 py-3">
                              Hours
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                          {projects.map((p, idx) => (
                            <tr key={`${p.title}-${p.dates}-${idx}`}>
                              <td className="px-4 py-3 text-gray-900">
                                {p.title}
                              </td>
                              <td className="px-4 py-3 text-gray-700">
                                {formatRating(p.rating)}
                              </td>
                              <td className="px-4 py-3 text-gray-700 whitespace-nowrap">
                                {p.dates}
                              </td>
                              <td className="px-4 py-3 text-gray-900 text-right whitespace-nowrap">
                                {p.amount == null ? "—" : formatUSD(p.amount)}
                              </td>
                              <td className="px-4 py-3 text-gray-700">
                                <span className="inline-flex items-center gap-2">
                                  <span
                                    className={
                                      p.billing === "Hourly"
                                        ? "w-2 h-2 rounded-full bg-emerald-400"
                                        : "w-2 h-2 rounded-full bg-blue-400"
                                    }
                                  />
                                  {p.rateType}
                                </span>
                              </td>
                              <td className="px-4 py-3 text-gray-900 text-right">
                                {formatHours(p.hours)}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <p className="text-xs text-gray-500 mt-3">
                      Hour totals only exist for hourly contracts (fixed price
                      jobs don&apos;t report hours).
                    </p>
                  </div>
                </details>
              );
            })}
          </div>
        </div>

        <p className="text-xs text-gray-500 text-center mt-10 max-w-3xl mx-auto">
          {SUMMARY.projectCount} contracts across {SUMMARY.fromYear}–
          {SUMMARY.toYear}, totaling {formatHours(SUMMARY.totalHours)} billed
          hours and an average rating of{" "}
          {SUMMARY.avgRating ? SUMMARY.avgRating.toFixed(2) : "—"}/5 on{" "}
          {SUMMARY.ratedCount} rated contracts.
        </p>
      </div>
    </section>
  );
}
