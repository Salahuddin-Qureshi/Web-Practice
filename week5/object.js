function modifyArray(array, modifierFunction) {
    return modifierFunction(array);
}

function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenNumbers = modifyArray(numbers, filterEvenNumbers);
console.log("Even Numbers Array:", evenNumbers);
