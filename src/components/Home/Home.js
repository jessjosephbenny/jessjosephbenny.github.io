import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/Data extraction-rafiki.svg";
import Particle from "../Particle";
import Type from "./Type";
import SidePanel from '../SidePanel'
import Projects from "../Projects/Projects";
import Timeline from "../Timeline";
import About from "../About/About";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
              </h1>
              <h1 className="heading-name">
                I am
                <strong className="main-name"> Jess Joseph Benny</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
              <SidePanel/>
            </Col>
          </Row>
        </Container>
      </Container>
      <Timeline/>
      <Projects/>
      <About/>
    </section>
  );
}

export default Home;
