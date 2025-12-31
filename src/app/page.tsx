import Header from '../components/Header';
import Hero from '../components/HeroSection';
import Skills from '../components/Skills';
import CaseStudies from '../components/CaseStudies';
import HowIWork from '../components/HowIWork';
import About from '../components/About';

export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <main role="main">
                <Skills />
                <CaseStudies />
                <HowIWork />
                <About />
            </main>
            <footer className="py-8 bg-gray-900 text-center text-gray-400">
                <div className="container mx-auto px-6">
                    <p className="text-sm">
                        © {new Date().getFullYear()} Waqas Raza. Full-Stack AI Product Engineer.
                    </p>
                    <p className="text-xs mt-2 text-gray-500">
                        RAG Developer • LLM Integration Expert • AI Agent Developer • OpenAI API Specialist
                    </p>
                </div>
            </footer>
        </>
    );
}