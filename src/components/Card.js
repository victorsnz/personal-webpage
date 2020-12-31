import React from 'react';

import CardInfo from './CardInfo';
import { Container, Row, Col } from 'react-bootstrap';

function Card(props) {
    return(
        // <div className="my-card d-inline-block">
        //     <img className="my-card-img" src={props.item.imgSrc} alt={props.item.imgSrc}/>
        //     {<CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link}/>}
        // </div>
        //<div className="my-card">
            <Container fluid={true} className="my-card">
                <Row>
                    <Col md={4} sm={12}>
                        {<CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link}/>}
                    </Col>
                    <Col id={"img-wrapper"} md={8} sm={12}>
                        <img className={"my-card-img"} src={props.item.imgSrc} alt={props.item.imgSrc} />
                    </Col>
                </Row>    
            </Container>
        //</div>
    )
}

export default Card;