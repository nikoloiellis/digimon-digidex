import React from 'react';
import './card-list.styles.css';
import '../Card-list/card.styles.css';

export const Card = (props) => {

    return(
    
      
        <div className="card">
        <div className="card_image">
        <img src={props.monsters.img} alt="monsters"/>
        </div>
        <div className="card_title ">
        <h2> {props.monsters.name}</h2>
        {/* <p>{props.monsters.level}</p> */}
        </div>
       
        </div>
    
        )
    
}


export default Card;
