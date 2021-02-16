import React from "react";
import { Element } from "react-scroll";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useMediaQuery } from "react-responsive";
import { JackInTheBox } from "react-awesome-reveal";
import Flippy, { FrontSide, BackSide } from "react-flippy";

import TechIcon from "./TechIcon";
import ProgrammingImage from "./assets/images/Programming.jpeg";
import FullStackImage from "./assets/images/FullStack.webp";
import DataAnalyticsImage from "./assets/images/DataAnalytics.jpg";
import MiscellaneousImage from "./assets/images/Matrix.jpg";

export default function Skills() {
  const skillsBackgroundImages = [
    ProgrammingImage,
    FullStackImage,
    DataAnalyticsImage,
    MiscellaneousImage,
  ];

  const skills = {
    Programming: ["Python", "Java", "Javascript", "Typescript", "C", "SQL"],
    "Full Stack / Web": [
      "Angular",
      "React",
      "Flask",
      "Node",
      "HTML",
      "CSS",
      "Bootstrap",
    ],
    "Data Analytics / DBs": [
      "Spark",
      "Hadoop",
      "NLTK",
      "Tableau",
      "Redis",
      "MongoDB",
      "DB2",
    ],
    Miscellaneous: [
      "React Native",
      "Github",
      "Heroku",
      "Jenkins",
      "Docker",
      "Bash / UNIX",
    ],
  };

  const breakSkillCardsWidth = useMediaQuery({
    query: "(max-width: 440px)",
  });

  const breakSkillCardsCascade = useMediaQuery({
    query: "(max-width: 1500px)",
  });

  return (
    <Element
      name="skills"
      className="with-navbar-component"
      style={{ backgroundColor: "rgb(241 241 241)", paddingBottom: "60px" }}
    >
      <Container fluid>
        <Row className="justify-content-center pb-3 pt-2">
          <h4>Skills</h4>
        </Row>
        <Row
          className="justify-content-center"
          style={{
            paddingTop: "20px",
            textAlign: "center",
          }}
        >
          <JackInTheBox
            cascade={breakSkillCardsCascade ? false : true}
            fraction={0.55}
            damping={0.55}
            triggerOnce={true}
          >
            {Object.keys(skills).map((label, index) => {
              return (
                <Col
                  key={index}
                  className="justify-content-center"
                  style={{
                    alignContent: "center",
                    display: "flex",
                    paddingBottom: "65px",
                  }}
                >
                  <Flippy
                    flipOnClick={true}
                    style={{
                      width: breakSkillCardsWidth ? "90vw" : "24rem",
                      height: "290px",
                    }}
                  >
                    <FrontSide
                      style={{
                        width: breakSkillCardsWidth ? "90vw" : "24rem",
                        borderRadius: "5%",
                        display: "flex",
                        justifyContent: "flex-end",
                        flexDirection: "column",
                        textAlign: "center",
                        color: "white",
                        backgroundImage:
                          "url(" + skillsBackgroundImages[index] + ")",
                        backgroundPosition: "top",
                        backgroundSize: "cover",
                      }}
                    >
                      <div
                        style={{
                          fontFamily: "monospace",
                          fontSize: "22.3px",
                          fontWeight: "500",
                        }}
                      >
                        {label}
                      </div>
                    </FrontSide>

                    <BackSide
                      style={{
                        width: breakSkillCardsWidth ? "90vw" : "24rem",
                        height: "110%",
                        borderRadius: "5%",
                        backgroundColor: "white",
                        overflow: breakSkillCardsWidth ? "scroll" : "hidden",
                        paddingBottom: "0px",
                      }}
                    >
                      <div
                        className="justify-content-center"
                        style={{ textAlign: "center" }}
                      >
                        <div
                          className="pt-1"
                          style={{
                            fontWeight: "450",
                            fontSize: "17px",
                          }}
                        >
                          {label}
                        </div>
                        <hr />
                        {skills[label].map((skill, index) => {
                          return (
                            <TechIcon
                              iconName={skill}
                              padding="10px 14px 15px 14px"
                              iconWidth="50px"
                              iconHeight="auto"
                              labelSize="15.5px"
                            ></TechIcon>
                          );
                        })}
                      </div>
                    </BackSide>
                  </Flippy>
                </Col>
              );
            })}
          </JackInTheBox>
        </Row>
      </Container>
    </Element>
  );
}
