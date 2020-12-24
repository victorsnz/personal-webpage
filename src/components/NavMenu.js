import React from 'react';

import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Navbar, Nav } from 'react-bootstrap';

function NavMenu (){
    return(
        <Navbar className={"nav-menu"} bg={"white"} expand={"lg"}>
            <Navbar.Brand >
              <HashLink id={"snz-logo"} smooth to={"/#"}>VICTORSNZ</HashLink>
            </Navbar.Brand>
            <Navbar.Toggle className={"border-0"} aria-controls={"navbar-toggle"} />
            <Navbar.Collapse id={"navbar-toggle"}>
              <Nav className={"ml-auto"}>
                <HashLink className={"nav-link"} smooth to={"/#about"}><span className={"highlight-teal"}>ABOUT</span></HashLink>
                <HashLink className={"nav-link"} smooth to={"/#projects"}><span className={"highlight-blue"}>PROJECTS</span></HashLink>
                <HashLink className={"nav-link"} smooth to={"/#contact"}><span className={"highlight-pink"}>CONTACT</span></HashLink>
                <HashLink className={"nav-link"} to={"/resume/#"}><span className={"highlight-red"}>RESUME</span></HashLink>
                <div title={"Coming Soon!"}>
                  <Link className={"nav-link disabled-link"}><span>BLOG</span></Link>
                </div>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
    )
}

export default NavMenu;