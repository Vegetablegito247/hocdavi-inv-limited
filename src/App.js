import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbarAndFooter/Navbar";
import LandingPage from "./pages/landingPage/LandingPage";
import Footer from "./components/navbarAndFooter/Footer";
import AboutUs from "./pages/aboutPage/AboutUs";
import Services from "./pages/servicePage/Services";
import Apply from "./pages/formPage/Apply";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="service" element={<Services />} />
          <Route path="apply" element={<Apply />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
