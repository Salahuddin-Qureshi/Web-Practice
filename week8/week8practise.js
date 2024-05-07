// const name = 'Salahuddin';
// console.log(`Hello ${name}`);


const name1 = 'John';
console.log(`Hello, ${name1}!`);

let person ={
    name : 'Salahuddin',
    age: 23,
    country: 'Pakistan',
    gender: 'Male'

};

let person2 = {...person}
console.log(person)
console.log(person2)
person2.name = 'Ali'
console.log('After changing the name of person2')
console.log(person2)

const {name, age, ...rest} = person;
console.log(name)
console.log(age)
console.log(rest)
console.log(`Hello ${JSON.stringify()}`)

array = [1,1,2,4,2,5,1]


// Destructring in arrays 
// max_num= Math.max(...array)
// min_num =Math.min(...array)

// console.log("Max number is "+ max_num + " and Min number is "+ min_num )  

array.forEach(element => {
    
});