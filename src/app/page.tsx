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
                <title>Waqas R. | Senior Full-Stack Developer + AI Prompt Engineer</title>
                <meta name="description" content="Senior Full-Stack Developer with 10+ years experience in React, Node.js, Python & AI. $100K+ earned, 175 jobs, 100% Job Success on Upwork." />
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