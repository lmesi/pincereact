// React Imports
import React from 'react';

// Onsen Imports
import { Card } from 'react-onsenui';

// Import styles
import './IconCard.css';

const IconCard = (props) => {
    return (
        <Card className="iconCard">
            <div className="iconContainer">
                <img src={props.icon} alt="Icon card" />
            </div>
            <div className="textContainer">
                <h4><strong>{props.title}</strong></h4>
                <p>{props.text}</p>
            </div>
        </Card>
    )
}

export default IconCard;