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

  const linkElements = {
    Home: {
      scrollElementName: "home",
      icon: AiFillHome,
    },
    About: {
      scrollElementName: "about",
      icon: RiUser3Fill
    },
    Timeline: {
      scrollElementName: "timeline",
      icon: RiFootprintFill
    },
    Projects: {
      scrollElementName: "projects",
      icon: AiFillAppstore,
    },
    Skills: {
      scrollElementName: "skills",
      icon: RiStackFill,
    },
    Contact: {
      scrollElementName: "contact",
      icon: IoMdChatbubbles
    }
  }

  return (
    <Navbar
      id="navbar"
      className="justify-content-center"
      sticky="top"
      variant="dark"
      expand="lg"
      onToggle={() => setIsNavExpanded(!isNavExpanded)}
      expanded={ isNavExpanded }
    >
      <Navbar.Toggle id="responsive-navbar-toggle" />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="justify-content-center"
      >
        <Nav>
          {Object.keys(linkElements).map((linkElement, index) => {
            return (
              <Link
                key={index}
                className="nav-item zoom"
                activeClass="active"
                to={linkElements[linkElement].scrollElementName}
                spy={true}
                smooth={true}
                duration={500}
                offset={isTabletOrMobile? -275 : -65}
                onClick={() => setIsNavExpanded(false)}
              >
                <div className="icon-container">{React.createElement(linkElements[linkElement].icon, null, "")}</div>
                <span style={{ fontSize: "0.9em" }}>{linkElement}</span>
              </Link>
            );
          })}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
