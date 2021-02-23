import React from "react";
import { Element } from "react-scroll";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

import { scroller } from "react-scroll";

import { CgChevronDoubleUp } from "react-icons/cg";
import { RiCopyrightFill } from "react-icons/ri";
import { useMediaQuery } from "react-responsive";
// import { Slide, Bounce, Fade } from "react-awesome-reveal";

// import UseAnimations from "react-useanimations";
// import github from "react-useanimations/lib/github";
// import linkedin from "react-useanimations/lib/linkedin";
// import twitter from "react-useanimations/lib/twitter";
// import instagram from "react-useanimations/lib/instagram";
// import mail from "react-useanimations/lib/mail";

import { AnimatedSocialIcon } from "react-animated-social-icons";

export default function Contact() {
  const breakIconSize = useMediaQuery({
    query: "(max-width: 400px)",
  });

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
          {/* <Fade> */}
          <h5 style={{ color: "#76e2de", textAlign: "center" }}>
            Shoot me a message if you have any questions or want to work
            together!
          </h5>
          {/* </Fade> */}
        </Row>
        {/* <Row className="justify-content-center">
          <div className="contact-icon-container">
            <AiFillLinkedin />
          </div>
          <div className="contact-icon-container">
            <AiFillGithub />
          </div>
          <div className="contact-icon-container">
            <HiMail />
          </div>
        </Row>
        <Row className="justify-content-center">
          <div className="export-btn">
            <UseAnimations
              animation={github}
              size={37}
              wrapperStyle={{ borderRadius: "50%" }}
            />
          </div>
          <div className="export-btn">
            <UseAnimations animation={linkedin} size={40} />
          </div>
          <div className="export-btn">
            <UseAnimations animation={twitter} size={40} />
          </div>
          <div className="export-btn">
            <UseAnimations animation={instagram} size={40} />
          </div>
          <div className="export-btn">
            <UseAnimations animation={mail} size={40} />
          </div>
        </Row> */}
        <Row className="justify-content-center mt-3">
          {/* <Slide direction="up" style={{display: "flex"}}> */}
          <AnimatedSocialIcon
            className="pt-3 pb-2"
            brandName="linkedin"
            width={breakIconSize ? "1.4rem" : "1.75em"}
            defaultColor="#D1D1D1"
            hoverColor="#2867B2"
            style={{
              padding: breakIconSize ? "0px 25px 0px 5px" : "0px 45px 0px 0px",
              // cursor: "default",
            }}
            animation="bounce"
            animationDuration={0.8}
            url="https://www.linkedin.com/in/khushal-patel/"
          />
          <AnimatedSocialIcon
            className="pt-3 pb-2"
            brandName="www"
            width={breakIconSize ? "1.4rem" : "1.75em"}
            defaultColor="#D1D1D1"
            hoverColor="#d32937"
            // hoverColor="#d05206"
            style={{
              padding: breakIconSize ? "0px 30px" : "0px 45px",
              // cursor: "default",
            }}
            animation="bounce"
            animationDuration={0.8}
            url="mailto:patelbapu128@gmail.com"
          />
          <AnimatedSocialIcon
            className="pt-3 pb-2"
            brandName="github"
            width={breakIconSize ? "1.4rem" : "1.75em"}
            defaultColor="#D1D1D1"
            hoverColor="black"
            style={{
              padding: breakIconSize ? "0px 30px" : "0px 45px",
              // cursor: "default",
            }}
            animation="bounce"
            animationDuration={0.8}
            url="https://github.com/patelkhushal"
          />
          <AnimatedSocialIcon
            className="pt-3 pb-2"
            brandName="twitter"
            width={breakIconSize ? "1.4rem" : "1.75em"}
            defaultColor="#D1D1D1"
            hoverColor="#1DA1F2"
            style={{
              padding: breakIconSize ? "0px 30px" : "0px 45px",
              // cursor: "default",
            }}
            animation="bounce"
            animationDuration={0.8}
            url="https://twitter.com/Khushal34837340"
          />
          {/* <AnimatedSocialIcon
            className="pt-3 pb-2"
            brandName="instagram"
            width={breakIconSize ? "1.4rem" : "1.75em"}
            defaultColor="#D1D1D1"
            hoverColor="#cd486b"
            style={{
              padding: breakIconSize ? "0px 30px" : "0px 45px",
              // cursor: "default",
            }}
            animation="bounce"
            animationDuration={0.8}
            url="https://www.instagram.com/patelkhushal18/"
          /> */}
          {/* <div className="export-btn"><UseAnimations animation={instagram} size={45} /></div> */}
          {/* </Slide> */}
        </Row>
        <Row className="justify-content-center">
          <div className="contact-icon-up zoom">
            {/* <Button
            size="large"
              onClick={() => {
                scroller.scrollTo("home", {
                  smooth: true,
                  // offset: isTabletOrMobile ? -50 : -65,
                  duration: 500,
                });
              }}
            > */}
            <CgChevronDoubleUp
              onClick={() => {
                scroller.scrollTo("home", {
                  smooth: true,
                  // offset: isTabletOrMobile ? -50 : -65,
                  duration: 500,
                });
              }}
            ></CgChevronDoubleUp>
            {/* </Button> */}
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
        {/* <Row className="justify-content-center pb-1">
          <div className="references">
            Inspired from{" "}
            <a href="https://www.freepik.com" title="Ak">
              Akshay Patel
            </a>
            ,{" "}
            <a href="http://findmatthew.com/" title="Matthew Williams">
              Matthew Williams
            </a>
            ,{" "}
            <a href="http://findmatthew.com/" title="Stephane Monnot">
              Stephane Monnot
            </a>
          </div>
        </Row>
        <Row className="justify-content-center">
          <div className="references">
            Icons made by{" "}
            <a href="https://www.freepik.com" title="Freepik">
              Freepik
            </a>{" "}
            from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>
          </div>
        </Row> */}
      </Container>
    </Element>
  );
}
