// const username = document.getElementById('user').value;
// const password = document.getElementById('pass').value;
// const btnsubmit = document.getElementById('btn');

// // btnsubmit onclick event listener
// btnsubmit.addEventListener("click", function () {

// localStorage.setItem('username', username);
// localStorage.setItem('password', password);
// var user = localStorage.getItem('username');
// var pass = localStorage.getItem('password');
// alert('Your details have been saved!');

// document.getElementById('username').innerText = user;
// document.getElementById('password').innerText = pass;

// alert('Your details have been showed!');

// } );


const btnsubmit = document.getElementById('btn');

// btnsubmit onclick event listener
btnsubmit.addEventListener("click", function () {
    const username = document.getElementById('user').value;
    const password = document.getElementById('pass').value;
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    alert('Your details have been saved!');

    var user = localStorage.getItem('username');
    var pass = localStorage.getItem('password');

    document.getElementById('username').innerText = user;
    document.getElementById('password').innerText = pass;

    alert('Your details have been showed!');
});