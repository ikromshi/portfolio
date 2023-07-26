import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap"; 
import css from "../../assets/skill-logos/css.svg";
import firebase from "../../assets/skill-logos/firebase.svg";
import spring from "../../assets/skill-logos/spring.svg";
import c from "../../assets/skill-logos/c.svg";
import pd from "../../assets/skill-logos/pd.svg";
import flask from "../../assets/skill-logos/flask.svg";
import git from "../../assets/skill-logos/git.svg";
import github from "../../assets/skill-logos/github.svg";
import html from "../../assets/skill-logos/html.svg";
import java from "../../assets/skill-logos/java.svg";
import javascript from "../../assets/skill-logos/javascript.svg";
import python from "../../assets/skill-logos/python.svg";
import r from "../../assets/skill-logos/r.svg";
import react from "../../assets/skill-logos/react.svg";
import redux from "../../assets/skill-logos/redux.svg";
import sass from "../../assets/skill-logos/sass.svg";
import sqlalchemy from "../../assets/skill-logos/sqlalchemy.svg";
import sqlite from "../../assets/skill-logos/sqlite.svg";
import typescript from "../../assets/skill-logos/typescript.svg";
import colorSharp from "../../assets/image/color-sharp.png";



import "./Skills.css";

const Skills = () => {
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>My Skills</h2>
              <p>I have a wide variety of experience with the tools shown below.</p>
              <h4>I am proficient in:</h4>
              <Row className="skill-slider">
                <Col className="item" xs={6} md={4} lg={2}>
                  <img src={typescript} alt="SVG icon"className="img"/>
                  <h5>TS</h5>
                </Col>
                <Col className="item" xs={6} md={4} lg={2}>
                  <img src={javascript} alt="SVG icon"/>
                  <h5>JS</h5>
                </Col>
                <Col className="item" xs={6} md={4} lg={2}>
                  <img src={java} alt="SVG icon"/>
                  <h5>Java</h5>
                </Col>
                <Col className="item" xs={6} md={4} lg={2}>
                  <img src={python} alt="SVG icon"/>
                  <h5>Python</h5>
                </Col>
                <Col className="item" xs={6} md={4} lg={2}>
                  <img src={c} alt="SVG icon"/>
                  <h5>C</h5>
                </Col>
                <Col className="item" xs={6} md={4} lg={2}>
                  <img src={r} alt="SVG icon"/>
                  <h5>R</h5>
                </Col>
                <Col className="item" xs={6} md={4} lg={2}>
                  <img src={css} alt="SVG icon"/>
                  <h5>CSS</h5>
                </Col>
                <Col className="item" xs={6} md={4} lg={2}>
                  <img src={html} alt="SVG icon"/>
                  <h5>HTML</h5>
                </Col>
                
              </Row>
              <h4>Tools I commonly use in my projects:</h4>
              <Row className="skill-slider">
                <Col className="item" xs={6} md={4} lg={2}>
                  <img src={react} alt="SVG icon"className="img"/>
                  <h5>React</h5>
                </Col>
                <Col className="item" xs={6} md={4} lg={2}>
                  <img src={redux} alt="SVG icon"/>
                  <h5>Redux</h5>
                </Col>
                <Col className="item" xs={6} md={4} lg={2}>
                  <img src={firebase} alt="SVG icon"/>
                  <h5>Firebase</h5>
                </Col>
                <Col className="item" xs={6} md={4} lg={2}>
                  <img src={sass} alt="SVG icon"/>
                  <h5>Sass</h5>
                </Col>
                <Col className="item" xs={6} md={4} lg={2}>
                  <img src={firebase} alt="SVG icon"/>
                  <h5>Firestore</h5>
                </Col>
                <Col className="item" xs={6} md={4} lg={2}>
                  <img src={git} alt="SVG icon"/>
                  <h5>Git</h5>
                </Col>
                <Col className="item" xs={6} md={4} lg={2}>
                  <img src={github} alt="SVG icon"/>
                  <h5>Github</h5>
                </Col>
                <Col className="item" xs={6} md={4} lg={2}>
                  <img src={flask} alt="SVG icon"/>
                  <h5>Flask</h5>
                </Col>
                <Col className="item" xs={6} md={4} lg={2}>
                  <img src={sqlalchemy} alt="SVG icon"/>
                  <h5>SQLAlchemy</h5>
                </Col>
                <Col className="item" xs={6} md={4} lg={2}>
                  <img src={sqlite} alt="SVG icon"/>
                  <h5>SQLite</h5>
                </Col>
                <Col className="item" xs={6} md={4} lg={2}>
                  <img src={spring} alt="SVG icon"/>
                  <h5>Spring Boot</h5>
                </Col>
                <Col className="item" xs={6} md={4} lg={2}>
                  <img src={pd} alt="SVG icon"/>
                  <h5>Pandas</h5>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
      
      <img className="background-image-left" src={colorSharp} alt="icon" />
    </section>
  )
}

export default Skills;