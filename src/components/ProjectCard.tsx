import { Col } from "react-bootstrap"
import { Project } from "../Types/Types";

export const ProjectCard = ({ title, description, imgUrl }: Project) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl}/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}