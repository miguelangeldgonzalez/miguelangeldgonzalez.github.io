import React from 'react';

import { Link } from 'react-router-dom'; 

import '@styles/SimpleTextBox.css';

const SimpleTextBox = (props) => {
    const styles = props.styles ? props.styles : {};

    return (
        <div className='simple-textbox'>
            {props.children}
        </div>
    )
}

export default SimpleTextBox;