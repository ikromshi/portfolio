import { Container, Row, Col, Tab, Nav} from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/image/color-sharp2.png";

export const Projects = () => {
  const projects = [
    {
      title: "Title",
      description: "Description",
      imgUrl: "Image URL",
    }, 
    {
      title: "Title",
      description: "Description",
      imgUrl: "Image URL",
    }, 
    {
      title: "Title",
      description: "Description",
      imgUrl: "Image URL",
    }, 
    {
      title: "Title",
      description: "Description",
      imgUrl: "Image URL",
    }, 
    {
      title: "Title",
      description: "Description",
      imgUrl: "Image URL",
    }, 
    {
      title: "Title",
      description: "Description",
      imgUrl: "Image URL",
    }
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos totam aliquam magnam corporis voluptate neque voluptas vero, adipisci, nostrum beatae ab atque consequatur distinctio nobis commodi asperiores placeat odit! Labore!</p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab 3</Nav.Link>
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