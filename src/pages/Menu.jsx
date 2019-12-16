// React imports
import React, { useState, useEffect } from 'react';
import firebase from '../firebase'

//Onsen imports
import { AlertDialog, Button, AlertDialogButton } from 'react-onsenui';

//Import pages
import Home from './Home'

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
    const [exitStatus, setExitStatus] = useState(false);
    const [dialogMessage, setDialogMessage] = useState('');

    const dishes = HandleMenu('alma'/*props.data.name */)

    const showExitMenuDialog = () => {
        setExitStatus(true); 
        setDialogMessage("Biztosan ki szeretnél lépni a kezdőoldalra? Minden eddig választott étel elveszik a rendelési listádból."); 
        setAlertDialogStatus(true);
    }

    const exitMenu = () => {
        setExitStatus(false); 
        setDialogMessage(""); 
        setAlertDialogStatus(false);
        props.navigator.pushPage({ component: Home });
    }



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

            setDialogMessage("Hozzáadva a rendelési listádhoz.")
            setAlertDialogStatus(true)
        }
        else {
            props.order['dishes'].forEach((item, index) => {
                if (item.id == id) {
                    isItemAlreadyInArray = true;
                    soughtIndex = index;
                }
            })

            if (isItemAlreadyInArray) {
                setDialogMessage("Ez az étel már szerepel a rendelési listádban.")
                setAlertDialogStatus(true)
            } else {
                props.order['dishes'].push({
                    id: id,
                    name: name,
                    quantity: 1
                })

                setDialogMessage("Hozzáadva a rendelési listádhoz.")
                setAlertDialogStatus(true)
            }
        }
        console.log(props.order);
    }

    return (
        <MenuLayout
            {...props}
            exitFunction={showExitMenuDialog}
            backButtonEnabled={false}
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



            <AlertDialog isOpen={alertDialogStatus} onCancel={() => { setAlertDialogStatus(false) }} modifier={'material'} isCancelable={false}>
                <div className="alert-dialog-title">Rendelés</div>
                <div className="alert-dialog-content">
                    {dialogMessage}
                </div>
                <div className="alert-dialog-footer">
                    {exitStatus ?
                        <AlertDialogButton
                            onClick={() => { setAlertDialogStatus(false) }}>
                            Vissza
                    </AlertDialogButton>
                        : false}
                    <AlertDialogButton
                        onClick={() => { exitStatus ? exitMenu() : setAlertDialogStatus(false) }}>
                        OK
                    </AlertDialogButton>
                </div>
            </AlertDialog>
        </MenuLayout >
    )
}

export default Menu;
