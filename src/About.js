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

import useMobileDeviceCheck from "./useMobileDeviceCheck";

import ProfilePicture from "./assets/images/ProfilePicture.jpg";
import MachineLearningImage from "./assets/images/MachineLearning.svg";
import DataAnalyticsImage from "./assets/images/DataAnalytics.svg";
import BlockChainImage from "./assets/images/BlockChain.svg";
import FullStackImage from "./assets/images/FullStack.png";

export default function About() {
  const breakLgScreenFlipCards = useMediaQuery({
    query: "(max-width: 1199px)",
  });
  const isExtraSmallScreenWidth = useMediaQuery({
    query: "(max-width: 359px)",
  });
  const xSmallProfileImage = useMediaQuery({
    query: "(max-width: 295px)",
  });
  const isMobile = useMobileDeviceCheck();

  //array of JSON objects of hobbies and interests
  const hobbies = [
    {
      name: "Movies & TV Shows",
      icon: RiNetflixFill,
      desc: "Sci-Fi, Fantasy, Action, Sitcoms, Anime, KDrama, You Name it!",
      color: "rgb(204 29 29)",
    },
    {
      name: "Trading",
      icon: FaDollarSign,
      desc: "Cryptos and Stocks",
      color: "rgb(49 160 58)",
    },
    {
      name: "International Music",
      icon: BsMusicNoteList,
      desc: "Bollywood, Kpop, Jpop and Spanish Music",
      color: "rgb(202 39 122)",
    },
    {
      name: "Hiking",
      icon: GiCampfire,
      desc: "Hiking, Camping, and Stargazing",
      color: "rgb(25 131 162)",
    },
    {
      name: "Sketching",
      icon: GiPencilBrush,
      desc: "Mostly Landscapes and Anime portraits",
      color: "rgb(108 66 177)",
    },
    {
      name: "Astronomy",
      icon: GiRingedPlanet,
      desc: "Parallel universe, Dark Matter, Big Bang, Aliens",
      color: "rgb(45 42 40)",
    },
  ];

  const interestingTechnologies = {
    "Machine Learning": MachineLearningImage,
    "Data Analytics": DataAnalyticsImage,
    BlockChain: BlockChainImage,
    "Full Stack": FullStackImage,
  };

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
          <Col md="auto" style={{ textAlign: "center", paddingBottom: "15px" }}>
            <Slide direction="left" triggerOnce={true}>
              <div>
                <img
                  src={ProfilePicture}
                  alt="ProfilePicture"
                  style={{
                    height: xSmallProfileImage? "80vw" : "285px",
                    width: xSmallProfileImage? "80vw" : "260px",
                    borderRadius: "50%",
                    objectFit: "cover",
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
                I am a Software Developer based in Toronto, CA. I have a serious
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
                  style={{ paddingBottom: "10px", paddingTop: "35px" }}
                >
                  <p>
                    Recently, I have been intrigued by these technologies and
                    steering my career in that direction
                  </p>
                </Row>
                <Row>
                  {Object.keys(interestingTechnologies).map(
                    (technology, index) => {
                      return (
                        <Col style={{ paddingTop: "15px" }} key={index}>
                          <img
                            src={interestingTechnologies[technology]}
                            alt="ml"
                            style={{ height: "92px", width: "92px" }}
                          ></img>
                          <p style={{ paddingTop: "7px", fontWeight: "500" }}>
                            {technology}
                          </p>
                        </Col>
                      );
                    }
                  )}
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
            <p style={{ padding: "20px 0px 20px 0px" }}>
              <span style={{ fontSize: "20.8px", fontWeight: "550" }}>
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
            {/* <Slide direction="up" triggerOnce={true} cascade={isMobile} damping={0.1}> */}
            {hobbies.map((hobby, index) => {
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
                        backgroundColor: hobby.color,
                      }}
                    >
                      <span>{IconTag(hobby.icon)}</span>
                      <span
                        style={{
                          fontSize: isExtraSmallScreenWidth
                            ? "13.3px"
                            : "15.2px",
                          fontWeight: "525",
                          paddingTop: "10px",
                        }}
                      >
                        {hobby.name}
                      </span>
                    </FrontSide>

                    <BackSide
                      className={
                        isExtraSmallScreenWidth ? "flip-card-xs" : "flip-card"
                      }
                      style={{ backgroundColor: hobby.color }}
                    >
                      <span
                        style={{
                          fontSize: isExtraSmallScreenWidth
                            ? "10.4px"
                            : "13.2px",
                          fontWeight: "525",
                        }}
                      >
                        {hobby.desc}
                      </span>
                    </BackSide>
                  </Flippy>
                </Col>
              );
            })}
            {/* </Slide> */}
          </Row>
        </Slide>
      </Container>
    </Element>
  );
}
