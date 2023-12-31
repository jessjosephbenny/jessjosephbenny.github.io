import React from "react";
import { Container} from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";

function Skills() {
  return (
    <Container fluid className="about-section" id="skills">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Technical <strong className="purple">Skills </strong>
        </h1>
        <Techstack />
      </Container>
    </Container>
  );
}

export default Skills;
