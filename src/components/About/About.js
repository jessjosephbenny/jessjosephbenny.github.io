import React from "react";
import Profile from "../../Assets/Profile.jpg"
import { Col, Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import SidePanel from "../SidePanel";

function About(){
    return(
        <Container fluid className="about-me-section" id="about">
        <Particle />
        <Container>
          <h1 className="project-heading">
            <strong className="purple">About</strong> Me
          </h1>
        <Row className="about-me-content">
            <Col md={7} >
                <p className="about-me-description">
                    Passionate and motivated MSc Computer Science candidate majoring in Artificial Intelligence. Strong interest and research background in AI, especially in Natural Language Processing (NLP), Deep Learning and Statistical Analysis. 3.5 years of professional experience as a software engineer and two years of AI Research Experience.
                </p>
            </Col>
            <Col md={5}>
                <div className="about-me-main-circle">
                    <img src={Profile} alt="Profile"/>
                </div>
            </Col>
        </Row>
        <Row className="justify-content-center">
            <SidePanel orientation="horizontal"/>
        </Row>
        </Container>
      </Container>
    )
}
export default About