import React from 'react';

import Card from './Card';

import argenIpsum from '../assets/img/argen-ipsum.png';
import coloresSenda from '../assets/img/colores-senda.png';
import responsive from '../assets/img/responsive.jpg';

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
                    title: 'Responsive Web Example',
                    subTitle: 'An example responsive website made it with Bootstrap (a long time ago)',
                    imgSrc: responsive,
                    link: 'https://victorsnz.github.io/ResponsiveWebExample',
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
            <h1 className="my-title"><span className="highlight-blue">Some Projects</span></h1>
                <Row className="justify-content-around"> 
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }
}

export default Project;