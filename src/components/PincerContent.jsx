import React from 'react';

import './PincerContent.css';

const PincerContent = (props) => {
    return (
        <div className="pincerContent">
            {props.children}
        </div>
    )
}

export default PincerContent;