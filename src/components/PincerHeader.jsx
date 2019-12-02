//React imports
import React from 'react';

//Import styles
import './PincerHeader.css';

const PincerHeader = (props) => {
    return (
        <div className="pincerHeader" onClick={props.onClick} >
            <h1 className="appTitle">PincérApp</h1>
            <h2 className="pageTitle">Üdv, user0123!</h2>
        </div>
    )
}

export default PincerHeader;