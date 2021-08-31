import { useCart } from 'react-use-cart';
import React from 'react'
import './purchase.css';

const Cart=() =>{
    const{
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,removeItem,
        emptyCart
    }=useCart();
    return(
        <div className='Cart'>
            <h4>Cart Items</h4>
        </div>
    )
}
export default Cart;