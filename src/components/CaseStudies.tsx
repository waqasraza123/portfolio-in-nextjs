"use client";

export default function CaseStudies() {
  const caseStudies = [
    {
      title: "CrimeStats.co.nz",
      subtitle: "Python/FastAPI + Next.js",
      description: "Crime analytics platform for New Zealand with automated police data ingestion and safety scoring.",
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

  return (
    <section id="case-studies" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-extrabold text-center text-gray-900 mb-4">
          Case Studies
        </h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          Recent projects showcasing AI integrations, payment systems, and full-stack development
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col"
            >
              {/* Header */}
              <div className={`bg-gradient-to-r ${study.gradient} p-6 text-white`}>
                <h3 className="text-2xl font-bold mb-1">{study.title}</h3>
                <p className="text-white/80 text-sm font-medium">{study.subtitle}</p>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-gray-600 mb-4">{study.description}</p>
                
                <ul className="space-y-2 mb-6 flex-1">
                  {study.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-green-500 mt-0.5">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {study.tech.map((tech, tIndex) => (
                    <span
                      key={tIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
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
                    className="mt-4 inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm"
                  >
                    View on App Store →
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
