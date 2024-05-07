// Creating a Promise
const myPromise = new Promise((resolve, reject) => {
    // Asynchronous operation (e.g., fetching data from a server)
    // setTimeout(() => {
    //     const success = true;
    //     if (success) {
    //         resolve('Data fetched successfully!'); // Resolve the promise with a value
    //     } else {
    //         reject('Error fetching data!'); // Reject the promise with an error
    //     }
    // }, 2000); // Simulating a delay of 2 seconds
    return reject(1)

});

// Consuming the Promise
myPromise
    .then((result) => {
        // If the promise is resolved successfully
        console.log(result); // Output: Data fetched successfully!
    })
    .catch((error) => {
        // If the promise is rejected
        console.error(error); // Output: Error fetching data!
    });
