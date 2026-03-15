"use client";

import { useEffect, useRef, useState } from "react";

export default function CaseStudies() {
  const caseStudies = [
    {
      title: "VoiceCrunch AI",
      subtitle: "Speech Analytics Platform",
      description:
        "AI-powered speech analytics platform that scans recorded calls for keywords, phrases, sentiment and conversational patterns, then transcribes and translates key moments.",
      outcomes: [
        "90% less time spent reviewing calls",
        "40+ smart criteria across sentiment, silence and talk dynamics",
        "Flexible monthly and PAYG pricing for call analysis",
      ],
      features: [
        "Search recorded calls for words, phrases, silences, overtalk, sentiment and talk-style changes.",
        "Automatic transcription and translation of key moments into target languages.",
        "Email alerts and dashboards for compliance, CX, sales and risk signals.",
        "Silence, overtalk, volume and pacing analysis for coaching and QA.",
        "Flexible ingestion from existing call recorders, Zoom and legacy systems with secure, transient processing.",
      ],
      tech: ["Speech-to-text", "NLP", "Sentiment", "Dashboards"],
      gradient: "from-sky-500 to-indigo-600",
    },
    {
      title: "Deep Research Agent",
      subtitle: "Python + LangChain + LangGraph",
      description:
        "Production-grade deep research agent that plans, fetches, and writes structured reports from URLs and documents with strict guardrails.",
      outcomes: [
        "Deterministic, reproducible research runs",
        "URL + document ingestion (HTML, PDF, DOCX, TXT, MD, CSV)",
        "Traceable artifacts for every run",
      ],
      features: [
        "Tool-using workflows via LangChain / LangGraph with a Deep Agents-inspired design.",
        "Fetch pipeline that handles HTML and the top 5 document formats with safe timeouts and size caps.",
        "Runs produce plan.md, notes.md, sources.json, report.md and normalized source files under runs/<thread_id>/.",
        "Guardrails: caps on max_sources, max_links_per_source, HTTP/model timeouts, token limits and retries.",
        "Automatic artifact completion if report.md is missing after a run, using a tool-free model call.",
      ],
      tech: ["Python", "LangChain", "LangGraph", "OpenAI", "FastAPI"],
      gradient: "from-slate-700 to-sky-500",
      link: "https://github.com/waqasraza123/deep-research-agent-langchain",
    },
    {
      title: "OpenClaw DocOps Agent",
      subtitle: "Node.js + TypeScript + OpenAI + Qdrant",
      description:
        "DocOps automation agent for production-grade document ingestion, grounded Q&A with citations/refusals, and an audit harness for evaluation.",
      outcomes: [
        "Deterministic PDF ingestion into Qdrant",
        "Grounded Q&A with citations and refusal guardrails",
        "Ops-ready doc lifecycle and diagnostics",
      ],
      features: [
        "Ingestion pipeline that extracts, chunks, embeds and stores PDFs in Qdrant Cloud with deterministic chunk IDs and safe retry behavior.",
        "Grounded answering layer that returns citations and refuses when context is insufficient instead of hallucinating.",
        "Audit runner that produces JSON + Markdown reports for repeatable evaluation and iteration.",
        "Doc lifecycle ops: registry list/get, export/import, rebuild from chunks, and delete that cleans up both chunks and registry state.",
        "Ops utilities: retrieval debug, diagnostics, redacted config snapshot and cache cleanup CLIs/APIs.",
      ],
      tech: ["TypeScript", "Node.js", "OpenAI", "Qdrant", "OpenClaw"],
      gradient: "from-emerald-600 to-cyan-500",
      link: "https://github.com/waqasraza123/openclaw-qdrant-openai-docops-agent",
    },
    {
      title: "AI-Powered Video Editing Pipeline",
      subtitle: "Python + Remotion · VO → YouTube",
      description:
        "Takes a single voiceover audio file (and optional script) and produces a fully edited YouTube video at professional quality. Target format: VO + B-roll documentary style (Johnny Harris, Veritasium, ColdFusion). Handles 10 minutes to 1 hour.",
      outcomes: [
        "Dual-stack: Python (WhisperX, LLM, asset sourcing) + Remotion (React/TS) for rendering",
        "EDL JSON pivot format connecting intelligence and compositing",
        "Animated subtitles, overlays, transitions, audio ducking, -14 LUFS",
      ],
      features: [
        "WhisperX transcription + LLM analysis → EDL JSON v3; optional text script for accuracy.",
        "Asset sourcing (Pexels/Pixabay) with caching, dedup, and per-segment manifests.",
        "Remotion: compositing, word-synced subtitles, motion graphics, @remotion/transitions, light leaks.",
        "FFmpeg: ducking, loudness normalization, final mux. Outputs: final.mp4, edl.json, chapters.txt.",
        "Professional rules: 3–7s per shot, 90% hard cuts, Hormozi-style subtitles, Ken Burns on B-roll.",
      ],
      tech: ["Python", "WhisperX", "LLM", "Remotion", "React", "TypeScript", "FFmpeg", "EDL JSON"],
      gradient: "from-violet-600 to-fuchsia-500",
    },
    {
      title: "CrimeStats.co.nz",
      subtitle: "Python/FastAPI + Next.js",
      description: "Crime analytics platform for New Zealand with automated police data ingestion and safety scoring.",
      outcomes: ["Fast APIs via caching", "SEO at scale", "Automated ingest pipeline"],
      features: [
        "Automated NZ Police data ingest with validation & deduplication",
        "Safety Score engine (NZ-CHI v7.3) with fairness controls",
        "FastAPI + Supabase + Redis caching for fast APIs",
        "SEO: per-suburb static pages, JSON-LD markup",
        "GeoPandas/Shapely for geospatial data processing",
      ],
      tech: ["Python", "FastAPI", "Next.js", "Supabase", "Redis"],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Flowestate.co.nz",
      subtitle: "React + NestJS + Supabase",
      description: "Comprehensive dashboard system for law firms, lawyers, and executors managing estates.",
      outcomes: ["Secure RBAC/ABAC", "Workflow automation", "PDF/CSV reporting"],
      features: [
        "Role-based dashboards for Law Firms, Lawyers & Executors",
        "Secure auth with JWT + RBAC + ABAC",
        "Integrations: APLYiD (identity) + Actionstep/LEAP (legal)",
        "PDF & CSV generation, task/document automation",
        "Email delivery pipeline with templates",
      ],
      tech: ["React", "NestJS", "Supabase", "TypeScript"],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Cetirc",
      subtitle: "Flutter App for German Businesses",
      description: "Mobile app enabling Stripe payments and payouts with enterprise-grade security.",
      outcomes: ["Stripe Connect payouts", "Enterprise security", "RAG support chat"],
      features: [
        "Stripe Connect onboarding & payouts",
        "Identity docs with AES-256-CBC encryption",
        "OTP via AWS SNS, email via AWS SES",
        "Bank/card linking with webhook handling",
        "RAG chat with Node.js + OpenAI",
      ],
      tech: ["Flutter", "Node.js", "Stripe", "AWS", "OpenAI"],
      gradient: "from-orange-500 to-red-500",
      link: "https://apps.apple.com/us/app/cetirc/id6739968614",
    },
  ];

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
      { threshold: 0.12, rootMargin: "0px 0px -80px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="case-studies"
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-gray-50 to-gray-100"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-3">
          Case Studies
        </h2>
        <p className="text-lg md:text-xl text-gray-600 text-center mb-14 max-w-2xl mx-auto">
          A few projects that show how I ship AI, payments, and full-stack systems—end to end.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className={`case-card rounded-3xl overflow-hidden border border-gray-200/80 bg-white/80 backdrop-blur shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col ${
                revealed ? "revealed" : "opacity-0"
              }`}
              style={revealed ? { animationDelay: `${index * 90}ms` } : undefined}
            >
              {/* Header */}
              <div className={`relative bg-gradient-to-r ${study.gradient} p-6 text-white`}>
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.55),transparent_55%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.35),transparent_60%)]" />
                <div className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{study.title}</h3>
                      <p className="text-white/85 text-sm font-medium">{study.subtitle}</p>
                    </div>
                    <div className="hidden sm:flex flex-col items-end text-xs text-white/80">
                      <span className="font-semibold">Delivered</span>
                      <span className="text-white/70">Production-ready</span>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {study.outcomes.map((o) => (
                      <span
                        key={o}
                        className="px-2.5 py-1 rounded-full text-xs font-semibold bg-white/15 border border-white/25"
                      >
                        {o}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-gray-700 mb-4 leading-relaxed">{study.description}</p>
                
                <ul className="space-y-2.5 mb-6 flex-1">
                  {study.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-emerald-500 mt-0.5">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {study.tech.map((tech, tIndex) => (
                    <span
                      key={tIndex}
                      className="px-3 py-1 bg-gray-50 text-gray-700 text-xs font-semibold rounded-full border border-gray-200 hover:border-gray-300 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {study.link && (
                  <a
                    href={study.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center justify-between gap-3 text-sm font-semibold text-gray-900 group"
                  >
                    <span className="inline-flex items-center gap-2">
                      <span className="px-3 py-1.5 rounded-xl bg-gray-900 text-white shadow-sm group-hover:bg-gray-800 transition-colors">
                        View on App Store
                      </span>
                      <span className="text-gray-500 group-hover:text-gray-700 transition-colors">
                        Details
                      </span>
                    </span>
                    <span className="text-gray-400 group-hover:text-gray-600 transition-colors">
                      →
                    </span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
