// React imports
import React, { useState, useEffect } from 'react';
import firebase from '../firebase'

//Import images
import cover1 from '../images/card_cover_placholder1.jpg';
//import cover2 from '../images/card_cover_placholder2.jpg';

// Import layouts
import MainLayout from '../layouts/MainLayout';

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
    const [order, setOrder] = useState([])
    console.log(props.data)

    /*const handleOrderProcess = (id) => {
        let orders = []
        orders.push()

    }*/

    return (
        <MainLayout
            {...props}
            backButtonEnabled={true}
            pageTitle='Étlap'
            pageId={3}>
            
            {dishes.map((dish) => 
                    <FoodCard key={dish.id}
                    fullwidth
                    cover={cover1}
                    title={dish.name}
                    text={dish.description} />
            )}
        </MainLayout>
    )
}

export default Menu;
