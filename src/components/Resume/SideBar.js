import { React } from 'react';

import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Scrollspy from 'react-scrollspy';

import { Nav, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Photo from '../../assets/img/resume_photo.jpg';
import CV from '../../assets/pdf/Sanchez_Victor_CV.pdf'

function SideBar() {
    return(
        <Nav className="col-md-12 d-md-block sidebar">
            <div className="sidebar-sticky"></div>
            <div id={"sidebar-item-container"}>
                <Link id={"btn-container"} to={"/"}>
                    <FontAwesomeIcon icon={["fas", "angle-left"]} size={"2x"} title={"Go Back"}/>
                </Link>
                <div id="pic-container">
                    <img id={"resume-pic"} src={Photo} alt="Victor Sanchez" title={"Hello, there!"}/>
                </div>
                <Scrollspy id="sidebar-items" className="scrollspy" items={ ['aboutme', 'experience', 'education', 'certifications', 'skills', 'interests', 'volunteer'] } currentClassName="isCurrent">
                    <Nav.Item className="side-item">
                        <HashLink id="sidebar-item-about"className="links side-link" smooth to="/resume/#aboutme">About</HashLink>
                    </Nav.Item>
                    <Nav.Item className="side-item">
                        <HashLink id="sidebar-item-exp" className="links side-link" smooth to="/resume/#experience">Experience</HashLink>
                    </Nav.Item>
                    <Nav.Item className="side-item">
                        <HashLink id="sidebar-item-ed" className="links side-link" smooth to="/resume/#education">Education</HashLink>
                    </Nav.Item>
                    <Nav.Item className="side-item">
                        <HashLink id="sidebar-item-certif" className="links side-link" smooth to="/resume/#certifications">Certifications</HashLink>
                    </Nav.Item>
                    <Nav.Item className="side-item">
                        <HashLink id="sidebar-item-skills" className="links side-link" smooth to="/resume/#skills">Skills</HashLink>
                    </Nav.Item>
                    <Nav.Item className="side-item">
                        <HashLink id="sidebar-item-int" className="links side-link" smooth to="/resume/#interests">Interests</HashLink>
                    </Nav.Item>
                    <Nav.Item className="side-item">
                        <HashLink id="sidebar-item-vol" className="links side-link" smooth to="/resume/#volunteer">Volunteer Work</HashLink>
                    </Nav.Item>
                    <Nav.Item id="last-item">
                        <Link id={"btn-cv"} to={CV} target={"_blank"} rel={"noreferrer"}><Button variant="outline-secondary">Download Resume</Button></Link>
                    </Nav.Item>
                </Scrollspy>
            </div>
        </Nav>
    )
}
// const Sidebar = withRouter(SideBar);
export default SideBar;