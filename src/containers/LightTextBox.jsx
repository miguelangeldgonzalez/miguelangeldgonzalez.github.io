import React from 'react';

import '../styles/LightTextBox.css';

const SimpleTextBox = ({children}) => {
    return (
        <div className="light-text-container animated-border">
            <i></i>
            {children}
        </div>
    )
}

export default SimpleTextBox;