import React from 'react';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Hero(props) {
    return (
        <Jumbotron className="my-hero bg-transparent">
            <Container>
                <Row className="justify-content-center py-5">
                    <Col className="my-hero-quote" md={12}>
                        { props.title && <h1 className={"hero-title"}>Hi, I'm <span className={"colors"}>{ props.title }</span></h1> }
                        { props.subTitle && <h2 className={"hero-subtitle"}>{ props.subTitle }</h2> }
                        <h3 className={"my-location"}>
                        <span>
                            <FontAwesomeIcon icon={["fas", "map-marker-alt"]} size={"1x"}/> Corrientes, Argentina 
                        </span>
                        </h3>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default Hero;