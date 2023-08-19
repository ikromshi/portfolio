import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import contactImage from "../../assets/image/contact-img.svg";
import Resume from "../../assets/media/Resume.pdf";
import "./AboutMe.css";

import ReactGA from "react-ga";

const useAnalyticsEventTracker = (category="interaction") => {
  const eventTracker = (action = "see resume", label = "resume") => {
    ReactGA.event({category, action, label});
  }
  return eventTracker;
}

const AboutMe = () => {
  const gaEventTracker = useAnalyticsEventTracker('See resume');

  return (
    <section className="about_me" id="about_me">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImage} alt="Contact me" />
          </Col>
          <Col md={6}>
            <h2>
              About Me
            </h2>
            <p>
              Hello! I'm Ikrom Numonov, currently a junior at Ithaca College, majoring in Computer Science and minoring in Data Science.
              I'm passionate about the interplay between software and data, and how it shapes our digital future.
            </p>
            <p>
              My technical toolkit is versatile, ranging from languages like Python, Java, JavaScript, and TypeScript, to platforms like React.js/Redux, Flask, and Spring Boot. 
            </p>
            <p>
              Always eager to collaborate, innovate, and learn, I'm seeking opportunities to apply my skills and contribute to tech-forward endeavors.
            </p>
            <a className="resume-button" href={Resume} target="_blank" onClick={() => gaEventTracker("resume")}>
              <button>Get my resume <ArrowRightCircle size={25} /></button> 
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export {AboutMe, useAnalyticsEventTracker};