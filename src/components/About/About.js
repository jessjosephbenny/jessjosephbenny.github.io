import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";

function About() {
  return (
    <Container fluid className="about-section" id="about">
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

export default About;
