import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

function Contact () {
    return(
        <div> 
            <h1 id={"lets-talk"} className="my-title"><span style={{color:"white"}}>Let's Talk!</span></h1>
                <Container fluid={true}>
                    <Row> 
                        <Col md={12}>
                            <h3 style={{textAlign: "center", color:"white", fontWeight:"300"}}>If you're looking to get in touch with me, try the buttons bellow.</h3>
                            <br/>
                            <Container fluid={true} className={"d-flex justify-content-center"}>
                                <Row>
                                    <Col  md={6} className={"d-flex justify-content-center"}>
                                        <a href={"mailto:sanchez.v.a@gmail.com"} className={"contact-link"}>Email</a>
                                    </Col>
                                    <Col md={6} className={"d-flex justify-content-center"}>
                                        <a href={"https://t.me/victorsnz"} target={"blank_"} className={"contact-link"}>Telegram</a>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>
        </div>
    );
}

export default Contact;