import React from 'react';

import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Photo from '../assets/img/home_photo.jpg'

function About(props) {
    return(
        <Container>
            <h1 className="my-title"><span style={{color:"white"}}>About</span></h1>
            <br/>
            <Row>
                <Col id={"photo-wrapper"} md={5} sm={12}>
                    <img className={"my-photo"} src={Photo} alt="Victor Sanchez" title={"Hello, there!"}/>
                </Col>
                <Col md={7} sm={12}>
                    <p className={"web-text-white"}>I was born in Monte Caseros, a city in Corrientes, Argentina. I’ve been interested in computers and technology since my family won a computer from a raffle in the 90's. I started then, to learn a lot just by using it.<br/>In my spare time I like to watch series and movies and meet friends, I also play videogames once in while.</p>
                    <p className={"web-text-white"}>Currently I'm trying to specialize myself in front end development with React but I have a little experience with databases and back end development using technologies as MySQL, C#, .NET, NodeJS.<br/>You can see my online resume by clicking the link bellow:</p>
                    <Link to={"/resume"} id={"resume-link"}>
                        Online Resume
                    </Link>    
                </Col>                    
            </Row>
        </Container>
    )
}

export default About;