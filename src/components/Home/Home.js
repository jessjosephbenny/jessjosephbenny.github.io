import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/Data extraction-rafiki.svg";
import Particle from "../Particle";
import Type from "./Type";
import SidePanel from '../SidePanel'
import Projects from "../Projects/Projects";
import Timeline from "../Timeline";
import Skills from "../About/Skills";
import About from "../About/About";
import { useLocation } from "react-router-dom";

function Home() {
  const location = useLocation()
  useEffect(() => {
    // Check if there is no hash in the URL
    if (!location.hash) {
      // Scroll to the top of the page
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    } else {
      // If there is a hash, scroll to the corresponding element
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);
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
                src=  {homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
              <SidePanel orientation="vertical"/>
            </Col>
          </Row>
        </Container>
      </Container>
      <About/>
      <Timeline/>
      <Projects/>
      <Skills/>
    </section>
  );
}

export default Home;
