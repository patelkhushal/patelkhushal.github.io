import React, { useState } from "react";
import { Element } from "react-scroll";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useMediaQuery } from "react-responsive";
// import Col from "react-bootstrap/Col";
// import StackGrid, { transitions, easings } from "react-stack-grid";

import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";

// import Card from "react-bootstrap/Card";
import { HoverCard } from "react-png-hovercard";
// import Button from "react-bootstrap/Button";
// import { Button } from '@progress/kendo-react-buttons';
import Button from "@material-ui/core/Button";
import { Fade, Slide, Zoom, Bounce } from "react-awesome-reveal";
// import Grow from "@material-ui/core/Grow";
// import FlipMove from "react-flip-move";
import uuid from "react-uuid";
// import ProjectButton from "./ProjectButton"

// import { AwesomeButton } from "react-awesome-button";
// import "react-awesome-button/dist/styles.css";
import { ImSearch } from "react-icons/im"

import TwitterUserProfiler from './assets/images/TwitterUserProfiler.png';
import LectureHallFinder from './assets/images/LectureHallFinder.png';
import HotelReviewsAnalyzer from './assets/images/HotelReviewsAnalyzer.jpg';
import CityWeatherAnalytics from './assets/images/CityWeatherAnalytics.jpg';
import StayHomeRewards from './assets/images/StayHomeRewards.jpg';
import BitcoinTestnetUtility from './assets/images/BitcoinTestnetUtility.png';
import ImageEditor from './assets/images/ImageEditor.png';
import LibraryEPurchases from './assets/images/LibraryEPurchases.jpeg'
import PortfolioWebsite from './assets/images/PortfolioWebsite.png'

