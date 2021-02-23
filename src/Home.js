import React from "react";
import { Element } from "react-scroll";
import { useMediaQuery } from "react-responsive";
import Container from "react-bootstrap/Container";
// import Typing from "react-typing-animation";
import { scroller } from "react-scroll";
import { Link } from "react-scroll";
import Button from "react-bootstrap/Button";

import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";
import Pulse from "react-reveal/Pulse";
import Grow from "@material-ui/core/Grow";

import {
  AiFillAppstore,
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { RiUser3Fill, RiStackFill, RiFootprintFill } from "react-icons/ri";
import { IoMdChatbubbles } from "react-icons/io";
import { HiMail } from "react-icons/hi";
import { AiOutlineTwitter } from "react-icons/ai";

import HomeBackgroundImage from "./assets/images/HomeBackgroundImage.jpg";

export default function Home() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 991px)" });

  const linkElements = {
    About: {
      scrollElementName: "about",
      icon: RiUser3Fill
    },
    Timeline: {
      scrollElementName: "timeline",
      icon: RiFootprintFill
    },
    Projects: {
      scrollElementName: "projects",
      icon: AiFillAppstore,
    },
    Skills: {
      scrollElementName: "skills",
      icon: RiStackFill,
    },
    Contact: {
      scrollElementName: "contact",
      icon: IoMdChatbubbles
    }
  }

  const contactIcons = {
    LinkedIn: {
      icon: AiFillLinkedin,
      link: "https://www.linkedin.com/in/khushal-patel/",
    },
    Mail: {
      icon: HiMail,
      link: "mailto:patelbapu128@gmail.com",
    },
    Github: {
      icon: AiFillGithub,
      link: "https://github.com/patelkhushal",
    },
    Twitter: {
      icon: AiOutlineTwitter,
      link: "https://twitter.com/Khushal34837340",
    },
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
          }}
        >
          <div
            id="home-background"
            style={{ backgroundImage: "url(" + HomeBackgroundImage + ")" }}
          ></div>
          <Fade left delay={2200}>
            <div id="side-nav">
              {Object.keys(linkElements).map((linkElement, index) => {
                return (
                  <div className="side-nav-icon-container" key={index}>
                    <Link
                      className="side-nav-item zoom"
                      to={linkElements[linkElement].scrollElementName}
                      smooth={true}
                      duration={500}
                      offset={-55}
                    >
                      <div>{React.createElement(linkElements[linkElement].icon, null, "")}</div>
                    </Link>
                    <div className="side-nav-item-text">
                      {linkElement}
                    </div>
                  </div>
                );
              })}
            </div>
          </Fade>
          <Container id="type-greeting-container">
            <Bounce top delay={900}>
              <div style={{ textAlign: "center" }}>
                <p style={{ padding: "10px" }}>
                  Hello! My name is{" "}
                  <span id="greeting-name">Khushal Patel</span>
                </p>
                <p style={{ padding: "15px" }}>I'm a Software Dev :)</p>
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
                          offset: isTabletOrMobile ? -50 : -65,
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
                {Object.keys(contactIcons).map((contact, index) => {
                  return (
                    <span className="side-nav-item zoom">
                      <a
                        target="_blank"
                        href={contactIcons[contact].link}
                        rel="noopener noreferrer"
                        style={{ textDecoration: "inherit", color: "inherit" }}
                      >
                        {React.createElement(contactIcons[contact].icon, null, "")}
                      </a>
                    </span>
                  );
                })}
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
