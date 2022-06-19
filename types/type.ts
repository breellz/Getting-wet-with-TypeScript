const sum = (val1: number, val2: number): number => {
    let total = val1 + val2;
    return total;
};

//function that returns a string/number
let universal: (vlaue1: number, value2: number)=>number;

universal = sum

console.log(universal(45,34))
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
