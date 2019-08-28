import React from 'react';
import './card-list.styles.css';
import {Card} from '../Card-list/Card';

export const CardList = (props) => {
return <div className='card-list'>
{
    //monster becomes the json file now you can access it
    props.monsters.map(monsters => <Card key={monsters.id} monsters={monsters}/>)
  } </div>;
}

export default CardList;