import React from 'react';

import { Card } from 'react-onsenui';

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