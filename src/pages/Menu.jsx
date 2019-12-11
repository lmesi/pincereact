// React imports
import React, { useState, useEffect } from 'react';
import firebase from '../firebase'

//Import pages
import Cart from './Cart'

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

    const dishes = HandleMenu('alma'/*props.data.name */)

    let orders = {
        dishes: [],
        restaurant: [{
            name: props.data.name,
            table: props.data.table
        }]
    }

    const addItem = (id, name) => {
        orders['dishes'].push({
            id: id,
            name: name,
            quantity: 1
        })
        console.log(orders);
    }

    return (
        <MenuLayout
            {...props}
            backButtonEnabled={true}
            cartFunction={() => { props.navigator.pushPage({ component: Cart, props: { cart: orders } }) }}
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
        </MenuLayout>
    )
}

export default Menu;
