import React from 'react';
import './Cosmetic.css';
import { addToDb, removeFromDb } from '../../utilities/fakeDb';
const Cosmetic = (props) => {
    const {name, id, gender}= props.cosmetic;

    const addToCart = id =>{
       addToDb(id)
    }


    const removeFromCart = id =>{
        removeFromDb(id)
    }
    const addToCartWithPara = () => addToCart(id);

    return (
        <div className='products'>
            <h2>Name: {name}</h2>
            <h3>Gender: {gender}</h3>
            <h3>id: {id}</h3>
            <button onClick={addToCartWithPara}>AddToCart</button>
            {/* <button onClick={ () => addToCart(id)}>AddToCartWithPara</button> */}
            <button onClick={ ()=> removeFromCart(id)}>Remove</button>
        </div>
    );
};

export default Cosmetic;