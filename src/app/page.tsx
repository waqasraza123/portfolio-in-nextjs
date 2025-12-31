import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/HeroSection';
import Skills from '../components/Skills';
import CaseStudies from '../components/CaseStudies';
import HowIWork from '../components/HowIWork';
import About from '../components/About';

export default function Home() {
    return (
        <>
            <Head>
                <title>Waqas R. | Full-Stack AI Product Engineer | RAG, Agents, Node, Python</title>
                <meta name="description" content="Full-Stack AI Product Engineer. I build RAG/LLM apps that don't hallucinate, don't leak secrets, and don't break under load. Top Rated, 100% JSS, $100K+ earned." />
            </Head>
            <Header />
            <Hero />
            <main>
                <Skills />
                <CaseStudies />
                <HowIWork />
                <About />
            </main>
        </>
    );
}