import React from 'react';

import { Link } from 'react-router-dom';

import '../styles/Card.css';

const Card = (props) => {
    let className = 'simple-card';
    if(props.mini) className += ' mini'; 

    const OptionalLink = props => {
        if(props.a) {
            return (
                <a href={props.to} target={props.target} onClick={props.onClick}>
                    {props.children}
                </a>
            );
        } else {
            return (
                <Link to={props.to} target={props.target} onClick={props.onClick}>
                    {props.children}
                </Link>
            )
        }
    }

    const nothing = () => {}

    return (
        <div className={className}>
            <OptionalLink to={props.to || '#'} target={props.target || '_self'} a={props.a || false} id={props.id || ''} onClick={props.onClick || nothing}>
                <img src={props.img} />
                {props.children}
            </OptionalLink>
        </div>
    )
}

export default Card;