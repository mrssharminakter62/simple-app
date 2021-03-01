import React from 'react';
import './Cart.css'
const Cart = (props) => {
   
    const cart = props.cart;
    const totalPlayer = cart.reduce((total, player)=> total + player.salary, 0);
    
    return (

        <div className="total_player">
            <div>
                <h3>Total Players: {cart.length} </h3>
                <h4>Team Budget: {totalPlayer}$ /yearly</h4>
                <p>{cart.name}</p>
            </div>
        </div>
        );
};

export default Cart;