import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

function Content(props) {
    return(
        <Container>
            <Row className="form-elements">
                <Col md={10}>
                    {props.children}
                </Col>
            </Row>
        </Container>
    )
}

export default Content;