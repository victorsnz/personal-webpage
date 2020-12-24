import React from 'react';

import { Row, Col } from 'react-bootstrap';

import Bootstrap from '../../assets/tec-logos/bootstrap.svg';
import Csharp from '../../assets/tec-logos/c-sharp.svg';
import CSS3 from '../../assets/tec-logos/css3.svg';
import DotNetCore from '../../assets/tec-logos/dot-net-core.svg';
import Firebase from '../../assets/tec-logos/firebase.svg';
import Postman from '../../assets/tec-logos/getpostman.svg';
import Git from '../../assets/tec-logos/git.svg';
import HTML5 from '../../assets/tec-logos/html-5.svg';
import Jasmine from '../../assets/tec-logos/jasmine.svg';
import JS from '../../assets/tec-logos/javascript.svg';
import Linux from '../../assets/tec-logos/linux.svg';
import MongoDB from '../../assets/tec-logos/mongodb.svg';
import MySQL from '../../assets/tec-logos/mysql.svg';
import NodeJS from '../../assets/tec-logos/nodejs.svg';
import Photoshop from '../../assets/tec-logos/photoshop-cs6.svg';
import Pug from '../../assets/tec-logos/pug.svg';
import ReactJS from '../../assets/tec-logos/react.svg';
import XD from '../../assets/tec-logos/xd.svg';

function Skills () {
  return(
    <div id={"skills"} className="resume-sections">
        <h1 className="resume-title"><span className="highlight-red">Skills</span></h1>
        <br/>
        <h3>Soft Skills</h3>
        <p className={"web-text-gray"}>Teamwork, Interpersonal Skills, Adaptability/Flexibility, Communication, Problem-Solving, Work-Ethic</p>
        <br/>
        <h3>Programming Languages & Tools</h3>
          <Row>
            <Col id={"tec-list"} md={12}>
              <ul>
                <li>
                  <img src={HTML5} alt="HTML5 logo" title={"HTML 5"}/>
                </li>
                <li>
                  <img src={CSS3} alt="CSS3 logo" title={"CSS 3"}/>
                </li>
                <li>
                  <img src={Bootstrap} alt="Bootstrap logo" title={"Bootstrap"}/>
                </li>
                <li>
                  <img src={JS} alt="Javascript logo" title={"Javascript"}/>
                </li>
                <li>
                  <img src={ReactJS} alt="React logo" title={"React"}/>
                </li>
                <li>
                  <img src={Pug} alt="Pug logo" title={"Pug"}/>
                </li>
                <li>
                  <img src={NodeJS} alt="NodeJS logo" title={"NodeJS"}/>
                </li>                
                <li>
                  <img src={Jasmine} alt="Jasmine logo" title={"Jasmine"}/>
                </li>                
                <li>
                  <img src={Postman} alt="Postman logo" title={"Postman"}/>
                </li>                
                <li>
                  <img src={MongoDB} alt="MongoDB logo" title={"MongoDB"}/>
                </li>                
                <li>
                  <img src={Firebase} alt="Firebase logo" title={"Firebase"}/>
                </li>                                
                <li>
                  <img src={MySQL} alt="MySQL logo" title={"MySQL"}/>
                </li>       
                <li>
                  <img src={Csharp} alt="C Sharp logo" title={"C#"}/>
                </li>                <li>
                  <img src={DotNetCore} alt="Dot Net Core logo" title={".NET CORE"}/>
                </li>                <li>
                  <img src={Linux} alt="Linux logo" title={"Linux"}/>
                </li>
                <li>
                  <img src={Git} alt="Git logo" title={"GIT"}/>
                </li>                
                <li>
                  <img src={Photoshop} alt="Adobe Photoshop logo" title={"Adobe Photoshop CS6"}/>
                </li>
                <li>
                  <img src={XD} alt="Adobe XD logo" title={"Adobe Xd"}/>
                </li>
              </ul>
            </Col>
          </Row>
        <br/>
        <h3>Languages</h3>
        <ul>
          <li>Spanish - Native</li>
          <li>English - Independent User (B2)</li>
          <p className={"web-text-gray"}>Upper-Intermediate Level (B2) Certificate - Departamento de Idiomas, Universidad Nacional del Nordeste (2010-2015)</p>
        </ul>
        <br/>
    </div>
  )
}

export default Skills;