import React from "react";
import { Element } from "react-scroll";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import { scroller } from "react-scroll";

import { CgChevronDoubleUp } from "react-icons/cg";
import { RiCopyrightFill } from "react-icons/ri";
import { useMediaQuery } from "react-responsive";

import { AnimatedSocialIcon } from "react-animated-social-icons";

export default function Contact() {
  const breakIconSize = useMediaQuery({
    query: "(max-width: 400px)",
  });

  const contactIcons = [
    {
      brandName: "linkedin",
      hoverColor: "#2867B2",
      url: "https://www.linkedin.com/in/khushal-patel/",
    },
    {
      brandName: "www",
      hoverColor: "#d32937",
      url: "mailto:patelbapu128@gmail.com",
    },
    {
      brandName: "github",
      hoverColor: "black",
      url: "https://github.com/patelkhushal",
    },
    {
      brandName: "twitter",
      hoverColor: "#1DA1F2",
      url: "https://twitter.com/Khushal34837340",
    },
  ];

  const getIconPadding = (index) => {
    if(index === 0) return breakIconSize ? "0px 25px 0px 5px" : "0px 45px 0px 11px"
    else return breakIconSize ? "0px 30px" : "0px 45px"
  }

  return (
    <Element
      name="contact"
      className="with-navbar-component"
      style={{
        backgroundColor: "#0d435f",
        color: "white",
        paddingBottom: "5px",
      }}
    >
      <Container>
        <Row className="justify-content-center pt-2">
          <h4>Contact</h4>
        </Row>
        <Row className="justify-content-center pt-3 pb-2">
          <h5 style={{ color: "#76e2de", textAlign: "center" }}>
            Shoot me a message if you have any questions or want to work
            together!
          </h5>
        </Row>
        <Row className="justify-content-center mt-3">
          {contactIcons.map((contactIcon, index) => {
            return (
              <AnimatedSocialIcon
                key={index}
                className="pt-3 pb-2"
                brandName={contactIcon["brandName"]}
                width={breakIconSize ? "1.4rem" : "1.75em"}
                defaultColor="#D1D1D1"
                hoverColor={contactIcon["hoverColor"]}
                style={{ padding: getIconPadding(index) }}
                animation="bounce"
                animationDuration={0.8}
                url={contactIcon["url"]}
              />
            );
          })}
        </Row>
        <Row className="justify-content-center">
          <div className="contact-icon-up zoom">
            <CgChevronDoubleUp
              onClick={() => {
                scroller.scrollTo("home", {
                  smooth: true,
                  duration: 500,
                });
              }}
            ></CgChevronDoubleUp>
          </div>
        </Row>
        <Row className="justify-content-center pb-2">
          Designed by{" "}
          <span style={{ color: "#76e2de", paddingLeft: "5px" }}>
            {" "}
            Khushal Patel{" "}
          </span>
          <div style={{ padding: "0px 5px" }}>
            <RiCopyrightFill></RiCopyrightFill>
          </div>
          2021
        </Row>
      </Container>
    </Element>
  );
}
