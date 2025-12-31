import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Top 10 SEO Keywords for AI Product Engineer niche:
// 1. AI Product Engineer
// 2. RAG Developer
// 3. LLM Integration Expert
// 4. Full Stack AI Developer
// 5. AI Agent Developer
// 6. OpenAI API Developer
// 7. LangChain Developer
// 8. AI Chatbot Developer
// 9. Python AI Developer
// 10. Node.js AI Developer

export const metadata: Metadata = {
  metadataBase: new URL('https://waqas-raza.vercel.app'),
  title: {
    default: "Waqas R. | Full-Stack AI Product Engineer | RAG, Agents, Node.js, Python",
    template: "%s | Waqas R. - AI Product Engineer"
  },
  description: "Full-Stack AI Product Engineer specializing in RAG/LLM apps, AI agents, and production-grade AI integrations. Expert in OpenAI API, LangChain, Node.js, Python. Top Rated on Upwork with 100% Job Success, $100K+ earned. Hire for AI chatbot development, LLM integration, and AI automation.",
  keywords: [
    "AI Product Engineer",
    "RAG Developer",
    "LLM Integration Expert",
    "Full Stack AI Developer",
    "AI Agent Developer",
    "OpenAI API Developer",
    "LangChain Developer",
    "AI Chatbot Developer",
    "Python AI Developer",
    "Node.js AI Developer",
    "Upwork Top Rated Developer",
    "Freelance AI Engineer",
    "AI Integration Specialist",
    "GPT Developer",
    "Vector Database Expert"
  ],
  authors: [{ name: "Waqas Raza", url: "https://waqas-raza.vercel.app" }],
  creator: "Waqas Raza",
  publisher: "Waqas Raza",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://waqas-raza.vercel.app",
    siteName: "Waqas Raza - AI Product Engineer",
    title: "Waqas R. | Full-Stack AI Product Engineer | RAG, Agents, Node.js, Python",
    description: "I build RAG/LLM apps that don't hallucinate, don't leak secrets, and don't break under load. Top Rated Upwork freelancer with 100% Job Success.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Waqas Raza - Full-Stack AI Product Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Waqas R. | Full-Stack AI Product Engineer | RAG, Agents, Node.js, Python",
    description: "I build RAG/LLM apps that don't hallucinate, don't leak secrets, and don't break under load. Top Rated on Upwork.",
    images: ["/og-image.png"],
    creator: "@waqasraza123",
  },
  alternates: {
    canonical: "https://waqas-raza.vercel.app",
  },
  category: "Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD Structured Data for Person/Professional Service
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Waqas Raza",
    url: "https://waqas-raza.vercel.app",
    jobTitle: "Full-Stack AI Product Engineer",
    description: "Full-Stack AI Product Engineer specializing in RAG/LLM apps, AI agents, and production-grade AI integrations. Expert in OpenAI API, LangChain, Node.js, Python.",
    sameAs: [
      "https://github.com/waqasraza123",
      "https://www.upwork.com/freelancers/waqasraza",
      "https://stackoverflow.com/users/waqasraza"
    ],
    knowsAbout: [
      "RAG Development",
      "LLM Integration",
      "AI Agent Development",
      "OpenAI API",
      "LangChain",
      "Python",
      "Node.js",
      "TypeScript",
      "React",
      "Next.js",
      "Stripe Integration",
      "Full Stack Development"
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "National University of Sciences and Technology"
    },
    worksFor: {
      "@type": "Organization",
      name: "Freelance / Upwork"
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
        {children}
      </body>
    </html>
  );
}
