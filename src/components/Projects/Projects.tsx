import { Container, Row, Col, Tab, Nav} from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../../assets/image/color-sharp2.png";
import crownClothing from "../../assets/image/crown-clothing.png";
import dijkstra from "../../assets/image/dijkstra.png";
import monsterRolodex from "../../assets/image/monster-rolodex.png";
import "./Projects.css";

export const Projects = () => {
  const projects = [
    {
      title: "Crown Clothing",
      description: "This is the biggest project I've worked on so far",
      imgUrl: crownClothing,
      webUrl: "https://crown-clothing-ikk.netlify.app/"
    }, 
    {
      title: "Title",
      description: "Description",
      imgUrl: dijkstra,
      webUrl: "https://pathfinding-algorithm-ikk.netlify.app/"
    }, 
    {
      title: "Title",
      description: "Description",
      imgUrl: monsterRolodex,
      webUrl: "https://monsters-ikk.netlify.app/"
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos totam aliquam magnam corporis voluptate neque voluptas vero, adipisci, nostrum beatae ab atque consequatur distinctio nobis commodi asperiores placeat odit! Labore!</p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="first">TS React</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Vanilla JS</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Others</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content >
                <Tab.Pane eventKey="first">
                  <Row>
                    {
                      projects.map((project, index) => {
                        return (
                          <ProjectCard key={index} {...project}/>
                        )
                      })
                    }
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp2} alt="" className="background-image-right" />
    </section>
  )
}