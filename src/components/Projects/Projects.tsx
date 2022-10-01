import { Container, Row, Col, Tab, Nav} from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../../assets/image/color-sharp2.png";
import crownClothing from "../../assets/image/crown-clothing.png";
import dijkstra from "../../assets/image/dijkstra.png";
import todoApp from "../../assets/image/todo-app.png";
import notesApp from "../../assets/image/notes-app.png";
import hangmanApp from "../../assets/image/hangman-app.png";
import monsterRolodex from "../../assets/image/monster-rolodex.png";
import "./Projects.css";

export const Projects = () => {
  const reactProjects = [
    {
      title: "Crown Clothing",
      description: "Browse through the clothes on my E-Commerce project. You can even pay for the items you add to your card - you won't be able to buy them though. More info on my GitHub.",
      imgUrl: crownClothing,
      webUrl: "https://crown-clothing-ikk.netlify.app/"
    }, 
    {
      title: "Dijkstra Visualizer",
      description: "Check out my version of the Dijkstra Visualizer. You can build walls around the Start and End nodes to find the shortest path between them.",
      imgUrl: dijkstra,
      webUrl: "https://pathfinding-algorithm-ikk.netlify.app/"
    }, 
    {
      title: "Monsters Rolodex",
      description: "This is my first React project. Here I'm pulling raw data from the Robohash API to build multiple cards of Robots that you can filter by name.",
      imgUrl: monsterRolodex,
      webUrl: "https://monsters-ikk.netlify.app/"
    }
  ];

  const jsProjects = [
    {
      title: "Hangman",
      description: "This is my first React project. Here I'm pulling raw data from the Robohash API to build multiple cards of Robots that you can filter by name.",
      imgUrl: hangmanApp,
      webUrl: "https://hangman-ikk.netlify.app/"
    },
    {
      title: "Notes App",
      description: "This is my first React project. Here I'm pulling raw data from the Robohash API to build multiple cards of Robots that you can filter by name.",
      imgUrl: notesApp,
      webUrl: "https://note-ikk.netlify.app/"
    },
    {
      title: "To-Do app",
      description: "This is my first React project. Here I'm pulling raw data from the Robohash API to build multiple cards of Robots that you can filter by name.",
      imgUrl: todoApp,
      webUrl: "https://todo-ikk.netlify.app/"
    }
  ]

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>Click through my projects below.</p>
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
                      reactProjects.map((project, index) => {
                        return (
                          <ProjectCard key={index} {...project}/>
                        )
                      })
                    }
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                <Row>
                    {
                      jsProjects.map((project, index) => {
                        return (
                          <ProjectCard key={index} {...project}/>
                        )
                      })
                    }
                  </Row>
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