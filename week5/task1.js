// task 1
const array = [1,2,3,4,5,6,7,8]
console.log(array.reverse());

// task 2

const Car = {
    brand: "Tesla",
    model: "Model X",
    year: 2022,
};

function carInfo(Car){
    return  `The ${Car.brand} ${Car.model} was manufactured in the year ${Car.year}.`;
    // return Car;
}
var String = carInfo(Car);
console.log(String);


// task 3

function applyfunction(array, func){
    newArray = []
    for(let i = 0; i < array.length; i++){
        newArray.push(func(array[i]))
    }
    return newArray;
}
const numbers = [1,2,3,4];

const doublearray = applyfunction(numbers, x => x * 2);
console.log(doublearray)