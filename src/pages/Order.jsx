//React imports
import React, {useState, useEffect} from 'react';

//Import layouts
import OrderLayout from '../layouts/OrderLayout';

//Import components
import ItemCard from '../components/ItemCard';

//Import styles
import './Order.css';

const Order = (props) => {

    const [order, setOrder] = useState(props.order['dishes']);

    const increaseQuantity = (index) => {
        let array = [...order];
        array[index].quantity++;
        setOrder(array);
    }

    const decreaseQuantity = (index) => {
        let array = [...order];
        if(array[index].quantity > 1) {
            array[index].quantity--;
        }
        setOrder(array);
    }

    const deleteItem = (index) => {
        let array = [...order];
        array.splice(index, 1);
        setOrder(array);
        props.order['dishes'] = array;
    }

    return (
        <OrderLayout
            {...props}
            orderFunction={()=> { alert("Ez a rendelés küldés funkció gombja"); }}
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

        </OrderLayout>
    );
}

export default Order;
