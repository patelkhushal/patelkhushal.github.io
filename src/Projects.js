import React, { useState } from "react";
import { Element } from "react-scroll";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useMediaQuery } from "react-responsive";

import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import { Zoom } from "react-awesome-reveal";
import uuid from "react-uuid";
import useMobileDeviceCheck from "./useMobileDeviceCheck";
import ProjectCard from "./ProjectCard";

// image imports
import TwitterUserProfiler from "./assets/images/TwitterUserProfiler.png";
import LectureHallFinder from "./assets/images/LectureHallFinder.jpg";
import HotelReviewsAnalyzer from "./assets/images/HotelReviewsAnalyzer.jpg";
import CityWeatherAnalytics from "./assets/images/CityWeatherAnalytics.jpg";
import StayHomeRewards from "./assets/images/StayHomeRewards.jpg";
import BitcoinTestnetUtility from "./assets/images/BitcoinTestnetUtility.jpg";
import ImageEditor from "./assets/images/ImageEditor.jpg";
import WeatherInfo from "./assets/images/WeatherInfo.jpg";
import PortfolioWebsite from "./assets/images/PortfolioWebsite.jpg";

export default function Projects() {
  const fullStackAndWebProjects = [
    {
      name: "Twitter User Profiler",
      desc: [
        "Created a Twitter client that gets tweets in real time using Twitter API and builds \"Twitter User Profile\" using Python and Spark",
        "App analyzes Twitter user’s recent tweets and profile them based on the topics and hashtags used in the tweet",
        "Positive and Negative topics for a user is determined by performing sentiment analysis and calculating TF-IDF scores using NLP",
        "Developed a web app to visualize Twitter User Profile that shows user’s top 10 hashtags, positive and negative topics using Angular and ExpressJS",
      ],
      miniTechStack: ["Python", "Angular", "Redis", "NLP"],
      techStack: [
        "Python",
        "Angular",
        "Redis",
        "NodeJS",
        "Twitter API",
        "Spark",
        "NLP",
      ],
      imageUrl: TwitterUserProfiler,
      themeColor: "rgb(23 118 162)",
      githubLink: "https://github.com/patelkhushal/TweetsAnalyzer"
    },
    {
      name: "Lecture Hall Finder",
      desc: [
        "Developed a WebApp that helps students search for empty lecture halls in York University that can be used as study rooms when library rooms are full",
        "Data was scrapped and cleaned from York University website which shows the schedules of all the classes using Python",
        "Created a user-friendly UI that allows user to filter empty lecture halls by York buildings and/or by specific date and time using Angular and ExpressJS",
      ],
      miniTechStack: ["Python", "Angular", "Redis"],
      techStack: ["Python", "Angular", "Redis", "NodeJS", "Heroku"],
      imageUrl: LectureHallFinder,
      themeColor: "rgb(199 34 34)",
      githubLink: "https://github.com/patelkhushal/yorku-study-room"
    },
    {
      name: "Portfolio Website",
      desc: [
        "Designed a portfolio website focusing on UX/UI",
        "Major shout-out to all the awesome open source React libraries out there!"
      ],
      miniTechStack: ["React"],
      techStack: ["React"],
      imageUrl: PortfolioWebsite,
      themeColor: "rgb(74 79 74)",
      githubLink: "https://github.com/patelkhushal/patelkhushal.github.io"
    },
    {
      name: "Weather Info",
      desc: [
        "Developed an interactive WebApp that allows user to look for current weather conditions for different cities using React and Open Weather API",
        "The WebApp also shows user's recent searches using Redux",
        "Main focus of this project was to learn React with Redux"
      ],
      miniTechStack: ["React", "Redux"],
      techStack: ["React", "Redux"],
      imageUrl: WeatherInfo,
      themeColor: "rgb(93 60 99)",
      githubLink: "https://github.com/patelkhushal/WeatherInfo"
    },
  ];
  const dataAnalyticsProjects = [
    {
      name: "Twitter User Profiler",
      desc: [
        "Created a Twitter client that gets tweets in real time using Twitter API and builds \"Twitter User Profile\" using Python and Spark",
        "App analyzes Twitter user’s recent tweets and profile them based on the topics and hashtags used in the tweet",
        "Positive and Negative topics for a user is determined by performing sentiment analysis and calculating TF-IDF scores using NLP",
        "Developed a web app to visualize Twitter User Profile that shows user’s top 10 hashtags, positive and negative topics using Angular and ExpressJS",
      ],
      miniTechStack: ["Python", "Angular", "Redis", "NLP"],
      techStack: [
        "Python",
        "Angular",
        "Redis",
        "NodeJS",
        "Twitter API",
        "Spark",
        "NLP",
      ],
      imageUrl: TwitterUserProfiler,
      themeColor: "rgb(23 118 162)",
      githubLink: "https://github.com/patelkhushal/TweetsAnalyzer"
    },
    {
      name: "Hotel Reviews Analyzer",
      desc: [
        "Performed data analytics on various hotel reviews to allow different hotels make data-driven decisions",
        "Data cleaning and sentiment analysis were performed on multiple data sets to pinpoint hotel's pain points",
        "Reviews trends were visualized using Tableau to study if factors like weather, date and global / local events affect customer's reviews",
      ],
      miniTechStack: ["Python", "Tableau", "NLP"],
      techStack: ["Python", "Spark", "NLP", "Hadoop", "Tableau"],
      imageUrl: HotelReviewsAnalyzer,
      themeColor: "rgb(7 78 101)", //rgb(6 71 93)
      githubLink: "https://github.com/patelkhushal"
    },
    {
      name: "City Weather Analytics",
      desc: [
        "Performed data analytics on multiple weather data sets of different cities",
        // "After data cleaning and deep analysis of different city's weather, an increasing trend in temperature was discovered which suggests global warming",
        "The tool allows user to pass in various parameters like city name, longitude / latitude and date range to perform customized data analysis"
      ],
      miniTechStack: ["Python"],
      techStack: ["Python"],
      imageUrl: CityWeatherAnalytics,
      themeColor: "rgb(158 36 104)",
      githubLink: "https://github.com/patelkhushal/weather-analytics"
    },
  ];

  const mobileAndOtherProjects = [
    {
      name: "Stay Home Rewards",
      desc: [
        "Developed a mobile app that encourages user to stay at home as part of “We vs Covid-19” hackathon",
        "The app tracks user location and rewards them based on number of hours stayed inside their home",
        "Designed UI to show user dashboard, rewards page and user settings page with an easy user-friendly navigation flow",
      ],
      miniTechStack: ["React Native"],
      techStack: ["React Native"],
      imageUrl: StayHomeRewards,
      themeColor: "rgb(18 120 123)",
      githubLink: "https://github.com/patelkhushal/stay-home"
    },
    {
      name: "Bitcoin Testnet Utility ",
      desc: [
        "Used BlockCypher's RESTful API to connect to the blockchain network and retrieve the balance of a bitcoin given by its public address",
        "The app also provides an option to make a payment from one bitcoin testnet address to another in satoshis",
      ],
      miniTechStack: ["Java", "BlockCypher API"],
      techStack: ["Java", "BlockCypher API"],
      imageUrl: BitcoinTestnetUtility,
      themeColor: "rgb(37 37 39)",
      githubLink: "https://github.com/patelkhushal/BitcoinTestnet"
    },
    {
      name: "Image Editor",
      desc: [
        "Developed a simple Java based image editing tool using JSwing library",
        "The tool provides options to adjust brightness, contrast, cropping and resizing. Also allows to draw on images supporting undo / redo and zoom in / out operations",
        "UI was built by conducting user interviews, building personas and keeping design principles in mind",
      ],
      miniTechStack: ["Java", "JSwing"],
      techStack: ["Java", "JSwing"],
      imageUrl: ImageEditor,
      themeColor: "rgb(19 128 55)",
      githubLink: "https://github.com/patelkhushal/image-editor"
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

  // hooks
  const [projectType, setProjectType] = useState("All");
  const [projectCards, setProjectCards] = useState(allProjects);
  const isMobile = useMobileDeviceCheck();
  const isExtraSmallScreenWidth = useMediaQuery({
    query: "(max-width: 439px)",
  });

  const noPadding = useMediaQuery({ query: "(max-width: 295px)" });

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
                      fontSize: isExtraSmallScreenWidth ? "3.5vw" : "14.9px",
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
            style={{ display: "block", padding: noPadding ? "0px" : "7px 18px" }}
            duration={700}
          >
            {projectCards.map((projectCard, index) => {
              return (
                <ProjectCard key={uuid()} card={projectCard}></ProjectCard>
              );
            })}
          </Zoom>
        </Row>
      </Container>
    </Element>
  );
}
