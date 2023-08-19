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
            <h2>About Me</h2>
            <p>I'm currently enrolled as a sophomore at Ithaca College pursuing an undergraduate degree. I am majoring in Computer Science with a Data Science minor. I'm also interested in the Web Development field and have a decent amount of experience in it - mainly using the React framework - so I'm actively seeking internship opportunities related to the same.</p>
            <p>Over the course of my studies, I have developed strong programming skills, did a lot of collaboration and teamwork, and experienced an ever-growing interest in learning more about the field. During the last year and a half, I've been practicing with multiple different tools and frameworks to build fascinating projects.</p>
            <p>
              My project "tool stack" includes:
              <ul>
                <li>
                  React with TypeScript
                </li> 
                <li>
                  CSS/SASS | Styled Components
                </li> 
                <li>
                  Flask with Python
                </li> 
                <li>
                  SQLAlchemy, SQLite, SQL | Firestore
                </li> 
              </ul>
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