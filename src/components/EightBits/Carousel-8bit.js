import React from 'react';

import Card8bit from './Card-8bit';

import argenIpsum from '../../assets/img/arg.png';
import coloresSenda from '../../assets/img/senda.png';
import responsive from '../../assets/img/responsive.png';

import { Container, Row } from 'react-bootstrap';

class Carousel extends React.Component {
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
                    subTitle: 'An example responsive website made it with Bootstrap',
                    imgSrc: responsive,
                    link: 'https://victorsnz.github.io/ResponsiveWebExample',
                    selected: false
                }
            ]
        }
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card8bit item={item} key={item.id} />
        })
    }
    render(){
        return(
            <Container fuid={true}>
                <Row className="justify-content-around"> 
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }
}

export default Carousel;