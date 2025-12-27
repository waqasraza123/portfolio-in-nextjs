export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-extrabold text-center text-gray-900 mb-4">
          About Me
        </h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          From WooCommerce to AI-powered SaaS—a decade of full-stack evolution
        </p>

        <div className="max-w-4xl mx-auto">
          {/* Journey */}
          <div className="bg-white rounded-3xl p-8 shadow-sm mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">My Journey</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              I'm <span className="font-semibold text-gray-900">Waqas</span>, a Senior Full-Stack Developer with expertise in{" "}
              <span className="font-semibold text-gray-900">React</span>,{" "}
              <span className="font-semibold text-gray-900">Node.js</span>,{" "}
              <span className="font-semibold text-gray-900">Python</span>, and{" "}
              <span className="font-semibold text-gray-900">AI integrations</span>.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              I started freelancing in <span className="font-semibold">2013</span> during university with WooCommerce, 
              transitioned to full-stack <span className="font-semibold">Laravel</span> development (2015–2020), 
              and for the last five years I've been all-in on the{" "}
              <span className="font-semibold">JavaScript/TypeScript stack</span> (React, Next.js, NestJS, Node.js) 
              to ship modern, AI-powered products.
            </p>
            <p className="text-gray-600 leading-relaxed">
              I actively use AI tools like Claude and GPT reasoning models for debugging, architecture and planning, 
              plus AI-enabled IDEs to speed up delivery while keeping things stable and scalable across the stack.
            </p>
          </div>

          {/* What I've Built */}
          <div className="bg-white rounded-3xl p-8 shadow-sm mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">What I've Built</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Real estate platforms with analytics dashboards",
                "eCommerce marketplaces with multi-vendor support",
                "SaaS platforms with integrated payments",
                "AI transcription tools",
                "Crime analytics platforms",
                "Law firm management systems",
                "Flutter apps with Stripe payments",
                "Matrimonial apps and multilingual websites",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-gray-700">
                  <span className="text-green-500">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Education & Employment */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-4">🎓 Education</h3>
              <div className="mb-2">
                <div className="font-semibold text-gray-900">National University of Sciences and Technology</div>
                <div className="text-gray-600">Bachelor of Engineering, Software Engineering</div>
                <div className="text-gray-500 text-sm">2013 - 2017</div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-4">💼 Experience</h3>
              <div className="space-y-4">
                <div>
                  <div className="font-semibold text-gray-900">Senior Full Stack Developer</div>
                  <div className="text-gray-600 text-sm">Upwork • 2013 - Present</div>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Software Engineer</div>
                  <div className="text-gray-600 text-sm">Delivery Hero Berlin • 2020 - 2021</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}