import React from "react";
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
import { Slide } from "react-awesome-reveal";

import useMobileDeviceCheck from "./useMobileDeviceCheck"

import ProfilePicture from "./assets/images/ProfilePicture.jpg";
import MachineLearningImage from "./assets/images/MachineLearning.svg";
import DataAnalyticsImage from "./assets/images/DataAnalytics.svg";
import BlockChainImage from "./assets/images/BlockChain.svg";

export default function About() {
  const breakLgScreenFlipCards = useMediaQuery({
    query: "(max-width: 1199px)",
  });
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
          <Col md="auto" style={{ textAlign: "center",  paddingBottom:"15px"}}>
            <Slide direction="left" triggerOnce={true}>
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
            </Slide>
            <div style={{ textAlign: "center" }}>
              <Slide direction="right" triggerOnce={true}>
                <Row
                  className="justify-content-center"
                  style={{ paddingBottom: "10px", paddingTop:"35px" }}
                >
                  <p>
                    Recently, I have been intrigued by these technologies and
                    steering my career in that direction
                  </p>
                </Row>
                <Row>
                  <Col style={{paddingTop: "15px"}}>
                    <img
                      src={MachineLearningImage}
                      alt="ml"
                      style={{ height: "100px", width: "100px", }}
                    ></img>
                    <p style={{ paddingTop: "7px", fontWeight: "500" }}>
                      Machine Learning
                    </p>
                  </Col>
                  <Col style={{paddingTop: "15px"}}>
                    <img
                      src={DataAnalyticsImage}
                      alt="data-analytics"
                      style={{ height: "100px", width: "100px", }}
                    ></img>
                    <p style={{ paddingTop: "7px", fontWeight: "500" }}>
                      Data Analytics
                    </p>
                  </Col>
                  <Col style={{paddingTop: "15px"}}>
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
            </div>
          </Col>
        </Row>
        <Slide direction="up" triggerOnce={true}>
          <Row
            className="justify-content-center"
            style={{
              paddingTop: "20px",
              paddingBottom: "0px",
              textAlign: "center",
            }}
          >
            <p style={{padding:"20px 0px 20px 0px"}}>
              <span style={{ fontSize: "1.3rem", fontWeight: "550" }}>
                {" "}
                Hobbies {"&"} Interests
              </span>
              <br></br>
              You'd see me talk a lot about things like
            </p>
          </Row>
          <Row
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
                  <Flippy
                    flipOnHover={isMobile ? false : true}
                    flipOnClick={isMobile ? true : false}
                  >
                    <FrontSide
                      className={
                        isExtraSmallScreenWidth ? "flip-card-xs" : "flip-card"
                      }
                      style={{
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
                      style={{ backgroundColor: flipCard[3], overflow: "scroll" }}
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
        </Slide>
      </Container>
    </Element>
  );
}
