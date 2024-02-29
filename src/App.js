import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/reusables/Navbar";
import Footer from "./components/reusables/Footer";
import LandingPage from "./components/Pages/LandingPage";
import ContactPage from "./components/Pages/ContactPage";
import PortfolioPage from "./components/Pages/PortfolioPage";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
