import Head from 'next/head';
import Header from '../components/Header';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Hero from '../components/HeroSection';

export default function Home() {
  return (
    <>
      <Head>
        <title>Waqas | Full-Stack Engineer</title>
      </Head>
      <Header />
      <Hero />
      <main>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}