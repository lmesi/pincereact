// React imports
import React from 'react';

// Onsen imports
import { Card } from 'react-onsenui';

// Import styles
import './FoodCard.css';


const FoodCard = (props) => {
    return (
        <Card className={"foodCard " + (props.fullwidth ? 'fullwidth' : '')}>
            <div className="imageContainer">
                {props.gradient ? <div className="gradientEffect"></div> : ''}
                <img src={props.cover} alt="FoodCard cover"/>
            </div>

            <div className="titleContainer">
                <h3 className={props.fullwidth ? 'padded' : ''}>
                    <strong>
                        {props.title}
                    </strong>
                </h3>
            </div>

            <div className="textContainer">
                <p className={props.fullwidth ? 'padded' : ''}>
                    {props.text}
                </p>
            </div>
        </Card>
    )
}

export default FoodCard;