import React, { useState } from "react";
import { Element } from "react-scroll";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useMediaQuery } from "react-responsive";

import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import { HoverCard } from "react-png-hovercard";
import Button from "@material-ui/core/Button";
import { Zoom } from "react-awesome-reveal";
import uuid from "react-uuid";
import useMobileDeviceCheck from "./useMobileDeviceCheck";
import Modal from "react-bootstrap/Modal";
import ProjectCard from "./ProjectCard"

// image imports
import TwitterUserProfiler from "./assets/images/TwitterUserProfiler.png";
import LectureHallFinder from "./assets/images/LectureHallFinder.jpg";
import HotelReviewsAnalyzer from "./assets/images/HotelReviewsAnalyzer.jpg";
import CityWeatherAnalytics from "./assets/images/CityWeatherAnalytics.jpg";
import StayHomeRewards from "./assets/images/StayHomeRewards.jpg";
import BitcoinTestnetUtility from "./assets/images/BitcoinTestnetUtility.jpg";
import ImageEditor from "./assets/images/ImageEditor.jpg";
import LibraryEPurchases from "./assets/images/LibraryEPurchases.jpeg";
import PortfolioWebsite from "./assets/images/PortfolioWebsite.jpg";

export default function Projects() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
    },
    {
      name: "Lecture Hall Finder",
      miniTechStack: ["Python", "Angular", "Redis"],
      techStack: ["Python", "Angular", "Redis", "NodeJS", "Heroku"],
      imageUrl: LectureHallFinder,
      themeColor: "rgb(199 34 34)",
    },
    {
      name: "Portfolio Website",
      miniTechStack: ["React"],
      techStack: ["React", "NodeJS"],
      imageUrl: PortfolioWebsite,
      themeColor: "rgb(74 79 74)",
    },
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
    },
    {
      name: "Hotel Reviews Analyzer",
      miniTechStack: ["Python", "Tableau", "NLP"],
      techStack: ["Python", "Apache Spark/pyspark", "NLP", "Tableau"],
      imageUrl: HotelReviewsAnalyzer,
      themeColor: "rgb(74 43 28)",
      // themeColor: "rgb(10 62 101)",
    },
    {
      name: "City Weather Analytics",
      miniTechStack: ["Python", "React"],
      techStack: ["Python", "React"],
      imageUrl: CityWeatherAnalytics,
      themeColor: "rgb(158 36 104)",
    },
  ];

  const mobileAndOtherProjects = [
    {
      name: "Stay Home Rewards",
      miniTechStack: ["React Native"],
      techStack: ["React Native"],
      imageUrl: StayHomeRewards,
      themeColor: "rgb(18 120 123)",
    },
    {
      name: "Bitcoin Testnet Utility ",
      miniTechStack: ["Java", "BlockCypher API"],
      techStack: ["Java", "BlockCypher API", "BlockChain"],
      imageUrl: BitcoinTestnetUtility,
      themeColor: "rgb(37 37 39)",
      // themeColor: "rgb(10 62 101)",
    },
    {
      name: "Image Editor",
      miniTechStack: ["Java", "JSwing"],
      techStack: ["Java", "JSwing"],
      imageUrl: ImageEditor,
      themeColor: "rgb(19 128 55)",
    },
    {
      name: "Library ePurchase",
      miniTechStack: ["Java", "DB2"],
      techStack: ["Java", "SQL/DB2"],
      imageUrl: LibraryEPurchases,
      themeColor: "rgb(91 54 36)",
    },
  ];

  const allProjectsWithDup = [
    ...fullStackAndWebProjects,
    ...dataAnalyticsProjects,
    ...mobileAndOtherProjects,
  ];

  // remove duplicates from allProjectsWithDup
  const allProjectsNoDup = new Set(
    allProjectsWithDup.map((item) => JSON.stringify(item))
  );
  const allProjects = [...allProjectsNoDup].map((item) => JSON.parse(item)); // convert set back into an array

  const buttonLabelsToProjects = {
    All: allProjects,
    "Full Stack / Web": fullStackAndWebProjects,
    "Data Analytics": dataAnalyticsProjects,
    "Mobile & Other": mobileAndOtherProjects,
  };

  const [projectType, setProjectType] = useState("All");
  const [projectCards, setProjectCards] = useState(allProjects);
  const isMobile = useMobileDeviceCheck();
  const isExtraSmallScreenWidth = useMediaQuery({
    query: "(max-width: 439px)",
  });

  const handleProjectTypeChange = (event, newProjectType) => {
    //only set new value if current project label button value is different than the newly clicked button value
    if (newProjectType && event.target.innerText !== projectType) {
      setProjectType(newProjectType);
      setProjectCards(buttonLabelsToProjects[newProjectType]);
    }
  };

  return (
    <Element
      name="projects"
      className="with-navbar-component"
      style={{ paddingBottom: "90px" }}
    >
      <Container fluid>
        <Row className="justify-content-center">
          <h4>Projects</h4>
        </Row>
        <Row
          className="justify-content-center"
          style={{ paddingTop: "30px", paddingBottom: "30px" }}
        >
          <ToggleButtonGroup
            value={projectType}
            exclusive
            onChange={handleProjectTypeChange}
          >
            {Object.keys(buttonLabelsToProjects).map(
              (projectTypeToggleButton, index) => {
                return (
                  <ToggleButton
                    disableRipple
                    value={projectTypeToggleButton}
                    key={index}
                    className="project-toggle-button"
                    style={{
                      padding: isExtraSmallScreenWidth
                        ? "6px 15px 6px 15px"
                        : "10px 25px 10px 25px",
                      fontSize: isExtraSmallScreenWidth ? "3.5vw" : "0.93rem",
                    }}
                  >
                    {projectTypeToggleButton}
                  </ToggleButton>
                );
              }
            )}
          </ToggleButtonGroup>
        </Row>
        <Row className="justify-content-center">
          <Zoom
            cascade={isMobile ? false : true}
            damping={0.15}
            triggerOnce={true}
            style={{ display: "block", padding: "7px 18px 7px 18px" }}
            duration={700}
          >
            {projectCards.map((projectCard, index) => {
              return (
                <ProjectCard  key={uuid()} card={projectCard}></ProjectCard>
                // <HoverCard
                //   key={uuid()}
                //   style={{
                //     color: "white",
                //     width: isExtraSmallScreenWidth ? "90vw" : "24.59rem",
                //     maxHeight: "285px",
                //   }}
                //   front={
                //     <div
                //       style={{
                //         backgroundColor: projectCard.themeColor,
                //         width: "inherit",
                //       }}
                //     >
                //       <img
                //         src={projectCard.imageUrl}
                //         alt={projectCard.name}
                //         style={{
                //           width: "100%",
                //           height: "233px",
                //           objectFit: "cover",
                //           objectPosition:
                //             projectCard.name === "Stay Home Rewards"
                //               ? "0 0"
                //               : "center",
                //         }}
                //       ></img>
                //       <div
                //         style={{
                //           textAlign: "center",
                //           padding: "0.75rem 0rem 0.2rem 0rem",
                //           fontWeight: "500",
                //         }}
                //       >
                //         {projectCard.name}
                //       </div>
                //     </div>
                //   }
                //   back={
                //     <div
                //       className="justify-content-center"
                //       style={{
                //         display: "flex",
                //         alignContent: "center",
                //         alignItems: "center",
                //         flexDirection: "column",
                //         width: "inherit",
                //         backgroundColor: "rgb(249 249 249)",
                //         // border: "1px solid " + projectCard.themeColor,
                //         border: isExtraSmallScreenWidth
                //           ? ""
                //           : "1px solid " + projectCard.themeColor,
                //       }}
                //     >
                //       <p
                //         style={{
                //           color: projectCard.themeColor,
                //           fontSize: "large",
                //           fontWeight: "550",
                //           paddingBottom: "8px",
                //         }}
                //       >
                //         {projectCard.name}
                //       </p>
                //       <p
                //         style={{
                //           color: projectCard.themeColor,
                //           fontWeight: "500",
                //           fontSize: "1.05rem",
                //           padding: "5px 0px 15px 0px",
                //         }}
                //       >
                //         {projectCard.miniTechStack.map((tech, index) => {
                //           return (
                //             <span>
                //               {index === projectCard.miniTechStack.length - 1
                //                 ? tech
                //                 : tech + " / "}
                //             </span>
                //           );
                //         })}
                //       </p>
                //       <Button
                //         className="project-card-button"
                //         style={{
                //           backgroundColor: projectCard.themeColor,
                //           color: "rgb(249, 249, 249)",
                //           borderRadius: "5%",
                //           border: "2px solid " + projectCard.themeColor,
                //           fontFamily: "monospace",
                //           marginTop: "30px",
                //           paddingLeft: "25px",
                //           paddingRight: "25px",
                //         }}
                //         onClick={handleShow}
                //       >
                //         <span
                //           style={{
                //             textTransform: "none",
                //             fontSize: "1.1rem",
                //           }}
                //         >
                //           Learn More
                //         </span>
                //       </Button>
                //     </div>
                //   }
                //   animationSpeed={700}
                //   height={300}
                // />
              );
            })}
          </Zoom>
        </Row>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </Element>
  );
}
