import React, {useState} from 'react'
import Button from "react-bootstrap/Button";

export default function ProjectButton(props) {
    const [hoveredCardButton, setHoveredCardButton] = useState("")
    const changeButtonColor = (projectCardName) => {
        setHoveredCardButton(projectCardName)
      };
    return (
        <Button
        className="project-card-button"
        size="lg"
        // variant="info"
        style={{
          backgroundColor: hoveredCardButton === props.name ? props.themeColor :  "rgb(249 249 249)",
          color: hoveredCardButton === props.name ? "rgb(249 249 249)" : props.themeColor,
          // backgroundColor: projectCard.backgroundColor,
          // color: projectCard.color,
          borderRadius: "5%",
          border: "2px solid " + props.themeColor,
          fontFamily: "monospace",
          // marginTop: "45px"
        }}
        onMouseEnter={() => changeButtonColor(props.name)}
        onMouseLeave={() => changeButtonColor("")}
      >
        <span style={{ fontSize: "1.1rem" }}>Learn More</span>
      </Button>
    )
}
