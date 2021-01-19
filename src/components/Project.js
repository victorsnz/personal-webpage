import React from 'react';

import Card from './Card';

import argenIpsum from '../assets/img/argen-ipsum.png';
import coloresSenda from '../assets/img/colores-senda.png';
import rps from '../assets/img/RPS.PNG';

import { Container, Row } from 'react-bootstrap';

class Project extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Argen Ipsum',
                    subTitle: 'Lorem ipsum but is about Argentina\'s showbiz and politics',
                    imgSrc: argenIpsum,
                    link: 'http://argen-ipsum.web.app',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Colores VW Senda',
                    subTitle: 'A Table with original color codes for Volkswagen Senda',
                    imgSrc: coloresSenda,
                    link: 'http://colores-senda.web.app',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Rock, Paper, Scissor',
                    subTitle: 'The classical rock, paper, scissor game made it using JavaScript',
                    imgSrc: rps,
                    link: 'https://victorsnz.github.io/rock-paper-scissor',
                    selected: false
                }
            ]
        }
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} key={item.id} />
        })
    }
    render(){
        return(
            <Container fluid={true}>
            <h1 className={"my-title"}><span className="highlight-blue">Some Projects</span></h1>
            <h3 className={"my-title"}>You can find more projects on my <a href="https://victorsnz.github.io/" target="_blank" rel="noreferrer" id={"wallp"}>Wall of Projects</a></h3>
                <Row className="justify-content-around"> 
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }
}

export default Project;