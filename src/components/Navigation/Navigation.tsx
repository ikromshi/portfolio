import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { useEffect, useState } from "react";
import Logo from "../../assets/image/Ikrom.svg";
import Email from "../../assets/image/email.png";
import LinkedIn from "../../assets/image/linkedin2.png";
import Github from "../../assets/image/github.png";
import "../../assets/image/Ikrom.svg";
import "./Navigation.css";

export const Navigation = () => {
  const [activeLink, setActiveLink] = useState<String>("home");
  const [scrolled, setScrolled] = useState<Boolean>(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value: String) => {
    setActiveLink(value);
  }

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={Logo} alt="Logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className={activeLink === "home" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("home")}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === "skills" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("skills")}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === "projects" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("projects")}>Projects</Nav.Link>
            <Nav.Link href="#about_me" className={activeLink === "about_me" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("about_me")}>About Me</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/ikrom-numonov-79107020a?trk=public_profile_browsemap" target="blank"><img src={LinkedIn} alt="social" /></a>
              <a href="https://github.com/ikromshi" target="blank"><img src={Github} alt="social" /></a>
              <a href="mailto:numanovikrom454@gmail.com" target="blank"><img src={Email} alt="social" /></a>
            </div>
            <a href="https://www.linkedin.com/in/ikrom-numonov-79107020a?trk=public_profile_browsemap" target="blank">
              <button className="vvd">
                Let's Connect
              </button>
            </a>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}