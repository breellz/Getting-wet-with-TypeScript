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

console.log(automobile2)