export default function Projects() {
  const fullStackAndWebProjects = [
    {
      name: "Twitter User Profiler",
      miniTechStack: ["Python", "Angular", "Redis", "NLP"],
      techStack: [
        "Python",
        "Angular",
        "Redis",
        "NodeJS",
        "Twitter API",
        "Apache Spark/pyspark",
        "NLP",
      ],
      imageUrl: TwitterUserProfiler,
      themeColor: "rgb(23 118 162)",
      // color: "rgb(36 129 172)",
      // backgroundColor: "rgb(249 249 249)",
      // style: { backgroundColor: "rgb(36 129 172)", color: "white" },
    },
    {
      name: "Lecture Hall Finder",
      miniTechStack: ["Python", "Angular", "Redis"],
      techStack: ["Python", "Angular", "Redis", "NodeJS", "Heroku"],
      imageUrl: LectureHallFinder,
      themeColor: "rgb(199 34 34)",
      // color: "rgb(199 34 34)",
      // backgroundColor: "rgb(249 249 249)",
      // style: { backgroundColor: "rgb(199 34 34)", color: "white" },
    },
    {
      name: "Portfolio Website",
      miniTechStack: ["React"],
      techStack: ["React", "NodeJS"],
      imageUrl: PortfolioWebsite,
      themeColor: "rgb(74 79 74)",
    }
  ];
  const dataAnalyticsProjects = [
    {
      name: "Twitter User Profiler",
      miniTechStack: ["Python", "Angular", "Redis", "NLP"],
      techStack: [
        "Python",
        "Angular",
        "Redis",
        "NodeJS",
        "Twitter API",
        "Apache Spark/pyspark",
        "NLP",
      ],
      imageUrl: TwitterUserProfiler,
      themeColor: "rgb(23 118 162)",
      // color: "rgb(36 129 172)",
      // backgroundColor: "rgb(249 249 249)",
      // style: { backgroundColor: "rgb(36 129 172)", color: "white" },
    },
    {
      name: "Hotel Reviews Analyzer",
      miniTechStack: ["Python", "Tableau", "NLP"],
      techStack: ["Python", "Apache Spark/pyspark", "NLP", "Tableau"],
      imageUrl: HotelReviewsAnalyzer,
      themeColor: "rgb(142 52 10)",
      // color: "rgb(54 73 6)",
      // backgroundColor: "rgb(249 249 249)",
      // style: { backgroundColor: "rgb(54 73 6)", color: "white" },
    },
    {
      name: "City Weather Analytics",
      miniTechStack: ["Python", "React"],
      techStack: ["Python", "React"],
      // style: { backgroundColor: "rgb(158 36 104)", color: "white" },
      imageUrl: CityWeatherAnalytics,
      themeColor: "rgb(158 36 104)",
      // color: "rgb(158 36 104)",
      // backgroundColor: "rgb(249 249 249)",
    },
  ];

  const mobileAndOtherProjects = [
    {
      name: "Stay Home Rewards",
      miniTechStack: ["React Native"],
      techStack: ["React Native"],
      // style: { backgroundColor: "rgb(18 120 123)", color: "white" },
      imageUrl: StayHomeRewards,
      themeColor: "rgb(18 120 123)",
      // color: "rgb(18 120 123)",
      // backgroundColor: "rgb(249 249 249)",
    },
    {
      name: "Bitcoin Testnet Utility ",
      miniTechStack: ["Java", "BlockCypher API"],
      techStack: ["Java", "BlockCypher API", "BlockChain"],
      // style: { backgroundColor: "rgb(15 46 76)", color: "white" },
      imageUrl: BitcoinTestnetUtility,
      themeColor: "rgb(17 72 125)",
      // color: "rgb(15 46 76)",
      // backgroundColor: "rgb(249 249 249)",
    },
    {
      name: "Image Editor",
      miniTechStack: ["Java", "JSwing"],
      techStack: ["Java", "JSwing"],
      // style: { backgroundColor: "rgb(19 128 55)", color: "white" },
      imageUrl: ImageEditor,
      themeColor: "rgb(19 128 55)",
      // color: "rgb(19 128 55)",
      // backgroundColor: "rgb(249 249 249)",
    },
    {
      name: "Library ePurchase",
      miniTechStack: ["Java", "DB2"],
      techStack: ["Java", "SQL/DB2"],
      // style: { backgroundColor: "rgb(1 32 32)", color: "white" },
      imageUrl: LibraryEPurchases,
      themeColor: "rgb(91 54 36)",
      // color: "rgb(1 32 32)",
      // backgroundColor: "rgb(249 249 249)",
    },
  ];

  const allProjectsWithDup = [
    ...fullStackAndWebProjects,
    ...dataAnalyticsProjects,
    ...mobileAndOtherProjects,
  ];

  const allProjectsNoDup = new Set(
    allProjectsWithDup.map((item) => JSON.stringify(item))
  ); // remove duplicates from allProjectsWithDup
  const allProjects = [...allProjectsNoDup].map((item) => JSON.parse(item)); // convert set back into an array

  const buttonLabelsToProjects = {
    All: allProjects,
    "Full Stack / Web": fullStackAndWebProjects,
    "Data Analytics": dataAnalyticsProjects,
    "Mobile & Other": mobileAndOtherProjects,
  };

  const [projectType, setProjectType] = useState("All");
  const [projectCards, setProjectCards] = useState(allProjects);
  const isExtraSmallScreenWidth = useMediaQuery({
    query: "(max-width: 439px)",
  });

  // const [reverseAnimation, setReverseAnimation] = useState(false)

  // const { helix } = transitions;
  // const { flip } = transitions;
  // const { scaleDown } = transitions;

  // check if a json object exists in a jsonArr
  // const jsonExists = (json, jsonArr) => {
  //   for (let i = 0; i < jsonArr.length; i++) {
  //     //iterate through each object in an array
  //     if (JSON.stringify(jsonArr[i]) === JSON.stringify(json)) {
  //       return true;
  //     }
  //   }
  // };

  // const getNewProjectCards = (newProjectType) => {
  //   let newProjectCards = projectCards;
  //   console.log(newProjectCards);
  //   console.log(buttonLabelsToProjects[newProjectType]);
  //   newProjectCards = newProjectCards.filter((el) =>
  //     jsonExists(el, buttonLabelsToProjects[newProjectType])
  //   );
  //   console.log(newProjectCards);
  //   return newProjectCards;
  // };

  // const getNewProjectCards = (newProjectType) => {
  //   let currentProjectCards = projectCards;
  //   let newProjectCards = buttonLabelsToProjects[newProjectType];

  //   console.log(currentProjectCards);
  //   console.log(newProjectCards);
  //   currentProjectCards = currentProjectCards.filter((el) =>
  //     jsonExists(el, newProjectCards)
  //   );
  //   currentProjectCards = newProjectCards.filter((el) =>
  //     jsonExists(el, currentProjectCards)
  //   );
  //   console.log(newProjectCards);
  //   return newProjectCards;
  // };

  const handleProjectTypeChange = (event, newProjectType) => {
    //only set new value if current project label button value is different than the newly clicked button value
    if (newProjectType && event.target.innerText !== projectType) {
      // setReverseAnimation(true);
      setProjectType(newProjectType);
      setProjectCards(buttonLabelsToProjects[newProjectType]);
      // setProjectCards(getNewProjectCards(newProjectType));
      // setReverseAnimation(false);
    }
  };
  return (
    <Element
      name="projects"
      className="with-navbar-component"
      // style={{ backgroundColor: "rgb(232 232 232)" }}
      // style={{ backgroundColor: "black" }}
    >
      <Container fluid>
        <Row className="justify-content-center">
          <h4>Projects</h4>
        </Row>
        <Row
          className="justify-content-center"
          style={{ paddingTop: "25px", paddingBottom: "20px" }}
        >
          <ToggleButtonGroup
            value={projectType}
            exclusive
            // size="large"
            onChange={handleProjectTypeChange}
            // style={{ fontSize: isExtraSmallScreenWidth ? "4vw" : "0.9em" }}
            // className="projects-buttons"
          >
            {Object.keys(buttonLabelsToProjects).map(
              (projectTypeToggleButton, index) => {
                return (
                  <ToggleButton
                    disableRipple
                    value={projectTypeToggleButton}
                    key={index}
                    className="project-toggle-button"
                    style={{ padding: isExtraSmallScreenWidth ? "6px 15px 6px 15px" : "10px 25px 10px 25px", fontSize: isExtraSmallScreenWidth ? "3.5vw" : "0.9rem" }}
                  >
                    {projectTypeToggleButton}
                  </ToggleButton>
                );
              }
            )}
          </ToggleButtonGroup>
        </Row>
        {/* <Zoom> */}
        <Row
          // md={4}
          // style={{ paddingTop: "25px" }}
          className="justify-content-center"
          // style={{ backgroundColor: "rgb(232 232 232)" }}
          // style={{backgroundColor: "gray"}}
        >
          <Zoom
            cascade={true}
            damping={0.15}
            triggerOnce={true}
            style={{ display: "inline-block", padding: "5px 15px 5px 15px" }}
          >
            {projectCards.map((projectCard, index) => {
              return (
                <HoverCard
                  key={uuid()}
                  style={{
                    // backgroundColor: "white",
                    backgroundColor: projectCard.themeColor,
                    color: "white",
                    // width: "25rem",
                    width: isExtraSmallScreenWidth ? "90vw" : "24.5rem",
                    maxHeight: "290px",
                  }}
                  className="project-card"
                  front={
                    <div>
                      <img
                        src={projectCard.imageUrl}
                        alt={projectCard.name}
                        style={{
                          width: "100%",
                          height: "235px",
                          objectFit: "cover",
                          objectPosition:
                            projectCard.name === "Stay Home Rewards"
                              ? "0 0"
                              : "center",
                        }}
                      ></img>
                      <div
                        align="center"
                        style={{
                          padding: "0.8rem 0rem 0.8rem 0rem",
                          fontWeight: "500",
                        }}
                      >
                        {projectCard.name}
                      </div>
                    </div>
                  }
                  back={
                    <div
                      style={{
                        display: "flex",
                        alignContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        width: "100%",
                        backgroundColor: "rgb(249 249 249)",
                        // backgroundColor: projectCard.themeColor,
                        // backgroundImage: "url(" + projectCard.imageUrl + ")",
                        // backgroundSize: "cover",
                        // backgroundPosition: "center",
                        // opacity: 0.75,
                        // height: "245px",
                        // objectFit: "cover",
                        // objectPosition: "0 0",
                      }}
                      className="justify-content-center"
                    >
                      <p
                        style={{
                          color: projectCard.themeColor,
                          fontSize: "larger",
                          fontWeight: "550",
                        }}
                      >
                        {projectCard.name}
                      </p>
                      <p
                        style={{
                          // color:"white",
                          color: projectCard.themeColor,
                          fontWeight: "500",
                          fontSize: "1.1rem",
                        }}
                      >
                        {projectCard.miniTechStack.map((tech, index) => {
                          return (
                            <span>
                              {index === projectCard.miniTechStack.length - 1
                                ? tech
                                : tech + " / "}
                            </span>
                          );
                        })}
                      </p>
                      <br />
                      <br />
                      {/* <div style={{marginTop: "45px"}}> */}
                      {/* <ProjectButton name={projectCard.name} themeColor={projectCard.themeColor}></ProjectButton> */}
                      <Button
                        className="project-card-button"
                        size="large"
                        // size="lg"
                        // variant="info"
                        style={{
                          // backgroundColor: hoveredCardButton === projectCard.name ? projectCard.themeColor :  "rgb(249 249 249)",
                          // color: hoveredCardButton === projectCard.name ? "rgb(249 249 249)" : projectCard.themeColor,
                          backgroundColor: projectCard.themeColor,
                          color: "rgb(249, 249, 249)",
                          borderRadius: "5%",
                          border: "2px solid " + projectCard.themeColor,
                          fontFamily: "monospace",
                          paddingLeft: "30px",
                          paddingRight: "30px",
                          // transform: "rotateX(0deg)"
                          // marginTop: "45px"
                        }}
                        // onMouseEnter={() => changeButtonColor(projectCard.name)}
                        // onMouseLeave={() => changeButtonColor("")}
                      >
                        {/* <span>Learn More</span> */}
                        <span
                          style={{ textTransform: "none", fontSize: "1.1rem" }}
                        >
                          Learn More
                          {/* <span><ImSearch></ImSearch></span> */}
                        </span>
                        {/* <div style={{marginBottom: "5px", marginLeft: "10px", fontSize: "1.1rem"}}>
                          <span><ImSearch></ImSearch></span>
                        </div> */}
                      </Button>
                      {/* <AwesomeButton
                        type="primary"
                        style={{
                          // backgroundColor: hoveredCardButton === projectCard.name ? projectCard.themeColor :  "rgb(249 249 249)",
                          // color: hoveredCardButton === projectCard.name ? "rgb(249 249 249)" : projectCard.themeColor,
                          backgroundColor: projectCard.color,
                          color: projectCard.backgroundColor,
                          borderRadius: "5%",
                          border: "2px solid " + projectCard.themeColor,
                          fontFamily: "monospace",
                          paddingLeft: "30px",
                          paddingRight: "30px",
                          // transform: "rotateX(0deg)"
                          // marginTop: "45px"
                        }}
                      >
                        Learn More
                      </AwesomeButton> */}
                      {/* </div> */}
                      {/* <div
                        style={{
                          backgroundImage: "url(" + projectCard.imageUrl + ")",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          opacity: 0.5,
                        }}
                      >
                      </div> */}
                      {/* <h6 align="center">lol</h6> */}
                    </div>
                  }
                  // maxWidth={416}
                  // maxWidth={isExtraSmallScreenWidth ? "100%" : 416}
                  animationSpeed={700}
                  height={300}
                  // margin={9}
                />
                // <Card
                //   key={uuid()}
                //   style={projectCard.style}
                //   className="project-card"
                // >
                //   <div>
                //     <img
                //       src={projectCard.imageUrl}
                //       alt={projectCard.name}
                //       style={{
                //         width: "100%",
                //         height: "245px",
                //         objectFit: "cover",
                //         objectPosition: "0 0",
                //       }}
                //     ></img>
                //     <div
                //       align="center"
                //       style={{
                //         padding: "0.8rem 0rem 0.8rem 0rem",
                //         fontWeight: "500",
                //       }}
                //     >
                //       {projectCard.name}
                //     </div>
                //   </div>
                // </Card>
              );
            })}
          </Zoom>
          {/* </div> */}
          {/* </StackGrid> */}
          {/* <Card.Text>
          {projectCard.miniTechStack.map((tech, index) => {
            return (<span>{index === projectCard.miniTechStack.length - 1 ? tech : tech + " / "}</span>);
          })}
        </Card.Text>
        <Button
          variant="contained"
          color="primary"
          className="project-card-button"
        >
          Go somewhere
        </Button> */}
        </Row>
        {/* </Zoom> */}
      </Container>
    </Element>
  );
}
