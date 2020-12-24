import React from 'react';

import { Row, Col, Container } from 'react-bootstrap';
import '../8bits.css';

import Hero8bit from '../components/EightBits/Hero-8bit';
import Carousel8bit from '../components/EightBits/Carousel-8bit';
 import About8bit from '../components/EightBits/About-8bit';
// import Contact from '../components/Contact';
// import Me from '../assets/img/photo.jpg'
// import Item from './../components/Item';
function BitHome(props) {
    return(
        <div className="bigRoom">
            <div className="aWall"></div>
            <div className="rooms">
                <Hero8bit title={props.title} subTitle={props.subTitle} text={props.text} /> 
                <div className="avatar"></div>
            </div>
            <Container fluid={true}>
                <Row>
                    <Col md={5}>
                        <div className="aWall"></div>
                    </Col>
                    <Col md={2}>
                    </Col>
                    <Col md={5}>
                        <div className="aWall"></div>
                    </Col>
                </Row>
            </Container>
            <div className="rooms">
                <p style={{padding:"100px"}}>2nd room</p>
                <Carousel8bit/>
            </div>
            <Container fluid={true}>
                <Row>
                    <Col md={5}>
                        <div className="aWall"></div>
                    </Col>
                    <Col md={2}>
                    </Col>
                    <Col md={5}>
                        <div className="aWall"></div>
                    </Col>
                </Row>
            </Container>
            <div className="rooms">
                <About8bit />
            </div>
            <Container fluid={true}>
                <Row>
                    <Col md={5}>
                        <div className="aWall"></div>
                    </Col>
                    <Col md={2}>
                    </Col>
                    <Col md={5}>
                        <div className="aWall"></div>
                    </Col>
                </Row>
            </Container>
            <div className="rooms">
                <p style={{padding:"100px"}}>4th room</p>
            </div>
            <Container fluid={true}>
                <Row>
                    <Col md={5}>
                        <div className="aWall"></div>
                    </Col>
                    <Col md={2}>
                    </Col>
                    <Col md={5}>
                        <div className="aWall"></div>
                    </Col>
                </Row>
            </Container>
            <div className="rooms">
                <p style={{padding:"100px"}}>The Internet</p>
                <div className="internet"></div>
            </div>
            <div className="aWall"></div>
        </div>
    );
}

export default BitHome;