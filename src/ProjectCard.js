import React, { useState, useRef} from "react";
import { useMediaQuery } from "react-responsive";
import { HoverCard } from "react-png-hovercard";
import Button from "@material-ui/core/Button";
// import uuid from "react-uuid";
// import useMobileDeviceCheck from "./useMobileDeviceCheck";

import Modal from "react-bootstrap/Modal";
// import Modal from "react-modal";

import { Fade } from "react-awesome-reveal";
import { RiCloseFill } from "react-icons/ri";
import { GrGithub } from "react-icons/gr";
import TechIcon from "./TechIcon";

export default function ProjectCard(props) {
  const projectCard = props.card;
  // const isMobile = useMobileDeviceCheck();
  const isExtraSmallScreenWidth = useMediaQuery({
    query: "(max-width: 439px)",
  });

  const isSmallScreenHeight = useMediaQuery({
    query: "(max-height: 476px)",
  });

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false); 
  const handleShow = () => setShow(true);

  const cardRef = useRef(null)
  const handleOnClick = () => {
    if(!cardRef.current.state.isHover){
      cardRef.current.setState({isHover: true})
    }
  }

  const handleMouseOver = () => {
    console.log("in")
    if(!cardRef.current.state.isHover){
      cardRef.current.setState({isHover: true})
    }
  }

  return (
    <div>
      {/* <img
        src={projectCard.imageUrl}
        alt={projectCard.imageUrl}
        style={{ height: "375px", width: "100%", objectFit: "cover" }}
      ></img> */}
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        dialogClassName="custom-dialog"
        animation={false}
        restoreFocus={false}
        autoFocus={false}
        enforceFocus={false}
      >
        <Modal.Header
          style={{
            backgroundColor: projectCard.themeColor,
            color: "white",
            border: "0px",
            borderRadius: "0",
          }}
          closeButton
        >
          <div
            style={{
              marginBottom: "0",
              padding: "2px 0",
              fontSize: "large",
              fontWeight: "500",
            }}
          >
            {projectCard.name}
          </div>
        </Modal.Header>
        <Modal.Body>
          <ul>
            <Fade cascade={true} delay={250} damping={0.4} triggerOnce={true}>
              {projectCard.desc.map((descPoint, index) => {
                return <li style={{ padding: "5px 0px" }}>{descPoint}</li>;
              })}
            </Fade>
          </ul>
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontWeight: "550",
                padding: "2px 0px 8px 0px",
                color: projectCard.themeColor,
              }}
            >
              Tech Stack
            </div>
            <Fade
              style={{ display: "inline-block" }}
              delay={isSmallScreenHeight ? 0.01 : projectCard.desc.length * 500}
              cascade={true}
              damping={0.15}
              triggerOnce={true}
            >
              {projectCard.techStack.map((tech, index) => {
                return (
                  <TechIcon
                    iconName={tech}
                    padding="10px 18px 0px 18px"
                    iconWidth="40px"
                    iconHeight="40px"
                    labelSize="15.5px"
                  ></TechIcon>
                );
              })}
            </Fade>
          </div>
        </Modal.Body>
        <hr style={{ borderTop: "1px solid #cacaca", width: "96%" }} />
        <div style={{ padding: "2px 10px 14px 6px" }}>
          <div style={{ float: "left", padding: "0px 25px" }}>
            <Button
              className="github-button"
              onClick={() => window.open(projectCard.githubLink, "_blank")}
              style={{
                border: "1px solid black",
                backgroundColor: "transparent",
                padding: "1px 14px",
              }}
            >
              <div style={{ display: "inline-block", fontSize: "13px" }}>
                Source Code
              </div>
              <div style={{ padding: "0px 0px 5.6px 7px", fontSize: "20px" }}>
                <GrGithub />
              </div>
            </Button>
          </div>
          <div
            className="close-button-container"
            style={{ float: "right", padding: "0px 0px 3px 0px" }}
          >
            <Button
              className="close-button"
              onClick={handleClose}
              style={{
                backgroundColor: projectCard.themeColor,
                color: "#e2e2e2",
              }}
            >
              <div className="close-icon" style={{ fontSize: "1.2rem" }}>
                <RiCloseFill />
              </div>
            </Button>
          </div>
        </div>
      </Modal>

      <div onMouseOver={() => handleMouseOver()} onClick={() => handleOnClick()}>
        <HoverCard
          ref={cardRef}
          style={{
            color: "white",
            width: isExtraSmallScreenWidth ? "90vw" : "24.59rem",
            maxHeight: "285px",
          }}
          front={
            <div
              style={{
                backgroundColor: projectCard.themeColor,
                width: "inherit",
              }}
            >
              <img
                src={projectCard.imageUrl}
                alt={projectCard.name}
                style={{
                  width: "100%",
                  height: "233px",
                  objectFit: "cover",
                  objectPosition:
                    projectCard.name === "Stay Home Rewards" ? "0 0" : "center",
                }}
              ></img>
              <div
                style={{
                  textAlign: "center",
                  padding: "0.75rem 0rem 0.2rem 0rem",
                  fontWeight: "500",
                }}
              >
                {projectCard.name}
              </div>
            </div>
          }
          back={
            <div
              className="justify-content-center"
              style={{
                display: "flex",
                alignContent: "center",
                alignItems: "center",
                flexDirection: "column",
                width: "inherit",
                backgroundColor: "rgb(249 249 249)",
                // border: "1px solid " + projectCard.themeColor,
                border: isExtraSmallScreenWidth
                  ? ""
                  : "1px solid " + projectCard.themeColor,
              }}
            >
              <p
                style={{
                  color: projectCard.themeColor,
                  fontSize: "large",
                  fontWeight: "550",
                  paddingBottom: "8px",
                }}
              >
                {projectCard.name}
              </p>
              <p
                style={{
                  color: projectCard.themeColor,
                  fontWeight: "500",
                  fontSize: "1.05rem",
                  padding: "5px 0px 15px 0px",
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
              <Button
                className="project-card-button"
                style={{
                  backgroundColor: projectCard.themeColor,
                  color: "rgb(249, 249, 249)",
                  borderRadius: "5%",
                  border: "2px solid " + projectCard.themeColor,
                  fontFamily: "monospace",
                  marginTop: "30px",
                  paddingLeft: "25px",
                  paddingRight: "25px",
                }}
                onClick={handleShow}
              >
                <span
                  style={{
                    textTransform: "none",
                    fontSize: "1.1rem",
                  }}
                >
                  Learn More
                </span>
              </Button>
            </div>
          }
          animationSpeed={700}
          height={300}
        />
      </div>
    </div>
  );
}
