import React from 'react';

import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function AboutMe () {
  return(
    <div id="aboutme">
        <h1>Victor Adolfo Sanchez</h1>
        <h4><a href={"mailto:victor_sanchez@outlook.com"} style={{color:"DodgerBlue"}} title={"Send me an email!"}>victor_sanchez@outlook.com</a> | <a href={"mailto:sanchez.v.a@gmail.com"} style={{color:"Tomato"}} title={"Send me an email!"}>sanchez.v.a@gmail.com</a></h4>
        <br/>
        <p className={"web-text-gray"}>I'm a developer located in Corrientes, Argentina, interested in Software Development, Project Management with Agile Methodologies and Power skills.<br/>
        I'm a fast and passionate learner. Currently, I am learning a lot about development with NodeJS, ExpressJS and ReactJS</p>    
        <br/>
        <Row>
            <Col className="d-flex justify-content-left" md={12}>
                <a href="https://twitter.com/VictorSNZ89" target="_blank" rel="noreferrer">   
                    <FontAwesomeIcon className={"social-icon-resume"} icon={["fab", "twitter-square"]} size={"3x"} title={"Visit my Twitter profile"}/>
                </a>
                <a href="https://github.com/victorsnz" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon className={"social-icon-resume"} icon={["fab", "github-square"] } size={"3x"} title={"Visit my GitHub profile"}/>
                </a>
                <a href="https://www.linkedin.com/in/victorsanchez89/" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon className={"social-icon-resume"} icon={["fab", "linkedin"]} size={"3x"} title={"Visit my LinkedIn profile"}/>
                </a>
            </Col>
        </Row>
    </div>
  )
}

export default AboutMe;