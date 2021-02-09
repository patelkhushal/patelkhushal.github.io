import React, { useState, useRef, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { HoverCard } from "react-png-hovercard";
import Button from "@material-ui/core/Button";
import uuid from "react-uuid";
import useMobileDeviceCheck from "./useMobileDeviceCheck";
import Modal from "react-bootstrap/Modal";
import { Slide } from "react-awesome-reveal";

export default function ProjectCard(props) {
  const isMobile = useMobileDeviceCheck();
  const isExtraSmallScreenWidth = useMediaQuery({
    query: "(max-width: 439px)",
  });

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // let ref = useRef(null);
  let ref = useRef(null);
  const buttonRef = useRef(null);

  // useEffect(() => {
  //   const event = new MouseEvent("mouseover", {
  //     view: window,
  //     bubbles: true,
  //     cancelable: true,
  //   });
  //   buttonRef.current.addEventListener("onclick", function () {
  //     ref.current.dispatchEvent(event);
  //   });
  // }, []);
  const projectCard = props.card;

  // const handleClose = () => {
  //   // const event = new MouseEvent("mouseover", {
  //   //   view: window,
  //   //   bubbles: true,
  //   //   cancelable: true,
  //   // });

  //   console.log(ref);

  //   // ref.dispatchEvent(event);
  //   setShow(false);
  // };
  // const handleShow = () => setShow(true);

  return (
    <div>
      <Modal show={show} onHide={handleClose} size="lg" dialogClassName='custom-dialog' style={{borderRadius:"25%"}}>
        <img
          src={projectCard.imageUrl}
          alt={projectCard.imageUrl}
          style={{ height: "400px", width: "100%", objectFit: "cover" }}
        ></img>
        <Modal.Header
          style={{
            backgroundColor: projectCard.themeColor,
            color: "white",
            // borderBottom: "0px solid",
            border: "0px",
            borderRadius: "0",
            // marginBottom: "0"
          }}
          closeButton
        >
          <div style={{marginBottom: "0", padding:"2px 0", fontSize:"large", fontWeight: "500"}}>{projectCard.name}</div>
        </Modal.Header>
        <Modal.Body>
          {/* <Slide> */}
            <p>Work in progress! Stay Tuned</p>
          {/* </Slide> */}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
      <div>
        <HoverCard
          // key={uuid()}
          // ref={element => ref = element}
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
                // ref={buttonRef}
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
