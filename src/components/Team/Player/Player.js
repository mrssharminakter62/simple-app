import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHandSpock } from '@fortawesome/free-solid-svg-icons'
import './Player.css';

const Player = (props) => {

  const {name, img, salary} = props.player;

    return (

        <div className="player-container"> 
            <div className = "player_box">
                  
                <img className="img_style" src={img} alt="logo"/>
                <h2 className="player_name">{name}</h2> 
                <h3 className="player_name">Salary:  $ {salary}</h3>
                <button className ="add_button" onClick={() => props.handleAddPlayer(props.player)}> <FontAwesomeIcon icon={faHandSpock} /> add me team</button>
            
            </div>
        </div>
    );
};

export default Player;