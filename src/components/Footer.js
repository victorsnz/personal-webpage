import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Matecito from '../assets/img/matecito.png'

function Footer() {
    return(
        <footer>
            <Container fluid={true}>
                <Row className="justify-content-between p-3">
                    <Col className="pt-0 pb-3 d-flex justify-content-center" md={12}>
                        <a href="https://twitter.com/VictorSNZ89" target="_blank" rel="noreferrer">   
                            <FontAwesomeIcon className={"social-icon"} icon={["fab", "twitter-square"]} size={"2x"} title={"Visit my Twitter profile"}/>
                        </a>
                        <a href="https://github.com/victorsnz" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon className={"social-icon"} icon={["fab", "github-square"] } size={"2x"} title={"Visit my GitHub profile"}/>
                        </a>
                        <a href="https://www.linkedin.com/in/victorsanchez89/" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon className={"social-icon"} icon={["fab", "linkedin"]} size={"2x"} title={"Visit my LinkedIn profile"}/>
                        </a>
                    </Col>
                    <Col className="p-0 d-flex justify-content-center" md={12}>
                            <p>
                                <div>Made with lot of <a href="https://en.wikipedia.org/wiki/Mate_(drink)" target="_blank" rel="noreferrer"><img className={"matecito"} src={Matecito} alt="emoji de matecito" title={"Mate"}/></a></div>
                            </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;