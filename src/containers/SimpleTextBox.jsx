import React from 'react';

import '../styles/SimpleTextBox.css';

const SimpleTextBox = ({children}) => {
    return (
        <div className="simple-text-container">
            {children}
        </div>
    )
}

export default SimpleTextBox;