import React, { useEffect, useState } from 'react';
// import Shops from '../Shops/Shops';
import Cosmetic from '../Cosmetic/Cosmetic';

const Cosmetics = () => {
    const [cosmetics, setCosmetics] = useState([]);
    
    useEffect(()=>{
        fetch('data.json')
        .then(res =>res.json())
        .then(data =>setCosmetics(data))
    }, [])
    return (
        <div>
            <h2>Welcome to my website.</h2>
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