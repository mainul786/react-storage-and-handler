

const add = (first, second) =>{
    return first + second;
}

const subTraction = (first, second) =>{
    return first - second;
}

const multiply = (first,second )=>{
    return first * second;
}

const division = (first, second) =>{
    return first / second;
}

// array element sum using reducer
const numbers = [23, 562, 21, 11, 22];
const sumReduce = (previous, current) => previous + current;
const total = numbers.reduce(sumReduce, 0);
console.log(total);

// object element sum using reducer

const items = [
    {id:1, name:'ilta', price:100},
    {id:1, name:'ilta', price:100},
    {id:1, name:'ilta', price:100},
    {id:1, name:'ilta', price:100},
    {id:1, name:'ilta', price:100},
];

const sum = (previous, current) => previous + current.price;
const result = items.reduce(sum, 0);
console.log(result);

const getTotalPrice = products =>{
    console.log(products.age)
    const reducer = (previous, current) => previous + current.price;
    const total = products.reduce(reducer, 0);
    return total;
}



export {add,subTraction, multiply, division, getTotalPrice as totalPrice };