import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Assesments from "./pages/Assesments";
import Roadmap from "./pages/RoadMap";
import Process from "./pages/Process";
import Contact from "./pages/Contact";
import AlumCon from "./pages/AlumCon";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Simulation from "./pages/Simulation";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/assesments" element={<Assesments />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/simulation" element={<Simulation />} />
        <Route path="/process" element={<Process />} />
        <Route path="/contact" element={<Contact contactpos=''/>} />
        <Route path="/alumcon" element={<AlumCon />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
