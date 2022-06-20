const sum = (val1: number, val2: number): number => {
    let total = val1 + val2;
    return total;
};

//function that returns a string/number
let universal: (vlaue1: number, value2: number)=>number;

universal = sum

//console.log(universal(45,34))
//objects
let vehicle:{
    brand: string,
    engine: string,
    wheels: number,
    color: string,
    drive: ()=>void
} ={
    brand: 'Mercedes',
    engine: 'V8',
    wheels: 4,
    color: 'black',
    drive: function(){
        console.log('drive')
    }

}

vehicle.brand = 'BMW'

//unions
let union: number | string| string[]
union = ['first', 'second', 'third']

//interfaces
interface AutomobileInterface {
    brand?: string,
    engine?: string,
    wheels?: number,
    color?: string,
}

const automobile: AutomobileInterface = {
    brand: 'Mercedes',
    engine: 'V8',
    wheels: 4,
    color: 'black'
}

//interface with functions
function car1(automobile: AutomobileInterface) {
    console.log(automobile.brand)
}

car1(automobile)

//interface with classes
class Automobileclass implements AutomobileInterface {
    brand: string;
    engine: string;
    wheels: number;
    color: string;
    constructor(brand: string, engine: string, wheels: number, color: string) {
        this.brand = brand;
        this.engine = engine;
        this.wheels = wheels;
        this.color = color;
    }
}

let carObject = new Automobileclass('BMW', 'V8', 4, 'black')
//console.log(carObject)

//interface inheritance
interface AutomobileInterface2 extends AutomobileInterface {
    drive: ()=>any
}   //extends AutomobileInterface

const automobile2:AutomobileInterface2 = {
    brand: 'Mercedes',
    drive () {
        console.log('driving')
    }
}

//console.log(automobile2)

//classes
class Tree {
    
    constructor(public branch: string, public fruits: number) {
        this.branch = branch;
        this.fruits = fruits;
    }

    public growLeaves(leaves: number) {
        console.log(`${leaves} leaves grew`)
    }

}

const tree1 = new Tree('oak', 32)
console.log(tree1.growLeaves(10))

//class inheritance
class Apple extends Tree {
    constructor(public branch: string, public fruits: number, public color: string) {
        super(branch, fruits)
        this.color = color;
    }
}
 
const apple = new Apple('apple', 10, 'red');
console.log(apple.growLeaves(10))

//Abstract classes
abstract class Fruit {
    constructor(public name: string, public color: string) {
        this.name = name;
        this.color = color;
    }
    public abstract growLeaves(leaves: number): void;
}
 class Banana extends Fruit {
    constructor(public name: string, public color: string) {
        super(name, color)
    }
    public growLeaves(leaves: number): void {
        console.log(`${leaves} leaves grew`)
    }
}

let Banana1 = new Banana('banana', 'yellow')
console.log(Banana1.growLeaves(10))

//Generics
function displayData<T>(Data: T) {
    return Data
}

console.log(displayData('ddd'))
//class generics
class GenericClass<T> {
    constructor(public data: T) {
        this.data = data;
    }
}
let object1 = new GenericClass<string>('string')
console.log(object1.data)
let object2 = new GenericClass<number>(10)
console.log(object2.data)
let object3 = new GenericClass<boolean>(true)
console.log(object3.data)
let object4 = new GenericClass<object>({name: 'John'})
console.log(object4.data)
let object5 = new GenericClass<any>('any')
console.log(object5.data)