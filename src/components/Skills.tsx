import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap"; 
import meter1 from "../assets/image/meter1.svg";
import meter2 from "../assets/image/meter2.svg";
import meter3 from "../assets/image/meter3.svg";
import colorSharp from "../assets/image/color-sharp.png";

export const Skills = () => {
  const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
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
              <Carousel responsive={responsive} infinite={true} className="skill-slider">
                <div className="item">
                  <img src={meter1} alt="Img" />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Img" />
                  <h5>Skill 2</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Img" />
                  <h5>Skill 3</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Img" />
                  <h5>Skill 4</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      
      <img className="background-image-left" src={colorSharp} alt="background image left" />
    </section>
  )

}