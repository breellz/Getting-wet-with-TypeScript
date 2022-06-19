"use strict";
const sum = (val1, val2) => {
    let total = val1 + val2;
    return total;
};
//function that returns a string/number
let universal;
universal = sum;
//console.log(universal(45,34))
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
const automobile = {
    brand: 'Mercedes',
    engine: 'V8',
    wheels: 4,
    color: 'black'
};
//interface with functions
function car1(automobile) {
    console.log(automobile.brand);
}
car1(automobile);
//interface with classes
class Automobileclass {
    constructor(brand, engine, wheels, color) {
        this.brand = brand;
        this.engine = engine;
        this.wheels = wheels;
        this.color = color;
    }
}
let carObject = new Automobileclass('BMW', 'V8', 4, 'black');
const automobile2 = {
    brand: 'Mercedes',
    drive() {
        console.log('driving');
    }
};
console.log(automobile2);
