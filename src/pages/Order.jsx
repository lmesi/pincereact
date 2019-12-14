//React imports
import React, {useState, useEffect} from 'react';

//Import layouts
import MainLayout from '../layouts/MainLayout';

//Import components
import ItemCard from '../components/ItemCard';

//Import styles
import './Order.css';

const Order = (props) => {

    const [order, setOrder] = useState(props.order['dishes']);

    const increaseQuantity = (index) => {
        console.log('increase');
        let array = [...order];
        array[index].quantity++;
        setOrder(array);
    }

    const decreaseQuantity = (index) => {
        console.log('decrease');
        let array = [...order];
        if(array[index].quantity > 1) {
            array[index].quantity--;
        }
        setOrder(array);
    }

    const deleteItem = (index) => {
        console.log('delete');
        let array = [...order];
        array.slice(index);
        setOrder(array);
    }

    return (
        <MainLayout
            {...props}
            backButtonEnabled={true}
            pageTitle='Rendelésem'
            pageId={6}>

            <div className="container orderContainer">
                {order.map((dish, index) => 
                    <ItemCard 
                        key={dish.id} 
                        name={dish.name} 
                        quantity={dish.quantity} 
                        onClickIncreaseButton={() => { increaseQuantity(index); }}
                        onClickDecreaseButton={() => { decreaseQuantity(index); }}
                        onClickDeleteButton={() => { deleteItem(index); }}
                    />
                )}

            </div>

        </MainLayout>
    );
}

export default Order;
