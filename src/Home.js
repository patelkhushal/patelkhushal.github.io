import React, { useState } from "react";
import { Element } from "react-scroll";
import { useMediaQuery } from 'react-responsive'
import Container from "react-bootstrap/Container";
// import Typing from "react-typing-animation";
import { scroller } from "react-scroll";
import { Link } from "react-scroll";
import Button from "react-bootstrap/Button";

import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";
import Pulse from "react-reveal/Pulse";

import ParticlesComp from "./ParticlesComp";

import Grow from "@material-ui/core/Grow";
// import Collapse from "@material-ui/core/Collapse";
// import Fade from "@material-ui/core/Fade";
// import Slide from "@material-ui/core/Slide";
// import Zoom from "@material-ui/core/Zoom";

import {
  AiFillAppstore,
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { RiUser3Fill, RiStackFill, RiFootprintFill } from "react-icons/ri";
import { IoMdChatbubbles } from "react-icons/io";
import { HiMail } from "react-icons/hi";
import HomeBackgroundImage from './assets/images/HomeBackgroundImage.jpg';

export default function Home() {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 991px)' })
  const linkElements = ["about", "timeline", "projects", "jisoo", "joy"];
  const iconLabels = ["About", "Timeline", "Projects", "Skills", "Contact"];
  const linkElementsIcons = [
    RiUser3Fill,
    RiFootprintFill,
    AiFillAppstore,
    RiStackFill,
    IoMdChatbubbles,
  ];

  const IconTag = (iconIndex) => {
    return React.createElement(linkElementsIcons[iconIndex], null, "");
  };

  return (
    <Element name="home" className="home">
      <Grow in={true} timeout={1000}>
        <Container
          fluid
          className="justify-content-center"
          style={{
            paddingLeft: 0,
            paddingRight: 0,
            height: "100vh",
            position: "relative",
            // height: "93.11vh",
            // display: "block",
          }}
        >
          {/* <ParticlesComp /> */}
          <div id="home-background" style={{backgroundImage: "url(" + HomeBackgroundImage + ")"}}></div>
          <Fade left delay={2200}>
            <div id="side-nav">
              {linkElements.map((linkElementName, index) => {
                return (
                  <div className="side-nav-icon-container" key={index}>
                    <Link
                      className="side-nav-item zoom"
                      to={linkElementName}
                      smooth={true}
                      duration={500}
                      offset={-55}
                    >
                      <div>{IconTag(index)}</div>
                    </Link>
                    <div className="side-nav-item-text">
                      {iconLabels[index]}
                    </div>
                  </div>
                );
              })}
            </div>
          </Fade>
          <Container id="type-greeting-container">
            <Bounce top delay={900}>
              <div style={{ textAlign: "center" }}>
                <p style={{padding:"10px"}}>
                  Hello! My name is{" "}
                  <span id="greeting-name">Khushal Patel</span>
                </p>
                <p style={{padding:"15px"}}>I'm a Software Dev :)</p>
              </div>
            </Bounce>
            <Fade left delay={1900}>
              <div>
                <Pulse forever={true}>
                  <div style={{ paddingBottom: "20px", paddingTop: "10px" }}>
                    <Button
                      id="more-button"
                      size="lg"
                      // variant="info"
                      onClick={() => {
                        scroller.scrollTo("about", {
                          smooth: true,
                          offset: isTabletOrMobile? -50 : -65,
                          duration: 500,
                        });
                      }}
                    >
                      Learn More{" "}
                      <span id="more-button-arrow">
                        <AiOutlineArrowRight />
                      </span>
                    </Button>
                  </div>
                </Pulse>
              </div>
            </Fade>
          </Container>
          <Fade right delay={2200}>
            <div id="bottom-bar-contact">
              <div className="side-nav-icon-container">
                <span className="side-nav-item zoom">
                  <AiFillLinkedin />
                </span>
              </div>
              <div className="side-nav-icon-container">
                <span className="side-nav-item zoom">
                  <AiFillGithub />
                </span>
              </div>
              <div className="side-nav-icon-container">
                <span className="side-nav-item zoom">
                  <HiMail />
                </span>
              </div>
            </div>
          </Fade>
        </Container>
      </Grow>
    </Element>
  );
}

//   <Typing speed={2} onFinishedTyping={() => renderArrow()}>
//   <Typing.Delay ms={1000} />
//   <div style={{ minHeight: "128px", textAlign: "center" }}>
//     <p>
//       Hello! My name is{" "}
//       <span id="greeting-name">Khushal Patel</span>
//     </p>
//     <p>I'm a Software Dev :)</p>
//   </div>
// </Typing>
