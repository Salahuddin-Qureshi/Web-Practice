let num1 = 3, num2 = 7;
// console.log(x)
let person = "John Doe", carName = "Volvo", price = 200;
console.log(person + " " + carName)
console.log("Multiplication of "+ num1 +" and " + num2+ " is " + myfunction(num1,num2))
function myfunction(num1, num2){
    return num1*num2
}

// array practise now
let array = [1,2,3, 4, 3.14]
console.log(array)
array.sort() //it sorts the array
console.log(array)

const newArray = new Array(1,2, "Salahuddin", 3.14)
console.log(newArray)
console.log(newArray.length)
newArray.sort()
console.log(newArray)
push() in array
let arr = [1, 2, 3]
arr.push(4, 5)
console.log(arr)


arr.pop()
console.log(arr)

arr.shift()
console.log(arr)

arr.unshift(0, 1)
console.log(arr)

let arr2 = [5, 6, 7]
let newarr = arr.concat(arr2)
console.log(newarr)

// let array = [1, 2, 3, 4, 5];
// let newArray = array.slice(1, 3);
console.log(newArray); // Output: [2, 3]

let removedElements = array.splice(1, 2, 6, 7); // Removes 2 elements starting from index 1 and inserts 6 and 7
console.log(array); // Output: [1, 6, 7, 4, 5]
console.log(removedElements); // Output: [2, 3]

let isIncluded = array.includes(3);
console.log(isIncluded); // Output: true

let index = array.lastIndexOf(3);
console.log(index); // Output: 5

let name = "Salauddin"
console.log(name.includes("a"))

