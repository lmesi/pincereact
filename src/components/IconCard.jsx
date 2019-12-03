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
                <img src={props.cardIcon} alt="Icon card" />
            </div>
            <div className="textContainer">
                <h4><strong>{props.cardTitle}</strong></h4>
                <p>{props.cardText}</p>
            </div>
        </Card>
    )
}

export default IconCard;