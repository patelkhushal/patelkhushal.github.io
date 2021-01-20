import { useState, useEffect, useRef } from "react";
import "./App.css";
import NavBar from "./NavBar";
import { Element } from "react-scroll";
import { Rings } from "svg-loaders-react";

import Home from "./Home";
import About from "./About";
import Timeline from "./Timeline";
import Projects from "./Projects"

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
      <Element name="jisoo" className="jisoo">
        <img
          src="https://wallpapercave.com/wp/wp2118314.jpg"
          alt="sana"
          style={{ height: "auto", width: "100%" }}
        ></img>
      </Element>

      <Element name="joy" className="joy">
        <img
          src="https://www.xtrafondos.com/wallpapers/taeyeon-cantante-de-kpop-4248.jpg"
          alt="sana"
          style={{ height: "inherit", width: "100%" }}
        ></img>
      </Element>
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
