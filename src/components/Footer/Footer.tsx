import { Container, Row, Col } from "react-bootstrap";
import logo from "../../assets/image/logo.svg";
import Email from "../../assets/image/email.png";
import LinkedIn from "../../assets/image/linkedin2.png";
import Github from "../../assets/image/github.png";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row id="footer-row" className="align-items-right">
          <div id="social-icon">
            <a href="https://www.linkedin.com/in/ikromshi/" target="blank"><img src={LinkedIn} alt="" /></a>
            <a href="https://github.com/ikromshi" target="blank"><img src={Github} alt="" /></a>
            <a href="mailto:numanovikrom454@gmail.com"><img src={Email} alt="" /></a>
            <h4><a href="https://t.me/ikromshi" id="telegram-link">&#64;Ikromshi</a></h4>
          </div>
        </Row>
      </Container>
    </footer>
  )
}