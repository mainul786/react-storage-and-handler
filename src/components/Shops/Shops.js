import React from 'react';
import { add, division, multiply, subTraction } from '../../utilities/calculate';


const Shops = () => {
    const first = 10;
    const second = 5;
    const result = add(first, second);
    const subtraction = subTraction(first, second);
    const multiple = multiply(first, second);
    const divisions = division(first, second);
    return (
        <div>
           <h2>Add Result: {result}</h2> 
           <h2>subTraction Result: {subtraction}</h2>
           <h2>Multiplication Result: {multiple}</h2>
           <h2>Division Result: {divisions}</h2>
        </div>
    );
};

export default Shops;