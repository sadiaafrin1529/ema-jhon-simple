import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    console.log(cart);
//const cart= props.cart;//option 1
//const {cart}=props;//option 2
    let totalPrice = 0;
    let totalShippping =0;
    for(const product of cart){
        totalPrice= totalPrice+ product.price;
        totalShippping = totalShippping + product.shipping;
    } 
    const tax =totalPrice *7/100;

    const grandTotal = totalPrice + totalShippping +tax;
    return (
        <div className='cart'>
          <h4>Order Summary</h4>
                <p>Selecte Items :{cart.length} </p>  
                <p>Total Price:${totalPrice}</p>
                <p>Total shipping:${totalShippping} </p>
                <p>Tax:${tax.toFixed(2)} </p>
                <h6>Grand Total: ${grandTotal.toFixed(2)}</h6>
        </div>
    );
};

export default Cart;