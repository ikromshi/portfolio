import { Container, Row, Col } from "react-bootstrap";
import logo from "../../assets/image/logo.svg";
import NavIcon1 from "../../assets/image/nav-icon1.svg";
import NavIcon2 from "../../assets/image/nav-icon2.svg";
import NavIcon3 from "../../assets/image/nav-icon3.svg";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
        {/* <Col xm={6}>
          <img src={logo} alt="logo" />
        </Col> */}
        <Col xm={6} className="text-center text-sm-end">
          <div className="social-icon">
            <a href=""><img src={NavIcon1} alt="" /></a>
            <a href=""><img src={NavIcon2} alt="" /></a>
            <a href=""><img src={NavIcon3} alt="" /></a>
          </div>
          <p>CopyRight 2022. All Rights Reserved by <a href="https://t.me/ikromshi" id="telegram-link">Ikromshi.</a></p>
        </Col>
        </Row>
      </Container>
    </footer>
  )
}