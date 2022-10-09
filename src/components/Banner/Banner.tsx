import { useEffect, useState } from "react"; 
import { Col, Container, Row } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from "../../assets/image/header-img.svg"
import "./Banner.css";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const wordsToRotate = ["Web Dev Enthusiast.", "CS Sophomore.", "React Developer."];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random()*100)
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker)};
  }, [text]);

  const tick = () => {
    let i = loopNum % wordsToRotate.length;
    let fullText = wordsToRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length-1) : fullText.substring(0, text.length+1);
    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta/2);
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum+1);
      setDelta(500);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-cente">
          <Col xs={12} md={6} xl={7}>
            {/* <span className="tagline">Welcome to my Portfolio!</span> */}
            <h1>{`Hi, I'm Ikrom. I am a `}<span className="wrap">{text}</span></h1>
            <h3>Welcome to my Web Portfolio!</h3> <br />
            <p>Here you will have a slight glimpse into my professional world. I have created this website to tell you a little bit about myself as well as share some of the work I've done and skills I've acquired as a CS major.</p> <br />
            
            <a href="https://www.linkedin.com/in/ikromshi/" target="blank">
              <button>Let's connect <ArrowRightCircle size={25}/></button>
            </a>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Image" />
          </Col>
        </Row>
      </Container>
    </section>

  )
}