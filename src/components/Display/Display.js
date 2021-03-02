import React from 'react';
import './Display.css'
const Display = (props) => {

    const {name, salary, img} = props.pl;
    
    return (
        <div className="style-cart">             
            <img className="img_style" src={img} alt=""/>
            <p className="name_style">Name:{name}</p>
            <h6>{salary} /yearly</h6>
        </div>
    );
};

export default Display;