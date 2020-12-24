import React from 'react';

import '../8bits.css';

import { Container, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Internet from '../../src/assets/img/TakeThis.png';

function NotFound () {
    return(
        <div className="bigRoom">
            <div className="aWall"></div>
            <Container fluid={true} style={{textAlign:"center"}}>
                <Row>
                    <Col md={12}>
                        <section style={{textAlign:"center"}}>
                            <br/>
                        <h1 style={{fontSize:"80px"}}>404</h1>
                        <h1 style={{fontSize:"30px"}}>NOT FOUND</h1>
                        <br/>
                        <p style={{fontSize:"15px"}}>You were wandering on strange paths, traveler.<br/>And you got lost at last...</p>
                        <p style={{fontSize:"15px"}}>You must return safe and sound.</p>
                        <br/>
                        <p style={{fontSize:"15px"}}>It's dangerous to go alone! take this.</p>
                        </section>
                    </Col>
                    <Col md={12}>
                        <Link to="/">
                            <img src={Internet} alt={"8 bit Victor with the internet"} style={{width:"150px"}} title={"Take the Internet to safely go back home"}/>
                        </Link>
                    </Col>
                </Row>
            </Container>
            <div className="aWall fixed-bottom"></div>
        </div>
    )
}

export default NotFound;