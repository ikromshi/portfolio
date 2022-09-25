import { useEffect, useState } from "react"; 
import { Col, Container, Row } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from "../../assets/image/header-img.svg"
import "./Banner.css";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const wordsToRotate = ["Web Developer.", "CS Sophomore.", "React Developer."];
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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam officia labore sapiente tempora ipsa dolores quaerat quidem maxime eius debitis sequi, cumque ad provident reiciendis quo repellat molestias voluptates rem!</p>
            <button onClick={() => console.log("Cliked")}>Let's connect <ArrowRightCircle size={25}/></button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Image" />
          </Col>
        </Row>
      </Container>
    </section>

  )
}