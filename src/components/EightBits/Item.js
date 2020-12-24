import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import Sword from '../assets/img/sword.png'

function Item(){
    return(
        <Container className="item-container" fluid={true}>
            <Row>
                <Col md={12}  style={{justifyContent: "center"}}>
                    <Link to="/8bits" className="item-msg d-inline-block">
                        <p>It's dangerous to go<br/>alone! take this...<br/></p>
                        <img className="sword" src={Sword} alt="8 bit Sword"/>
                    </Link>
                </Col>
            </Row>
        </Container>
    )
}

export default Item;