import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap"; 
import css from "../../assets/skill-logos/css.svg";
import firebase from "../../assets/skill-logos/firebase.svg";
import flask from "../../assets/skill-logos/flask.svg";
import git from "../../assets/skill-logos/git.svg";
import github from "../../assets/skill-logos/github.svg";
import graphql from "../../assets/skill-logos/graphql.svg";
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
import firestore from "../../assets/skill-logos/firestore.svg";
import colorSharp from "../../assets/image/color-sharp.png";
import arrow1 from "../../assets/image/arrow1.svg";

import "./Skills.css";

export const Skills = () => {
  const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, animi amet. Placeat, culpa animi. Est explicabo totam sit perferendis a et iste, amet neque nam, ab, aut similique magni perspiciatis.</p>
              <h4>Languages I am proficient in:</h4>
              <Row className="skill-slider">
                <Col className="item">
                  <img src={typescript} alt="Img" className="img"/>
                  <h5>TypeScript</h5>
                </Col>
                <Col className="item">
                  <img src={javascript} alt="Img" />
                  <h5>JavaScript</h5>
                </Col>
                <Col className="item">
                  <img src={java} alt="Img" />
                  <h5>Java</h5>
                </Col>
                <Col className="item">
                  <img src={python} alt="Img" />
                  <h5>Python</h5>
                </Col>
                <Col className="item">
                  <img src={r} alt="Img" />
                  <h5>R</h5>
                </Col>
                <Col className="item">
                  <img src={css} alt="Img" />
                  <h5>CSS</h5>
                </Col>
                <Col className="item">
                  <img src={html} alt="Img" />
                  <h5>HTML</h5>
                </Col>
                
              </Row>
              <h4>Tools I commonly in my front-end projects:</h4>
              <Row className="skill-slider">
                <Col className="item">
                  <img src={react} alt="Img" className="img"/>
                  <h5>React</h5>
                </Col>
                <Col className="item">
                  <img src={redux} alt="Img" />
                  <h5>Redux</h5>
                </Col>
                <Col className="item">
                  <img src={firebase} alt="Img" />
                  <h5>Firebase</h5>
                </Col>
                <Col className="item">
                  <img src={sass} alt="Img" />
                  <h5>Sass</h5>
                </Col>
                <Col className="item">
                  <img src={firebase} alt="Img" />
                  <h5>Firestore</h5>
                </Col>
                <Col className="item">
                  <img src={git} alt="Img" />
                  <h5>Git</h5>
                </Col>
                <Col className="item">
                  <img src={github} alt="Img" />
                  <h5>Github</h5>
                </Col>
              </Row>
              <h4>Tools I'm currently learning:</h4>
              <Row className="skill-slider">
                <Col className="item">
                  {/* <img src={react} alt="Img" className="img"/>
                  <h5>React</h5> */}
                </Col>
                <Col className="item">
                  {/* <img src={redux} alt="Img" />
                  <h5>Redux</h5> */}
                </Col>
                <Col className="item">
                  <img src={flask} alt="Img" />
                  <h5>Flask</h5>
                </Col>
                <Col className="item">
                  <img src={sqlalchemy} alt="Img" />
                  <h5>SQLAlchemy</h5>
                </Col>
                <Col className="item">
                  <img src={sqlite} alt="Img" />
                  <h5>SQLite</h5>
                </Col>
                <Col className="item">
                  {/* <img src={git} alt="Img" />
                  <h5>Git</h5> */}
                </Col>
                <Col className="item">
                  {/* <img src={github} alt="Img" />
                  <h5>Github</h5> */}
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
      
      <img className="background-image-left" src={colorSharp} alt="background image left" />
    </section>
  )

}