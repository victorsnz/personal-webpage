import React from 'react';
import { useSpring, animated } from 'react-spring';

function CardInfo(props) {
    const style = useSpring({opacity:1, from: {opacity: 0}});

    return(
        <animated.div className="my-card-info8bit" style={style}>
            <p className="my-card-title8bit"><b>{props.title}</b></p>
            <p className="my-card-sub-title8bit">{props.subTitle}</p>
            <a href={props.link} target="_blank" rel="noopener noreferrer">View</a>
        </animated.div>
    );
}

export default CardInfo;