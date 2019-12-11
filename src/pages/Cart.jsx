//React imports
import React from 'react';

//Import layouts
import MainLayout from '../layouts/MainLayout';

//Import styles
import './Cart.css';

const Cart = (props) => {

    console.log(props);

    return (
        <MainLayout
            {...props}
            backButtonEnabled={true}
            pageTitle='Kosár'
            pageId={6}>

            <p>Ez a kosár</p>
        </MainLayout>
    );
}

export default Cart;
