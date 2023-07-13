import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import Resume from "./pages/resume/Resume";
import Project from "./pages/projects/Project";
import Contact from "./pages/contact/Contact";
import Footer from "./components/Footer";
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {
  const [mode, setMode] = useState(true);

  return (
    <div className={mode ? "App" : "App night"}>
      <BrowserRouter>
        <Navbar setMode={setMode} mode={mode} />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
