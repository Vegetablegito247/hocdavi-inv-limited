import React, { useState, createContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage/LandingPage";
import AboutUs from "./pages/aboutPage/AboutUs";
import Services from "./pages/servicePage/Services";
import 'react-toastify/dist/ReactToastify.css';
import DisplayDashboard from "./pages/dashboard/mainPage";
import OverView from "./pages/dashboard/overviewPage/Overview";
import Messages from "./pages/dashboard/msgPage";
import AllMessages from "./pages/dashboard/msgPage/allMsgPage/AllMessages";
import ViewMsg from "./pages/dashboard/msgPage/viewMsg/ViewMsg";
import { ToastContainer } from "react-toastify";
import LogAdmin from "./pages/logAdmin/LogAdmin";
import Sidebar from "./components/sideBar/Sidebar";
import Testimonial from "./pages/testimonial/Testimonial";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch } from "react-redux";
import { fetchTestimonial } from "./store/testimonial";

export const ToggleTheme = createContext(null);

function App() {
  const [openSidebar, setOpenSideBar] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const handleSidebar = () => {
    setOpenSideBar(!openSidebar);
  };

  const handleSideMenu = () => {
    setOpenMenu(!openMenu);
  };

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTestimonial());
  }, [])

  return (
    <ToggleTheme.Provider value={{ openSidebar, setOpenSideBar, handleSidebar }}>
      <div className="App overflow-hidden">
        <Router>
          <Sidebar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="service" element={<Services />} />
            <Route path="feedback" element={<Testimonial />} />
            <Route
              path={"dashboard"}
              element={
                <DisplayDashboard
                  openMenu={openMenu}
                  handleSideMenu={handleSideMenu}
                />
              }
            >
              <Route
                index
                element={
                  <OverView
                    openMenu={openMenu}
                    handleSideMenu={handleSideMenu}
                  />
                }
              />
              <Route
                path="messages"
                element={
                  <Messages
                    openMenu={openMenu}
                    handleSideMenu={handleSideMenu}
                  />
                }
              >
                <Route index element={<AllMessages />} />
                <Route path=":id" element={<ViewMsg />} />
              </Route>
            </Route>
            <Route path="/admin" element={<LogAdmin />} />
          </Routes>
        </Router>
        <ToastContainer />
      </div>
    </ToggleTheme.Provider>
  );
}

export default App;
