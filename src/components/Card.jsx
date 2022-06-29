import React from 'react';

import '../styles/Card.css';

const Card = (props) => {
    let className = 'simple-card';
    if(props.mini) className += ' mini'; 
    return (
        <div className={className}>
            <a href="">
                <img src={props.img} />
                {props.children}
            </a>
        </div>
    )
}

export default Card;