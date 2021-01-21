import React, { useState, useEffect } from "react";
import { Element } from "react-scroll";
import { useMediaQuery } from "react-responsive";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Flippy, { FrontSide, BackSide } from "react-flippy";
import { RiNetflixFill } from "react-icons/ri";
import { FaDollarSign } from "react-icons/fa";
import { BsMusicNoteList } from "react-icons/bs";
import { GiRingedPlanet, GiPencilBrush, GiCampfire } from "react-icons/gi";

// import Fade from "react-reveal/Fade";
import { Fade, Slide } from "react-awesome-reveal";
// import Slide from "react-reveal/Fade";

import ProfilePicture from "./assets/images/ProfilePicture.jpg";
import MachineLearningImage from "./assets/images/MachineLearning.svg";
import DataAnalyticsImage from "./assets/images/DataAnalytics.svg";
import BlockChainImage from "./assets/images/BlockChain.svg";

export default function About() {
  const breakLgScreenFlipCards = useMediaQuery({
    query: "(max-width: 1199px)",
  });
  // const stopAnimateWidth = useMediaQuery({ query: "(max-width: 768px)" });
  // const stopAnimateHeight = useMediaQuery({ query: "(min-height: 750px)" });
  const isExtraSmallScreenWidth = useMediaQuery({
    query: "(max-width: 359px)",
  });
  const isMobile = useMobileDeviceCheck();

  //flipCards (2d array) format: [ [label, icon, back-text, background-color],... ]
  const flipCards = [
    [
      "Movies & TV Shows",
      RiNetflixFill,
      "Sci-Fi, Fantasy, Action, Sitcoms, Anime, KDrama, You Name it!",
      "rgb(204 29 29)",
    ],
    ["Trading", FaDollarSign, "Cryptos and Stocks", "rgb(49 160 58)"],
    [
      "International Music",
      BsMusicNoteList,
      "Bollywood, Kpop, Jpop and Spanish Music",
      "rgb(202 39 122)",
    ],
    [
      "Hiking",
      GiCampfire,
      "Hiking, Camping, and Stargazing",
      "rgb(25 131 162)",
    ],
    [
      "Sketching",
      GiPencilBrush,
      "Mostly Landscapes and Anime portraits",
      "rgb(108 66 177)",
    ],
    [
      "Astronomy",
      GiRingedPlanet,
      "Parallel universe, Dark Matter, Big Bang, Aliens",
      "rgb(45 42 40)",
    ],
  ];

  const IconTag = (iconName) => {
    return React.createElement(iconName, null, "");
  };

  return (
    <Element name="about" id="about-comp" className="with-navbar-component">
      <Container>
        <Row className="justify-content-center">
          <h4 style={{ paddingBottom: "23px" }}>About Me</h4>
        </Row>
        <Row>
          <Col md="auto" style={{ textAlign: "center" }}>
            <Slide direction="left" triggerOnce={true}>
              {/* <Slide direction="left" delay={stopAnimateWidth || stopAnimateHeight ? 0 : 175}> */}
              <div>
                <img
                  src={ProfilePicture}
                  alt="ProfilePicture"
                  style={{
                    height: "300px",
                    width: "250px",
                    borderRadius: "50%",
                  }}
                ></img>
              </div>
              <div style={{ paddingTop: "15px", textAlign: "center" }}>
                <h5>Hello, I'm Khushal Patel</h5>
                <p>Full Stack / Software Dev / Data Analyst</p>
              </div>
            </Slide>
          </Col>
          <Col>
            <Slide direction="right" triggerOnce={true}>
              {/* <Slide direction="right" delay={stopAnimateWidth || stopAnimateHeight ? 0 : 1100}> */}
              <h5 style={{ paddingBottom: "7px", textAlign: "center" }}>
                Who Am I?
              </h5>
              <p>
                I am a Software Developer based in Toronto, CA. I have serious
                passion for learning new technologies and applying them to solve
                complex world problems. Having 3+ years of professional
                experience, I was fortunate enough to work on interesting
                problems wearing multiple hats while working as Data Analyst,
                Full Stack, Web/Mobile Applications Dev and QA Automation
                Engineer.
              </p>
              <br />
            </Slide>
            <Container style={{ textAlign: "center" }}>
              <Slide direction="right" triggerOnce={true}>
                {/* <Slide direction="right" delay={stopAnimateWidth || stopAnimateHeight ? 0 : 1800}> */}
                <Row
                  className="justify-content-center"
                  style={{ paddingBottom: "15px" }}
                >
                  <p>
                    Recently, I have been intrigued by these technologies and
                    steering my career in that direction
                  </p>
                </Row>
                <Row>
                  <Col>
                    <img
                      src={MachineLearningImage}
                      alt="ml"
                      style={{ height: "100px", width: "100px", color: "teal" }}
                    ></img>
                    <p style={{ paddingTop: "7px", fontWeight: "500" }}>
                      Machine Learning
                    </p>
                  </Col>
                  <Col>
                    <img
                      src={DataAnalyticsImage}
                      alt="data-analytics"
                      style={{ height: "100px", width: "100px" }}
                    ></img>
                    <p style={{ paddingTop: "7px", fontWeight: "500" }}>
                      Data Analytics
                    </p>
                  </Col>
                  <Col>
                    <img
                      src={BlockChainImage}
                      alt="blockchain"
                      style={{
                        height: "100px",
                        width: "100px",
                        backgroundColor: "white",
                      }}
                    ></img>
                    <p style={{ paddingTop: "7px", fontWeight: "500" }}>
                      BlockChain
                    </p>
                  </Col>
                </Row>
              </Slide>
            </Container>
          </Col>
        </Row>
        {/* <Slide direction="up" triggerOnce={true}> */}
        {/* <Slide direction="up" triggerOnce={true}> */}
          {/* <Slide direction="down" delay={(stopAnimateWidth || stopAnimateHeight) ? 0 : 2200}> */}
          <Row
            className="justify-content-center"
            style={{
              paddingTop: "45px",
              paddingBottom: "0px",
              textAlign: "center",
            }}
          >
            <p>
              <span style={{ fontSize: "1.3rem", fontWeight: "550" }}>
                {" "}
                Hobbies {"&"} Interests
              </span>
              <br></br>
              You'd see me talk a lot about things like
            </p>
          </Row>
          <Row
            // xs={isExtraSmallScreenWidth ? 1 : 2}
            // sm={2}
            // md={3}
            lg={breakLgScreenFlipCards ? 5 : 6}
            className="justify-content-center"
            // style={{ marginRight: "0px" }}
          >
            {flipCards.map((flipCard, index) => {
              return (
                <Col
                  md="auto"
                  sm="auto"
                  xs="auto"
                  className="flip-card-col justify-content-center"
                  key={index}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  {/* style={{maxHeight: "160px", maxWidth: "185px"}} */}
                  <Flippy
                    flipOnHover={isMobile ? false : true}
                    flipOnClick={isMobile ? true : false}
                    // style={{height: "140px", width: "165px"}}
                    // style={{width: "170px", height:"140px", borderColor: "2px cyan"}}
                  >
                    <FrontSide
                      className={
                        isExtraSmallScreenWidth ? "flip-card-xs" : "flip-card"
                      }
                      // style={{ backgroundColor: flipCard[3] }}
                      style={{
                        // width: "170px",
                        // height: "140px",
                        backgroundColor: flipCard[3],
                      }}
                    >
                      <span>{IconTag(flipCard[1])}</span>
                      <span
                        style={{
                          fontSize: isExtraSmallScreenWidth
                            ? "0.83rem"
                            : "0.95rem",
                          fontWeight: "525",
                          paddingTop: "10px",
                        }}
                      >
                        {flipCard[0]}
                      </span>
                    </FrontSide>

                    <BackSide
                      className={
                        isExtraSmallScreenWidth ? "flip-card-xs" : "flip-card"
                      }
                      style={{ backgroundColor: flipCard[3] }}
                    >
                      <span
                        style={{
                          fontSize: isExtraSmallScreenWidth
                            ? "0.65rem"
                            : "0.82rem",
                          fontWeight: "525",
                        }}
                      >
                        {flipCard[2]}
                      </span>
                    </BackSide>
                  </Flippy>
                </Col>
              );
            })}
          </Row>
        {/* </Slide> */}
        {/* </Slide> */}
      </Container>
    </Element>
  );
}

// Hook to detect mobile devices
function useMobileDeviceCheck() {
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Detect if current device is mobile
      setIsMobileDevice(!!navigator.maxTouchPoints);
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial device type
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return isMobileDevice;
}
