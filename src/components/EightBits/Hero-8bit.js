import React from 'react';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';
function Hero8bit(props) {
    return (
        <Jumbotron className="my-hero8bit bg-transparent jumbotron-fluid p-0">
            <Container fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={8} sm={12}>
                        { props.title && <h1 className="hero-title8bit"/*className="display-3 font-weight-bolder"*/>{ props.title }</h1> }
                        { props.subTitle && <h2 className="hero-subtitle8bit"/*className="display-5 font-weight-light"*/>{ props.subTitle }</h2> }
                        { props.text && <h3 className="hero-text8bit"/*className="lead font-weight-light"*/>{ props.text }</h3> }
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default Hero8bit;