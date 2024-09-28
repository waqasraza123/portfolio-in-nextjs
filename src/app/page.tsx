import Head from 'next/head';
import Header from '../components/Header';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import Projects from '../components/Projects';
import Hero from '../components/HeroSection';
import Video from '@/components/VideoSection';

export default function Home() {
    return (
        <>
            <Head>
                <title>Waqas | Full-Stack Engineer</title>
            </Head>
            <Header />
            <Hero />
            <Video />
            <main>
                <Projects />
                <Testimonials />
                <About />
            </main>
        </>
    );
}