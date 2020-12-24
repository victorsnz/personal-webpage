import React from 'react';

import '../index.css';
import {Container, Row, Col} from 'react-bootstrap';

import NavMenu from '../components/NavMenu';
import Hero from '../components/Hero';
import Project from './../components/Project';
import About from '../components/About';
import Contact from '../components/Contact';
import Item from './../components/Item';
import Footer from '../components/Footer';

function Home(props) {
    return(
        <div>
            <NavMenu />
            <Container id="hero-container">
                <Row>
                    <Col md={12}>
                        <Hero title={props.title} subTitle={props.subTitle} text={props.text} /> 
                    </Col>
                </Row>
            </Container>
            <section className={"section-teal"} id="about">
                <About/>
            </section>
            <div className={"divider1"}></div>
            <section className="section-white" id="projects">
                <Project/>
            </section>
            <div className={"divider2"}></div>
            <section className="section-pink" id="contact">
                <Contact/>
            </section>
            <section>
                <Item/>
            </section>
            <Footer/>
        </div>       
    );
}

export default Home;