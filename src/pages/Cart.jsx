//React imports
import React from 'react';

//Import layouts
import MainLayout from '../layouts/MainLayout';

//Import styles
import styles from './Cart.css';

const Cart = (props) => {

    console.log(props);
    console.log(props.cart);
    console.log(props.cart['dishes']);
    console.log(props.cart['restaurant']);

    return (
        <MainLayout
            {...props}
            backButtonEnabled={true}
            pageTitle='Kosár'
            pageId={6}>

            <div className={styles.container}>

                {props.cart['dishes'].map((dish) =>
                    <ul key={dish.id}>
                        <li>{dish.name}</li>
                        <li>{dish.quantity}</li>
                    </ul>
                )}

            </div>

        </MainLayout>
    );
}

export default Cart;
