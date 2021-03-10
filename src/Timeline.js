import React, { useState } from "react";
import { Element } from "react-scroll";
import { useMediaQuery } from "react-responsive";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { InView } from "react-intersection-observer";
import {
  FaGraduationCap,
  FaChalkboardTeacher,
  FaBriefcase,
} from "react-icons/fa";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import useMobileDeviceCheck from "./useMobileDeviceCheck";

import LassondeLogo from './assets/images/LassondeLogo.png';
import TutorDoctorLogo from './assets/images/TutorDoctorLogo.png';
import IBMLogo from './assets/images/IBMLogo.jpg';

export default function Timeline() {
  const [inView, setInView] = useState(false); //to check if the last timeline element is displayed so we can stop the animation after that. This is to trigger thr <VerticalTimeline> component to use animation only once
  const breakImageLevel = useMediaQuery({ query: "(max-width: 335px)" });
  const xSmallFontSize = useMediaQuery({ query: "(max-width: 250px)" });
  const isMobile = useMobileDeviceCheck();

  const getContentStyle = (borderColor) => {
    return { borderTop: "4.5px solid " + borderColor };
  };

  const getIconStyle = (backgroundColor) => {
    return { background: backgroundColor, color: "#fff" };
  };

  const timelineCards = [
    {
      header: "Lassonde School of Engineering - York University",
      subHeader: "Honors Bachelor of Science (HBSc) - Computer Science",
      date: "2015 - 2020",
      contentStyle: getContentStyle("rgb(233, 30, 99)"),
      iconStyle: getIconStyle("rgb(233, 30, 99)"),
      icon: React.createElement(FaGraduationCap, null, ""),
      imageSrc: LassondeLogo,
    },
    {
      header: "Excel Lassonde - York University",
      subHeader: "Peer Tutor",
      date: "2016 - 2018",
      contentStyle: getContentStyle("MediumSeaGreen"),
      iconStyle: getIconStyle("MediumSeaGreen"),
      icon: React.createElement(FaChalkboardTeacher, null, ""),
      imageSrc: LassondeLogo,
    },
    {
      header: "Tutor Doctor",
      subHeader: "Tutor",
      date: "2017 - 2018",
      contentStyle: getContentStyle("MediumSeaGreen"),
      iconStyle: getIconStyle("MediumSeaGreen"),
      icon: React.createElement(FaChalkboardTeacher, null, ""),
      imageSrc: TutorDoctorLogo
    },
    {
      header: "IBM Canada",
      subHeader: "Software Developer Intern",
      date: "2018 - 2019",
      contentStyle: getContentStyle("SteelBlue"),
      iconStyle: getIconStyle("SteelBlue"),
      icon: React.createElement(FaBriefcase, null, ""),
      imageSrc: IBMLogo
    },
    {
      header: "IBM Canada",
      subHeader: "Software Developer Student On Call",
      date: "2019 - 2020",
      contentStyle: getContentStyle("SteelBlue"),
      iconStyle: getIconStyle("SteelBlue"),
      icon: React.createElement(FaBriefcase, null, ""),
      imageSrc: IBMLogo,
    },
    {
      header: "IBM Canada",
      subHeader: "Software Developer",
      date: "2020 - Present",
      contentStyle: getContentStyle("SteelBlue"),
      iconStyle: getIconStyle("SteelBlue"),
      icon: React.createElement(FaBriefcase, null, ""),
      imageSrc: IBMLogo,
    },
  ];

  return (
    <Element
      name="timeline"
      className="with-navbar-component"
      style={{ backgroundColor: "rgb(232 232 232)" }}
    >
      <Container>
        <h4 align="center">Timeline</h4>
        <br></br>
        {/* do not animate vertical timeline on mobile/touch screen devices because there can be animation glitches with the navbar toggle icon  */}
        <VerticalTimeline animate={inView || isMobile ? false : true}>
          {timelineCards.map((timelineCard, index) => {
            return (
                <VerticalTimelineElement
                  key={index}
                  contentStyle={timelineCard.contentStyle}
                  // contentStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
                  // contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
                  date={timelineCard.date}
                  iconStyle={timelineCard.iconStyle}
                  icon={timelineCard.icon}
                >
                  <Container>
                    <Row xs={breakImageLevel ? 1 : 2} sm={2} md={2} lg={2} style={{overflow: xSmallFontSize ? "scroll" : "visible"}}>
                      <Col>
                        {/* <h5>{timelineCard.header}</h5> */}
                        <div style={{fontSize: xSmallFontSize ? "14px" : "large", fontWeight: "525"}}>{timelineCard.header}</div>
                        <p style={{fontSize: xSmallFontSize ? "12px" : "14.72px", padding:"10px 0 10px 0"}}>{timelineCard.subHeader}</p>
                      </Col>
                      <Col className="timeline-logo-container">
                        <img
                          src={timelineCard.imageSrc}
                          alt={timelineCard.header}
                          className="timeline-logo"
                          style={{maxHeight: breakImageLevel ? "75px" : "100px", maxWidth: breakImageLevel ? "75px" : "100px",}}
                        ></img>
                      </Col>
                    </Row>
                  </Container>
                </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>

        {/* Stop the vertical timeline element animation once this empty hidden div at the end is visible on the viewport. This is to ensure <VerticalTimeline> animation runs exactly once */}
        <InView onChange={setInView} triggerOnce={true} delay={1250}>
          <div style={{ display: "none" }}></div>
        </InView>
      </Container>
    </Element>
  );
}
