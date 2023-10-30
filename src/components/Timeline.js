import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {
    MdWork,
    MdSchool,
} from "react-icons/md";
import { Container } from "react-bootstrap";
import Particle from "./Particle";

function Timeline() {
    return (
        <Container fluid id="timeline" className="timeline-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                    Career <strong className="purple">Timeline</strong>
                </h1>
                <p style={{ color: "black" }}>
                    Glimpse through my academic and professional career journey
                </p>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="May 2021 - Present"
                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        icon={<MdSchool />}
                    >
                        <h3 className="vertical-timeline-element-title">MSc in Computer Science</h3>
                        <h4 className="vertical-timeline-element-subtitle">University of Windsor</h4>
                        <p>
                            <ul style={{textAlign:"left"}}>
                                <li>8.75 CGPA</li>
                                <li>Academic thesis on the topic 'Evaluation of Large Language Models for Knowledge-Informed Fake News Detection.'</li>
                                <li>Relevant Coursework: Statistical Learning, Intro to Artificial Intelligence, Deep Learning and Neural Networks, Applied Artificial Intelligence, Visual Processing, Information Retrieval Systems</li>
                            </ul>
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="Jan 2022 - Dec 2022"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<MdWork />}
                    >
                        <h3 className="vertical-timeline-element-title">Software Engineer Co-op</h3>
                        <h4 className="vertical-timeline-element-subtitle">Manulife, Toronto, ON</h4>
                        <p>
                        <span style={{textAlign:"left"}}>An 8-month Co-op program later got extended to 12 months as part of my studies. </span>
                        <ul style={{textAlign:"left"}}>
                            <li>Created an enterprise dashboard spanning 9 pages using Power BI, enhancing workforce-related decision-making for stakeholders.</li>
                            <li>Engineered efficient ETL (Extract, Transform, Load) pipelines using M Query and Python scripts within Power Query Editor.</li>
                            <li>Resolved critical issues with PDF rendering and autofill functionality in an internal application written in Adobe ColdFusion, ensuring seamless document generation and data population.</li>
                            <li>Designed and executed a Proof of Concept (POC) for an innovative Automatic Azure Architecture Diagram Creation Tool.</li>
                            <li>Successfully integrated Adobe Analytics into an internal application to capture and analyze application-specific usage metrics, providing valuable insights for strategic decision-making.</li>
                        </ul>
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="Sep 2021 - Present"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<MdWork />}
                    >
                        <h3 className="vertical-timeline-element-title">Gradudate Assistant</h3>
                        <h4 className="vertical-timeline-element-subtitle">Windsor, ON</h4>
                        <p></p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="Sep 2018 - Dec 2020"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<MdWork />}
                    >
                        <h3 className="vertical-timeline-element-title">Full Stack Software Engineer</h3>
                        <h4 className="vertical-timeline-element-subtitle">Chennai, India</h4>
                        <p>
                        <ul style={{textAlign:"left"}}>
                            <li>Led a team of 3 members in the design, development, and testing of a series of innovative marketing tools for the parent organization.</li>
                            <li>Played a key role in the design and development of a series of migration acceleration tools utilizing Spring Boot, React, and MongoDB, significantly reducing the time and complexity of migrating the enterprise application.</li>
                            <li>Developed HRM application's approval queue module in 3 months using Angular, Express.js, and PostgreSQL, enhancing internal approval workflows.</li>
                            <li>Enhanced UI and resolved bugs in an enterprise asset management application written in Java, JavaScript, and Oracle SQL.</li>
                        </ul>

                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="2014 - 2018"
                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        icon={<MdSchool />}
                    >
                        <h3 className="vertical-timeline-element-title">B.Tech in Computer Science and Engineering</h3>
                        <h4 className="vertical-timeline-element-subtitle">Mahatma Gandhi University, India</h4>
                        <p>
                            <ul style={{textAlign:"left"}}>
                                <li>7.5 CGPA</li>
                                <li>Relevant Coursework: Theory of Computation, Data Structures and Algorithm, Object Oriented Programming, Software Engineering</li>
                            </ul>
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </Container>
        </Container>
    )
}

export default Timeline;