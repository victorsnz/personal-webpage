import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function UnderConstruction () {
    return(
        <Container fluid={true} className={"sectionWhite"}>
            <Row>
                <Col>
                    <h1>Cooming soon!</h1>
                    <h4>It's going to be LEGEN (wait for it)... DARY!</h4>
                </Col>    
            </Row>
        </Container>
    )
}

export default UnderConstruction;