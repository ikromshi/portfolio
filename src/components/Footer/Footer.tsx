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
        <Row className="align-items-center">
        {/* <Col xm={6} className="text-center text-sm-end"> */}
          <div id="social-icon">
            <a href="https://www.linkedin.com/in/ikrom-numonov-79107020a?trk=public_profile_browsemap" target="blank"><img src={LinkedIn} alt="" /></a>
            <a href="https://github.com/ikromshi" target="blank"><img src={Github} alt="" /></a>
            <a href=""><img src={Email} alt="" /></a>
          </div>
          <p><a href="https://t.me/ikromshi" id="telegram-link">Ikromshi</a></p>
        {/* </Col> */}
        </Row>
      </Container>
    </footer>
  )
}