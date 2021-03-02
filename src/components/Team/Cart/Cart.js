import React from 'react';
import './Cart.css'
import Display from '../../Display/Display';
const Cart = (props) => {
   
    const cart = props.cart;
    const salaryPlayer = cart.reduce((total, player) => total + player.salary, 0);

    return (
        <div className="total_player">
        <div>
            <div>
                <h3>Total Players: {cart.length} </h3>
                <h4>Team Budget: {salaryPlayer}$ /yearly</h4>         
            </div>
            <div>
                {
                    cart.map(pl => <Display pl={pl}></Display>)
                }
            </div>
        </div>
        </div>
    );
};

export default Cart;