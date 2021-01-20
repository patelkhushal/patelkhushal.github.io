import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-scroll";
import { useMediaQuery } from 'react-responsive'
import { AiFillHome, AiFillAppstore } from "react-icons/ai";
import { RiUser3Fill, RiStackFill, RiFootprintFill } from "react-icons/ri";
import { IoMdChatbubbles } from "react-icons/io";

export default function NavBar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 991px)' })

  const linkElements = ["home", "about", "timeline", "projects", "jisoo", "joy"];
  const iconLabels = [
    "Home",
    "About",
    "Timeline",
    "Projects",
    "Skills",
    "Contact",
  ];
  const linkElementsIcons = [
    AiFillHome,
    RiUser3Fill,
    RiFootprintFill,
    AiFillAppstore,
    RiStackFill,
    IoMdChatbubbles,
  ];

  const IconTag = (iconIndex) => {
    return React.createElement(linkElementsIcons[iconIndex], null, "");
  };

  return (
    <Navbar
      id="navbar"
      className="justify-content-center"
      sticky="top"
      // bg="white"
      variant="dark"
      expand="lg"
      style={{ minHeight: "7.12vh" }}
      onToggle={() => setIsNavExpanded(!isNavExpanded)}
      // onSelect={() => setIsNavExpanded((currentIsNavExpanded) => !currentIsNavExpanded)}
      // onToggle={setIsNavExpanded(currentIsNavExpanded => !currentIsNavExpanded)}
      expanded={isNavExpanded}
    >
      <Navbar.Toggle id="responsive-navbar-toggle" />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="justify-content-center"
      >
        <Nav>
          {linkElements.map((linkElementName, index) => {
            return (
              <Link
                key={index}
                className="nav-item zoom"
                activeClass="active"
                to={linkElementName}
                spy={true}
                smooth={true}
                duration={475}
                // offset={-275}
                offset={isTabletOrMobile? -275 : -65}
                // offset={isTabletOrMobile? -275 : -65}
                // offset={-55}
                onClick={() => setIsNavExpanded(false)}
                // onSetInactive={() => setIsNavExpanded(false)}
              >
                <div className="icon-container">{IconTag(index)}</div>
                <span style={{ fontSize: "0.9em" }}>{iconLabels[index]}</span>
              </Link>
            );
          })}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
