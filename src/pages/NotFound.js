import React from 'react';

import { Container, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import NFImg from '../../src/assets/img/nf.png';

function NotFound () {
    return(
        <Container fluid={true} className={"section-white"} style={{textAlign:"center"}}>
            <Row>
                <Col md={12}>
                        <img src={NFImg} alt={"doodle of a confused man"} style={{width:"450px"}}/>
                </Col>
                <Col md={12}>
                    <section style={{textAlign:"center", paddingTop:"5px"}}>
                    <h1>404 NOT FOUND</h1>
                    <h2>The page you are looking for doesn't exist</h2>
                    <Link to="/">Go to Home Page</Link>
                    </section>
                </Col>
            </Row>
        </Container>
    )
}

export default NotFound;