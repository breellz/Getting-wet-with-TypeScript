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
//console.log(automobile2)
//classes
class Tree {
    constructor(branch, fruits) {
        this.branch = branch;
        this.fruits = fruits;
        this.branch = branch;
        this.fruits = fruits;
    }
    growLeaves(leaves) {
        console.log(`${leaves} leaves grew`);
    }
}
const tree1 = new Tree('oak', 32);
console.log(tree1.growLeaves(10));
//class inheritance
class Apple extends Tree {
    constructor(branch, fruits, color) {
        super(branch, fruits);
        this.branch = branch;
        this.fruits = fruits;
        this.color = color;
        this.color = color;
    }
}
const apple = new Apple('apple', 10, 'red');
console.log(apple.growLeaves(10));
//Abstract classes
class Fruit {
    constructor(name, color) {
        this.name = name;
        this.color = color;
        this.name = name;
        this.color = color;
    }
}
class Banana extends Fruit {
    constructor(name, color) {
        super(name, color);
        this.name = name;
        this.color = color;
    }
    growLeaves(leaves) {
        console.log(`${leaves} leaves grew`);
    }
}
let Banana1 = new Banana('banana', 'yellow');
console.log(Banana1.growLeaves(10));
//Generics
function displayData(Data) {
    return Data;
}
console.log(displayData('ddd'));
//class generics
class GenericClass {
    constructor(data) {
        this.data = data;
        this.data = data;
    }
}
let object1 = new GenericClass('string');
console.log(object1.data);
let object2 = new GenericClass(10);
console.log(object2.data);
let object3 = new GenericClass(true);
console.log(object3.data);
let object4 = new GenericClass({ name: 'John' });
console.log(object4.data);
let object5 = new GenericClass('any');
console.log(object5.data);
//namespaces
var MyNamespace;
(function (MyNamespace) {
    class MyClass {
        constructor(name) {
            this.name = name;
        }
    }
    MyNamespace.MyClass = MyClass;
})(MyNamespace || (MyNamespace = {}));
const mine = new MyNamespace.MyClass('Bassit');
console.log(mine);
