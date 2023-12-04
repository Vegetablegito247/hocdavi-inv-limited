import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbarAndFooter/Navbar";
import LandingPage from "./pages/landingPage/LandingPage";
import Footer from "./components/navbarAndFooter/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
