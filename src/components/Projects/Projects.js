import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";


// Images for Expense Analyser
import ExpenseA1 from "../../Assets/Projects/ExpenseA1.png"
import ExpenseA2 from "../../Assets/Projects/ExpenseA2.png"
import ExpenseA3 from "../../Assets/Projects/ExpenseA3.png"
import ExpenseA4 from "../../Assets/Projects/ExpenseA4.png"


const ExpenseAImages = [ExpenseA1,ExpenseA2,ExpenseA3, ExpenseA4]

function Projects() {
  return (
    <Container fluid className="project-section" id="projects">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              projectType="Personal Project"
              imgPath={[chatify]}
              isBlog={false}
              title="Intelliboard"
              description="An Intelligent job board powered by artificial intelligence. The job board lists job postings extracted from LinkedIn. Document Embeddings generated from the T5 model are used alongside the Elastic Search vector search to show job postings with similar skill requirements. User interface built on React with Material UI library. Backend logic developed using Python with FastAPI web framework. "
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              projectType="Personal Project"
              imgPath={ExpenseAImages}
              isBlog={false}
              title="Personal Expense Analyzer"
              description="A web application for analyzing bank and credit card statements in India. Built with React (Blueprint.js and Evergreen-UI), Spring Boot, and MongoDB. Developed insightful visualizations for time series and cluster analysis with D3.js"
              ghLink="https://github.com/jessjosephbenny/expense-analyser-server"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
