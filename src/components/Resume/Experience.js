import { React } from 'react';

import { Row, Col } from 'react-bootstrap';

function Experience () {
  return(
    <div id="experience" className="resume-sections">
        <h1 className="resume-title"><span className="highlight-gold">Experience</span></h1>
        <br/>
        <Row>
            <Col md={8}>
            <h2>Junior .NET Developer</h2>
            </Col>
            <Col md={4}>
            <p>August 2017 - June 2018</p>
            </Col>
        </Row>
        <Row>
            <Col>
                <h4 title={"These guys are awesome!"}><a className="links" href={"https://devlights.com/"} target={"_blank"} rel={"noreferrer"}>Devlights</a></h4>
            </Col>
        </Row>
        <br/>
        <Row>
            <Col>
                <p className={"web-text-gray"}>I started at Devlights as a trainee and I learned a lot from my colleages there.<br/>I worked on an internal management system. My tasks were Frontend and Backend development, databases, and making of reports.</p>
            </Col>
        </Row>
    </div>
  )
}

export default Experience;