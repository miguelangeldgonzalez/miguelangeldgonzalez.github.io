import React from 'react';

import { Link } from 'react-router-dom';

import '../styles/LightTextBox.css';

const SimpleTextBox = ({children, to}) => {

    const content = () => {
        return (
            <div className="light-text-container animated-border">
                <i></i>
                {children}
            </div>
        )
    }

    const setContent = to => {
        if(to) {
            return (
                <Link to={to}>
                    {content()}
                </Link>
            )
        }else{
            return (
                <React.Fragment>
                    {content()}
                </React.Fragment>
            )
        }
    }

    return (
        <React.Fragment>
            {setContent(to)}
        </React.Fragment>
    )
}

export default SimpleTextBox;