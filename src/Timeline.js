import React, { useState, useEffect } from "react";
import { Element } from "react-scroll";
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

import LassondeLogo from './assets/images/LassondeLogo.png';
import TutorDoctorLogo from './assets/images/TutorDoctorLogo.png';
import IBMLogo from './assets/images/IBMLogo.jpg';
// import { Fade, AttentionSeeker, Slide, Bounce } from "react-awesome-reveal";
// import {
//   Fade as FadeReactReveal,
//   Bounce as BounceReactReveal,
// } from "react-reveal";

export default function Timeline() {
  const [inView, setInView] = useState(false); //to check if the last timeline element is displayed so we can stop the animation after that. This is to trigger thr <VerticalTimeline> component to use animation only once
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

  // const ConditionalWrapper = ({ condition, wrapper, children }) =>
  //   condition ? wrapper(children) : children;

  return (
    <Element
      name="timeline"
      className="with-navbar-component"
      style={{ backgroundColor: "rgb(232 232 232)" }}
    >
      {/* <FadeReactReveal right when={isMobile}> */}
      <Container>
        <h4 align="center">Timeline</h4>
        <br></br>
        {/* do not animate vertical timeline on mobile/touch screen devices because there can be animation glitches with the navbar toggle icon  */}
        <VerticalTimeline animate={inView || isMobile ? false : true}>
          {timelineCards.map((timelineCard, index) => {
            return (
              // <ConditionalWrapper
              //   condition={isMobile}
              //   wrapper={(children) => (
              //     <FadeReactReveal right>
              //       {children}
              //     </FadeReactReveal>
              //   )}
              // >
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
                    <Row>
                      <Col xs={8} md={8} lg={8}>
                        {/* <h5>{timelineCard.header}</h5> */}
                        <div style={{fontSize: "large", fontWeight: "525"}}>{timelineCard.header}</div>
                        <p style={{fontSize: "0.92rem", padding:"10px 0 10px 0"}}>{timelineCard.subHeader}</p>
                      </Col>
                      <Col className="timeline-logo-container">
                        <img
                          src={timelineCard.imageSrc}
                          alt={timelineCard.header}
                          className="timeline-logo"
                        ></img>
                      </Col>
                    </Row>
                  </Container>
                </VerticalTimelineElement>
              // </ConditionalWrapper>
            );
          })}
        </VerticalTimeline>

        {/* Stop the vertical timeline element animation once this empty hidden div at the end is visible on the viewport. This is to ensure <VerticalTimeline> animation runs exactly once */}
        <InView onChange={setInView} triggerOnce={true} delay={1250}>
          <div style={{ display: "none" }}></div>
        </InView>
      </Container>
      {/* </FadeReactReveal> */}
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
