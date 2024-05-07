function checkEven(number) {
    return new Promise((resolve, reject) => {
        if (number % 2 === 0) {
            resolve(`${number} is an even number.`);
        } else {
            reject(`${number} is not an even number.`);
        }
    });
}

// Example usage:
const num = 11;

checkEven(num)
    .then(message => {
        console.log("Success:", message);
    })
    .catch(error => {
        console.error("Error:", error);
    });
