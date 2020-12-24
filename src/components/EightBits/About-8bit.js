import React from 'react';

import { Row, Col, Container } from 'react-bootstrap';
//import { text } from '@fortawesome/fontawesome-svg-core';

function About8bit(props) {
    return(
        <Container>
            <h1 className="my-title"><b className="highlight-pink">About</b></h1>
            <Row>
                <Col md={5}>
                    <p style={{fontSize:"small"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit animi maiores temporibus, quod reiciendis corporis! Quae voluptatum voluptate optio autem, deleniti velit labore doloribus delectus, reiciendis laborum distinctio sint molestias!</p>
                </Col>
                <Col md={2}>
                </Col>
                <Col md={5}>
                    <p style={{fontSize:"small"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit animi maiores temporibus, quod reiciendis corporis! Quae voluptatum voluptate optio autem, deleniti velit labore doloribus delectus, reiciendis laborum distinctio sint molestias!</p>    
                </Col>                    
            </Row>
        </Container>
    )
}

export default About8bit;