import CustomCursor from './components/CustomCursor';
import AmbientBackground from './components/AmbientBackground';
import HeroV2 from './components/HeroV2';
import MarqueeSection from './components/MarqueeSection';
import AboutV2 from './components/AboutV2';
import Skills from './components/Skills';
import ServicesV2 from './components/ServicesV2';
import ProjectsV2 from './components/ProjectsV2';
import Stats from './components/Stats';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-void font-body text-ink" style={{ overflowX: 'clip' }}>
      <CustomCursor />
      <AmbientBackground />
      <div className="relative z-10">
        <main>
          <HeroV2 />
          <MarqueeSection />
          <AboutV2 />
          <Skills />
          <ServicesV2 />
          <ProjectsV2 />
          <Stats />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
