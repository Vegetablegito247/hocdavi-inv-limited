import React, { useState, createContext } from "react";
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

  return (
    <ToggleTheme.Provider value={{ openSidebar, setOpenSideBar, handleSidebar }}>
      <div className="App overflow-hidden">
        <Router>
          <Sidebar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="service" element={<Services />} />
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
