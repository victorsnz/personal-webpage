import React from 'react';

import CardInfo8bit from './CardInfo-8bit';

function Card(props) {
    return(
        <div className="my-card8bit d-inline-block my-card">
            <img className="my-card-img8bit" src={props.item.imgSrc} alt={props.item.imgSrc}/>
            {<CardInfo8bit title={props.item.title} subTitle={props.item.subTitle} link={props.item.link}/>}
        </div>
    )
}

export default Card;