import React, { useEffect, useState } from 'react';
// import Shops from '../Shops/Shops';
import Cosmetic from '../Cosmetic/Cosmetic';
import { totalPrice } from '../../utilities/calculate';

const Cosmetics = () => {
    const [cosmetics, setCosmetics] = useState([]);
    
    useEffect(()=>{
        fetch('data.json')
        .then(res =>res.json())
        .then(data =>setCosmetics(data))
    }, [])

    const total = totalPrice(cosmetics);

    return (
        <div>
            <h2>Welcome to my website.</h2>
            <h4>Total Price of cosmetics: {total}</h4>
            {/* <Shops></Shops> */}

        {
            cosmetics.map(cosmetic => <Cosmetic
            key={cosmetic.id}
            cosmetic = {cosmetic}
            ></Cosmetic>)
        }

        </div>
    );
};

export default Cosmetics;