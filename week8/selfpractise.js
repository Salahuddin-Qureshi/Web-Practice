// Hello This is self practise of web development lab 8
// template literals
const name = 'John';
console.log(`Hello ${name}`);
// arrow function
const add = (a,b) => a+b;
console.log(add(3,5), 'this is done by arrow function')

// Enhanced Object Literals
const person = {
    name: 'Salahuddin',
    age: 23,
    gender: 'male',
    // let showName=()=>{ console.log('My Name Is ', this.name)},
    sayHi() {
        console.log('hi');
    }
}
person.sayHi();

// Destructuring Assignment
let x = 1;
let y = 2;
console.log(x , y);
[x,y] = [y,x];
console.log(x , y);
//     enhanced object literals
let obj = { x,y };
console.log(obj.x, obj.y)

function greet(name = 'World', ...languages){
    console.log(`Hello ${name}`)
    console.log('Languages: ', ...languages)
}

greet()
greet('John','English', 'Sindhi')

let sum = ()=> 3+5;
console.log(sum())


let numbers = [1,2,3,4]
let iterator = numbers[Symbol.iterator]();
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
 