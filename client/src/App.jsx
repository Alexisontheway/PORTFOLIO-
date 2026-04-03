import { ThemeProvider } from './hooks/useTheme';
import Navbar from './components/Navbar';
import ParticleBackground from './components/ParticleBackground';
import ScrollProgress from './components/ScrollProgress';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Certifications from './sections/Certifications';
import Education from './sections/Education';
import Contact from './sections/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-surface-50 dark:bg-surface-950 text-slate-800 dark:text-slate-200 transition-colors duration-300">
        <ParticleBackground />
        <ScrollProgress />
        <Navbar />

        <main className="relative z-10">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Certifications />
          <Education />
          <Contact />
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
}
