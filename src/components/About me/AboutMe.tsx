import { Container, Row, Col } from "react-bootstrap";
import contactImage from "../../assets/image/contact-img.svg";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <section className="about_me" id="about_me">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImage} alt="Contact me" />
          </Col>
          <Col md={6}>
            <h2>About Me</h2>
            <p>I'm currently enrolled as a sophomore at Ithaca College pursuing an undergraduate degree. I am majoring in Computer Science with a Data Science minor. I am interested in the Web Development field and have a decent amount of experience in it - mainly using the React framework - so I'm actively seeking internship opportunities related to the same.</p>
            <p>Over the course of my studies, I have developed strong programming skills, enjoy collaboration and teamwork, and have a wide variety of interest in Web Development. </p>
            <p>During the last year and a half, I have been practicing with multiple different frameworks and tools to build fascinating projects in various programming languages.</p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default AboutMe;