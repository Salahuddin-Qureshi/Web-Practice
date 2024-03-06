// Iterators 
// map
const numbers = [1,2,3,4,5]
const doubleNumbers = numbers.map( x => x * 2);
console.log(doubleNumbers)

// reduce

const sum = numbers.reduce((acc, cur) => acc + cur, 0);
console.log(sum)

// filter
const evenNumbers = numbers.filter(x => x % 2 == 0 )
console.log(evenNumbers)

//some
const hasEvenNumber = numbers.some( x => x % 2 ==  0 );
console.log(hasEvenNumber);

// find
const firstEvenNumber = numbers.find( x => x % 2 == 0 );
console.log(firstEvenNumber);

//every
const allAreOdds = numbers.every( x => x % 2 != 0 );
console.log(allAreOdds);

// sort 
const names = ["Salahuddin", "Ali", "Zafar", "Sara"];
names.sort();
console.log(names);