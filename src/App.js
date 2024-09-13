import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Assesments from "./pages/Assesments";
import Roadmap from "./pages/RoadMap";
import Process from "./pages/Process";

import AlumCon from "./pages/AlumCon";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Simulation from "./pages/Simulation";
import AuthPage from "./pages/AuthPage";
import Dashboard from './pages/Dashboard';
import { AssessmentProvider } from "./context/AssessmentContext";

function App() {
  const location = useLocation();
  const hideNavbarAndFooter = location.pathname.startsWith('/dashboard');
  return (
    <div>
      
      {!hideNavbarAndFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/assesments" element={<Assesments />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/simulation" element={<Simulation />} />
        <Route path="/process" element={<Process />} />
        <Route path="/alumcon" element={<AlumCon />} />
        <Route path="/authpage" element={<AuthPage/>}/>
        <Route
          path="/dashboard/*"
          element={
            <AssessmentProvider>
              <Dashboard />
            </AssessmentProvider>
          }
        />
        
      </Routes>
      {!hideNavbarAndFooter && <Footer />}
      
      
    </div>
  );
};


export default App;
