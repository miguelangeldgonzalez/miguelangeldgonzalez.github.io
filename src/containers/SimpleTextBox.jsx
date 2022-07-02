import React from 'react';

import '@styles/SimpleTextBox.css';

const SimpleTextBox = (props) => {
    return (
        <div className='simple-textbox'>
            {props.children}
        </div>
    )
}

export default SimpleTextBox;