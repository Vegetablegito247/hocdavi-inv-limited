import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbarAndFooter/Navbar";
import LandingPage from "./pages/landingPage/LandingPage";
import Footer from "./components/navbarAndFooter/Footer";
import AboutUs from "./pages/aboutPage/AboutUs";
import Services from "./pages/servicePage/Services";
import Apply from "./pages/formPage/Apply";
import Sidebar from "./components/sideBar/Sidebar";
import { useState } from "react";
import Apply1st from "./pages/formPage/Apply1st";
import Apply2nd from "./pages/formPage/Apply2nd";
import Chat from "./components/utilities/Chat";

function App() {
  const [openSidebar, setOpenSideBar] = useState(false);

  const handleSidebar = () => {
    setOpenSideBar(!openSidebar);
  };

  return (
    <div className="App overflow-hidden">
      <Router>
        <Navbar openBar={openSidebar} handleSidebar={handleSidebar} />
        <Sidebar openBar={openSidebar} handleSidebar={handleSidebar} />
        <Chat />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="service" element={<Services />} />
          <Route path="apply" element={<Apply />}>
            <Route index element={<Apply1st />} />
            <Route path="apply2" element={<Apply2nd />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
