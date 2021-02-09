import { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./NavBar";
import { Element } from "react-scroll";
import { Rings } from "svg-loaders-react";

import Home from "./Home";
import About from "./About";
import Timeline from "./Timeline";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact"

function App() {
  const [loading, setLoading] = useState(true);
  // const [homeCompHeight, setHomeCompHeight] = useState(0)
  // const ref = useRef(null)
  // const isTabletOrMobile = useMediaQuery({ query: '(max-width: 991px)' })

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const changeBackgroundColor = (color) => {
    document.body.style = "background:" + color;
  };

  return !loading ? (
    <div className="App">
      {changeBackgroundColor("black")}
      <Home />
      {/* {isTabletOrMobile ? <Headroom pinStart={600}><NavBar /></Headroom> : <NavBar />} */}
      <NavBar />
      <About />
      <Timeline />
      <Projects />
      <Skills />
      {/* <Home /> */}
      <Contact />
    </div>
  ) : (
    <div
      className="App"
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      {changeBackgroundColor("black")}
      <Rings />
    </div>
  );
}

export default App;
