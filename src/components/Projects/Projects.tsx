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

const Projects = () => {
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
      webUrl: "https://path-finder.ikromshi.com/"
    }, 
    {
      title: "Monsters Rolodex",
      description: "This is my first React project. Here I'm pulling raw data from the Robohash API to build multiple cards of Robots that you can filter by name.",
      imgUrl: monsterRolodex,
      webUrl: "monsters-rolodex.ikromshi.com/"
    }
  ];

  const jsProjects = [
    {
      title: "Hangman",
      description: "I had to start somewhere, right? Check out my version of Hangman, which by the way was my first vanilla JS project ever, followed by - you guessed it - Notes and To-Do apps.",
      imgUrl: hangmanApp,
      webUrl: "https://hangman.ikromshi.com/"
    },
    {
      title: "Notes App",
      description: "This project taught me a lot. Here, I learned how to work with the DOM to carry out CRUD operations. I learned how to work with forms and their inputs, which definitely laid the groundwork for my next projects.", 
      imgUrl: notesApp,
      webUrl: "https://notes.ikromshi.com	"
    },
    {
      title: "To-Do app",
      description: "Your web development portfolio isn't complete unless you made a cool, functional To-Do app. And that's exactly what I did here. This app solidified my basic JS knowledge, since I had to do a lot of filtering and sorting to get everything right.",
      imgUrl: todoApp,
      webUrl: "https://todo.ikromshi.com	/"
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
                <Tab.Pane className="other-projects" eventKey="third">
                    <p>Check out my <a href="https://github.com/ikromshi">GitHub page</a> to see other fun projects that I'm constantly working on in my own time as well as in classes I'm taking in college!</p>
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

export default Projects;