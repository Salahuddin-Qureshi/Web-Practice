// Template Literal
const name = 'John';
console.log(`Hello, ${name}!`);

// Arrow Function
const add = (a, b) => a + b;
console.log(add(2, 3)); // Output: 5

// Enhanced Object Literals
const age = 30;
const person = { name, age };
console.log(person); // Output: { name: 'John', age: 30 }

// Destructuring
const numbers = [1, 2, 3];
const [first, second, third] = numbers;
console.log(first, second, third); // Output: 1 2 3

// Default + Rest + Spread
function greet(name = 'World', ...languages) {
    console.log(`Hello, ${name}!`);
    console.log('Languages:', ...languages);
}

greet('John', 'English', 'French', 'Spanish');

// Iterators & For…Of
const iterableArray = ['a', 'b', 'c'];

for (const item of iterableArray) {
    console.log(item);
}

setTimeout(() => {
    console.log("I'm not blocking the event loop!");    
}, 5000) 

setTimeout(() => {
    console.log('This message will be displayed after 2 seconds.');
    }, 6000); // 2000 milliseconds = 2 seconds
    console.log('setTimeout example scheduled.');