import React from 'react';

import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Navbar, Nav } from 'react-bootstrap';

function NavMenu (){
    return(
        <Navbar className="border-bottom" bg="white" expand="lg">
            <Navbar.Brand >VICTORSNZ</Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/"><div className="highlight-blue">Home</div></Link>
                <HashLink className="nav-link" smooth to="/#about"><div className="highlight-pink">About</div></HashLink>
                <HashLink className="nav-link" smooth to="/#contact"><div className="highlight-green">Contact</div></HashLink>
                <Link className="nav-link" to="/resume">Resume</Link>
                <Link className="nav-link" to="/blog">Blog</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
    )
}

export default NavMenu;