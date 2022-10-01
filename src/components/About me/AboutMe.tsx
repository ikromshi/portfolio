import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react"
import contactImage from "../../assets/image/contact-img.svg";
import "./AboutMe.css";

export const AboutMe = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  }
  
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({success: false, message: ""});

  const onFormUpdate = (category: string, value: string) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setButtonText("Sending...");
    
    let respnse = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await respnse.json();
    setFormDetails(formInitialDetails);

    if (result.code === 200) {
      setStatus({success: true, message: "Message Sent Successfully"});
    } else {
      setStatus({ success: false, message: "Something Went Wrong. Please Try Again Later :("})
    }
  };

  return (
    <section className="about_me" id="about_me">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImage} alt="Contact me" />
          </Col>
          <Col md={6}>
            <h2>About Me</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quisquam culpa ab aut sequi rerum cupiditate modi in est sit reprehenderit deleniti sed, neque aliquam dolorem quibusdam provident voluptates hic!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quisquam culpa ab aut sequi rerum cupiditate modi in est sit reprehenderit deleniti sed, neque aliquam dolorem quibusdam provident voluptates hic!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quisquam culpa ab aut sequi rerum cupiditate modi in est sit reprehenderit deleniti sed, neque aliquam dolorem quibusdam provident voluptates hic!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quisquam culpa ab aut sequi rerum cupiditate modi in est sit reprehenderit deleniti sed, neque aliquam dolorem quibusdam provident voluptates hic!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quisquam culpa ab aut sequi rerum cupiditate modi in est sit reprehenderit deleniti sed, neque aliquam dolorem quibusdam provident voluptates hic!</p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}