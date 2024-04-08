import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/reusables/Header";
import Footer from "./components/reusables/Footer";
import LandingPage from "./components/Pages/LandingPage";
import ContactPage from "./components/Pages/ContactPage";
import PortfolioPage from "./components/Pages/PortfolioPage";
import ProjectPage from "./components//Pages/ProjectPage";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

        <Routes>
          <Route path="/projects/:project-name" element={<ProjectPage />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
