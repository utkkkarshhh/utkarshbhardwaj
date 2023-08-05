import './App.css';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import TechStackSection from './components/TechStackSection';
import ContactSection from './components/ContactSection/ContactSection';
import FooterSection from './components/FooterSection';

const App = () => {
  return (
    <div className="App">
      <HeroSection />
      <AboutSection />
      <TechStackSection />
      <ProjectsSection/>
      <ContactSection/>
      <FooterSection/>
    </div>
  );
}

export default App;
