import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

function Contact () {
    return(
        <div> 
            <h1 id={"lets-talk"} className="my-title"><span style={{color:"white"}}>Let's Talk!</span></h1>
                <Container fluid={true}>
                    <Row> 
                        <Col md={12}>
                            <h3 style={{textAlign: "center", color:"white", fontWeight:"300"}}>If you're looking to get in touch with me, try the button bellow.</h3>
                            <br/>
                            <Container fluid={true} className={"d-flex justify-content-center"}>
                                <a href={"mailto:sanchez.v.a@gmail.com"} id={"contact-link"}>Send Email</a>
                            </Container>
                        </Col>
                    </Row>
                </Container>
        </div>
    );
}

export default Contact;