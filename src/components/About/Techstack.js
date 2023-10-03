import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiAngularSimple,
} from "react-icons/di";
import {
  SiRedis,
  SiPostgresql,
  SiTensorflow,
  SiPytorch,
  SiKeras,
  SiScikitlearn,
  SiSpringboot,
  SiExpress,
  SiDjango,
  SiFastapi,
  SiLoopback,
  SiAdobe,
  SiMicrosoftsqlserver,
  SiMysql,
  SiOracle,
  SiJira,
  SiConfluence
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <>
    <h2 style={{textAlign:"left"}}>
      Programming Languages
    </h2>
    <Row style={{ justifyContent: "left", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython className="tech-icon" />
        <figcaption>Python</figcaption>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava className="tech-icon"/>
        <figcaption>Java</figcaption>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 className="tech-icon"/>
        <figcaption>JavaScript</figcaption>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus className="tech-icon"/>
        <figcaption>C++</figcaption>
      </Col>
    </Row>
    <h2 style={{textAlign:"left"}}>
      Backend Frameworks
    </h2>
    <Row>
      <Col xs={4} md={2} className="tech-icons">
        <SiSpringboot className="tech-icon"/>
        <figcaption>Spring Boot</figcaption>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs className="tech-icon"/>
        <figcaption>Node Js</figcaption>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDjango className="tech-icon"/>
        <figcaption>Django Rest</figcaption>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFastapi className="tech-icon"/>
        <figcaption>FastAPI</figcaption>
      </Col>  
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobe className="tech-icon"/>
        <figcaption>Adobe ColdFusion</figcaption>
      </Col>  
    </Row>
    <h2 style={{textAlign:"left"}}>
      Frontend Frameworks
    </h2>
    <Row>
    <Col xs={4} md={2} className="tech-icons">
        <DiReact className="tech-icon"/>
        <figcaption>React</figcaption>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiAngularSimple className="tech-icon"/>
        <figcaption>Angular</figcaption>
      </Col>
    </Row>
    <h2 style={{textAlign:"left"}}>
      Artificial Intelligence Technologies 
    </h2>
    <Row>
      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow className="tech-icon"/>
        <figcaption>Tensorflow</figcaption>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPytorch className="tech-icon"/>
        <figcaption>PyTorch</figcaption>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiScikitlearn className="tech-icon"/>
        <figcaption>scikit-learn</figcaption>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKeras className="tech-icon"/>
        <figcaption>Keras</figcaption>
      </Col>      
    </Row>
    <h2 style={{textAlign:"left"}}>
      Databases
    </h2>
    <Row>
    <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftsqlserver className="tech-icon"/>
        <figcaption>SQL Server</figcaption>
    </Col>
    <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql className="tech-icon"/>
        <figcaption>PostgreSQL</figcaption>
    </Col>
    <Col xs={4} md={2} className="tech-icons">
        <DiMongodb className="tech-icon"/>
        <figcaption>MongoDB</figcaption>
    </Col>
    <Col xs={4} md={2} className="tech-icons">
        <SiMysql className="tech-icon"/>
        <figcaption>MySQL</figcaption>
    </Col>
    </Row>
    <h2 style={{textAlign:"left"}}>
      Tools and Methodologies
    </h2>
    <Row>
    <Col xs={4} md={2} className="tech-icons">
        <DiGit className="tech-icon"/>
        <figcaption>Git</figcaption>
    </Col>
    <Col xs={4} md={2} className="tech-icons">
        <h3 style={{fontWeight:"bold", marginTop:"36px"}}>Ajile</h3>
    </Col>
    <Col xs={4} md={2} className="tech-icons">
        <SiJira className="tech-icon"/>
        <figcaption>Jira</figcaption>
    </Col>
    <Col xs={4} md={2} className="tech-icons">
        <SiConfluence className="tech-icon"/>
        <figcaption>Confluence</figcaption>
    </Col>
    </Row>
    </>
  );
}

export default Techstack;
