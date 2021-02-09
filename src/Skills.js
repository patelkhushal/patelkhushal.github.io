import React from "react";
import { Element } from "react-scroll";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Slide, Fade, Zoom, JackInTheBox } from "react-awesome-reveal";
import { AttentionSeeker } from "react-awesome-reveal";
import Swing from "react-reveal/Swing";
import { useMediaQuery } from "react-responsive";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import uuid from "react-uuid";
// import { RiTerminalFill } from "react-icons/ri";
// import { SiFormstack } from "react-icons/si";
// import { GoGraph } from "react-icons/go";
// import { MdMoreHoriz } from "react-icons/md";

import PythonLogo from "./assets/images/Python.png";
import JavaLogo from "./assets/images/Java.webp";
import JavascriptLogo from "./assets/images/Javascript.svg";
import CLogo from "./assets/images/C.webp";
import SQLLogo from "./assets/images/SQL.png";

import AngularLogo from "./assets/images/Angular.svg";
import ReactLogo from "./assets/images/React.png";
import FlaskLogo from "./assets/images/Flask.png";
import NodeLogo from "./assets/images/Node.png";
import HTMLLogo from "./assets/images/HTML.jpg";
import CSSLogo from "./assets/images/CSS.svg";
import BootstrapLogo from "./assets/images/Bootstrap.png";

import SparkLogo from "./assets/images/Spark.png";
import HadoopLogo from "./assets/images/Hadoop.jpg";
import NLTKLogo from "./assets/images/NLTK.png";
import TableauLogo from "./assets/images/Tableau.svg";
import RedisLogo from "./assets/images/Redis.webp";
import MongoLogo from "./assets/images/Mongo.png";
import DB2Logo from "./assets/images/DB2.png";

import GithubLogo from "./assets/images/Github.png";
import HerokuLogo from "./assets/images/Heroku.png";
import JenkinsLogo from "./assets/images/Jenkins.jpg";
import DockerLogo from "./assets/images/Docker.png";
import BashLogo from "./assets/images/Bash.png";

export default function Skills() {
  // const skillLabelIcons = [RiTerminalFill, SiFormstack, GoGraph, MdMoreHoriz];
  const skillsBackgroundImages = [
    "https://res.cloudinary.com/springboard-images/image/upload/q_auto,f_auto,fl_lossy/wordpress/2019/07/sb-blog-programming.png",
    "https://blog.hyperiondev.com/wp-content/uploads/2019/02/Blog-Types-of-Web-Dev.jpg",
    "https://www.knitinfotech.com/wp-content/uploads/2020/08/3-Types-of-web-development.jpg",
    "https://cutewallpaper.org/21/linkedin-background-photo-engineering/Entry-52-by-freelancerboy36-for-LinkedIn-Background-Image-.jpg",
  ];

  const skills = {
    "Programming": {
      Python: PythonLogo,
      Java: JavaLogo,
      Javascript: JavascriptLogo,
      C: CLogo,
      SQL: SQLLogo,
    },
    "Full Stack / Web": {
      Angular: AngularLogo,
      React: ReactLogo,
      Flask: FlaskLogo,
      Node: NodeLogo,
      HTML: HTMLLogo,
      CSS: CSSLogo,
      Bootstrap: BootstrapLogo,
    },
    "Data Analytics / DBs": {
      Spark: SparkLogo,
      Hadoop: HadoopLogo,
      NLTK: NLTKLogo,
      Tableau: TableauLogo,
      Redis: RedisLogo,
      MongoDB: MongoLogo,
      DB2: DB2Logo,
    },
    "Miscellaneous": {
      "React Native": ReactLogo,
      Github: GithubLogo,
      Heroku: HerokuLogo,
      Jenkins: JenkinsLogo,
      Docker: DockerLogo,
      "Bash / UNIX": BashLogo,
    },
  };

  const breakSkillCardsWidth = useMediaQuery({
    query: "(max-width: 440px)",
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
        {/* <Fade triggerOnce={true} fraction={0.8}> */}
        <Row
          className="justify-content-center"
          style={{
            paddingTop: "20px",
            // paddingBottom: "20px",
            textAlign: "center",
          }}
        >
          {Object.keys(skills).map((label, index) => {
            return (
              <Col
                key={index}
                className="justify-content-center"
                style={{
                  // display: "inline-block",
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
                    // cursor: "pointer"
                  }}
                >
                  <FrontSide
                    className="justify-content-center"
                    style={{
                      width: breakSkillCardsWidth ? "90vw" : "24rem",
                      borderRadius: "5%",
                      // height: backCardHeight + "px",
                      // height:"auto",
                      // marginTop:"20px",
                      // height: "300px",
                      // width: "200px",
                      // height: "275px",
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                      alignContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                      color: "white",
                      // marginBottom: "100px",
                      backgroundImage:
                        "url(" + skillsBackgroundImages[index] + ")",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "monospace",
                        fontSize: "1.8rem",
                        fontWeight: "500",
                      }}
                    >
                      {label}
                    </div>
                    {/* <div style={{ fontSize: "3rem" }}>
                      {IconTag(skillLabelIcons[index])}
                    </div> */}
                  </FrontSide>

                  <BackSide
                    style={{
                      width: breakSkillCardsWidth ? "90vw" : "24rem",
                      height: "110%",
                      // marginTop:"-20px",
                      borderRadius: "5%",
                      backgroundColor: "white",
                      overflow: breakSkillCardsWidth ? "scroll" : "hidden",
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
                          fontSize: "1.05rem",
                        }}
                      >
                        {label}
                      </div>
                      <hr />
                      {Object.keys(skills[label]).map((skill, index) => {
                        return (
                          <div
                            // key={uuid()}
                            style={{
                              display: "inline-block",
                              padding: "10px 14px 15px 14px",
                              // padding: "12.5px",
                              // backgroundColor:"rgb(241 241 241)"
                            }}
                          >
                            {/* <JackInTheBox> */}
                            <img
                              src={skills[label][skill]}
                              alt={skills[label][skill]}
                              style={{
                                // height: "50px",
                                width: breakSkillCardsWidth ? "12vw" : "52px",
                                borderRadius:
                                  skill === "Javascript" ? "25%" : "0%",
                              }}
                            ></img>
                            <div
                              className="mt-2"
                              style={{
                                fontFamily: "monospace",
                                fontSize: "1.27rem",
                                // color: skills[label][skill].color,
                                fontWeight: "500",
                                // border: "1px solid " + skills[label][skill].color,
                              }}
                            >
                              {skill}
                            </div>
                            {/* </JackInTheBox> */}
                          </div>
                        );
                      })}
                    </div>
                  </BackSide>
                </Flippy>
              </Col>
            );
          })}
        </Row>
        {/* </Fade> */}
      </Container>
    </Element>
  );
}
