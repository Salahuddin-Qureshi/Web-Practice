// let promise = new Promise(function (resolve, reject){
//     resolve(6);
//     // reject();
// })

// promise.then();
// // resolved  rejected

console.log("THis is first console in page")
function myDisplayer(some) {
    // document.getElementById("demo").innerHTML = some;
    console.log(some);
  }
  
  let myPromise = new Promise(function(myResolve, myReject) {
    let x = 0;
  
  // The producing code (this may take some time)
  
    if (x == 0) {
      myResolve("OK");
    } else {
      myReject("Error");
    }
  });
  
  myPromise.then(
    function(value) {console.log(value)},  // onFulfilled
    function(error) {myDisplayer(error);}
  );

  setTimeout(console.log, 2000, "Hello World! printed after 2 seconds"); // Delay logging for 2 seconds

console.log("This will be printed immediately.");

setTimeout(function() {
    console.log("Hello World after 2 seconds!");
  }, 2000);
  
  console.log("This will be printed immediately. 2nd");
  

let promise = new Promise(function(resolve, reject){
  resolve();
  reject();

})

promise.then(function(){
  console.log('Success');
}, function(){
  console.log('Fail')
});

function displayTime() {
  const date = new Date();
  const time = date.toLocaleTimeString();
  // document.getElementById("demo").innerHTML = time;
  console.log(time);
}

// const intervalId = setInterval(displayTime, 1000); // Call displayTime every second

// To stop the timer later
// clearInterval(intervalId);


let count = 0;
const intervalId = setInterval(() => {
count++;
console.log(`Interval count: ${count}`);
if (count === 5) {
clearInterval(intervalId); // Stop the interval after 5 iterations
console.log('Interval stopped after 5 iterations.');
}
}, 1000); // 1000 milliseconds = 1 second
console.log('setInterval example started.');
