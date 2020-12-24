import { React } from 'react';

import { Row, Col } from 'react-bootstrap';

function Education () {
  return (
    <div id="education" className="resume-sections">
        <h1 className="resume-title"><span className="highlight-skyblue">Education</span></h1>
        <br/>
        <Row>
            <Col md={8}>
                <h3><a className="links" href={"https://chaco.gov.ar/informatorio/"} rel={"noreferrer"}>Informatorio</a></h3>
            </Col>
            <Col md={4}>
                <p>Resistencia, Chaco, Argentina - (2019)</p>
            </Col>
        </Row>
                <p className={"web-text-gray"}>Intensive course in applications development</p>
        <br/>
        <Row>
            <Col md={8}>
                <h3><a className="links" href={"https://www.argentina.gob.ar/educacion/secretaria-politicas-universitarias/programa-111mil"} rel={"noreferrer"}>Programa 111Mil</a></h3>
            </Col>
            <Col md={4}>
                <p>Corrientes, Argentina - (2017)</p>
            </Col>
        </Row>
                <p className={"web-text-gray"}>Knowledge Analyst - Programmer</p>
        <br/>
        <Row>
            <Col md={8}>
                <h3><a className="links" href={"https://www.unne.edu.ar/"} rel={"noreferrer"}>Universidad Nacional del Nordeste</a></h3>
            </Col>
            <Col md={4}>
                <p>Corrientes, Argentina - (2009 - Unfinished)</p>
            </Col>
        </Row>
                <p className={"web-text-gray"}>Bachelor's degree in Information Systems</p>
    </div>
  )
}

export default Education;