import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Container, Row, Col } from 'react-bootstrap';

import Sword from '../assets/img/sword.png'

function Item(){
    return(
        <Container className="item-container" fluid={true}>
            <Row>
                <Col md={12}  style={{justifyContent: "center"}}>
                    <p className="item-msg d-inline-block">It's dangerous to go<br/>alone! take this...</p>
                    <img className="sword" src={Sword} alt="8 bit Sword"/>
                    <HashLink to="/8bits/#" className="item-btn">Take the sword</HashLink>
                </Col>
            </Row>
        </Container>
    )
}

export default Item;