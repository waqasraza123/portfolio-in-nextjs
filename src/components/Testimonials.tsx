export default function TestimonialsTimeline() {
    const testimonials = [
        {
          text: "Waqas was instrumental in helping us build our application. He is a key piece of our team and was skilled in various ways in helping to ensure we took the proper steps. Would recommend to others who are looking for a skilled developer to assist.",
          type: "Full Stack Associate Developer",
          client: "Bryan Fields",
        },
        {
          text: "Very good PHP Developer who is honest and fair in his dealings. I always have found Waqas to be prompt, respectful, and to deliver high-quality work for a reasonable rate. We would highly recommend him to anyone who needs this kind of work done.",
          type: "Booking Core PHP Project",
          client: "Ryan Wibawa",
        },
        {
          text: "Great developer that works very hard. Would definitely look to hire again in the future as need arises.",
          type: "Seeking Skilled Laravel Developer for Filament-based Project!",
          client: "Avery Arasin",
        },
        {
          text: "5 stars",
          type: "Looking for a PHP expert",
          client: "James Gilbert",
        },
        {
          text: "Waqas did a great job on the custom API integrations and custom WP plugin that we needed. I appreciated his honesty, clean code, and good work ethic. He will definitely be considered for future work.",
          type: "WordPress & API Integrations",
          client: "Samantha Johnston",
        },
        {
          text: "He went above and beyond and even did some work on the project that I did not request. A very pleasant experience and I have hired him to do further work for me.",
          type: "Developer needed for modification of Open Source Laravel Project",
          client: "Tay Zombulovich",
        },
        {
          text: "5 stars",
          type: "Experience Laravel Developer",
          client: "Sergio Gonzalez",
        },
        {
          text: "Great to work with!",
          type: "WordPress website needed",
          client: "Oliver James",
        },
        {
          text: "Great developer. Very happy with his professionalism and results.",
          type: "Urgent Angular site work",
          client: "USA Client",
        },
        {
          text: "Waqas is one of the best freelancers I found here on this website. Skilled and available every time! I will rehire him for sure.",
          type: "Laravel developer to join an International Team",
          client: "Metawaves",
        },
        {
          text: "5 stars",
          type: "Patch website and move to new hosting",
          client: "Jessica",
        },
        {
          text: "Very bright, extremely responsible, responsive, and committed. Highly recommended! 5 stars",
          type: "Fixing my Website Hacks",
          client: "Chris",
        },
        {
          text: "5 stars",
          type: "Build API & Simple Reporting Module - PHP Laravel Spark Application",
          client: "VoiceCrunch",
        },
        {
          text: "Very professional, will hire again 5 stars",
          type: "Need a CTO for a startup",
          client: "Javier",
        },
        {
          text: "Good time working with him!",
          type: "App development for a Spotify third-party app",
          client: "Malte Arnborg",
        },
        {
          text: "5 stars - We will continue to work with Chaudhry in the future because of his dedication and good spirits.",
          type: "Mobile Developer for Music Platform",
          client: "Javier",
        },
        {
          text: "Waqas is very knowledgeable and easy to work with. I would strongly recommend him to anyone needing Laravel work done.",
          type: "Laravel/VueJS Back-end Developer",
          client: "James",
        },
        {
          text: "5 stars - Work is fantastic. Understands requirements well and always delivers a perfect product in time. Looking forward to the next project.",
          type: "Laravel Developer required for couple of projects",
          client: "Aaron",
        },
        {
          text: "Waqas is a brilliant young man who I am excited to work with in my next job.",
          type: "PHP developer with Codeigniter experience",
          client: "Inbox India",
        },
        {
          text: "Great freelancer. We have done multiple projects together, and I continue to hire when I need an experienced PHP/Laravel developer. Good friend and colleague!",
          type: "Google Analytics Embed API Dashboard in Laravel",
          client: "Joe Sprankle",
        },
        {
          text: "Raza is excellent to work with! Highly skilled and fast turnaround time! I just hired him for a second project and hope to work with him again.",
          type: "Laravel and VueJS/Angular Back-end Developer for a Movie Database",
          client: "Kenold Beauplan",
        },
        {
          text: "Waqas is my go-to guy when I need Laravel help. Great asset to my team!",
          type: "Laravel Developer",
          client: "Aaron",
        },
        {
          text: "Thanks for the quick assistance. As usual, a man to rely on whenever emergency calls. He is definitely the number one man on my list.",
          type: "Restoring website",
          client: "Stanley",
        },
      ];
  
    return (
      <section id="testimonials" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-extrabold text-center text-gray-800 mb-16">
            100+ Happy Clients
          </h2>
          <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="relative p-8 bg-white shadow-md rounded-3xl transition-transform transform hover:scale-105 hover:shadow-xl"
              >
                <div className="absolute top-0 left-0 w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center transform -translate-x-4 -translate-y-4">
                  <span className="text-white font-semibold text-lg">
                    {index + 1}
                  </span>
                </div>
                <blockquote className="text-gray-600 font-light italic mb-6 leading-relaxed">
                  "{testimonial.text}"
                </blockquote>
                <p className="font-bold text-lg text-gray-900 mb-1">
                  {testimonial.type}
                </p>
                <p className="text-gray-500 text-sm">
                  {testimonial.client ? `by ${testimonial.client}` : "Anonymous"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  