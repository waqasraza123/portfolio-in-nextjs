"use client";

export default function Skills() {
  const skillCategories = [
    {
      title: "AI & Automation",
      icon: "🤖",
      skills: ["OpenAI/GPT", "RAG", "Agents", "LangChain", "LangGraph", "CrewAI", "Embeddings", "Vector DB", "n8n", "Zapier"],
    },
    {
      title: "Backend",
      icon: "⚙️",
      skills: ["Node.js", "Express.js", "NestJS", "Python", "FastAPI", "Serverless"],
    },
    {
      title: "Frontend",
      icon: "🎨",
      skills: ["React", "Next.js", "TypeScript", "Tailwind", "Redux"],
    },
    {
      title: "Data",
      icon: "🗄️",
      skills: ["Supabase", "PostgreSQL", "Pinecone", "MongoDB", "Prisma", "Redis"],
    },
    {
      title: "Payments",
      icon: "💳",
      skills: ["Stripe", "Connect", "Webhooks", "Payouts", "PayPal", "Paddle"],
    },
    {
      title: "DevOps",
      icon: "☁️",
      skills: ["CI/CD", "Docker", "AWS", "GCP", "Vercel", "Render"],
    },
    {
      title: "Mobile",
      icon: "📱",
      skills: ["Flutter", "Dart", "Push Notifications", "In-App Purchases"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-extrabold text-center text-gray-900 mb-4">
          Tech Stack
        </h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          10+ years of hands-on experience, AI-first approach
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                index === 0 
                  ? "bg-gradient-to-br from-blue-50 to-purple-50 ring-2 ring-blue-200" 
                  : "bg-gradient-to-br from-gray-50 to-gray-100"
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{category.icon}</span>
                <h3 className={`text-xl font-bold ${index === 0 ? "text-blue-800" : "text-gray-800"}`}>
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`px-3 py-1 text-sm font-medium rounded-full shadow-sm border ${
                      index === 0 
                        ? "bg-white text-blue-700 border-blue-200" 
                        : "bg-white text-gray-700 border-gray-200"
                    }`}
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
