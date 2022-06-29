import React from 'react';

import '../styles/SimpleTextBox.css';

const SimpleTextBox = ({children}) => {
    return (
        <div className="simple-text-container animated-border">
            <i></i>
            {children}
        </div>
    )
}

export default SimpleTextBox;