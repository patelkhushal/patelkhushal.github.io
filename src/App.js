import { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./NavBar";
import { Rings } from "svg-loaders-react";

import Home from "./Home";
import About from "./About";
import Timeline from "./Timeline";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact"

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.style = "background: black"; //change background color to black
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return !loading ? (
    <div className="App">
      <Home />
      <NavBar />
      <About />
      <Timeline />
      <Projects />
      <Skills />
      <Contact />
    </div>
  ) : (
    <div className="App loader">
      <Rings />
    </div>
  );
}

export default App;
