import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/reusables/Header";
import Footer from "./components/reusables/Footer";
import LandingPage from "./components/Pages/LandingPage";
import ContactPage from "./components/Pages/ContactPage";
import PortfolioPage from "./components/Pages/PortfolioPage";
// import ProjectPage from "./components/Pages/ProjectPage";
import ProjectPage1 from "./components/data/Project1";
import ProjectPage2 from "./components/data/Project2";
import ProjectPage3 from "./components/data/Project3";

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
          {/* <Route path="/projects/:project-name" element={<ProjectPage />} />  For dynamic routing ,I'll us in future */}
          <Route path="/projects/ghost-mail" element={<ProjectPage1 />} />
          <Route
            path="/projects/decentralised-election"
            element={<ProjectPage2 />}
          />
          <Route
            path="/projects/multithreaded-task-scheduler"
            element={<ProjectPage3 />}
          />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
