import React from 'react';

import { Container, Col, Row } from 'react-bootstrap';

import SideBar from '../components/Resume/SideBar';
import AboutMe from '../components/Resume/AboutMe';
import Experience from '../components/Resume/Experience';
import Education from '../components/Resume/Education';
import Certifications from '../components/Resume/Certifications';
import Skills from '../components/Resume/Skills';
import Interests from '../components/Resume/Interests';
import Volunteer from '../components/Resume/Volunteer';

function Resume() {
    return(
        <Container className="resume" fluid={true}>
            <Row>
            <Col id="sidebar-wrapper" md={3}>
                <SideBar/>
            </Col>
            <Col md={9} id="resume-wrapper">
                <AboutMe />
                <hr/>
                <Experience />
                <hr/>
                <Education />
                <hr/>
                <Certifications />
                <hr/>
                <Skills />
                <hr/>
                <Interests />
                <hr/>
                <Volunteer />
            </Col>
            </Row>
        </Container>
    )
}

export default Resume;