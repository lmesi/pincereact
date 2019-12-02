//React imports
import React from 'react';

//Import styles
import './PincerContent.css';

const PincerContent = (props) => {
    return (
        <div className="pincerContent">
            {props.children}
        </div>
    )
}

export default PincerContent;