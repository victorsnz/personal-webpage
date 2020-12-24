import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function UnderConstruction () {
    return(
        <Container fluid={true} className={"section-white"} style={{textAlign:"center"}}>
            <Row>
                <Col md={12}>
                    <h1 style={{fontSize:"120px"}}>Coming soon!</h1>
                    <h4 style={{fontSize:"40px"}}>I'm still working on it... come back later 😅</h4>
                    <br/>
                    <Link to="/" style={{fontSize:"20px", fontWeight:"600"}}>Go to HOME page</Link>
                </Col>
            </Row>
        </Container>
    )
}

export default UnderConstruction;