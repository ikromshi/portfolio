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
import firestoreNew from "../../assets/skill-logos/firestore-svgrepo-com.svg"


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
                  <img src={typescript} alt="TS" title="TS" className="img"/>
                </Col>
                <Col className="item" xs={6} md={4} lg={2} alt="JS" title="JS">
                  <img src={javascript} alt="SVG icon"/>
                </Col>
                <Col className="item" xs={6} md={4} lg={2} alt="Java" title="Java">
                  <img src={java} alt="SVG icon"/>
                </Col>
                <Col className="item" xs={6} md={4} lg={2} alt="Python" title="Python">
                  <img src={python} alt="SVG icon"/>
                </Col>
                <Col className="item" xs={6} md={4} lg={2} alt="C" title='C'>
                  <img src={c} alt="SVG icon"/>
                </Col>
                <Col className="item" xs={6} md={4} lg={2} alt='R' title="R">
                  <img src={r} alt="SVG icon"/>
                </Col>
                <Col className="item" xs={6} md={4} lg={2} alt="CSS" title="CSS">
                  <img src={css} alt="SVG icon"/>
                </Col>
                <Col className="item" xs={6} md={4} lg={2} alt='HTML' title="HTML">
                  <img src={html} alt="SVG icon"/>
                </Col>
                
              </Row>
              <h4>Tools I commonly use in my projects:</h4>
              <Row className="skill-slider">
                <Col className="item" xs={6} md={4} lg={2} alt="React" title="React">
                  <img src={react} alt="SVG icon"className="img"/>
                </Col>
                <Col className="item" xs={6} md={4} lg={2} alt="Redux" title="Redux">
                  <img src={redux} alt="SVG icon"/>
                </Col>
                <Col className="item" xs={6} md={4} lg={2} alt="Firebase" title='Firebase'>
                  <img src={firebase} alt="SVG icon"/>
                </Col>
                <Col className="item" xs={6} md={4} lg={2} alt="SASS" title="SASS">
                  <img src={sass} alt="SVG icon"/>
                </Col>
                <Col className="item" xs={6} md={4} lg={2} alt='Firestore' title="Firestore">
                  <img src={firestoreNew} alt="SVG icon"/>
                </Col>
                <Col className="item" xs={6} md={4} lg={2} alt="Git" title="Git">
                  <img src={git} alt="SVG icon"/>
                </Col>
                <Col className="item" xs={6} md={4} lg={2} alt="Github" title="Github">
                  <img src={github} alt="SVG icon"/>
                </Col>
                <Col className="item" xs={6} md={4} lg={2} alt='Flask' title='Flask'>
                  <img src={flask} alt="SVG icon"/>
                </Col>
                <Col className="item" xs={6} md={4} lg={2} alt="SQLAlchemy" title="SQLAlchemy">
                  <img src={sqlalchemy} alt="SVG icon"/>
                </Col>
                <Col className="item" xs={6} md={4} lg={2} alt="SQLine" title="SQLite">
                  <img src={sqlite} alt="SVG icon"/>
                </Col>
                <Col className="item" xs={6} md={4} lg={2} alt="Spring Boot" title="Spring Boot">
                  <img src={spring} alt="SVG icon"/>
                </Col>
                <Col className="item" xs={6} md={4} lg={2} alt='Pandas' title="Pandas">
                  <img src={pd} alt="SVG icon"/>
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