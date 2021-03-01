import React, { useEffect, useState } from 'react';
import playerData from '../../data/data.json';
import Cart from './Cart/Cart';
import Player from './Player/Player';
import './Team.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Team = (props) => {
    const [players, setPlayers]=useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() =>{setPlayers(playerData)}, []);

    const handleAddPlayer =  (player) => {
     
        const newCart =[...cart, player];
        setCart(newCart);
    }

    return (
        <div className="player_container">
            <div className="player ">
              
                <div className="row" xs={2} md={4} lg={6}>
                    <h1 className="player_list">Player List ({playerData.length})</h1>          
                    { 
                    players.map(player=> <Player handleAddPlayer={handleAddPlayer} player ={player}></Player>)
                    }
                </div>
            </div> 
            <div>
              <Cart cart={cart}></Cart>    
          </div>
        </div>
    );
};

export default Team;