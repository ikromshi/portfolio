import { Col } from "react-bootstrap"
import { Project } from "../../Types/Types";

export const ProjectCard = ({ title, description, imgUrl, webUrl }: Project) => {
  
  return (
    <Col sm={6} md={4}>
      <a href={webUrl} target="blank">
        <div className="proj-imgbx">
          <img src={imgUrl} className="proj-img"/>
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </a>
    </Col>
  )
}