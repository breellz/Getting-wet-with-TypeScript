"use strict";
const sum = (val1, val2) => {
    let total = val1 + val2;
    return total;
};
//function that returns a string/number
let universal;
universal = sum;
console.log(universal(45, 34));
//objects
let vehicle = {
    brand: 'Mercedes',
    engine: 'V8',
    wheels: 4,
    color: 'black',
    drive: function () {
        console.log('drive');
    }
};
vehicle.brand = 'BMW';
//unions
let union;
union = ['first', 'second', 'third'];
