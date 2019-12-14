// React imports
import React, { useState, useEffect } from 'react';
import firebase from '../firebase'

//Onsen imports
import { AlertDialog, AlertDialogButton } from 'react-onsenui';

//Import pages
import Order from './Order'

//Import images
import cover1 from '../images/card_cover_placholder1.jpg';

// Import layouts
import MenuLayout from '../layouts/MenuLayout';

// Import components
import FoodCard from '../components/FoodCard';

// Import styles
import './Menu.css';

function HandleMenu(name) {
    const [dishes, setDishes] = useState([])

    useEffect(() => {
        firebase
            .firestore()
            .collection('restaurant')
            .doc(name)
            .collection('menu')
            .onSnapshot((snapshot) => {
                const newDish = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))
                setDishes(newDish)
            })
    }, [name])

    return dishes
}

const Menu = (props) => {

    const [alertDialogStatus, setAlertDialogStatus] = useState(false);


    const dishes = HandleMenu('alma'/*props.data.name */)

    if (props.order['restaurant'].length === 0) {
        props.order['restaurant'].push({
            name: props.data.name,
            table: props.data.table
        })
    }

    console.log(props.order);


    const addItem = (id, name) => {
        let isItemAlreadyInArray = false;
        let soughtIndex;

        if (props.order['dishes'].length == 0) {
            props.order['dishes'].push({
                id: id,
                name: name,
                quantity: 1
            })
        }
        else {
            props.order['dishes'].forEach((item, index) => {
                if (item.id == id) {
                    isItemAlreadyInArray = true;
                    soughtIndex = index;
                }
            })

            if (isItemAlreadyInArray) {
                setAlertDialogStatus(true)
            } else {
                props.order['dishes'].push({
                    id: id,
                    name: name,
                    quantity: 1
                })
            }
        }
        console.log(props.order);
    }

    return (
        <MenuLayout
            {...props}
            backButtonEnabled={false}
            orderFunction={() => { props.navigator.pushPage({ component: Order, props: { order: props.order } }) }}
            pageTitle='Étlap'
            pageId={5}>

            {dishes.map((dish) =>
                <FoodCard key={dish.id}
                    fullwidth
                    cover={cover1}
                    title={dish.name}
                    text={dish.description}
                    onClick={() => { addItem(dish.id, dish.name) }} />
            )}



            <AlertDialog isOpen={alertDialogStatus} onCancel={() => { setAlertDialogStatus(false) }} cancelable>
                <div className="alert-dialog-title">Rendelés</div>
                <div className="alert-dialog-content">
                    Ez az étel már szerepel a rendelési listádban.
                </div>
                <div className="alert-dialog-footer">
                    <AlertDialogButton
                        onClick={() => { setAlertDialogStatus(false) }}
                        className="alert-dialog-button">
                        OK
                    </AlertDialogButton>
                </div>
            </AlertDialog>
        </MenuLayout>
    )
}

export default Menu;
