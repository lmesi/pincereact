// React Imports
import React from 'react';

// Onsen Imports
import { Card, Button, Icon } from 'react-onsenui';

//Import images
import cover1 from '../images/card_cover_placholder1.jpg';

// Import styles
import './ItemCard.css';

const ItemCard = (props) => {
    return (
        <Card className="itemCard">
        <div className="badge">
            <span className="value">
                {props.quantity}
            </span>
        </div>
            <div className="iconContainer">
                <div className="inner">
                    <img src={cover1} alt="Icon card" />
                    <div className="effect"></div>
                </div>
            </div>
            <div className="buttonContainer">
                <h4><strong>{props.name}</strong></h4>
                <Button 
                    className="increaseButton"
                    onClick={props.onClickIncreaseButton}>

                    <Icon
                        icon={{
                            default: 'ion-ios-add',
                            material: 'ion-md-add'
                        }}

                        size={22}

                        style={{
                            color: 'white'
                        }}
                    />
                </Button>

                <Button 
                    className="decreaseButton"
                    onClick={props.onClickDecreaseButton}>

                    <Icon
                        icon={{
                            default: 'ion-ios-remove',
                            material: 'ion-md-remove'
                        }}

                        size={22}

                        style={{
                            color: 'white'
                        }}
                    />
                </Button>

                <Button 
                    className="deleteButton"
                    onClick={props.onClickDeleteButton}>
                    <Icon
                        icon={{
                            default: 'ion-ios-trash',
                            material: 'ion-md-trash'
                        }}

                        size={22}

                        style={{
                            color: 'white'
                        }}
                    />
                </Button>
            </div>
        </Card>
    )
}

export default ItemCard;
