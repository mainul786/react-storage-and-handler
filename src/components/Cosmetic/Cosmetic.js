import React from 'react';
import './Cosmetic.css';
import { addToDb } from '../../utilities/fakeDb';
const Cosmetic = (props) => {
    const {name, id, gender}= props.cosmetic;

    const addToCart = id =>{
       addToDb(id)
    }

    const addToCartWithPara = () => addToCart(id);

    return (
        <div className='products'>
            <h2>Name: {name}</h2>
            <h3>Gender: {gender}</h3>
            <h3>id: {id}</h3>
            <button onClick={addToCartWithPara}>AddToCart</button>
            {/* <button onClick={ () => addToCart(id)}>AddToCartWithPara</button> */}
        </div>
    );
};

export default Cosmetic;