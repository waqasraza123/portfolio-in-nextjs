"use client";

export default function HowIWork() {
  const steps = [
    {
      number: "01",
      title: "Understand the Problem",
      description: "Start by understanding the problem properly: goals, constraints, edge cases. No assumptions—just clarity.",
      icon: "🔍",
    },
    {
      number: "02",
      title: "Clear Specification",
      description: "Convert requirements into a compact specification: flows, data models, and failure scenarios documented upfront.",
      icon: "📝",
    },
    {
      number: "03",
      title: "Design for Change",
      description: "Build with change in mind so new features don't require rewrites. Scalable architecture from day one.",
      icon: "🧱",
    },
    {
      number: "04",
      title: "AI-Assisted Development",
      description: "Use AI tools like Claude and GPT for speed, but personally handle all critical paths to ensure quality.",
      icon: "🤖",
    },
    {
      number: "05",
      title: "Root Cause Fixes",
      description: "Test, observe, and fix issues at the root so they don't reappear elsewhere. Sustainable, long-term solutions.",
      icon: "🔧",
    },
  ];

  const whyMe = [
    {
      icon: "✅",
      text: "I find the right way to tackle problems instead of applying superficial patches.",
    },
    {
      icon: "🧱",
      text: "I build systems that remain maintainable and trustworthy over time.",
    },
    {
      icon: "🎯",
      text: "I optimise for outcomes and delivered value, not hours logged.",
    },
  ];

  return (
    <section id="how-i-work" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-extrabold text-center text-gray-900 mb-4">
          How I Work
        </h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          A systematic approach to building software that lasts
        </p>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-20">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="absolute -top-3 -left-3 w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-lg">
                {step.number}
              </div>
              <div className="text-4xl mb-4 mt-2">{step.icon}</div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Why Me Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-10 text-white">
          <h3 className="text-3xl font-bold text-center mb-8">Why Work With Me?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyMe.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <span className="text-3xl">{item.icon}</span>
                <p className="text-white/90 text-lg leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
