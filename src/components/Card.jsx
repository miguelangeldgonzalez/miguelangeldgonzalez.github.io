import React from 'react';

import '../styles/Card.css';

const Card = (props) => {
    return (
        <div className='simple-card'>
            <a href="">
                <img src={props.img} />
                {props.children}
            </a>
        </div>
    )
}

export default Card;